import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ShoppingBag, Eye, Heart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: any;
  index?: number;
}

const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const { addItem } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  const productId = product._id || product.id;
  const categoryName = typeof product.category === 'object' ? product.category.name : product.category;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-[2.5rem] bg-secondary aspect-[4/5] mb-6 shadow-2xl border border-white/5 group-hover:border-primary/30 transition-all duration-700">
        <Link to={`/product/${productId}`} className="block h-full">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
        </Link>
        
        {/* Badges */}
        <div className="absolute top-5 left-5 flex flex-col gap-2 z-10">
          {product.isNew && (
            <span className="bg-primary/90 backdrop-blur-md text-white text-[9px] font-black tracking-[0.2em] uppercase px-4 py-2 rounded-xl shadow-xl">
              New Arrival
            </span>
          )}
          {product.originalPrice && (
            <span className="glass-dark text-white text-[9px] font-black tracking-widest px-4 py-2 rounded-xl shadow-xl">
              -{ Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) }% OFF
            </span>
          )}
        </div>
        {/* Wishlist Heart */}
        <button 
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product);
          }}
          className={`absolute top-5 right-5 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 z-10 group/heart ${
            isInWishlist(productId) 
              ? 'bg-primary text-white shadow-[0_0_20px_rgba(139,92,246,0.5)] scale-110' 
              : 'glass-dark text-white hover:scale-110 hover:bg-primary/20'
          }`}
        >
          <Heart className={`w-5 h-5 transition-transform duration-500 ${isInWishlist(productId) ? 'fill-white scale-110' : 'group-hover/heart:scale-110'}`} />
        </button>

        {/* Action Overlay */}
        <div className="absolute inset-x-5 bottom-5 flex gap-2 translate-y-24 group-hover:translate-y-0 transition-all duration-700 ease-[0.22, 1, 0.36, 1]">
          <Button 
            onClick={(e) => {
              e.preventDefault();
              addItem(product);
            }}
            className="flex-1 rounded-2xl h-14 gap-2 font-black text-[10px] uppercase tracking-widest shadow-2xl bg-primary hover:bg-primary/90 text-white"
          >
            <ShoppingBag className="w-4 h-4" /> Add to Cart
          </Button>
          <Link to={`/product/${productId}`}>
            <Button size="icon" variant="secondary" className="rounded-2xl h-14 w-14 glass-dark text-white border-white/10 hover:bg-white/10">
              <Eye className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="px-2 space-y-2">
        <div className="flex justify-between items-start">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/60 font-body">{categoryName}</p>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span className="text-[10px] font-bold text-foreground/60">{product.rating || 4.5}</span>
          </div>
        </div>
        
        <Link to={`/product/${productId}`}>
          <h3 className="font-display text-lg font-black text-foreground hover:text-primary transition-colors line-clamp-1 tracking-tight">{product.name}</h3>
        </Link>

        <div className="flex items-baseline gap-2 font-body">
          <span className="text-xl font-black text-foreground">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through font-bold">${product.originalPrice}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
