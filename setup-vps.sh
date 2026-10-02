#!/bin/bash
set -e

echo "=========================================="
echo "🚀 TradeWings VPS Deployment Script"
echo "=========================================="

# 1. Update system packages
echo "📦 Updating system packages..."
apt-get update -y
apt-get install -y curl git nginx ufw certbot python3-certbot-nginx build-essential

# 2. Install Node.js (v20 LTS)
if ! command -v node &> /dev/null; then
    echo "🟢 Installing Node.js 20 LTS..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
    apt-get install -y nodejs
else
    echo "✅ Node.js is already installed ($(node -v))"
fi

# 3. Install PM2 process manager
if ! command -v pm2 &> /dev/null; then
    echo "🟢 Installing PM2..."
    npm install -g pm2
else
    echo "✅ PM2 is already installed ($(pm2 -v))"
fi

# 4. Clone or pull project
APP_DIR="/var/www/tradeswings"
REPO_URL="https://github.com/001hamzaimran/tradeswings.git"

if [ -d "$APP_DIR/.git" ]; then
    echo "🔄 Existing repository found at $APP_DIR. Pulling latest changes..."
    cd "$APP_DIR"
    git reset --hard
    git pull origin main
else
    echo "📥 Cloning repository into $APP_DIR..."
    mkdir -p /var/www
    git clone "$REPO_URL" "$APP_DIR"
    cd "$APP_DIR"
fi

# 5. Create Server .env
echo "🔐 Setting up Server environment variables..."
cat << 'EOF' > "$APP_DIR/Server/.env"
MONGO_DB_URL=mongodb+srv://admin:admin@cluster0.scibxar.mongodb.net/LeaseLinkSolution
PORT=8000
NODE_ENV=production
CLOUDINARY_CLOUD_NAME=dh4skn0yo
CLOUDINARY_API_KEY=233817416441778
CLOUDINARY_API_SECRET=QXwUGVAL3CFabT0_XVZpFQ54fp0
API_INTEGRITY_SECRET=aabaish_secure_2026
EOF

# 6. Create Client .env
echo "🔐 Setting up Client environment variables..."
cat << 'EOF' > "$APP_DIR/client/.env"
VITE_API_URL=/api
VITE_API_INTEGRITY_SECRET=aabaish_secure_2026
EOF

# 7. Install Client Dependencies & Build Frontend
echo "🏗️ Building Frontend (Client)..."
cd "$APP_DIR/client"
npm install
npm run build

# 8. Install Server Dependencies
echo "🏗️ Installing Server Dependencies..."
cd "$APP_DIR/Server"
npm install

# 9. Start Application with PM2
echo "⚡ Starting Backend with PM2..."
pm2 delete tradeswings 2>/dev/null || true
pm2 start index.js --name "tradeswings"
pm2 save
pm2 startup systemd -u root --hp /root || true

# 10. Configure Nginx Reverse Proxy
echo "🌐 Configuring Nginx for tradewingssolution.com..."
cat << 'EOF' > /etc/nginx/sites-available/tradewingssolution.com
server {
    listen 80;
    server_name tradewingssolution.com www.tradewingssolution.com;

    client_max_body_size 20M;

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
EOF

# Enable site in Nginx
rm -f /etc/nginx/sites-enabled/default
ln -sf /etc/nginx/sites-available/tradewingssolution.com /etc/nginx/sites-enabled/

# Test Nginx and reload
nginx -t
systemctl restart nginx

# 11. Configure Firewall
echo "🛡️ Configuring Firewall (UFW)..."
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw --force enable

echo "=========================================="
echo "🎉 Deployment Complete!"
echo "Your app is now running at: http://179.236.225.39"
echo "And at: http://tradewingssolution.com"
echo ""
echo "To enable free SSL (HTTPS), run:"
echo "certbot --nginx -d tradewingssolution.com -d www.tradewingssolution.com"
echo "=========================================="
