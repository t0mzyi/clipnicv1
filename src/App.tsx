/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import {
  Zap,
  ArrowRight,
  Instagram,
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

const Navigation = ({ onGetStarted }: { onGetStarted: () => void }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-white py-8 px-6 lg:px-12 flex justify-between items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-display text-2xl md:text-4xl tracking-widest"
      >
        CLIPNIC.COM
      </motion.div>
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={onGetStarted}
        className="px-6 py-2 rounded-full border border-white font-sans font-bold text-xs tracking-widest hover:bg-white hover:text-black transition-all"
      >
        GET STARTED
      </motion.button>
    </nav>
  );
};

const GetStartedModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[300] flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-ink/90 backdrop-blur-md"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-xl bg-paper p-12 rounded-[3rem] shadow-2xl space-y-12 text-ink border-4 border-ink"
        >
          <div className="text-center space-y-4">
            <h2 className="font-display text-5xl md:text-6xl tracking-tighter leading-none uppercase">Choose Your <br /> Terminal</h2>
            <p className="font-sans opacity-60 text-lg">Select your path to continue into the ecosystem.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button 
              onClick={() => window.location.href = 'https://dash.clipnic.com/brand'}
              className="group p-8 rounded-[2rem] border-2 border-ink hover:bg-ink hover:text-paper transition-all text-left space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-ink text-paper flex items-center justify-center group-hover:bg-brand group-hover:text-ink transition-colors">
                <Zap size={24} />
              </div>
              <div>
                <h4 className="font-display text-2xl uppercase tracking-tight">Launch Campaign</h4>
                <p className="text-xs opacity-60 mt-1">Deploy capital. Scale reach.</p>
              </div>
            </button>

            <button 
              onClick={() => window.location.href = 'https://dash.clipnic.com/'}
              className="group p-8 rounded-[2rem] border-2 border-ink hover:bg-ink hover:text-paper transition-all text-left space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-ink text-paper flex items-center justify-center group-hover:bg-brand group-hover:text-ink transition-colors">
                <ArrowRight size={24} />
              </div>
              <div>
                <h4 className="font-display text-2xl uppercase tracking-tight">Start Clipping</h4>
                <p className="text-xs opacity-60 mt-1">Post content. Liquidate yield.</p>
              </div>
            </button>
          </div>

          <button 
            onClick={onClose}
            className="w-full py-4 text-xs font-bold uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity"
          >
            Cancel Transmission
          </button>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

const Hero = ({ activeView, setActiveView }: { activeView: 'clipper' | 'brand', setActiveView: (v: 'clipper' | 'brand') => void }) => {
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
            key={activeView}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[14vw] md:text-[18vw] leading-[0.8] tracking-tighter"
          >
            {activeView === 'clipper' ? (
              <>POST CLIPS <br /> <span className="text-stroke-paper text-ink">GET PAID</span></>
            ) : (
              <>GROW YOUR <br /> <span className="text-stroke-paper text-ink">BRAND</span></>
            )}
          </motion.h1>

          <motion.div
            style={{ y: y1 }}
            className="absolute -top-10 -left-10 w-40 h-40 border border-white/20 hidden md:block"
          />
        </div>

        <motion.p
          key={activeView + "p"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 max-w-xl mx-auto font-sans text-xl opacity-60 font-light text-balance"
        >
          {activeView === 'clipper'
            ? "Clipnic is the primary infrastructure for turning engagement into capital. We pay clippers for high-velocity short-form content."
            : "Deploy your brand across thousands of accounts. We automate the creator economy to give you infinite organic reach through short-form video."
          }
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-col items-center gap-12"
        >
          <div className="bg-white/5 p-2 rounded-full border border-white/10 flex gap-2 relative z-20">
            <button
              onMouseEnter={() => setActiveView('clipper')}
              onClick={() => window.location.href = 'https://dash.clipnic.com/clipper'}
              className={`px-8 py-3 rounded-full font-sans font-bold text-sm transition-all ${activeView === 'clipper' ? 'bg-brand text-black shadow-[0_0_30px_rgba(var(--color-brand-rgb),0.4)]' : 'text-white hover:bg-white/10'}`}
            >
              START EARNING
            </button>
            <button
              onMouseEnter={() => setActiveView('brand')}
              onClick={() => window.location.href = 'https://dash.clipnic.com/brand'}
              className={`px-8 py-3 rounded-full font-sans font-bold text-sm transition-all ${activeView === 'brand' ? 'bg-brand text-black shadow-[0_0_30px_rgba(var(--color-brand-rgb),0.4)]' : 'text-white hover:bg-white/10'}`}
            >
              LAUNCH CAMPAIGN
            </button>
          </div>
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
      <div className={`mb-8 p-6 inline-block rounded-full border-2 ${index % 2 !== 0 ? 'bg-paper text-ink border-paper' : 'bg-ink text-paper border-ink'}`}>
        <Icon size={32} />
      </div>
      <h2 className="font-display text-4xl md:text-8xl tracking-tighter leading-none mb-8">
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

// --- Brand Previews ---

const BrandCampaignDash = () => (
  <div className="w-full space-y-4">
    <div className="bg-dash-card border border-white/10 p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-6">
        <p className="font-sans text-xs text-zinc-500 uppercase tracking-wide">Active Campaign</p>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="font-sans text-[10px] text-emerald-500">RUNNING</span>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-zinc-400">Budget Deployed</span>
          <span className="text-white font-mono">$50,000.00</span>
        </div>
        <div className="w-full bg-black h-2 rounded-full overflow-hidden">
          <div className="bg-brand w-[65%] h-full" />
        </div>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div className="p-4 bg-dash-card border border-white/10 rounded-2xl">
        <p className="text-[10px] text-zinc-500 uppercase mb-1">Clippers Active</p>
        <p className="text-2xl text-white font-display">1,420</p>
      </div>
      <div className="p-4 bg-dash-card border border-white/10 rounded-2xl">
        <p className="text-[10px] text-zinc-500 uppercase mb-1">Avg. CPM</p>
        <p className="text-2xl text-white font-display">$4.20</p>
      </div>
    </div>
  </div>
);

const BrandMetricsDash = () => (
  <div className="w-full space-y-4">
    <div className="bg-dash-card border border-white/10 p-6 rounded-2xl">
      <h3 className="font-sans text-sm text-white mb-4">Viral Velocity</h3>
      <div className="h-32 flex items-end gap-1">
        {[40, 20, 60, 80, 45, 90, 100, 70, 85].map((h, i) => (
          <div key={i} className="flex-grow bg-brand/20 border-t-2 border-brand rounded-t-sm" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
    <div className="p-5 bg-dash-card border border-white/10 rounded-2xl flex items-center justify-between">
      <div>
        <p className="text-[10px] text-zinc-500 uppercase">Estimated Reach</p>
        <p className="text-xl text-white font-display">8.4M VIEWS</p>
      </div>
      <TrendingUp className="text-brand" size={24} />
    </div>
  </div>
);


const Contact = ({ activeView, setActiveView }: { activeView: 'clipper' | 'brand', setActiveView: (v: 'clipper' | 'brand') => void }) => {
  return (
    <section id="campaigns" className="py-32 px-6 lg:px-12 bg-paper flex flex-col items-center text-center border-t border-line text-ink">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="w-24 h-24 bg-ink rounded-full flex items-center justify-center text-paper mb-12 shadow-[8px_8px_0_var(--color-brand)] border-4 border-ink"
      >
        <Zap size={40} className="fill-brand text-brand" />
      </motion.div>
      <h2 className="font-display text-[15vw] md:text-[12vw] tracking-tighter leading-[0.85] mb-12 uppercase">
        {activeView === 'clipper' ? <>Ready to <br /> Liquidate?</> : <>Ready to <br /> Dominate?</>}
      </h2>
      <p className="max-w-2xl font-sans text-xl opacity-60 mb-16 font-light">
        {activeView === 'clipper'
          ? "The viral economy is waiting. Connect your reach to our capital engine today."
          : "The feed is the new market. Connect your brand to our viral engine today."
        }
      </p>
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <motion.button
          whileHover={{ scale: 1.02, backgroundColor: "#000", color: "#fff" }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            window.location.href = 'https://dash.clipnic.com/clipper';
          }}
          className={`group relative px-12 py-4 rounded-full border-2 border-ink font-sans font-bold text-lg overflow-hidden transition-colors ${activeView === 'clipper' ? 'bg-ink text-paper' : ''}`}
        >
          <span className={`relative z-10 uppercase ${activeView === 'clipper' ? 'text-paper' : 'text-ink group-hover:text-paper'}`}>Start Earning</span>
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02, backgroundColor: "#000", color: "#fff" }}
          whileTap={{ scale: 0.98 }}
          onClick={() => {
            window.location.href = 'https://dash.clipnic.com/brand';
          }}
          className={`group relative px-12 py-4 rounded-full border-2 border-ink font-sans font-bold text-lg overflow-hidden transition-colors ${activeView === 'brand' ? 'bg-ink text-paper' : 'bg-white hover:bg-black'}`}
        >
          <span className={`relative z-10 uppercase ${activeView === 'brand' ? 'text-paper' : 'text-ink group-hover:text-paper'}`}>Launch Campaign</span>
        </motion.button>
      </div>

      <div className="mt-32 w-full grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 font-mono text-[10px] md:text-xs uppercase tracking-widest text-left border-t border-line pt-20">
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
    <div className="font-display text-2xl tracking-widest opacity-80 uppercase">CLIPNIC.COM</div>
    <div className="font-mono text-[10px] uppercase tracking-widest opacity-40">
      © 2026 clipnic.com all rights reserved
    </div>
    <div className="flex gap-6 items-center">
      <Instagram size={18} className="opacity-60 hover:opacity-100 cursor-pointer" />
      <a href="#" className="opacity-60 hover:opacity-100 cursor-pointer">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
      </a>
      <a href="#" className="opacity-60 hover:opacity-100 cursor-pointer">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.874.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" /></svg>
      </a>
    </div>
  </footer>
);

const PrivacyOverlay = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] bg-ink text-paper overflow-y-auto p-6 md:p-20 font-sans cursor-auto selection:bg-brand selection:text-ink"
      >
        <button
          onClick={onClose}
          className="fixed top-10 right-10 w-12 h-12 rounded-full border border-paper/20 flex items-center justify-center hover:bg-paper hover:text-ink transition-colors z-[210]"
        >
          <Zap size={24} className="fill-brand text-brand" />
        </button>

        <div className="max-w-4xl mx-auto space-y-20 pb-32">
          <div className="space-y-8">
            <h1 className="font-display text-[10vw] md:text-[8vw] leading-none tracking-tighter uppercase">Privacy <br /> Protocol</h1>
            <p className="font-mono text-xs uppercase tracking-[0.4em] opacity-40">Last Updated: April 24, 2026</p>
          </div>

          <div className="space-y-12 text-xl md:text-2xl font-light leading-relaxed opacity-80">
            <p>
              Your Privacy is Important: This Privacy Policy explains how Clipnic ("we," "our," or "us") collects, uses, and protects your personal information when you use our platform (clipnic.com) to connect brands, creators, and independent editors ("Clippers").
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="space-y-6">
              <h3 className="font-display text-4xl tracking-tight uppercase">1. Scope</h3>
              <p className="opacity-60 leading-relaxed font-light">Clipnic is committed to handling your personal information in accordance with GDPR, CCPA, and COPPA. We process data across all platform activities.</p>
            </div>
            <div className="space-y-6">
              <h3 className="font-display text-4xl tracking-tight uppercase">2. Minors</h3>
              <p className="opacity-60 leading-relaxed font-light">Under 13: We do not knowingly collect data. Ages 13-17: Require verifiable parental consent via contact@clipnic.com.</p>
            </div>
          </div>

          <div className="p-12 border border-paper/10 rounded-[3rem] space-y-8">
            <h3 className="font-display text-5xl tracking-tighter uppercase">3. Information Collection</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <p className="font-mono text-[10px] uppercase tracking-widest opacity-40">Direct</p>
                <p className="text-sm opacity-60">Account details, payout info, and profile metadata provided by you.</p>
              </div>
              <div className="space-y-4">
                <p className="font-mono text-[10px] uppercase tracking-widest opacity-40">Automatic</p>
                <p className="text-sm opacity-60">Technical identifiers, IP addresses, and platform interaction analytics.</p>
              </div>
              <div className="space-y-4">
                <p className="font-mono text-[10px] uppercase tracking-widest opacity-40">Third-Party</p>
                <p className="text-sm opacity-60">Public metrics from YouTube, TikTok, and Instagram via secure OAuth tokens.</p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <h3 className="font-display text-6xl tracking-tighter uppercase">4. Utilization</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {["Service Provision", "Bounty Verification", "Security Monitoring", "Communications"].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-6 border border-paper/10 rounded-2xl">
                  <div className="w-2 h-2 bg-brand rounded-full" />
                  <span className="font-display text-2xl uppercase tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-12 bg-brand text-ink rounded-[3rem] space-y-8">
            <h3 className="font-display text-5xl tracking-tighter uppercase">7. API Revocation</h3>
            <p className="text-xl leading-relaxed">
              You can disconnect social accounts at any time. Revoking access via platform security settings (e.g., Google) will stop data collection but may restrict campaign access.
            </p>
          </div>

          <div className="pt-20 border-t border-paper/10 flex flex-col md:flex-row justify-between gap-12">
            <div className="space-y-4">
              <h4 className="font-display text-4xl uppercase">Inquiries</h4>
              <p className="font-mono text-xl">clipnicteam@gmail.com</p>
            </div>
            <button
              onClick={onClose}
              className="px-12 py-4 rounded-full border-2 border-paper font-sans font-bold text-lg hover:bg-paper hover:text-ink transition-all"
            >
              RETURN TO CORE
            </button>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const TermsOverlay = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] bg-ink text-paper overflow-y-auto p-6 md:p-20 font-sans cursor-auto selection:bg-brand selection:text-ink"
      >
        <button
          onClick={onClose}
          className="fixed top-10 right-10 w-12 h-12 rounded-full border border-paper/20 flex items-center justify-center hover:bg-paper hover:text-ink transition-colors z-[210]"
        >
          <Zap size={24} className="fill-brand text-brand" />
        </button>

        <div className="max-w-4xl mx-auto space-y-20 pb-32">
          <div className="space-y-8">
            <h1 className="font-display text-[10vw] md:text-[8vw] leading-none tracking-tighter uppercase">Terms of <br /> Service</h1>
            <p className="font-mono text-xs uppercase tracking-[0.4em] opacity-40">Last Updated: April 24, 2026</p>
          </div>

          <div className="space-y-12 text-xl md:text-2xl font-light leading-relaxed opacity-80">
            <p>
              Agreement to Terms: By accessing and using Clipnic (clipnic.com), you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="space-y-6">
              <h3 className="font-display text-4xl tracking-tight uppercase">1. Acceptance</h3>
              <p className="opacity-60 leading-relaxed font-light">These Terms govern your use of the Clipnic platform. By creating an account, you enter a legally binding agreement. If you do not agree, you may not use our services.</p>
            </div>
            <div className="space-y-6">
              <h3 className="font-display text-4xl tracking-tight uppercase">2. Eligibility</h3>
              <p className="opacity-60 leading-relaxed font-light">Minimum Age: 13. Minors (13-17) require explicit guardian involvement. We reserve the right to verify age at any time.</p>
            </div>
          </div>

          <div className="p-12 border border-paper/10 rounded-[3rem] space-y-8">
            <h3 className="font-display text-5xl tracking-tighter uppercase">4. Responsibilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <p className="font-mono text-[10px] uppercase tracking-widest opacity-40">Clippers</p>
                <p className="text-sm opacity-60">Must maintain authentic engagement. Viewbotting or engagement pods result in immediate termination and forfeiture of yield.</p>
              </div>
              <div className="space-y-4">
                <p className="font-mono text-[10px] uppercase tracking-widest opacity-40">Brands</p>
                <p className="text-sm opacity-60">Must own or license uploaded content. Responsible for defining clear campaign rules and payout metrics.</p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <h3 className="font-display text-6xl tracking-tighter uppercase">5. Restrictions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {["Fake Engagement", "Harmful Content", "Platform Abuse", "Off-Platform Circumvention"].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-6 border border-paper/10 rounded-2xl">
                  <div className="w-2 h-2 bg-brand rounded-full" />
                  <span className="font-display text-2xl uppercase tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-12 bg-brand text-ink rounded-[3rem] space-y-8">
            <h3 className="font-display text-5xl tracking-tighter uppercase">7. Payouts</h3>
            <p className="text-xl leading-relaxed">
              Yield is earned based on verified metrics. Clipnic reserves the right to withhold payouts if fraud is suspected. Clippers are independent contractors responsible for their own tax obligations.
            </p>
          </div>

          <div className="pt-20 border-t border-paper/10 flex flex-col md:flex-row justify-between gap-12">
            <div className="space-y-4">
              <h4 className="font-display text-4xl uppercase">Assistance</h4>
              <p className="font-mono text-xl">clipnicteam@gmail.com</p>
            </div>
            <button
              onClick={onClose}
              className="px-12 py-4 rounded-full border-2 border-paper font-sans font-bold text-lg hover:bg-paper hover:text-ink transition-all"
            >
              ACKNOWLEDGE
            </button>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default function App() {
  const [activeView, setActiveView] = useState<'clipper' | 'brand'>('clipper');
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [getStartedOpen, setGetStartedOpen] = useState(false);

  return (
    <div className="relative font-sans selection:bg-ink selection:text-paper">

      <Navigation onGetStarted={() => setGetStartedOpen(true)} />

      <main className="relative">
        <Hero activeView={activeView} setActiveView={setActiveView} />

        <div id="process">
          <AnimatePresence mode="wait">
            {activeView === 'clipper' ? (
              <motion.div
                key="clipper-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ProcessStep
                  index={0}
                  icon={LinkIcon}
                  title="AGGREGATE PROFILES"
                  desc="Synchronize your TikTok, Instagram, and YouTube accounts. Our engine verifies your reach and establishes the connection."
                  dashPreview={<ConnectDash />}
                />
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
              </motion.div>
            ) : (
              <motion.div
                key="brand-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ProcessStep
                  index={0}
                  icon={DollarSign}
                  title="DEPLOY CAPITAL"
                  desc="Fund your viral engine. Allocate budgets for bounties and watch as thousands of creators begin producing for your brand."
                  dashPreview={<BrandCampaignDash />}
                />
                <ProcessStep
                  index={1}
                  icon={TrendingUp}
                  title="AUTOMATE REWARDS"
                  desc="Define your performance benchmarks. Our protocol automatically calculates and distributes yield based on real engagement."
                  dashPreview={<BrandMetricsDash />}
                />
                <ProcessStep
                  index={2}
                  icon={Share2}
                  title="SCALE VIRAL REACH"
                  desc="Achieve infinite organic reach. Your brand becomes the content, natively embedded in the feeds of millions."
                  dashPreview={
                    <div className="text-center p-10">
                      <p className="font-display text-4xl text-white mb-4">8.4M+</p>
                      <p className="font-sans text-zinc-500 uppercase tracking-widest text-xs">Total Network Impressions</p>
                    </div>
                  }
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <section id="campaigns" className="py-32 px-6 lg:px-12 bg-paper flex flex-col items-center text-center border-t border-line text-ink">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-24 bg-ink rounded-full flex items-center justify-center text-paper mb-12 shadow-[8px_8px_0_var(--color-brand)] border-4 border-ink"
          >
            <Zap size={40} className="fill-brand text-brand" />
          </motion.div>
          <h2 className="font-display text-[15vw] md:text-[12vw] tracking-tighter leading-[0.85] mb-12 uppercase">
            {activeView === 'clipper' ? <>Ready to <br /> Liquidate?</> : <>Ready to <br /> Dominate?</>}
          </h2>
          <p className="max-w-2xl font-sans text-xl opacity-60 mb-16 font-light">
            {activeView === 'clipper'
              ? "The viral economy is waiting. Connect your reach to our capital engine today."
              : "The feed is the new market. Connect your brand to our viral engine today."
            }
          </p>
          <div className="flex flex-col md:flex-row gap-6 mt-6">
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "#000", color: "#fff" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                if (activeView === 'brand') setActiveView('clipper');
                else window.location.href = 'https://app.clipnic.com/clipper';
              }}
              className={`group relative px-12 py-4 rounded-full border-2 border-ink font-sans font-bold text-lg overflow-hidden transition-colors ${activeView === 'clipper' ? 'bg-ink text-paper' : ''}`}
            >
              <span className={`relative z-10 uppercase ${activeView === 'clipper' ? 'text-paper' : 'text-ink group-hover:text-paper'}`}>Start Earning</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "#000", color: "#fff" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                if (activeView === 'clipper') setActiveView('brand');
                else window.location.href = 'https://app.clipnic.com/brand';
              }}
              className={`group relative px-12 py-4 rounded-full border-2 border-ink font-sans font-bold text-lg overflow-hidden transition-colors ${activeView === 'brand' ? 'bg-ink text-paper' : 'bg-white hover:bg-black'}`}
            >
              <span className={`relative z-10 uppercase ${activeView === 'brand' ? 'text-paper' : 'text-ink group-hover:text-paper'}`}>Launch Campaign</span>
            </motion.button>
          </div>

          <div className="mt-32 w-full grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 font-mono text-[10px] md:text-xs uppercase tracking-widest text-left border-t border-line pt-20">
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
                <button onClick={() => setPrivacyOpen(true)} className="hover:underline text-left uppercase">Privacy Protocol</button>
                <button onClick={() => setTermsOpen(true)} className="hover:underline text-left uppercase">Service Protocol</button>
              </div>
            </div>
          </div>
        </section>

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
      <PrivacyOverlay isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <TermsOverlay isOpen={termsOpen} onClose={() => setTermsOpen(false)} />
      <GetStartedModal isOpen={getStartedOpen} onClose={() => setGetStartedOpen(false)} />

      {/* Floating Status Indicator */}


      <style>{`
        .text-stroke-paper {
          -webkit-text-stroke: 1px #F5F5F5;
        }
        .text-stroke-ink {
          -webkit-text-stroke: 1px #111111;
        }
        .text-stroke-white {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}
