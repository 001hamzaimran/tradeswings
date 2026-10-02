import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  TrendingUp, 
  ShoppingBag, 
  CheckCircle2, 
  Sparkles, 
  Star, 
  ShieldCheck, 
  ArrowRight, 
  Layers, 
  BarChart3, 
  Users, 
  Globe2, 
  ChevronDown, 
  Zap,
  DollarSign,
  PackageCheck,
  Truck,
  Headphones,
  RefreshCw,
  Video
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import SEO from '@/components/SEO';

const stats = [
  { value: '$100M+', label: 'Client Revenue Driven', icon: DollarSign },
  { value: '4.7/5', label: 'Client Satisfaction Rating', icon: Star },
  { value: '30-Day', label: 'Satisfaction Guarantee', icon: ShieldCheck },
  { value: '100%', label: 'Hands-Free Store Operations', icon: Bot },
];

const pillars = [
  {
    num: '01',
    title: 'Store Architecture & Setup',
    desc: 'We build your digital storefront from scratch, configuring payment gateways, merchant centers, and conversion-optimized layouts.',
    icon: Layers
  },
  {
    num: '02',
    title: 'Product Research & Sourcing',
    desc: 'Proprietary software identifies high-margin, fast-moving products and secures direct partnerships with authorized brand distributors.',
    icon: Sparkles
  },
  {
    num: '03',
    title: 'Listing Optimization & SEO',
    desc: 'A/B tested product descriptions, high-resolution lifestyle imagery, keyword placement, and conversion copy that dominates search rank.',
    icon: TrendingUp
  },
  {
    num: '04',
    title: 'Automated Order Fulfillment',
    desc: 'From Amazon FBA warehouse prep to express 3-7 day global dropship logistics, every shipment is processed and tracked automatically.',
    icon: Truck
  },
  {
    num: '05',
    title: '24/7 Customer Care & Returns',
    desc: 'Dedicated support reps handle inquiries, order tracking, returns, and reviews around the clock to safeguard 100% account health.',
    icon: Headphones
  },
  {
    num: '06',
    title: 'Transparent Financial Reporting',
    desc: 'Clear monthly P&L statements, revenue analytics, and weekly strategy syncs with your dedicated account manager.',
    icon: BarChart3
  }
];

const testimonials = [
  {
    quote: "Handling multiple stores was total chaos for me. Now TradeWings Automation handles all of it—from distributor sourcing to inventory and returns. It honestly feels like having an elite Silicon Valley executive team running my operations.",
    author: "Evelyn Rodriguez",
    role: "Co-Founder @ Everly & Co.",
    model: "Multi-Store Automation"
  },
  {
    quote: "My ecommerce store was completely buried. TradeWings overhauled the entire inventory, optimized listing SEO, and plugged in winning wholesale products. Our revenue surged by 340% within four months.",
    author: "Joseph Stansfield",
    role: "CEO @ JS Home & Living",
    model: "Amazon FBA Wholesale"
  },
  {
    quote: "TradeWings has been managing my Amazon store for over 9 months now. No more stressing over stockouts, listings, or customer communication. Profits are deposited directly to my account every single month.",
    author: "Eleanor Robson",
    role: "Business Owner @ Robson Finds",
    model: "FBA Wholesale Partner"
  },
  {
    quote: "They took me from zero knowledge about online retail to my first consistent $25k revenue month on Shopify. Whenever I have questions, my account manager responds within minutes.",
    author: "Allan Watkins",
    role: "Founder @ Watkins Gadget Spot",
    model: "Shopify Brand Automation"
  }
];

const faqs = [
  {
    q: 'How much time is required from me each week?',
    a: 'Virtually none. Our business automation model is engineered to be 100% hands-free. TradeWings manages supplier relationships, product research, inventory logistics, customer support, and listing maintenance. You simply review monthly statements and receive profit distributions.'
  },
  {
    q: 'How does the profit-sharing and revenue model work?',
    a: 'We operate on a true partnership model. You retain full store ownership, and net profits generated each month are split according to your agreed management tier. Because our compensation is tied directly to performance, our team is aligned with maximizing your profits.'
  },
  {
    q: 'What is the 30-Day Satisfaction Guarantee?',
    a: 'We stand firmly behind our track record. If within the first 30 days of onboarding you feel our operations or communication do not meet your expectations, you may exit the partnership with zero penalties.'
  },
  {
    q: 'How do you safeguard account health on Amazon and TikTok?',
    a: 'We only partner with authorized US brand distributors and follow strict marketplace terms of service. Our compliance team monitors account health scores daily, adhering to brand authorization letters, FBA prep protocols, and shipping SLAs to keep your account in pristine standing.'
  },
  {
    q: 'How soon can I expect my automated store to start generating sales?',
    a: 'Store architecture, brand approvals, and supplier onboarding typically take 2 to 4 weeks. Most client stores initiate their first sales within 30 to 45 days, scaling systematically as inventory velocity and feedback metrics compound.'
  }
];

const BusinessAutomationService = () => {
  const [activePlatform, setActivePlatform] = useState<'amazon' | 'shopify' | 'tiktok'>('amazon');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    toast.success("Partnership inquiry received! Our senior e-commerce director will contact you within 24 hours.");
  };

  return (
    <main className="pt-28 pb-20 font-body bg-background text-foreground overflow-hidden">
      <SEO 
        title="E-Commerce Business Automation & Store Management | TradeWings Solution"
        description="Partner with TradeWings Solution to build and scale a 100% hands-free e-commerce business on Amazon FBA Wholesale, Shopify, and TikTok Shop. Enjoy passive monthly income while our experts manage daily operations."
        keywords="ecommerce automation, amazon fba wholesale, shopify automation, tiktok shop automation, passive income ecommerce, done for you ecommerce, store management"
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 md:py-28 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-accent/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.25em] mb-6"
            >
              <Bot className="w-4 h-4" />
              100% Hands-Free E-Commerce Management
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] mb-8"
            >
              E-Commerce Store Management That Builds{' '}
              <span className="bg-gradient-to-r from-primary via-purple-400 to-accent bg-clip-text text-transparent">
                True Passive Income.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10 font-medium"
            >
              Partner with TradeWings to build, scale, and operate a fully automated e-commerce empire. From authorized brand sourcing and inventory logistics to multi-channel fulfillment — we manage everything so you sit back and collect profits.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <a href="#partner-form">
                <Button size="lg" className="rounded-2xl h-14 px-8 text-base font-bold shadow-[0_10px_30px_rgba(139,92,246,0.35)] hover:scale-105 transition-all">
                  Book Strategy Meeting
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <a href="#automation-models">
                <Button size="lg" variant="outline" className="rounded-2xl h-14 px-8 text-base font-bold bg-white/5 border-white/10 hover:bg-white/10">
                  Explore Automation Models
                </Button>
              </a>
            </motion.div>

            {/* Quick Guarantees */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-12 border-t border-white/5 text-left"
            >
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                <span className="text-xs font-semibold text-white/80">30-Day Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-primary shrink-0" />
                <span className="text-xs font-semibold text-white/80">Dedicated Account Director</span>
              </div>
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-primary shrink-0" />
                <span className="text-xs font-semibold text-white/80">Automated Daily Ops</span>
              </div>
              <div className="flex items-center gap-3">
                <BarChart3 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-xs font-semibold text-white/80">Transparent Monthly P&L</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Track Record Stats */}
      <section className="py-16 bg-card/40 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, idx) => (
              <motion.div 
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-secondary/30 border border-white/5 flex items-center gap-5 hover:border-primary/30 transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  <s.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-display text-3xl md:text-4xl font-black text-foreground">{s.value}</h3>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{s.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Automation Programs */}
      <section id="automation-models" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary block mb-3">Automation Platforms</span>
            <h2 className="font-display text-3xl md:text-5xl font-black tracking-tight mb-4">
              Three High-Yield E-Commerce Models
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Choose the platform that aligns with your capital and growth objectives, or combine all three into an automated enterprise.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-8 p-1.5 rounded-2xl bg-secondary/60 border border-white/10 max-w-xl mx-auto">
              <button
                onClick={() => setActivePlatform('amazon')}
                className={`flex-1 py-3 px-6 rounded-xl text-xs md:text-sm font-bold transition-all ${
                  activePlatform === 'amazon'
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'text-muted-foreground hover:text-white'
                }`}
              >
                Amazon Wholesale FBA
              </button>
              <button
                onClick={() => setActivePlatform('shopify')}
                className={`flex-1 py-3 px-6 rounded-xl text-xs md:text-sm font-bold transition-all ${
                  activePlatform === 'shopify'
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'text-muted-foreground hover:text-white'
                }`}
              >
                Shopify Dropshipping
              </button>
              <button
                onClick={() => setActivePlatform('tiktok')}
                className={`flex-1 py-3 px-6 rounded-xl text-xs md:text-sm font-bold transition-all ${
                  activePlatform === 'tiktok'
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'text-muted-foreground hover:text-white'
                }`}
              >
                TikTok Shop Automation
              </button>
            </div>
          </div>

          {/* Model 1: Amazon FBA Wholesale */}
          {activePlatform === 'amazon' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest inline-block mb-4">
                  Flagship Model • Amazon FBA Wholesale
                </span>
                <h3 className="font-display text-3xl md:text-4xl font-black mb-6 leading-tight">
                  Multiply Your Amazon Profits With Authorized Brand Wholesale
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  Running an Amazon FBA wholesale business requires more than just finding products. We take care of everything: opening accounts with established US brand distributors, securing exclusive wholesale pricing, and managing inventory cycles.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="p-4 rounded-xl bg-card border border-white/5 space-y-1">
                    <h5 className="font-bold text-sm text-foreground flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Direct Brand & Wholesaler Approvals
                    </h5>
                    <p className="text-xs text-muted-foreground pl-6">We establish direct trade lines with verified US brands, bypassing middlemen to secure rock-bottom wholesale pricing.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-white/5 space-y-1">
                    <h5 className="font-bold text-sm text-foreground flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Algorithmic Buy Box Domination
                    </h5>
                    <p className="text-xs text-muted-foreground pl-6">Dynamic AI repricing tools continuously capture and hold the Amazon Buy Box at peak profit margins.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-white/5 space-y-1">
                    <h5 className="font-bold text-sm text-foreground flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Inbound Prep, Packaging & 3PL Logistics
                    </h5>
                    <p className="text-xs text-muted-foreground pl-6">Complete FNSKU labeling, polybagging, bundling, and pallet freight coordination directly into Amazon fulfillment centers.</p>
                  </div>
                </div>
                <a href="#partner-form">
                  <Button className="rounded-xl font-bold h-12 px-6">
                    Start Amazon Wholesale Partnership
                  </Button>
                </a>
              </div>

              <div className="p-8 rounded-3xl bg-secondary/30 border border-white/10 space-y-6">
                <h4 className="font-display text-xl font-bold text-foreground">Why Amazon Wholesale Beats Private Label</h4>
                <div className="space-y-4 text-xs text-muted-foreground">
                  <div className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold shrink-0">1</span>
                    <p><strong className="text-white">Existing Customer Demand:</strong> Sell brands people are already actively searching for on Amazon every single second.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold shrink-0">2</span>
                    <p><strong className="text-white">No PPC Ad Waste:</strong> You don't need to spend tens of thousands on speculative ad campaigns hoping a new product will rank.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold shrink-0">3</span>
                    <p><strong className="text-white">Faster Capital Turnover:</strong> Wholesale inventory turns over rapidly, generating compounding returns every 30 to 45 days.</p>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-card border border-primary/20 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase font-black tracking-widest text-primary">Average Turnaround</p>
                    <p className="text-lg font-bold text-white">30 - 45 Day Inventory Cycles</p>
                  </div>
                  <PackageCheck className="w-8 h-8 text-primary" />
                </div>
              </div>
            </motion.div>
          )}

          {/* Model 2: Shopify Dropshipping */}
          {activePlatform === 'shopify' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest inline-block mb-4">
                  Independent Brand • Shopify Dropshipping
                </span>
                <h3 className="font-display text-3xl md:text-4xl font-black mb-6 leading-tight">
                  Scalable Shopify Stores Powered by Viral Winning Products
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  Running a profitable Shopify store requires more than a simple website. We build custom, conversion-engineered storefronts, curate viral high-ticket products, and connect you with express logistics suppliers.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="p-4 rounded-xl bg-card border border-white/5 space-y-1">
                    <h5 className="font-bold text-sm text-foreground flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Custom Conversion-First Storefront Design
                    </h5>
                    <p className="text-xs text-muted-foreground pl-6">Sleek mobile-first design, trust badges, lightning-fast checkout flow, and custom product landing pages.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-white/5 space-y-1">
                    <h5 className="font-bold text-sm text-foreground flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Vetted Express Suppliers (3-7 Day Delivery)
                    </h5>
                    <p className="text-xs text-muted-foreground pl-6">Private agent fulfillment with real-time tracking numbers and custom branded unboxing experiences.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-white/5 space-y-1">
                    <h5 className="font-bold text-sm text-foreground flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Omnichannel Paid Acquisition Management
                    </h5>
                    <p className="text-xs text-muted-foreground pl-6">Expert media buyers test and scale ad creatives across Meta (Instagram/Facebook), TikTok, and Google Ads.</p>
                  </div>
                </div>
                <a href="#partner-form">
                  <Button className="rounded-xl font-bold h-12 px-6">
                    Launch My Automated Shopify Brand
                  </Button>
                </a>
              </div>

              <div className="p-8 rounded-3xl bg-secondary/30 border border-white/10 space-y-6">
                <h4 className="font-display text-xl font-bold text-foreground">Complete End-to-End Shopify Ecosystem</h4>
                <div className="space-y-4 text-xs text-muted-foreground">
                  <div className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold shrink-0">✓</span>
                    <p><strong className="text-white">Zero Inventory Risk:</strong> You only purchase inventory from suppliers after the retail customer has already paid your store.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold shrink-0">✓</span>
                    <p><strong className="text-white">High Profit Margins:</strong> Target products with 40%–60% gross profit margins to absorb paid ad costs and generate healthy net returns.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold shrink-0">✓</span>
                    <p><strong className="text-white">Asset Exit Potential:</strong> A high-revenue branded Shopify store can eventually be sold for 3x to 4x annual EBITDA on marketplaces like Empire Flippers.</p>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-card border border-primary/20 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase font-black tracking-widest text-primary">Global Shipping</p>
                    <p className="text-lg font-bold text-white">US, UK, CA & Worldwide Delivery</p>
                  </div>
                  <Globe2 className="w-8 h-8 text-primary" />
                </div>
              </div>
            </motion.div>
          )}

          {/* Model 3: TikTok Shop Automation */}
          {activePlatform === 'tiktok' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest inline-block mb-4">
                  Viral Social Commerce • TikTok Shop
                </span>
                <h3 className="font-display text-3xl md:text-4xl font-black mb-6 leading-tight">
                  Monetize the Fastest Growing Social Commerce Platform
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  TikTok Shop represents the single biggest retail opportunity of the decade. We handle store approval, merchant center verification, influencer affiliate networks, and live commerce operations.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="p-4 rounded-xl bg-card border border-white/5 space-y-1">
                    <h5 className="font-bold text-sm text-foreground flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Creator & Influencer Affiliate Outreach
                    </h5>
                    <p className="text-xs text-muted-foreground pl-6">We recruit, sample, and coordinate with hundreds of TikTok creators who produce viral videos promoting your products on commission.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-white/5 space-y-1">
                    <h5 className="font-bold text-sm text-foreground flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Trend-Driven Real-Time Sourcing
                    </h5>
                    <p className="text-xs text-muted-foreground pl-6">Our analytics monitor rising viral search queries on TikTok to stock trending products before competitors even notice.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-card border border-white/5 space-y-1">
                    <h5 className="font-bold text-sm text-foreground flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Frictionless In-App Native Checkout
                    </h5>
                    <p className="text-xs text-muted-foreground pl-6">Capitalize on impulse shopping with 1-click in-app TikTok checkout and seamless order sync.</p>
                  </div>
                </div>
                <a href="#partner-form">
                  <Button className="rounded-xl font-bold h-12 px-6">
                    Automate My TikTok Shop
                  </Button>
                </a>
              </div>

              <div className="p-8 rounded-3xl bg-secondary/30 border border-white/10 space-y-6">
                <h4 className="font-display text-xl font-bold text-foreground">The Power of TikTok Social Commerce</h4>
                <div className="space-y-4 text-xs text-muted-foreground">
                  <div className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold shrink-0">🔥</span>
                    <p><strong className="text-white">Viral Algorithm Advantage:</strong> A single 15-second creator video can generate thousands of orders in 24 hours.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold shrink-0">🔥</span>
                    <p><strong className="text-white">TikTok Subsidized Shipping & Discounts:</strong> TikTok frequently covers shipping subsidies and promotional discounts to encourage buyers.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold shrink-0">🔥</span>
                    <p><strong className="text-white">Early Mover Window:</strong> The TikTok Shop ecosystem is currently where Amazon was 10 years ago—massive growth with untapped margins.</p>
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-card border border-primary/20 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase font-black tracking-widest text-primary">Affiliate Reach</p>
                    <p className="text-lg font-bold text-white">5,000+ Vetted TikTok Creators</p>
                  </div>
                  <Video className="w-8 h-8 text-primary" />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* 6-Pillar Management Model */}
      <section className="py-24 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary block mb-3">Complete Coverage</span>
            <h2 className="font-display text-3xl md:text-5xl font-black tracking-tight mb-4">
              Our 6-Pillar Done-for-You Management System
            </h2>
            <p className="text-muted-foreground text-base">
              Here is everything our operations team executes daily so your business runs smoothly without your involvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div key={pillar.num} className="p-8 rounded-3xl bg-secondary/30 border border-white/5 hover:border-primary/40 transition-all space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-primary">{pillar.num}</span>
                <h4 className="font-display font-bold text-xl text-foreground">{pillar.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary block mb-3">Partner Feedback</span>
            <h2 className="font-display text-3xl md:text-4xl font-black tracking-tight mb-3">
              Real Results From Store Owners
            </h2>
            <p className="text-sm text-muted-foreground">Discover how our hands-free management transforms client financial portfolios.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t) => (
              <div key={t.author} className="p-8 rounded-3xl bg-card border border-white/5 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex gap-1 text-primary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary" />
                    ))}
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed italic">"{t.quote}"</p>
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <h5 className="font-display font-bold text-base text-foreground">{t.author}</h5>
                    <p className="text-xs text-primary">{t.role}</p>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-muted-foreground px-3 py-1 rounded-full bg-white/5">
                    {t.model}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Inquiry Form */}
      <section id="partner-form" className="py-24 bg-card/40 border-t border-white/5 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto rounded-[2.5rem] bg-secondary/40 border border-white/10 p-8 md:p-14 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary block mb-3">Partner With Us</span>
              <h2 className="font-display text-3xl md:text-5xl font-black tracking-tight mb-4">
                Schedule an E-Commerce Discovery Call
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                Discover how our done-for-you automation models can build a hands-free passive income stream for you.
              </p>
            </div>

            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold">Inquiry Submitted!</h3>
                <p className="text-muted-foreground max-w-md mx-auto text-sm">
                  Our Senior Automation Director will review your preferences and get in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Full Name *</label>
                    <Input required placeholder="Alex Johnson" className="bg-background/80 border-white/10 h-12 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address *</label>
                    <Input required type="email" placeholder="alex@example.com" className="bg-background/80 border-white/10 h-12 rounded-xl" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone Number *</label>
                    <Input required type="tel" placeholder="+1 (555) 000-0000" className="bg-background/80 border-white/10 h-12 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Primary Platform of Interest *</label>
                    <select className="w-full bg-background/80 border border-white/10 h-12 rounded-xl px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="amazon">Amazon FBA Wholesale Automation</option>
                      <option value="shopify">Shopify Dropshipping Brand</option>
                      <option value="tiktok">TikTok Shop Automation</option>
                      <option value="multi">Omnichannel Multi-Store Empire</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Anticipated Investment Budget</label>
                  <select className="w-full bg-background/80 border border-white/10 h-12 rounded-xl px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                    <option value="10k-25k">$10,000 – $25,000</option>
                    <option value="25k-50k">$25,000 – $50,000</option>
                    <option value="50k-100k">$50,000 – $100,000</option>
                    <option value="100k+">$100,000+</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Tell Us About Your Goals</label>
                  <Textarea rows={4} placeholder="What are your target monthly revenue goals or previous e-commerce experience (if any)?" className="bg-background/80 border-white/10 rounded-xl" />
                </div>

                <Button type="submit" size="lg" className="w-full h-14 rounded-xl text-base font-bold shadow-lg shadow-primary/30 hover:scale-[1.01] transition-transform">
                  Submit Strategy Call Request
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary block mb-3">Clear Answers</span>
            <h2 className="font-display text-3xl md:text-4xl font-black tracking-tight mb-3">Frequently Asked Questions</h2>
            <p className="text-sm text-muted-foreground">Common questions about our hands-free e-commerce store automation partnerships.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={faq.q}
                  className="rounded-2xl bg-card border border-white/5 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4"
                  >
                    <span className="font-display font-bold text-base md:text-lg text-foreground">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed border-t border-white/5 pt-4"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BusinessAutomationService;
