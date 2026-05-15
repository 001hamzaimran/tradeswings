import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CreditCard, Lock, Check, ChevronRight, Truck, ShieldCheck, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useCart } from '@/context/CartContext';

type Step = 'shipping' | 'payment' | 'confirmation';

const Checkout = () => {
  const { items, subtotal } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>('shipping');
  const [shippingMethod, setShippingMethod] = useState('standard');
  const shipping = subtotal > 200 ? 0 : shippingMethod === 'express' ? 25 : 15;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const steps: { key: Step; label: string }[] = [
    { key: 'shipping', label: 'Shipping' },
    { key: 'payment', label: 'Payment' },
    { key: 'confirmation', label: 'Confirmation' },
  ];

  const currentIndex = steps.findIndex(s => s.key === step);

  const [paymentData, setPaymentData] = useState({
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvc: ''
  });

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    let formattedValue = value;

    if (id === 'cardNumber') {
      formattedValue = value.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0, 19);
    } else if (id === 'expiry') {
      formattedValue = value.replace(/\D/g, '').replace(/(.{2})/g, '$1/').trim().slice(0, 5);
      if (formattedValue.endsWith('/')) formattedValue = formattedValue.slice(0, -1);
    } else if (id === 'cvc') {
      formattedValue = value.replace(/\D/g, '').slice(0, 4);
    }

    setPaymentData(prev => ({ ...prev, [id]: formattedValue }));
  };

  const isPaymentValid = 
    paymentData.cardName.length > 2 && 
    paymentData.cardNumber.replace(/\s/g, '').length === 16 &&
    paymentData.expiry.length === 5 &&
    paymentData.cvc.length >= 3;

  if (items.length === 0 && step !== 'confirmation') {
    return (
      <main className="pt-32 pb-20 font-body bg-background min-h-screen">
        <div className="container mx-auto px-6 text-center py-32 bg-card rounded-[3rem] border border-border shadow-xl max-w-2xl">
          <p className="text-muted-foreground mb-10 font-medium">Your bag is empty. Please add items before checking out.</p>
          <Link to="/shop">
            <Button className="rounded-2xl h-14 px-10 font-bold shadow-lg">Start Shopping</Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-20 font-body bg-background text-foreground min-h-screen">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
           <div>
             <Link to="/cart" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary hover:text-foreground transition-colors mb-4">
               <ArrowLeft className="w-3.5 h-3.5" /> Return to bag
             </Link>
             <h1 className="font-display text-4xl md:text-5xl font-black text-foreground tracking-tighter">Secure Checkout</h1>
           </div>

           {/* Progress steps */}
           <div className="flex items-center gap-4 bg-card p-2 rounded-2xl border border-border shadow-sm">
             {steps.map((s, i) => (
               <div key={s.key} className="flex items-center gap-3">
                 <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black transition-all ${
                   i < currentIndex ? 'bg-green-500 text-white shadow-[0_0_15px_rgba(34,197,94,0.3)]' :
                   i === currentIndex ? 'bg-primary text-white shadow-[0_0_15px_rgba(139,92,246,0.3)]' :
                   'bg-secondary text-muted-foreground border border-white/5'
                 }`}>
                   {i < currentIndex ? <Check className="w-4 h-4" /> : i + 1}
                 </div>
                 {i === currentIndex && (
                   <span className="text-xs font-black uppercase tracking-widest text-foreground hidden sm:inline px-1">
                     {s.label}
                   </span>
                 )}
                 {i < steps.length - 1 && <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/30" />}
               </div>
             ))}
           </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form area */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div 
                key={step} 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {step === 'shipping' && (
                  <div className="space-y-10">
                    <section className="space-y-6 bg-card p-10 rounded-[2.5rem] border border-border shadow-xl">
                      <div className="flex items-center gap-3 mb-2">
                         <MapPin className="w-5 h-5 text-primary" />
                         <h2 className="font-display text-2xl font-black text-foreground tracking-tight">Shipping Address</h2>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <Label htmlFor="firstName" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">First Name</Label>
                          <Input id="firstName" placeholder="John" className="h-14 rounded-2xl bg-secondary border-white/5 focus:bg-secondary/80 focus:border-primary transition-all px-6 font-bold text-foreground" />
                        </div>
                        <div className="space-y-3">
                          <Label htmlFor="lastName" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Last Name</Label>
                          <Input id="lastName" placeholder="Doe" className="h-14 rounded-2xl bg-secondary border-white/5 focus:bg-secondary/80 focus:border-primary transition-all px-6 font-bold text-foreground" />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Email Address</Label>
                        <Input id="email" type="email" placeholder="john@example.com" className="h-14 rounded-2xl bg-secondary border-white/5 focus:bg-secondary/80 focus:border-primary transition-all px-6 font-bold text-foreground" />
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="address" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Street Address</Label>
                        <Input id="address" placeholder="123 Main St" className="h-14 rounded-2xl bg-secondary border-white/5 focus:bg-secondary/80 focus:border-primary transition-all px-6 font-bold text-foreground" />
                      </div>

                      <div className="grid sm:grid-cols-3 gap-6">
                        <div className="space-y-3">
                          <Label htmlFor="city" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">City</Label>
                          <Input id="city" placeholder="New York" className="h-14 rounded-2xl bg-secondary border-white/5 focus:bg-secondary/80 focus:border-primary transition-all px-6 font-bold text-foreground" />
                        </div>
                        <div className="space-y-3">
                          <Label htmlFor="state" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">State</Label>
                          <Input id="state" placeholder="NY" className="h-14 rounded-2xl bg-secondary border-white/5 focus:bg-secondary/80 focus:border-primary transition-all px-6 font-bold text-foreground" />
                        </div>
                        <div className="space-y-3">
                          <Label htmlFor="zip" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">ZIP Code</Label>
                          <Input id="zip" placeholder="10001" className="h-14 rounded-2xl bg-secondary border-white/5 focus:bg-secondary/80 focus:border-primary transition-all px-6 font-bold text-foreground" />
                        </div>
                      </div>
                    </section>

                    <section className="space-y-6 bg-card p-10 rounded-[2.5rem] border border-border shadow-xl">
                      <div className="flex items-center gap-3 mb-2">
                         <Truck className="w-5 h-5 text-primary" />
                         <h2 className="font-display text-2xl font-black text-foreground tracking-tight">Delivery Method</h2>
                      </div>
                      <RadioGroup value={shippingMethod} onValueChange={setShippingMethod} className="grid sm:grid-cols-2 gap-4">
                        <label className={`flex flex-col p-6 rounded-[2rem] border transition-all cursor-pointer ${shippingMethod === 'standard' ? 'bg-primary/10 border-primary shadow-lg shadow-primary/5' : 'bg-secondary/40 border-white/5 hover:border-white/10'}`}>
                          <div className="flex justify-between items-start mb-4">
                            <RadioGroupItem value="standard" />
                            <span className="text-sm font-black text-primary">{subtotal > 200 ? 'Free' : '$15.00'}</span>
                          </div>
                          <p className="font-black text-foreground mb-1">Standard Delivery</p>
                          <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">5–7 business days</p>
                        </label>
                        <label className={`flex flex-col p-6 rounded-[2rem] border transition-all cursor-pointer ${shippingMethod === 'express' ? 'bg-primary/10 border-primary shadow-lg shadow-primary/5' : 'bg-secondary/40 border-white/5 hover:border-white/10'}`}>
                          <div className="flex justify-between items-start mb-4">
                            <RadioGroupItem value="express" />
                            <span className="text-sm font-black text-primary">$25.00</span>
                          </div>
                          <p className="font-black text-foreground mb-1">Express Courier</p>
                          <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">2–3 business days</p>
                        </label>
                      </RadioGroup>
                    </section>

                    <Button size="lg" className="w-full rounded-[2rem] h-16 font-black text-lg shadow-xl shadow-primary/20" onClick={() => setStep('payment')}>
                      Proceed to Payment
                    </Button>
                  </div>
                )}

                {step === 'payment' && (
                  <div className="space-y-10">
                    <section className="space-y-8 bg-card p-10 rounded-[2.5rem] border border-border shadow-xl">
                      <div className="flex items-center justify-between gap-3 mb-2">
                         <div className="flex items-center gap-3">
                            <CreditCard className="w-5 h-5 text-primary" />
                            <h2 className="font-display text-2xl font-black text-foreground tracking-tight">Payment Details</h2>
                         </div>
                         <div className="flex gap-2">
                            <div className="w-10 h-6 bg-secondary rounded-lg border border-white/5" />
                            <div className="w-10 h-6 bg-secondary rounded-lg border border-white/5" />
                            <div className="w-10 h-6 bg-secondary rounded-lg border border-white/5" />
                         </div>
                      </div>

                      <div className="flex items-center gap-4 p-5 rounded-2xl bg-green-500/10 border border-green-500/20 mb-6">
                        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                           <Lock className="w-5 h-5 text-white" />
                        </div>
                        <div>
                           <p className="text-sm font-black text-green-500">PCI DSS Compliant</p>
                           <p className="text-xs text-green-500/70 font-bold">Your transaction is fully encrypted and secure.</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="cardName" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Cardholder Name</Label>
                        <Input id="cardName" placeholder="John Doe" value={paymentData.cardName} onChange={handlePaymentChange} className="h-14 rounded-2xl bg-secondary border-white/5 focus:bg-secondary/80 focus:border-primary transition-all px-6 font-bold text-foreground" />
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="cardNumber" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Card Number</Label>
                        <div className="relative">
                          <Input id="cardNumber" placeholder="1234 5678 9012 3456" value={paymentData.cardNumber} onChange={handlePaymentChange} className="h-14 rounded-2xl bg-secondary border-white/5 focus:bg-secondary/80 focus:border-primary transition-all px-6 font-bold text-foreground pr-16" />
                          <CreditCard className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground/50" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <Label htmlFor="expiry" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM / YY" value={paymentData.expiry} onChange={handlePaymentChange} className="h-14 rounded-2xl bg-secondary border-white/5 focus:bg-secondary/80 focus:border-primary transition-all px-6 font-bold text-foreground" />
                        </div>
                        <div className="space-y-3">
                          <Label htmlFor="cvc" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">CVC Code</Label>
                          <Input id="cvc" placeholder="123" value={paymentData.cvc} onChange={handlePaymentChange} className="h-14 rounded-2xl bg-secondary border-white/5 focus:bg-secondary/80 focus:border-primary transition-all px-6 font-bold text-foreground" />
                        </div>
                      </div>
                    </section>

                    <div className="flex gap-4">
                      <Button variant="outline" size="lg" className="h-16 px-8 rounded-[2rem] font-black uppercase tracking-widest text-xs border-border hover:bg-secondary/50 text-foreground" onClick={() => setStep('shipping')}>
                        Back
                      </Button>
                      <Button size="lg" disabled={!isPaymentValid} className="flex-1 rounded-[2rem] h-16 font-black text-lg gap-3 shadow-xl shadow-primary/20 disabled:opacity-50 disabled:grayscale transition-all" onClick={() => setStep('confirmation')}>
                        Place Order — ${total.toFixed(2)}
                      </Button>
                    </div>
                  </div>
                )}

                {step === 'confirmation' && (
                  <div className="text-center py-20 bg-card rounded-[3rem] border border-border shadow-xl max-w-2xl mx-auto space-y-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                      className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center mx-auto shadow-2xl shadow-green-500/30"
                    >
                      <Check className="w-12 h-12 text-white" />
                    </motion.div>
                    <div className="space-y-2">
                       <h2 className="font-display text-4xl font-black text-foreground tracking-tight">Order Placed!</h2>
                       <p className="text-muted-foreground font-medium">Thank you for shopping with TradeWings Solution.</p>
                    </div>
                    
                    <div className="bg-secondary/50 border border-white/5 p-6 rounded-2xl max-w-sm mx-auto">
                       <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Transaction Number</p>
                       <p className="text-xl font-black text-foreground tracking-widest uppercase">#TW-{Math.floor(Math.random() * 90000 + 10000)}</p>
                    </div>

                    <p className="text-sm text-muted-foreground font-medium max-w-xs mx-auto">A confirmation email and tracking link have been sent to your inbox.</p>
                    <Button className="rounded-2xl h-14 px-10 font-black" onClick={() => navigate('/shop')}>
                      Continue Shopping
                    </Button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Order summary sidebar */}
          {step !== 'confirmation' && (
            <aside className="lg:col-span-2">
              <div className="bg-card rounded-[2.5rem] p-10 border border-border shadow-xl sticky top-32">
                <h3 className="font-display text-xl font-black text-foreground mb-8 tracking-tight">Your Order</h3>

                <div className="space-y-6 mb-10 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {items.map(item => (
                    <div key={item.product._id || item.product.id} className="flex gap-4 group">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden bg-secondary shrink-0 border border-white/5">
                        <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col justify-center">
                        <p className="text-sm font-black text-foreground truncate">{item.product.name}</p>
                        <div className="flex justify-between items-center mt-1">
                           <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Qty: {item.quantity}</p>
                           <p className="text-sm font-black text-primary">${(item.product.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 pt-6 border-t border-border text-sm font-medium">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span><span className="text-foreground font-bold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Delivery</span><span className="text-foreground font-bold">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Tax (8%)</span><span className="text-foreground font-bold">${tax.toFixed(2)}</span>
                  </div>
                  <div className="h-px bg-border my-4" />
                  <div className="flex justify-between text-2xl font-black text-foreground tracking-tighter">
                    <span>Total</span><span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 space-y-4">
                   <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                      <ShieldCheck className="w-4 h-4 text-green-500" />
                      <span>Encrypted Payment</span>
                   </div>
                   <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                      <Truck className="w-4 h-4 text-primary" />
                      <span>Trackable Shipping</span>
                   </div>
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>
    </main>
  );
};

export default Checkout;
