import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './Utils/db.js';
import { securityMiddleware } from './Middleware/security.js';
import categoryRoutes from './Routes/categoryRoutes.js';
import productRoutes from './Routes/productRoutes.js';
import subcategoryRoutes from './Routes/subcategoryRoutes.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { secureResponse } from './Middleware/secureResponse.js';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(securityMiddleware);
app.use(secureResponse);

// Performance Monitoring
app.use((req, res, next) => {
    const start = Date.now();
    res.on('finish', () => {
        const duration = Date.now() - start;
        if (duration > 500) {
            console.warn(`🐢 Slow Request: ${req.method} ${req.originalUrl} - ${duration}ms`);
        }
    });
    next();
});

// API Routes
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/subcategories', subcategoryRoutes);

// Serve Static Files in Production
const clientBuildPath = path.join(__dirname, '../client/dist');
app.use(express.static(clientBuildPath));

// Catch-all to serve index.html for client-side routing
app.use((req, res) => {
    // Only serve index.html if it's not an API request
    if (!req.path.startsWith('/api')) {
        res.sendFile(path.join(clientBuildPath, 'index.html'));
    } else {
        res.status(404).json({ message: "API endpoint not found" });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`
🚀 Server is firing up!
-------------------------
📡 Status: Running
🔌 Port:   ${PORT}
🌍 Environment: ${process.env.NODE_ENV || 'development'}
-------------------------
    `);
});
