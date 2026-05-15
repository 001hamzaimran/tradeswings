import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, MessageSquare, ArrowRight, Globe, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact = () => (
  <main className="pt-32 pb-20 font-body bg-background text-foreground min-h-screen">
    <div className="container mx-auto px-6">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="max-w-4xl mx-auto text-center mb-24"
      >
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4">Inquiry Center</p>
        <h1 className="font-display text-5xl md:text-7xl font-black text-foreground mb-8 tracking-tighter">Let's start a conversation</h1>
        <p className="text-muted-foreground text-lg font-medium leading-relaxed max-w-2xl mx-auto">
          Whether you have a question about our curated collections, need assistance with an order, or just want to share your experience, we are here to listen.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-16 max-w-7xl mx-auto">
        {/* Contact Info Cards */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          className="lg:col-span-4 space-y-6"
        >
          <div className="bg-card p-8 rounded-[2.5rem] border border-border shadow-xl hover:shadow-2xl transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
               <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-black text-foreground mb-2">Email Support</h3>
            <p className="text-muted-foreground font-medium mb-4">Our dedicated team typically responds within 2 business hours.</p>
            <a href="mailto:support@tradewingssolution.com" className="text-primary font-black flex items-center gap-2 hover:gap-3 transition-all underline decoration-primary/20 underline-offset-4">
              support@tradewingssolution.com <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-card p-8 rounded-[2.5rem] border border-border shadow-xl hover:shadow-2xl transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
               <Phone className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-black text-foreground mb-2">Direct Line</h3>
            <p className="text-muted-foreground font-medium mb-4">Available Mon-Fri, 9am - 6pm EST for urgent inquiries.</p>
            <p className="text-primary font-black">+1 (800) TRADEWINGS</p>
          </div>

          <div className="bg-card p-8 rounded-[2.5rem] border border-border shadow-xl hover:shadow-2xl transition-all group overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
            <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
               <Globe className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-black text-foreground mb-2">Global Presence</h3>
            <p className="text-muted-foreground font-medium">Headquartered in Chicago, serving premium clients worldwide.</p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="lg:col-span-8 bg-card p-10 md:p-16 rounded-[3rem] border border-border shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full -mr-48 -mt-48 blur-[100px]" />
          <div className="flex items-center gap-3 mb-10">
             <div className="w-2 h-2 rounded-full bg-primary" />
             <h2 className="font-display text-3xl font-black text-foreground tracking-tight">Send a message</h2>
          </div>

          <form className="space-y-8" onSubmit={e => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">First Name</Label>
                <Input placeholder="John" className="h-14 rounded-2xl bg-secondary/50 border-white/5 focus:bg-secondary focus:border-primary transition-all px-6 font-bold text-foreground" />
              </div>
              <div className="space-y-3">
                <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Last Name</Label>
                <Input placeholder="Doe" className="h-14 rounded-2xl bg-secondary/50 border-white/5 focus:bg-secondary focus:border-primary transition-all px-6 font-bold text-foreground" />
              </div>
            </div>

            <div className="space-y-3">
              <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Email Address</Label>
              <Input type="email" placeholder="john@company.com" className="h-14 rounded-2xl bg-secondary/50 border-white/5 focus:bg-secondary focus:border-primary transition-all px-6 font-bold text-foreground" />
            </div>

            <div className="space-y-3">
              <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Your Inquiry</Label>
              <Textarea 
                placeholder="How can we assist you today?" 
                rows={6} 
                className="rounded-[2rem] bg-secondary/50 border-white/5 focus:bg-secondary focus:border-primary transition-all p-6 font-bold resize-none text-foreground" 
              />
            </div>

            <Button size="lg" className="h-16 px-12 rounded-2xl font-black text-lg gap-3 shadow-xl shadow-primary/20 w-full sm:w-auto transition-all hover:scale-[1.02]">
              Send Inquiry <ArrowRight className="w-5 h-5" />
            </Button>
          </form>
        </motion.div>
      </div>

      {/* Trust Badges */}
      <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-y border-border">
         {[
           { icon: Clock, text: "24/7 Response Support" },
           { icon: ShieldCheck, text: "Secure Data Handling" },
           { icon: MessageSquare, text: "Live Chat Available" },
           { icon: MapPin, text: "Global Logistics Network" }
         ].map((item, i) => (
           <div key={i} className="flex flex-col items-center gap-4 text-center">
              <item.icon className="w-6 h-6 text-primary/60" />
              <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{item.text}</span>
           </div>
         ))}
      </div>
    </div>
  </main>
);

export default Contact;
