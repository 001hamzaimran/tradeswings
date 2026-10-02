import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Feather, 
  CheckCircle2, 
  Sparkles, 
  Star, 
  ShieldCheck, 
  ArrowRight, 
  FileText, 
  UploadCloud, 
  Award, 
  Users, 
  Headphones, 
  Video, 
  Palette, 
  Globe2, 
  HelpCircle,
  Clock,
  DollarSign,
  ChevronDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';

const stats = [
  { value: '1,500+', label: 'Books Published', icon: BookOpen },
  { value: '100%', label: 'Royalties Kept by Author', icon: DollarSign },
  { value: '45+', label: 'Bestseller Placements', icon: Award },
  { value: '4.9/5', label: 'Author Satisfaction', icon: Star },
];

const ghostwritingGenres = [
  {
    title: 'Fiction & Novels',
    desc: 'From gripping psychological thrillers and high-fantasy sagas to heartwarming contemporary romance. We build immersive worlds and unforgettable characters.',
    icon: Feather,
    tag: 'Bestseller Target'
  },
  {
    title: 'Memoirs & Autobiographies',
    desc: 'Capture your personal legacy, triumph over adversity, or life journey. We conduct compassionate 1-on-1 interviews to mirror your authentic voice.',
    icon: Users,
    tag: 'Legacy & Heritage'
  },
  {
    title: 'Business & Thought Leadership',
    desc: 'Position yourself as the preeminent authority in your industry. Transform case studies, corporate methodologies, and frameworks into compelling executive reads.',
    icon: Award,
    tag: 'Industry Authority'
  },
  {
    title: 'Self-Help & Personal Growth',
    desc: 'Empower readers with actionable roadmaps, psychology-backed habits, and motivational insights that inspire real life transformations.',
    icon: Sparkles,
    tag: 'High Demand'
  },
  {
    title: 'Children’s Literature',
    desc: 'Delight young minds with enchanting storylines, age-appropriate prose, moral lessons, and synchronized custom illustrative art.',
    icon: Palette,
    tag: 'Illustrated'
  },
  {
    title: 'eBooks & Digital Guides',
    desc: 'Fast-paced, high-utility digital books crafted to serve as powerful commercial assets, digital products, and authority lead magnets.',
    icon: FileText,
    tag: 'Digital First'
  }
];

const creativeAddons = [
  {
    title: 'Custom Book Illustration',
    desc: 'Hand-drawn, rich digital illustrations designed by award-winning visual artists tailored for children’s books, technical diagrams, and book covers.',
    icon: Palette,
  },
  {
    title: 'Audiobook Recording (Audible / ACX)',
    desc: 'Studio-mastered audiobooks voiced by vetted SAG-AFTRA certified voice actors, fully formatted for Audible, iTunes, and Amazon ACX.',
    icon: Headphones,
  },
  {
    title: 'Cinematic Book Video Trailers',
    desc: 'High-production 4K video trailers with custom scoring and motion graphics designed to fuel viral pre-orders and social ad campaigns.',
    icon: Video,
  },
  {
    title: 'Author Website & Digital Presence',
    desc: 'Bespoke, conversion-engineered author portfolio websites with integrated newsletter funnels, press kits, and direct book sales links.',
    icon: Globe2,
  },
];

const editingTiers = [
  {
    tier: 'Tier 1',
    name: 'Developmental Editing',
    subtitle: 'Structural & Narrative Overhaul',
    desc: 'A comprehensive deep dive into story architecture, plot holes, pacing, character arcs, and thematic consistency to ensure your book grips readers from page one.',
    features: [
      'Comprehensive structural evaluation',
      'Plot pacing & narrative flow optimization',
      'Character motivation & dialogue refinement',
      'In-depth chapter-by-chapter editorial memo'
    ]
  },
  {
    tier: 'Tier 2',
    name: 'Line & Copy Editing',
    subtitle: 'Style, Voice & Tone Polishing',
    desc: 'Meticulous sentence-by-sentence editing focused on tone, sentence variety, stylistic elegance, clarity, and elimination of redundancies.',
    features: [
      'Sentence structure & syntax refinement',
      'Tone and authentic voice harmonization',
      'Word choice & vocabulary elevation',
      'Redundancy & ambiguity reduction'
    ]
  },
  {
    tier: 'Tier 3',
    name: 'Proofreading & Formatting',
    subtitle: 'Publish-Ready Perfection',
    desc: 'The vital final gate before printing. Eradicates every typo, grammatical lapse, punctuation irregularity, and layout misalignment.',
    features: [
      '100% grammatical & typographical sweep',
      'Hyphenation, punctuation & dialogue tags',
      'Kindle (ePub/Mobi) digital typesetting',
      'Print-ready PDF formatting (Paperback & Hardcover)'
    ]
  }
];

const publishingPlatforms = [
  { name: 'Amazon KDP', desc: 'Kindle eBook, Paperback & Hardcover with global Prime distribution.' },
  { name: 'Barnes & Noble', desc: 'In-store catalog availability and digital distribution on NOOK Press.' },
  { name: 'Apple Books', desc: 'Instant access across millions of iOS, iPadOS, and macOS devices globally.' },
  { name: 'Google Play Books', desc: 'Global digital reach across Android and international digital readers.' },
  { name: 'IngramSpark', desc: 'Wholesale access to over 40,000 independent bookstores and universities worldwide.' },
  { name: 'Audible / ACX', desc: 'The world’s largest audiobook network with direct royalty payouts.' },
];

const workflowSteps = [
  {
    num: '01',
    title: 'Discovery & Vision Mapping',
    desc: 'We start with a thorough strategy session to map your concept, audience demographics, target genre, and publishing timeline.'
  },
  {
    num: '02',
    title: 'Drafting & Editorial Deep-Dive',
    desc: 'Our writers craft your manuscript chapter-by-chapter with your continuous approval, or our editors meticulously overhaul your existing draft.'
  },
  {
    num: '03',
    title: 'Typesetting & Cover Artistry',
    desc: 'Award-winning artists create high-conversion book covers, while our typographers design elegant, readable interior layouts.'
  },
  {
    num: '04',
    title: 'Global Publishing & ISBN Setup',
    desc: 'We register your official ISBNs, bar codes, Library of Congress catalog data, and distribute your title across global retail networks.'
  },
  {
    num: '05',
    title: 'Bestseller Launch & Promotion',
    desc: 'Strategic Amazon category keyword targeting, promotional press releases, and multi-channel launch campaigns to maximize day-one sales.'
  }
];

const testimonials = [
  {
    quote: "Working with TradeWings on my business leadership book was the best investment I ever made. Their ghostwriters captured my executive voice flawlessly, and we hit the Amazon Top 10 in our category within 72 hours of launch!",
    author: "David Sterling",
    role: "Tech CEO & Bestselling Author",
    book: "The Velocity Mindset"
  },
  {
    quote: "My draft had great ideas but was an unorganized mess. The developmental editing team gave it structure, cadence, and heart. They were patient, communicative, and respectful of my creative vision.",
    author: "Elena Rostova",
    role: "Historical Fiction Author",
    book: "Whispers of St. Petersburg"
  },
  {
    quote: "Traditional publishers wanted to take 85% of my royalties and years to publish. TradeWings handled the entire layout, cover art, ISBN, and Amazon KDP release in two months. I retain 100% of my royalties!",
    author: "Marcus Vance",
    role: "Independent Novelist",
    book: "Echoes of the Vanguard"
  }
];

const faqs = [
  {
    q: 'Do I retain 100% of my book rights and royalties?',
    a: 'Yes, absolutely. Unlike traditional publishing houses that claim up to 85–90% of your earnings, TradeWings operates under a client-first work-for-hire model. You retain 100% of the copyright, film/adaptation rights, and all future royalties from sales.'
  },
  {
    q: 'How does the ghostwriting process work if I only have a rough idea?',
    a: 'You do not need a finished manuscript or even an outline to begin. We pair you with a dedicated lead ghostwriter who conducts structured interviews via phone or video call, synthesizes your memories or concepts, creates a detailed chapter blueprint, and drafts the manuscript chapter-by-chapter for your review and approval.'
  },
  {
    q: 'What if I already wrote my book and only need editing and publishing?',
    a: 'We offer standalone editing and publishing packages. You can choose from Developmental Editing, Copyediting, or Proofreading, followed by our complete interior typesetting, cover design, and Amazon/IngramSpark publishing service.'
  },
  {
    q: 'Will my book be available in both digital and physical formats?',
    a: 'Yes. Every title we publish is formatted for eBook (Kindle MOBI & ePub), Print-on-Demand paperback, and premium hardcover formats with high-grade binding and matte/gloss finishes.'
  },
  {
    q: 'How long does the entire book publishing process take?',
    a: 'Full ghostwriting typically ranges between 3 to 6 months depending on word count and author review cycles. Standalone professional editing and formatting usually takes 2 to 4 weeks, with publishing distribution going live within 72 hours of final manuscript sign-off.'
  }
];

const BookPublishingService = () => {
  const [activeTab, setActiveTab] = useState<'ghostwriting' | 'editing' | 'publishing'>('ghostwriting');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    toast.success("Thank you! Your publishing project consultation request has been received. Our senior editor will contact you within 24 hours.");
  };

  return (
    <main className="pt-28 pb-20 font-body bg-background text-foreground overflow-hidden">
      <SEO 
        title="Book Publishing, Editing & Ghostwriting Services | TradeWings Solution"
        description="Transform your visionary thoughts into a bestseller with TradeWings Solution. Full-service ghostwriting, manuscript editing, proofreading, and global book distribution on Amazon KDP, Barnes & Noble, and IngramSpark."
        keywords="book publishing, ghostwriting services, book editing, proofreading, amazon kdp publishing, self publishing, author services, audiobook production"
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 md:py-28 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-accent/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.25em] mb-6"
            >
              <Sparkles className="w-4 h-4" />
              World-Class Literary & Publishing Suite
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.08] mb-8"
            >
              The World Awaits Your Story. <br />
              <span className="bg-gradient-to-r from-primary via-purple-400 to-accent bg-clip-text text-transparent">
                Let’s Make It a Bestseller.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-10 font-medium"
            >
              From inspiring concepts and bespoke ghostwriting to developmental editing, interior typesetting, and worldwide publishing on Amazon, Apple Books, and Barnes & Noble — we turn your vision into an unputdownable masterpiece.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <a href="#consultation">
                <Button size="lg" className="rounded-2xl h-14 px-8 text-base font-bold shadow-[0_10px_30px_rgba(139,92,246,0.35)] hover:scale-105 transition-all">
                  Claim Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <a href="#services-pillars">
                <Button size="lg" variant="outline" className="rounded-2xl h-14 px-8 text-base font-bold bg-white/5 border-white/10 hover:bg-white/10">
                  Explore Services
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
                <span className="text-xs font-semibold text-white/80">100% Royalty Retention</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-primary shrink-0" />
                <span className="text-xs font-semibold text-white/80">Full Copyright Ownership</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-xs font-semibold text-white/80">Vetted Industry Editors</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe2 className="w-5 h-5 text-primary shrink-0" />
                <span className="text-xs font-semibold text-white/80">Worldwide Distribution</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
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

      {/* Services Tabs / Pillar Switcher */}
      <section id="services-pillars" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary block mb-3">Our Three Pillars</span>
            <h2 className="font-display text-3xl md:text-5xl font-black tracking-tight mb-4">
              Comprehensive Publishing From Start to Bestseller
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Select an area of expertise to explore our high-caliber literary services.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-8 p-1.5 rounded-2xl bg-secondary/60 border border-white/10 max-w-xl mx-auto">
              <button
                onClick={() => setActiveTab('ghostwriting')}
                className={`flex-1 py-3 px-6 rounded-xl text-xs md:text-sm font-bold transition-all ${
                  activeTab === 'ghostwriting'
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'text-muted-foreground hover:text-white'
                }`}
              >
                Ghostwriting
              </button>
              <button
                onClick={() => setActiveTab('editing')}
                className={`flex-1 py-3 px-6 rounded-xl text-xs md:text-sm font-bold transition-all ${
                  activeTab === 'editing'
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'text-muted-foreground hover:text-white'
                }`}
              >
                Editing & Proofreading
              </button>
              <button
                onClick={() => setActiveTab('publishing')}
                className={`flex-1 py-3 px-6 rounded-xl text-xs md:text-sm font-bold transition-all ${
                  activeTab === 'publishing'
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'text-muted-foreground hover:text-white'
                }`}
              >
                Publishing & Distribution
              </button>
            </div>
          </div>

          {/* Tab 1: Ghostwriting */}
          {activeTab === 'ghostwriting' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-16"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest inline-block mb-4">
                    Pillar 01 • Ghostwriting
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl font-black mb-6 leading-tight">
                    Eloquent Writers That Speak Your Mind & Craft Your Masterpiece
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed mb-6">
                    Do you have a powerful story, breakthrough business concept, or lifetime of wisdom to share, but lack the bandwidth or word bank to write a full-length book?
                  </p>
                  <p className="text-muted-foreground text-base leading-relaxed mb-8">
                    Our elite ghostwriters collaborate with you 1-on-1 to distill your thoughts into captivating, page-turning prose. You receive 100% credit as the sole author and retain 100% of all royalties.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-sm font-semibold">In-depth recorded interview sessions tailored to your schedule</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-sm font-semibold">Strict non-disclosure agreements (NDAs) to protect confidentiality</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-sm font-semibold">Chapter-by-chapter delivery with unlimited iterative revisions</span>
                    </div>
                  </div>
                  <a href="#consultation">
                    <Button className="rounded-xl font-bold h-12 px-6">
                      Consult with a Ghostwriter
                    </Button>
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {ghostwritingGenres.map((genre) => (
                    <Card key={genre.title} className="bg-card/70 border-white/10 hover:border-primary/40 transition-all hover:shadow-xl">
                      <CardContent className="p-6 space-y-3">
                        <div className="flex items-center justify-between">
                          <genre.icon className="w-6 h-6 text-primary" />
                          <span className="text-[10px] font-black uppercase tracking-wider text-muted-foreground px-2 py-0.5 rounded bg-white/5">
                            {genre.tag}
                          </span>
                        </div>
                        <h4 className="font-display font-bold text-lg text-foreground">{genre.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{genre.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Specialized Creative Services */}
              <div className="pt-12 border-t border-white/5">
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <h4 className="font-display text-2xl md:text-3xl font-bold mb-3">Creative Visual & Media Add-Ons</h4>
                  <p className="text-sm text-muted-foreground">Every great book requires striking visual identity and modern media formats to break through the noise.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {creativeAddons.map((addon) => (
                    <div key={addon.title} className="p-6 rounded-2xl bg-secondary/20 border border-white/5 hover:border-primary/30 transition-all space-y-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <addon.icon className="w-6 h-6" />
                      </div>
                      <h5 className="font-display font-bold text-base">{addon.title}</h5>
                      <p className="text-xs text-muted-foreground leading-relaxed">{addon.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Tab 2: Editing & Proofreading */}
          {activeTab === 'editing' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-16"
            >
              <div className="max-w-3xl mx-auto text-center">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest inline-block mb-4">
                  Pillar 02 • Editorial Excellence
                </span>
                <h3 className="font-display text-3xl md:text-5xl font-black mb-6">
                  Your Rough Draft Deserves an Expert Editorial Eye
                </h3>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                  Even the world’s most celebrated authors never publish without seasoned editors. We conduct a multi-layered review to eradicate errors, balance pacing, and elevate your authorial voice.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {editingTiers.map((tier) => (
                  <Card key={tier.name} className="bg-card/70 border-white/10 relative overflow-hidden flex flex-col justify-between hover:border-primary/50 transition-all hover:shadow-2xl">
                    <div className="absolute top-0 right-0 px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest rounded-bl-xl border-l border-b border-primary/20">
                      {tier.tier}
                    </div>
                    <CardContent className="p-8 space-y-6">
                      <div>
                        <h4 className="font-display text-2xl font-bold mb-1 text-foreground">{tier.name}</h4>
                        <p className="text-xs text-primary font-bold uppercase tracking-wider">{tier.subtitle}</p>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{tier.desc}</p>
                      <ul className="space-y-3 pt-4 border-t border-white/5">
                        {tier.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5 text-xs text-white/80 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Editing Guarantee Card */}
              <div className="p-8 rounded-3xl bg-gradient-to-r from-primary/10 via-purple-950/20 to-accent/10 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h4 className="font-display text-2xl font-bold mb-2">Need a Complimentary Sample Edit?</h4>
                  <p className="text-sm text-muted-foreground max-w-xl">
                    Submit your first 1,000 words today. Our senior editorial director will provide a complimentary marked-up assessment and critique with zero obligations.
                  </p>
                </div>
                <a href="#consultation">
                  <Button className="rounded-xl font-bold h-12 px-8 shrink-0">
                    Get Free Sample Edit
                  </Button>
                </a>
              </div>
            </motion.div>
          )}

          {/* Tab 3: Publishing & Distribution */}
          {activeTab === 'publishing' && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-16"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest inline-block mb-4">
                    Pillar 03 • Global Publishing
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl font-black mb-6 leading-tight">
                    Seamless Production, ISBN Registration & Worldwide Bookstore Distribution
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed mb-6">
                    Navigating Amazon algorithms, print specs, barcode generators, and copyright filings can be overwhelming. We handle every technical barrier so your book is listed flawlessly on every major global platform.
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-sm font-semibold">Official 13-digit ISBN assignment & Barcode generation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-sm font-semibold">Kindle Direct Publishing (KDP) and IngramSpark global distribution</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-sm font-semibold">100% direct payouts to your personal bank account</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span className="text-sm font-semibold">Amazon A+ Content creation & author central setup</span>
                    </div>
                  </div>
                  <a href="#consultation">
                    <Button className="rounded-xl font-bold h-12 px-6">
                      Publish My Manuscript
                    </Button>
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {publishingPlatforms.map((plat) => (
                    <div key={plat.name} className="p-6 rounded-2xl bg-card border border-white/5 hover:border-primary/30 transition-all space-y-2">
                      <div className="flex items-center gap-2">
                        <UploadCloud className="w-5 h-5 text-primary" />
                        <h4 className="font-display font-bold text-base text-foreground">{plat.name}</h4>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{plat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* 5-Step Process Section */}
      <section className="py-24 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary block mb-3">Workflow Transparency</span>
            <h2 className="font-display text-3xl md:text-5xl font-black tracking-tight mb-4">
              How We Turn Ideas Into Published Masterpieces
            </h2>
            <p className="text-muted-foreground text-base">
              A structured, stress-free roadmap ensuring your book meets strict international publishing standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {workflowSteps.map((step, idx) => (
              <div key={step.num} className="relative p-6 rounded-2xl bg-secondary/30 border border-white/5 flex flex-col justify-between">
                <span className="font-display text-4xl font-black text-primary/40 mb-4 block">{step.num}</span>
                <div>
                  <h4 className="font-display font-bold text-base mb-2 text-foreground">{step.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary block mb-3">Author Success</span>
            <h2 className="font-display text-3xl md:text-4xl font-black tracking-tight mb-3">
              Authors Who Trusted TradeWings
            </h2>
            <p className="text-sm text-muted-foreground">Hear directly from writers who achieved their publishing ambitions with our team.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <div className="pt-4 border-t border-white/5">
                  <h5 className="font-display font-bold text-base text-foreground">{t.author}</h5>
                  <p className="text-xs text-primary">{t.role}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">Book: {t.book}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Request Form */}
      <section id="consultation" className="py-24 bg-card/40 border-t border-white/5 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto rounded-[2.5rem] bg-secondary/40 border border-white/10 p-8 md:p-14 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary block mb-3">Get Started Today</span>
              <h2 className="font-display text-3xl md:text-5xl font-black tracking-tight mb-4">
                Schedule Your Free Publishing Consultation
              </h2>
              <p className="text-muted-foreground text-sm md:text-base">
                Tell us about your manuscript or book concept. We will prepare a personalized roadmap and proposal within 24 hours.
              </p>
            </div>

            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold">Request Received!</h3>
                <p className="text-muted-foreground max-w-md mx-auto text-sm">
                  Our Senior Publishing Specialist will review your book details and reach out to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Full Name *</label>
                    <Input required placeholder="Jane Doe" className="bg-background/80 border-white/10 h-12 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address *</label>
                    <Input required type="email" placeholder="jane@example.com" className="bg-background/80 border-white/10 h-12 rounded-xl" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone Number *</label>
                    <Input required type="tel" placeholder="+1 (555) 000-0000" className="bg-background/80 border-white/10 h-12 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Primary Service Needed *</label>
                    <select className="w-full bg-background/80 border border-white/10 h-12 rounded-xl px-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="ghostwriting">Complete Ghostwriting (Idea to Book)</option>
                      <option value="editing">Book Editing & Proofreading</option>
                      <option value="publishing">Amazon KDP & Global Publishing</option>
                      <option value="full-package">All-in-One Publishing Suite</option>
                      <option value="audiobook">Audiobook & Video Trailer</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Book Genre</label>
                    <Input placeholder="e.g. Fiction, Memoir, Business, Self-Help" className="bg-background/80 border-white/10 h-12 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Approx. Word Count</label>
                    <Input placeholder="e.g. 35,000 words (or Not Started)" className="bg-background/80 border-white/10 h-12 rounded-xl" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Tell Us About Your Project</label>
                  <Textarea rows={4} placeholder="Briefly describe your book concept, goals, and any specific deadlines..." className="bg-background/80 border-white/10 rounded-xl" />
                </div>

                <Button type="submit" size="lg" className="w-full h-14 rounded-xl text-base font-bold shadow-lg shadow-primary/30 hover:scale-[1.01] transition-transform">
                  Submit Project Inquiry
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
            <p className="text-sm text-muted-foreground">Everything you need to know about our book publishing, editing, and ghostwriting services.</p>
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

export default BookPublishingService;
