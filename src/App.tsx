/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  ArrowRight, 
  Menu, 
  X, 
  Instagram, 
  Twitter, 
  Linkedin, 
  ChevronDown, 
  Link as LinkIcon, 
  Upload as UploadIcon, 
  DollarSign,
  TrendingUp,
  Share2,
  Trophy,
  History,
  CheckCircle2
} from 'lucide-react';
import React, { useState, useRef, useEffect, ReactNode } from 'react';

// --- Components ---

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-white py-8 px-6 lg:px-12 flex justify-between items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-4xl tracking-tighter"
      >
        CLIPNIC
      </motion.div>
      
      <div className="hidden md:flex gap-8 items-center font-mono text-xs uppercase tracking-widest">
        <a href="#process" className="hover:opacity-50 transition-opacity">Protocol</a>
        <a href="#earnings" className="hover:opacity-50 transition-opacity">Yields</a>
        <a href="#campaigns" className="hover:opacity-50 transition-opacity">Campaigns</a>
        <div className="flex gap-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-white/30 text-white px-6 py-2 rounded-full font-bold hover:bg-white hover:text-black transition-colors"
          >
            Launch Campaign
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-6 py-2 rounded-full font-bold"
          >
            Start Clipping
          </motion.button>
        </div>
      </div>

      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-0 w-full bg-black p-8 flex flex-col gap-6 md:hidden items-center text-center font-display text-3xl"
          >
            <a href="#process" onClick={() => setIsOpen(false)}>Protocol</a>
            <a href="#earnings" onClick={() => setIsOpen(false)}>Yields</a>
            <a href="#campaigns" onClick={() => setIsOpen(false)}>Campaigns</a>
            <button className="bg-white text-black w-full py-4 rounded-xl mt-4">Login</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center bg-ink pt-32 pb-8">
      <motion.div 
        style={{ scale }}
        className="absolute inset-0 grid-pattern opacity-10 pointer-events-none"
      />
      
      <div className="relative z-10 text-center text-paper px-6 flex flex-col items-center justify-center flex-grow">
        <div className="relative">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[12vw] md:text-[18vw] leading-[0.8] tracking-tighter"
          >
            POST CLIPS <br />
            <span className="text-stroke-paper text-ink">GET PAID</span>
          </motion.h1>
          
          <motion.div 
            style={{ y: y1 }}
            className="absolute -top-10 -left-10 w-40 h-40 border border-white/20 hidden md:block"
          />
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 max-w-xl mx-auto font-sans text-xl opacity-60 font-light text-balance"
        >
          Clipnic is the primary infrastructure for turning engagement into capital. We pay clippers for high-velocity short-form content.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center"
        >
          <button className="bg-white text-black px-12 py-4 rounded-full font-sans font-medium hover:bg-zinc-200 transition-colors">
            START EARNING
          </button>
          <button className="bg-transparent border border-white/30 text-white px-12 py-4 rounded-full font-sans font-medium hover:bg-white hover:text-black transition-colors">
            LAUNCH CAMPAIGN
          </button>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="opacity-30 relative z-10 pt-8"
      >
        <ChevronDown size={32} color="white" />
      </motion.div>
    </section>
  );
};

const ProcessStep = ({ icon: Icon, title, desc, dashPreview, index }: { icon: any, title: string, desc: string, dashPreview?: ReactNode, index: number }) => (
  <section className={`py-32 px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center ${index % 2 !== 0 ? 'bg-ink text-paper' : 'bg-paper text-ink'}`}>
    <motion.div 
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`space-y-6 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}
    >
      <div className={`mb-8 p-4 inline-block rounded-2xl ${index % 2 !== 0 ? 'bg-paper text-ink' : 'bg-ink text-paper'}`}>
        <Icon size={32} />
      </div>
      <h2 className="font-display text-7xl md:text-8xl tracking-tighter leading-none mb-8">
        {title}
      </h2>
      <p className="font-sans text-xl opacity-60 max-w-md font-light text-balance leading-relaxed">
        {desc}
      </p>
    </motion.div>
    
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`relative aspect-square md:aspect-video lg:aspect-square bg-dash-bg border border-white/10 rounded-[2rem] overflow-hidden flex items-center justify-center p-8`}
    >
      {dashPreview}
    </motion.div>
  </section>
);

const ConnectDash = () => (
  <div className="w-full space-y-4">
    <div className="border border-white/10 p-6 rounded-2xl bg-dash-card flex items-center justify-between text-white shadow-xl shadow-black/50">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-black border border-white/10 rounded-full grid place-items-center"><Instagram size={20} className="text-pink-500" /></div>
        <div>
          <p className="font-sans font-medium text-sm text-white">Link Socials</p>
          <p className="font-sans text-xs text-zinc-500">Connect primary platform</p>
        </div>
      </div>
      <div className="bg-pink-500/10 border border-pink-500/20 text-pink-400 px-3 py-1.5 rounded-full font-sans text-[10px] uppercase font-semibold flex items-center gap-2">
        <CheckCircle2 size={12} />
        IG: @CLIPNICTEAM
      </div>
    </div>

    <div className="border border-white/10 p-6 rounded-2xl bg-dash-card flex items-center justify-between text-white shadow-xl shadow-black/50 opacity-60">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-[#5865F2] rounded-full grid place-items-center"><div className="w-5 h-5 bg-white rounded-full mask-clipping" /></div>
        <div>
          <p className="font-sans font-medium text-sm text-white">Discord Verification</p>
          <p className="font-sans text-xs text-zinc-500">Join server to confirm identity</p>
        </div>
      </div>
      <div className="text-emerald-400 px-3 py-1.5 font-sans text-sm font-medium flex items-center gap-2">
        <CheckCircle2 size={16} />
        Verified
      </div>
    </div>
  </div>
);

const SubmissionDash = () => (
  <div className="w-full max-w-md space-y-4">
    <div className="bg-dash-card border border-white/10 p-6 rounded-2xl">
        <p className="font-sans text-xs text-zinc-500 mb-2 uppercase tracking-wide">Submit Clip URL</p>
        <div className="relative">
          <input 
            disabled 
            value="https://tiktok.com/@clipnic/video/123..." 
            className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 font-mono text-sm focus:outline-none text-zinc-300" 
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <CheckCircle2 className="text-emerald-500" size={16} />
          </div>
        </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div className="p-5 bg-dash-card border border-white/10 rounded-2xl">
        <p className="font-sans text-[11px] text-zinc-500 uppercase tracking-widest font-medium mb-1">Status</p>
        <p className="font-sans font-medium text-emerald-400">Yield Generating</p>
      </div>
      <div className="p-5 bg-dash-card border border-white/10 rounded-2xl">
        <p className="font-sans text-[11px] text-zinc-500 uppercase tracking-widest font-medium mb-1">Est. Yield</p>
        <p className="font-mono font-medium text-white">$120.50</p>
      </div>
    </div>
  </div>
);

const EarningsDash = () => (
  <div className="w-full space-y-6">
    <div className="grid grid-cols-2 gap-4">
      <div className="p-6 bg-dash-card border border-white/10 rounded-2xl">
        <p className="font-sans text-[11px] text-zinc-500 uppercase tracking-widest font-medium mb-3">Total Clips</p>
        <p className="font-sans font-medium text-4xl text-white">24</p>
      </div>
      <div className="p-6 bg-dash-card border border-white/10 rounded-2xl">
        <p className="font-sans text-[11px] text-zinc-500 uppercase tracking-widest font-medium mb-3">Total Views</p>
        <p className="font-sans font-medium text-4xl text-white">1.2M</p>
      </div>
    </div>

    <div className="p-6 bg-dash-card border border-white/10 rounded-2xl">
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-sans font-semibold text-white">Recent Payouts</h3>
        <p className="font-sans text-xs text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-md">Available: $8,512</p>
      </div>
      <div className="space-y-4">
        {[
          { date: 'APR 23', amt: '+ $2,400.00', label: 'Velocity Bonus' },
          { date: 'APR 21', amt: '+ $1,150.20', label: 'Ad Revenue Share' }
        ].map((tx, i) => (
          <div key={i} className="flex justify-between items-center py-3 border-b border-white/5 last:border-0 last:pb-0">
            <div>
              <p className="font-sans font-medium text-sm text-zinc-200">{tx.label}</p>
              <p className="font-sans text-xs text-zinc-500 mt-1">{tx.date}</p>
            </div>
            <p className="font-mono text-sm text-white">{tx.amt}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const InfiniteMarquee = () => {
  return (
    <div className="bg-ink py-12 overflow-hidden whitespace-nowrap border-y border-white/10 text-paper">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="inline-block"
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="font-display font-bold text-5xl md:text-8xl mx-10 opacity-30 italic uppercase tracking-tighter">
            LINK • CLIP • VIRALIZE • EARN • AGGREGATE • SCALE • 
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const Contact = () => {
  return (
    <section id="campaigns" className="py-32 px-6 lg:px-12 bg-paper flex flex-col items-center text-center border-t border-line text-ink">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="w-24 h-24 bg-ink rounded-full flex items-center justify-center text-paper mb-12"
      >
        <Zap size={40} className="fill-white" />
      </motion.div>
      <h2 className="font-display text-[12vw] tracking-tighter leading-[0.85] mb-12 uppercase">
        Ready to <br />
        Liquidate?
      </h2>
      <p className="max-w-2xl font-sans text-xl opacity-60 mb-16 font-light">
        The viral economy is waiting. Connect your reach to our capital engine today.
      </p>
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <motion.button 
          whileHover={{ scale: 1.02, backgroundColor: "#000", color: "#fff" }}
          whileTap={{ scale: 0.98 }}
          className="group relative px-12 py-4 rounded-full border-2 border-ink font-sans font-medium text-lg overflow-hidden transition-colors"
        >
          <span className="relative z-10 uppercase">Start Clipping</span>
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.02, backgroundColor: "#000", color: "#fff" }}
          whileTap={{ scale: 0.98 }}
          className="group relative px-12 py-4 rounded-full border-2 border-ink font-sans font-medium text-lg overflow-hidden bg-white transition-colors"
        >
          <span className="relative z-10 uppercase">Launch Campaign</span>
        </motion.button>
      </div>
      
      <div className="mt-32 w-full grid grid-cols-2 md:grid-cols-4 gap-12 font-mono text-xs uppercase tracking-widest text-left border-t border-line pt-20">
        <div>
          <p className="opacity-40 mb-4">Ecosystem</p>
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:underline">Documentation</a>
            <a href="#" className="hover:underline">Revenue Model</a>
            <a href="#" className="hover:underline">Viral Metrics</a>
          </div>
        </div>
        <div>
          <p className="opacity-40 mb-4">Command Center</p>
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:underline">Dashboard</a>
            <a href="#" className="hover:underline">Campaign Registry</a>
            <a href="#" className="hover:underline">Payout History</a>
          </div>
        </div>
        <div>
          <p className="opacity-40 mb-4">Transmissions</p>
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:underline">Twitter / X</a>
            <a href="#" className="hover:underline">Discord Guild</a>
          </div>
        </div>
        <div>
          <p className="opacity-40 mb-4">Legal Framework</p>
          <div className="flex flex-col gap-2">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Clipper Terms</a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-ink text-paper py-12 px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-line">
    <div className="font-display text-2xl tracking-tighter opacity-80">CLIPNIC.</div>
    <div className="font-mono text-[10px] uppercase tracking-widest opacity-40">
      CORE PROTOCOL VERSION 2.1.0-MONO // ALL SYSTEMS OPERATIONAL
    </div>
    <div className="flex gap-6">
      <Instagram size={18} className="opacity-60 hover:opacity-100 cursor-pointer" />
      <Twitter size={18} className="opacity-60 hover:opacity-100 cursor-pointer" />
      <Linkedin size={18} className="opacity-60 hover:opacity-100 cursor-pointer" />
    </div>
  </footer>
);

export default function App() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="relative font-sans selection:bg-ink selection:text-paper cursor-none">
      {/* Custom Cursor */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-ink pointer-events-none z-[100] mix-blend-difference hidden lg:block -mt-4 -ml-4 transition-transform duration-100 ease-out flex items-center justify-center overflow-hidden"
      >
        <div className="w-1.5 h-1.5 bg-white rounded-full" />
      </div>

      <Navigation />
      
      <main className="relative">
        <Hero />
        
        <div id="process">
          <ProcessStep 
            index={0}
            icon={LinkIcon}
            title="AGGREGATE PROFILES"
            desc="Synchronize your TikTok, Instagram, and YouTube accounts. Our engine verifies your reach and establishes the connection."
            dashPreview={<ConnectDash />}
          />
          <InfiniteMarquee />
          <ProcessStep 
            index={1}
            icon={UploadIcon}
            title="TRANSMIT CONTENT"
            desc="Post your content natively on your accounts, then transmit the URL to our validation layer. We track velocity in real-time."
            dashPreview={<SubmissionDash />}
          />
          <ProcessStep 
            index={2}
            icon={History}
            title="LIQUIDATE YIELD"
            desc="As views surge, your dashboard updates. Withdraw your capital through traditional rails or crypto-infrastructure."
            dashPreview={<EarningsDash />}
          />
        </div>

        <Contact />
        
        <div className="absolute bottom-10 right-10 z-[60] mix-blend-difference hidden md:block">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="relative w-24 h-24"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path 
                id="circlePath" 
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" 
                fill="transparent"
              />
              <text className="font-mono text-[7px] uppercase fill-white tracking-[2.5px]">
                <textPath xlinkHref="#circlePath">
                  VIRAL YIELD ENGINE • CLIPNIC PROTOCOL • 
                </textPath>
              </text>
            </svg>
          </motion.div>
        </div>
      </main>

      <Footer />
      
      {/* Floating Status Indicator */}
      <div className="fixed bottom-10 left-10 z-[60] mix-blend-difference hidden md:block transition-opacity opacity-50 hover:opacity-100">
        <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[2px] text-white">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
          Live Network Stats: 2.1M Active Clips
        </div>
      </div>

      <style>{`
        .text-stroke-paper {
          -webkit-text-stroke: 1px #F5F5F5;
        }
        .text-stroke-ink {
          -webkit-text-stroke: 1px #111111;
        }
        html {
          scroll-behavior: smooth;
        }
        * {
          cursor: none !important;
        }
        @media (max-width: 1024px) {
          * {
            cursor: auto !important;
          }
          .cursor-none {
            cursor: auto !important;
          }
        }
      `}</style>
    </div>
  );
}
