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
  Check,
  Link as LinkIcon,
  Upload as UploadIcon,
  DollarSign,
  TrendingUp,
  Share2,
  Trophy,
  History,
  CheckCircle2,
  Box,
  ArrowLeft,
  Eye,
  Play,
  BarChart2,
  ExternalLink,
  Calendar,
  Clock
} from 'lucide-react';
import React, { useState, useRef, useEffect, ReactNode } from 'react';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { HowToPage } from './pages/HowTo';
import { Tier1Guide } from './pages/Tier1Guide';
import { AvoidZeroViews } from './pages/AvoidZeroViews';
import { DocsHub } from './pages/DocsHub';
import { ComingSoon } from './pages/ComingSoon';
import { ReferralsGuideDocs } from './pages/ReferralsGuideDocs';
import { Footer as SharedFooter } from './components/Footer';
import { reportVisit, reportClick } from './utils/monitor';

// --- SEO Component ---
const SEO = ({ title, description, image, url }: { title: string, description: string, image?: string, url?: string }) => {
  useEffect(() => {
    document.title = title;
    
    const updateMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMeta('title', title);
    updateMeta('description', description);
    updateMeta('og:title', title, 'property');
    updateMeta('og:description', description, 'property');
    updateMeta('twitter:title', title, 'property');
    updateMeta('twitter:description', description, 'property');
    
    if (image) {
      updateMeta('og:image', image, 'property');
      updateMeta('twitter:image', image, 'property');
    }
    
    if (url) {
      const fullUrl = url.startsWith('http') ? url : `https://clipnic.com${url}`;
      updateMeta('og:url', fullUrl, 'property');
      updateMeta('twitter:url', fullUrl, 'property');
    }
  }, [title, description, image, url]);

  return null;
};

const BrandPartnershipPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLFormElement;
    const brandInput = target.querySelector('input[placeholder="Enter brand name"]') as HTMLInputElement;
    const emailInput = target.querySelector('input[type="email"]') as HTMLInputElement;
    if (brandInput && emailInput) {
      sessionStorage.setItem('visitor-name', `${brandInput.value} (${emailInput.value})`);
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-ink text-paper selection:bg-brand selection:text-ink">
      <nav className="p-8 lg:p-12 flex justify-between items-center border-b border-white/5">
        <div className="flex items-center gap-1.5 cursor-pointer" onClick={() => window.location.href = '/'}>
          <img src="logo.webp" className="w-8 h-8 rounded-lg object-cover" alt="Clipnic Logo" />
          <span className="font-display text-xl tracking-widest uppercase">CLIPNIC.COM</span>
        </div>
        <button onClick={() => window.location.href = '/'} className="font-mono text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity flex items-center gap-2">
          <ArrowLeft size={12} />
          Back Home
        </button>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-32 grid lg:grid-cols-2 gap-20 lg:gap-32 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <h1 className="font-display text-[12vw] lg:text-[7vw] leading-[0.85] tracking-tighter uppercase">Clipnic: <br /> Scale Your <br /> <span className="text-brand">Viral</span> Velocity</h1>
            <p className="font-sans text-xl opacity-60 font-light max-w-md leading-relaxed">Join the world's leading clipping company and decentralized infrastructure for short form video distribution. Deploy your first high velocity campaign today.</p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 shrink-0">
                <Zap size={24} className="text-brand" />
              </div>
              <div>
                <h4 className="font-display text-xl uppercase">Decentralized Reach</h4>
                <p className="font-sans opacity-40 text-sm">Thousands of professional clippers producing for your brand natively.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 shrink-0">
                <TrendingUp size={24} className="text-brand" />
              </div>
              <div>
                <h4 className="font-display text-xl uppercase">Performance Driven</h4>
                <p className="font-sans opacity-40 text-sm">Only pay for verified engagement and impressions. High CPM efficiency.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative"
        >
          {submitted ? (
            <div className="bg-white/5 border border-white/10 p-12 rounded-[3rem] text-center space-y-8 py-20 backdrop-blur-3xl shadow-2xl">
              <div className="w-20 h-20 bg-brand text-ink rounded-full flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(var(--color-brand-rgb),0.5)]">
                <CheckCircle2 size={40} />
              </div>
              <div className="space-y-4">
                <h2 className="font-display text-4xl uppercase">  Received</h2>
                <p className="font-sans opacity-60 text-lg">Our strategy team will review your brand and reach out within 24 hours.</p>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="font-mono text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[3rem] space-y-8 backdrop-blur-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 blur-3xl rounded-full -mr-16 -mt-16" />

              <div className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-40 ml-4">Brand / Company Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Enter brand name"
                    className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand/50 focus:outline-none transition-all placeholder:opacity-20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-40 ml-4">Corporate Email</label>
                  <input
                    required
                    type="email"
                    placeholder="name@company.com"
                    className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand/50 focus:outline-none transition-all placeholder:opacity-20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-40 ml-4">Campaign Goal</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="What are you looking to achieve?"
                    className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand/50 focus:outline-none transition-all placeholder:opacity-20 resize-none"
                  />
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-brand text-ink font-sans font-bold py-6 rounded-2xl uppercase tracking-widest text-lg shadow-[0_20px_50px_rgba(var(--color-brand-rgb),0.3)] hover:shadow-[0_20px_60px_rgba(var(--color-brand-rgb),0.5)] transition-all"
              >
                Submit Partnership
              </motion.button>

              <p className="text-center font-sans text-[10px] opacity-40">By submitting, you agree to the Clipnic Terms of Service.</p>
            </form>
          )}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

const NotFound = () => (
  <div className="min-h-screen bg-ink flex items-center justify-center p-6 text-center text-paper">
    <div className="max-w-2xl space-y-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        className="relative inline-block"
      >
        <div className="w-40 h-40 bg-paper/5 rounded-[3rem] flex items-center justify-center border border-paper/10 shadow-2xl relative z-10">
          <Zap size={64} className="text-brand fill-brand" />
        </div>
        <div className="absolute -top-4 -right-4 bg-brand text-ink font-display font-bold text-3xl w-20 h-20 rounded-3xl flex items-center justify-center border-8 border-ink rotate-12 shadow-2xl">
          404
        </div>
      </motion.div>
      <div className="space-y-6">
        <h1 className="font-display text-[10vw] md:text-[8vw] tracking-tighter leading-none uppercase">  <br /> Lost</h1>
        <p className="font-sans opacity-60 text-xl font-light max-w-lg mx-auto">The requested sector could not be located in the current feed. The   may have been purged.</p>
      </div>
      <div className="pt-8">
        <button
          onClick={() => window.location.href = '/'}
          className="px-16 py-6 rounded-full bg-paper text-ink font-sans font-bold text-xl hover:opacity-90 transition-all uppercase tracking-[0.2em] shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
        >
          Return Home
        </button>
      </div>
    </div>
  </div>
);

// --- Components ---

const Navigation = ({ onGetStarted, activeView }: { onGetStarted: () => void, activeView: 'clipper' | 'brand' }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-white py-8 px-6 lg:px-12 flex justify-between items-center">
      <SEO 
        title={activeView === 'clipper' ? "Clipnic | Edit Content, Get Paid" : "Clipnic | Scale Your Brand Viral Velocity"}
        description={activeView === 'clipper' 
          ? "Join the world's leading clipping company. Edit short form content and get paid based on views. No experience needed." 
          : "The premier content distribution infrastructure for brands. Scale your viral reach through our decentralized network of clippers."
        }
        url={activeView === 'clipper' ? "/" : "/brands"}
      />
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-1.5 cursor-pointer"
        onClick={() => window.location.href = '/'}
      >
        <img src="logo.webp" className="w-8 h-8 md:w-10 md:h-10 rounded-lg object-cover" alt="Clipnic Logo" />
        <span className="font-display text-xl md:text-2xl tracking-widest">CLIPNIC.COM</span>
      </motion.div>
      <div className="flex items-center gap-4 md:gap-8">
        {activeView === 'clipper' && (
          <a href="/docs/get-started" className="hidden min-[426px]:block font-sans font-bold text-[10px] md:text-xs tracking-widest hover:text-brand transition-colors uppercase">How it works</a>
        )}
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onGetStarted}
          className="px-6 py-2 rounded-full border border-white font-sans font-bold text-[10px] md:text-xs tracking-widest hover:bg-white hover:text-black transition-all whitespace-nowrap"
        >
          Getting Started
        </motion.button>
      </div>
    </nav>
  );
};



const GetStartedModal = ({ isOpen, onClose, onBrandLaunch }: { isOpen: boolean, onClose: () => void, onBrandLaunch: () => void }) => (
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
          className="relative w-full max-w-xl bg-paper p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl space-y-8 md:space-y-12 text-ink border-4 border-ink"
        >
          <div className="text-center space-y-4">
            <h2 className="font-display text-4xl md:text-6xl tracking-tighter leading-none uppercase">Enter the <br /> Network</h2>
            <p className="font-sans opacity-60 text-base md:text-lg">Select your entry point to start growing or earning.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <button
              onClick={onBrandLaunch}
              className="group p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border-2 border-ink hover:bg-ink hover:text-paper transition-all text-left space-y-4"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-ink text-paper flex items-center justify-center group-hover:bg-brand group-hover:text-ink transition-colors">
                <Zap size={20} className="md:w-6 md:h-6" />
              </div>
              <div>
                <h4 className="font-display text-xl md:text-2xl uppercase tracking-tight">Launch Campaign</h4>
                <p className="text-[10px] md:text-xs opacity-60 mt-1">Fund your campaign. Scale reach.</p>
              </div>
            </button>

            <button
              onClick={() => window.location.href = 'https://dash.clipnic.com/'}
              className="group p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border-2 border-ink hover:bg-ink hover:text-paper transition-all text-left space-y-4"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-ink text-paper flex items-center justify-center group-hover:bg-brand group-hover:text-ink transition-colors">
                <ArrowRight size={20} className="md:w-6 md:h-6" />
              </div>
              <div>
                <h4 className="font-display text-xl md:text-2xl uppercase tracking-tight">Start Clipping</h4>
                <p className="text-[10px] md:text-xs opacity-60 mt-1">Post content. Get Paid Instantly.</p>
              </div>
            </button>
          </div>

          <div className="flex flex-col items-center gap-4">
            <button
              onClick={onClose}
              className="w-full py-4 text-xs font-bold uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity"
            >
              Cancel
            </button>
            <button
              onClick={() => window.location.href = '/docs'}
              className="px-6 py-2 rounded-full border border-ink/10 text-ink/40 font-mono text-[9px] uppercase tracking-widest hover:border-ink/30 hover:text-ink/60 transition-all"
            >
              Need help? View our Guides
            </button>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

const TIMEZONE_OPTIONS = [
  { value: "Asia/Kolkata", label: "Asia/Kolkata (IST)", flag: "🇮🇳" },
  { value: "Etc/GMT", label: "Greenwich Mean Time (GMT)", flag: "🇬🇧" },
  { value: "Europe/London", label: "British Summer Time (BST)", flag: "🇬🇧" },
  { value: "America/New_York", label: "America/New_York (EST)", flag: "🇺🇸" },
  { value: "America/Chicago", label: "America/Chicago (CST)", flag: "🇺🇸" },
  { value: "America/Denver", label: "America/Denver (MST)", flag: "🇺🇸" },
  { value: "America/Los_Angeles", label: "America/Los_Angeles (PST)", flag: "🇺🇸" },
  { value: "Europe/Paris", label: "Europe/Paris (CET)", flag: "🇫🇷" },
  { value: "Asia/Dubai", label: "Asia/Dubai (GST)", flag: "🇦🇪" },
  { value: "Asia/Singapore", label: "Asia/Singapore (SGT)", flag: "🇸🇬" },
  { value: "Australia/Sydney", label: "Australia/Sydney (AEST)", flag: "🇦🇺" },
  { value: "UTC", label: "UTC (Coordinated Universal)", flag: "🌐" }
];

const BrandGatewayModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  // Calendar Booking States
  const [slots, setSlots] = useState<any[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<any>(null);
  const [bookingForm, setBookingForm] = useState({
    clientName: '',
    brand: '',
    email: '',
    website: '',
    goal: '',
    decisionMakerConf: false
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'booking' | 'success' | 'error'>('idle');
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [currentMonthOffset, setCurrentMonthOffset] = useState<number>(0);
  const timesRef = useRef<HTMLDivElement>(null);
  const [selectedTimezone, setSelectedTimezone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);
  const [isTzOpen, setIsTzOpen] = useState(false);

  const autoTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const timezoneOptions = React.useMemo(() => {
    const list = [...TIMEZONE_OPTIONS];
    const exists = list.some(opt => opt.value === autoTz);
    if (!exists) {
      list.unshift({
        value: autoTz,
        label: `${autoTz} (Detected)`,
        flag: "📍"
      });
    }
    return list;
  }, [autoTz]);

  const activeOption = timezoneOptions.find(opt => opt.value === selectedTimezone) || {
    value: selectedTimezone,
    label: selectedTimezone,
    flag: "📍"
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // Reset form and step index on close
      setBookingForm({
        clientName: '',
        brand: '',
        email: '',
        website: '',
        goal: '',
        decisionMakerConf: false
      });
      setCurrentStep(1);
      setSelectedSlot(null);
      setBookingStatus('idle');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const fetchSlots = async () => {
        setSlotsLoading(true);
        try {
          const res = await fetch(`${import.meta.env.VITE_API_URL}/bookings/slots`);
          const data = await res.json();
          if (data.success) {
            const fetchedSlots = data.slots || [];
            setSlots(fetchedSlots);
            if (fetchedSlots.length > 0) {
              const dates = Array.from(new Set(fetchedSlots.map((s: any) => {
                const d = new Date(s.startTime || s.start_time);
                return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
              }))).sort();
              if (dates.length > 0) {
                setSelectedDate(dates[0]);
              }
            } else {
              setSlots([]);
              setSelectedDate('');
            }
          }
        } catch (err) {
          console.error(err);
        } finally {
          setSlotsLoading(false);
        }
      };
      fetchSlots();
    }
  }, [isOpen]);

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return (
          bookingForm.clientName.trim().length > 0 &&
          bookingForm.brand.trim().length > 0 &&
          bookingForm.email.trim().length > 0 &&
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(bookingForm.email)
        );
      case 2:
        return bookingForm.website.trim().length > 0;
      case 3:
        return bookingForm.goal.trim().length >= 10;
      case 4:
        return bookingForm.decisionMakerConf === true;
      default:
        return false;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <div className="space-y-2">
              <label className="font-mono text-[9px] uppercase tracking-[0.2em] opacity-80 ml-4 font-black">Your Name</label>
              <input
                required
                placeholder="Enter your name"
                value={bookingForm.clientName}
                onChange={e => setBookingForm({ ...bookingForm, clientName: e.target.value })}
                className="w-full bg-ink/5 border border-ink/10 rounded-2xl px-6 py-4 focus:border-brand/40 focus:outline-none transition-all placeholder:opacity-20 text-sm font-semibold"
              />
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[9px] uppercase tracking-[0.2em] opacity-80 ml-4 font-black">Brand / Company Name</label>
              <input
                required
                placeholder="Enter brand or company name"
                value={bookingForm.brand}
                onChange={e => setBookingForm({ ...bookingForm, brand: e.target.value })}
                className="w-full bg-ink/5 border border-ink/10 rounded-2xl px-6 py-4 focus:border-brand/40 focus:outline-none transition-all placeholder:opacity-20 text-sm font-semibold"
              />
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[9px] uppercase tracking-[0.2em] opacity-80 ml-4 font-black">Contact Email</label>
              <input
                required
                type="email"
                placeholder="name@company.com"
                value={bookingForm.email}
                onChange={e => setBookingForm({ ...bookingForm, email: e.target.value })}
                className="w-full bg-ink/5 border border-ink/10 rounded-2xl px-6 py-4 focus:border-brand/40 focus:outline-none transition-all placeholder:opacity-20 text-sm font-semibold"
              />
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <div className="space-y-2">
              <label className="font-mono text-[9px] uppercase tracking-[0.2em] opacity-80 ml-4 font-black">website/social media handle</label>
              <input
                required
                placeholder="https://yourcompany.com or @yourchannel"
                value={bookingForm.website}
                onChange={e => setBookingForm({ ...bookingForm, website: e.target.value })}
                className="w-full bg-ink/5 border border-ink/10 rounded-2xl px-6 py-4 focus:border-brand/40 focus:outline-none transition-all placeholder:opacity-20 text-sm font-semibold"
              />
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <div className="space-y-2">
              <label className="font-mono text-[9px] uppercase tracking-[0.2em] opacity-80 ml-4 font-black">Campaign Goals & Vision</label>
              <p className="text-xs md:text-sm opacity-85 ml-4 font-sans leading-relaxed">What's your goal with our campaigns?</p>
              <textarea
                required
                rows={4}
                placeholder="What are you looking to achieve with our campaigns?"
                value={bookingForm.goal}
                onChange={e => setBookingForm({ ...bookingForm, goal: e.target.value })}
                className="w-full bg-ink/5 border border-ink/10 rounded-2xl px-6 py-4 focus:border-brand/40 focus:outline-none transition-all placeholder:opacity-20 text-sm font-semibold resize-none font-sans"
              />
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <label className="font-mono text-[9px] uppercase tracking-[0.2em] opacity-80 ml-4 font-bold">One Final Step</label>
              
              <div className="p-6 bg-brand/5 border-2 border-brand/20 rounded-[2rem] space-y-4">
                <h5 className="font-sans text-sm md:text-base text-ink uppercase tracking-wider font-bold">Attendance Policy</h5>
                <p className="font-sans text-xs md:text-sm text-ink/80 leading-relaxed font-normal">
                  To make the most of our strategy session, we require all key decision-makers to be present. If there are other stakeholders involved in approving investments or marketing channels, please ensure they are invited to join the call.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setBookingForm({ ...bookingForm, decisionMakerConf: !bookingForm.decisionMakerConf })}
                className={`
                  w-full p-5 rounded-2xl text-left border transition-all cursor-pointer flex items-center justify-between gap-4 hover:bg-ink/[0.02]
                  ${bookingForm.decisionMakerConf 
                    ? 'border-brand bg-brand/5 text-ink font-bold' 
                    : 'border-ink/10 text-ink/70'
                  }
                `}
              >
                <span className="font-sans text-[11px] leading-relaxed select-none">
                  I confirm that all key decision-makers will attend this strategy session.
                </span>
                <div className={`
                  w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 transition-all
                  ${bookingForm.decisionMakerConf
                    ? 'border-brand bg-brand text-ink'
                    : 'border-ink/30 bg-transparent'
                  }
                `}>
                  {bookingForm.decisionMakerConf && <Check size={14} className="stroke-[3]" />}
                </div>
              </button>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  const getStepFieldsForDiscord = (step: number) => {
    const fields = [
      { name: "👤 Client Name", value: bookingForm.clientName || 'None', inline: true },
      { name: "🏢 Brand Name", value: bookingForm.brand || 'None', inline: true }
    ];

    if (step >= 1) {
      fields.push({ name: "📧 Contact Email", value: bookingForm.email || 'None', inline: true });
    }
    if (step >= 2 && bookingForm.website) {
      fields.push({ name: "🌐 Website/Channel", value: bookingForm.website, inline: true });
    }
    if (step >= 3 && bookingForm.goal) {
      fields.push({ name: "💬 Goals & Vision", value: bookingForm.goal, inline: false });
    }
    if (step >= 4) {
      fields.push({ name: "👥 Decision Makers Present", value: bookingForm.decisionMakerConf ? "Yes, Confirmed" : "No", inline: true });
    }

    return fields;
  };

  const handleNextStep = async () => {
    const stepNum = currentStep;
    setCurrentStep(prev => prev + 1);

    // Fire Discord notification to log partial details in background
    try {
      const stepSummary = getStepFieldsForDiscord(stepNum);
      await fetch(import.meta.env.VITE_ONBOARDING_DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: stepNum === 4
            ? `📝 **Onboarding Questionnaire Completed (Step 4)**`
            : `📝 **Partial Onboarding Form Progress (Step ${stepNum} Completed)**`,
          embeds: [{
            title: `📋 Questionnaire Step ${stepNum} Done`,
            color: 0x3B82F6,
            fields: stepSummary,
            timestamp: new Date().toISOString(),
            footer: { text: "Clipnic Onboarding Engine" }
          }]
        })
      });
    } catch (discordErr) {
      console.warn('Discord step progress alert failed to dispatch:', discordErr);
    }
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot || !bookingForm.clientName || !bookingForm.brand || !bookingForm.email) return;

    setBookingStatus('booking');

    // Compile beautiful structured client notes
    const compiledNotes = `
### Onboarding Questionnaire Responses
* **Client Contact Name**: ${bookingForm.clientName}
* **Brand / Company Name**: ${bookingForm.brand}
* **Contact Email**: ${bookingForm.email}
* **website/social media handle**: ${bookingForm.website || 'Not provided'}
* **Campaign Goals & Vision**: ${bookingForm.goal || 'Not provided'}
* **All Decision-Makers Present**: ${bookingForm.decisionMakerConf ? 'Yes (Confirmed)' : 'No'}
`.trim();

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/bookings/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          startTime: selectedSlot.startTime || selectedSlot.start_time,
          clientName: bookingForm.clientName,
          clientEmail: bookingForm.email,
          clientNotes: compiledNotes,
          clientTimezone: selectedTimezone
        })
      });
      const data = await res.json();
      
      if (res.ok && data.success) {
        setBookingStatus('success');

        // Fire Discord notification to admin immediately
        try {
          const dateFormatted = new Date(selectedSlot.start_time || selectedSlot.startTime).toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          });

          await fetch(import.meta.env.VITE_ONBOARDING_DISCORD_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              content: "<@&1502308156489994320> 📅 **NEW STRATEGY CALL BOOKED!**",
              embeds: [{
                title: "📅 Scheduled Booking Request",
                color: 0x10B981,
                fields: [
                  { name: "👤 Client Name", value: bookingForm.clientName, inline: true },
                  { name: "🏢 Brand Name", value: bookingForm.brand, inline: true },
                  { name: "📧 Contact Email", value: bookingForm.email, inline: true },
                  { name: "🌐 Website/Channel", value: bookingForm.website || 'None', inline: true },
                  { name: "👥 Decision Makers Present", value: bookingForm.decisionMakerConf ? "Yes, Confirmed" : "No", inline: true },
                  { name: "🕒 Scheduled Time", value: dateFormatted },
                  { name: "💬 Client Goals & Vision", value: bookingForm.goal || 'None' }
                ],
                timestamp: new Date().toISOString(),
                footer: { text: "Clipnic Booking Engine" }
              }]
            })
          });
        } catch (discordErr) {
          console.warn('Discord booking alert failed to dispatch:', discordErr);
        }

        // Success state set (no automatic close timeout, user closes manually)
      } else {
        setBookingStatus('error');
      }
    } catch (err) {
      setBookingStatus('error');
    }
  };

  const formatSlotTime = (isoString: string) => {
    try {
      const clientTz = selectedTimezone;
      const localStr = new Date(isoString).toLocaleString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: clientTz
      });
      const istStr = new Date(isoString).toLocaleString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata'
      });
      
      if (clientTz === 'Asia/Kolkata' || clientTz === 'IST' || clientTz.includes('Calcutta')) {
        return `${localStr} (IST)`;
      }
      
      return `${localStr} (${clientTz}) = ${istStr} IST`;
    } catch (e) {
      return new Date(isoString).toLocaleString('en-US');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[500] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/95 backdrop-blur-xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            className="relative w-full max-w-xl bg-paper p-8 md:p-12 rounded-[3rem] shadow-2xl text-ink border-4 border-ink overflow-hidden max-h-[90vh] overflow-y-auto no-scrollbar"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 blur-3xl rounded-full -mr-16 -mt-16" />

            <div className="space-y-6 relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 border-ink pb-4 gap-4">
                <div>
                  <h3 className="font-sans text-xl md:text-2xl uppercase tracking-tight font-extrabold">
                    {currentStep <= 4 ? "Onboarding Questionnaire" : selectedSlot ? "Review & Confirm" : "Call Scheduler"}
                  </h3>
                  <p className="text-[9px] opacity-40 uppercase tracking-widest font-mono font-bold">
                    {currentStep <= 4 
                      ? `Step ${currentStep} of 4` 
                      : selectedSlot 
                        ? "Confirm your strategy session" 
                        : currentStep === 5 
                          ? "Select Preferred Date" 
                          : "Select Preferred Time"
                    }
                  </p>
                </div>
                
                {currentStep >= 5 && (
                  <div className="text-left sm:text-right space-y-1 relative">
                    <span className="text-[8px] opacity-40 uppercase tracking-widest font-mono font-bold block">Select Timezone</span>
                    
                    {/* Custom Dropdown Trigger */}
                    <div className="relative inline-block text-left sm:text-right">
                      <button
                        type="button"
                        onClick={() => setIsTzOpen(prev => !prev)}
                        className="bg-ink text-paper text-[9px] font-mono font-bold uppercase tracking-wider py-2.5 px-4 rounded-xl border border-paper/10 cursor-pointer hover:border-brand/60 hover:text-brand transition-all flex items-center gap-3 justify-between min-w-[190px]"
                      >
                        <span className="flex items-center gap-2 truncate">
                          <span>{activeOption.flag}</span>
                          <span className="truncate">{activeOption.label}</span>
                        </span>
                        <ChevronDown size={10} className={`transform transition-transform duration-300 ${isTzOpen ? 'rotate-180 text-brand' : 'opacity-60'}`} />
                      </button>

                      {/* Custom Floating Options Dropdown Menu */}
                      <AnimatePresence>
                        {isTzOpen && (
                          <>
                            {/* Overlay to detect click outside */}
                            <div 
                              className="fixed inset-0 z-[100]" 
                              onClick={() => setIsTzOpen(false)}
                            />
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.95 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 10, scale: 0.95 }}
                              transition={{ duration: 0.15, ease: "easeOut" }}
                              className="absolute right-0 mt-2 w-[240px] bg-ink border border-paper/15 rounded-2xl shadow-2xl z-[200] max-h-[220px] overflow-y-auto pr-1 no-scrollbar text-left font-mono text-[9px] uppercase tracking-wider backdrop-blur-md"
                            >
                              {timezoneOptions.map(opt => {
                                const isSelected = opt.value === selectedTimezone;
                                return (
                                  <button
                                    key={opt.value}
                                    type="button"
                                    onClick={() => {
                                      setSelectedTimezone(opt.value);
                                      setIsTzOpen(false);
                                    }}
                                    className={`w-full px-4 py-2.5 text-left flex items-center justify-between transition-all hover:bg-brand hover:text-ink cursor-pointer group ${isSelected ? 'bg-brand/10 text-brand font-black' : 'text-paper/85'}`}
                                  >
                                    <span className="flex items-center gap-2 truncate">
                                      <span>{opt.flag}</span>
                                      <span className="truncate">{opt.label}</span>
                                    </span>
                                    {isSelected && <Check size={10} className="text-brand group-hover:text-ink" />}
                                  </button>
                                );
                              })}
                            </motion.div>
                          </>
                        )}
                      </AnimatePresence>
                    </div>
                    
                    <span className="text-[8px] opacity-35 uppercase tracking-widest font-mono font-bold block pt-1">
                      Auto-tracked. Click to change.
                    </span>
                  </div>
                )}
              </div>

              {bookingStatus === 'success' ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 bg-brand text-ink rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="font-display text-3xl uppercase">Slot Reserved!</h4>
                  <div className="font-sans opacity-60 text-sm max-w-md mx-auto leading-relaxed space-y-3">
                    <p>We've received your request. A confirmation email has been sent!</p>
                    <p>Please wait until our team finishes checking and we will send the rest of the details to your email.</p>
                    <p className="font-bold text-brand mt-4">Thanks for contacting Clipnic!</p>
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    className="mt-6 px-8 py-4 bg-ink text-paper hover:bg-brand hover:text-ink font-sans font-bold text-xs uppercase tracking-widest rounded-xl transition-all cursor-pointer shadow-lg"
                  >
                    Done & Exit
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {currentStep <= 4 ? (
                    /* Onboarding Questionnaire steps 1 to 4 */
                    <div className="space-y-6">
                      {/* Premium Progress Indicator Overlay */}
                      <div className="space-y-3 mb-6 relative">
                        <div className="flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-widest text-ink/80">
                          <span>Questionnaire Progress</span>
                          <span className="text-brand font-black">Step {currentStep} of 4</span>
                        </div>
                        
                        <div className="relative w-full pt-2 pb-2">
                          {/* Horizontal Progress Track Line behind the circles */}
                          <div className="absolute top-1/2 left-0 right-0 h-1 bg-ink/5 border border-ink/10 rounded-full -translate-y-1/2 overflow-hidden">
                            <motion.div 
                              initial={{ width: "0%" }}
                              animate={{ width: `${((currentStep - 1) / 3) * 100}%` }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="h-full bg-brand rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                            />
                          </div>

                          {/* Numbered Step Circles Over the Track Line */}
                          <div className="relative flex items-center justify-between w-full z-10">
                            {[1, 2, 3, 4].map((stepNum) => {
                              const isCompleted = stepNum < currentStep;
                              const isActive = stepNum === currentStep;
                              return (
                                <div key={stepNum} className="flex flex-col items-center">
                                  <div className={`
                                    w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono font-bold transition-all duration-300 select-none
                                    ${isCompleted 
                                      ? 'bg-brand text-ink border border-ink shadow-[0_0_6px_rgba(245,158,11,0.3)] font-black' 
                                      : isActive
                                        ? 'bg-ink text-paper border-2 border-brand scale-110 shadow-[0_0_8px_rgba(245,158,11,0.2)] font-black'
                                        : 'bg-paper border border-ink/15 text-ink/80'
                                    }
                                  `}>
                                    {stepNum}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      {/* Form Steps */}
                      <div className="min-h-[220px]">
                        <AnimatePresence mode="wait">
                          {renderStepContent()}
                        </AnimatePresence>
                      </div>

                      {/* Form Navigation Controls */}
                      <div className="flex items-center gap-4 pt-6 border-t border-ink/10">
                        {currentStep > 1 && (
                          <button
                            type="button"
                            onClick={() => setCurrentStep(prev => prev - 1)}
                            className="px-6 py-4 rounded-xl border border-ink/20 hover:border-ink text-ink font-sans font-bold text-xs uppercase tracking-widest transition-all cursor-pointer"
                          >
                            Back
                          </button>
                        )}
                        
                        <button
                          type="button"
                          disabled={!isStepValid()}
                          onClick={handleNextStep}
                          className="flex-grow bg-brand text-ink font-sans font-bold py-4 rounded-xl uppercase tracking-widest disabled:opacity-30 transition-all cursor-pointer disabled:cursor-not-allowed text-xs text-center shadow-[0_10px_30px_rgba(245,158,11,0.15)]"
                        >
                          {currentStep === 4 ? "Choose Call Time \u2192" : "Next Step"}
                        </button>
                      </div>
                    </div>
                  ) : !selectedSlot ? (
                    /* Date & Time Calendar Selection Steps */
                    <div className="space-y-4">
                      {currentStep === 5 ? (
                        /* Step 5: Date Calendar Selection */
                        <div className="space-y-4">
                          <div className="flex items-center justify-between border-b border-ink/10 pb-2">
                            <p className="font-sans opacity-60 text-xs font-semibold">Select your preferred strategy call date.</p>
                            <button
                              type="button"
                              onClick={() => setCurrentStep(4)}
                              className="text-[9px] font-bold text-ink/40 hover:text-ink uppercase tracking-wider underline cursor-pointer font-mono"
                            >
                              &larr; Back to questionnaire
                            </button>
                          </div>

                          {slotsLoading ? (
                            <div className="flex flex-col items-center justify-center py-10 gap-3">
                              <div className="w-6 h-6 border-2 border-ink/10 border-t-ink rounded-full animate-spin" />
                              <p className="font-mono text-[9px] uppercase tracking-widest opacity-40">Fetching dates...</p>
                            </div>
                          ) : slots.length === 0 ? (
                            <div className="text-center py-10 rounded-2xl border border-ink/10 bg-ink/[0.02]">
                              <p className="font-sans opacity-40 text-xs italic">No free slots available right now. Please check back later!</p>
                            </div>
                          ) : (() => {
                            const uniqueDatesWithSlots = Array.from(new Set(slots.map(s => {
                              const d = new Date(s.startTime || s.start_time);
                              return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
                            }))).sort();

                            const targetDate = new Date();
                            targetDate.setDate(1); // CRITICAL: Avoid month-overflow rollover bugs!
                            targetDate.setMonth(targetDate.getMonth() + currentMonthOffset);
                            const calendarYear = targetDate.getFullYear();
                            const calendarMonth = targetDate.getMonth();
                            const monthName = targetDate.toLocaleString('en-US', { month: 'long', year: 'numeric' });

                            const firstDayIndex = new Date(calendarYear, calendarMonth, 1).getDay();
                            const totalMonthDays = new Date(calendarYear, calendarMonth + 1, 0).getDate();

                            const calendarCells = [];
                            for (let i = 0; i < firstDayIndex; i++) {
                              calendarCells.push({ dayNum: null, dateString: '', hasSlots: false });
                            }
                            for (let d = 1; d <= totalMonthDays; d++) {
                              const ds = `${calendarYear}-${String(calendarMonth + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
                              const hasSlots = uniqueDatesWithSlots.includes(ds);
                              calendarCells.push({ dayNum: d, dateString: ds, hasSlots });
                            }

                            return (
                              <div className="p-4 md:p-6 rounded-[2rem] border-2 border-ink bg-ink/5 relative overflow-hidden">
                                <div className="flex items-center justify-between mb-4">
                                  <button 
                                    type="button" 
                                    disabled={currentMonthOffset <= 0}
                                    onClick={() => setCurrentMonthOffset(prev => prev - 1)}
                                    className="p-1.5 md:p-2 border border-ink/20 rounded-full hover:bg-ink/5 disabled:opacity-20 disabled:cursor-not-allowed font-bold"
                                  >
                                    &larr;
                                  </button>
                                  <span className="font-display text-sm md:text-base uppercase tracking-tight font-black">{monthName}</span>
                                  <button 
                                    type="button" 
                                    disabled={currentMonthOffset >= 2} 
                                    onClick={() => setCurrentMonthOffset(prev => prev + 1)}
                                    className="p-1.5 md:p-2 border border-ink/20 rounded-full hover:bg-ink/5 disabled:opacity-20 disabled:cursor-not-allowed font-bold"
                                  >
                                    &rarr;
                                  </button>
                                </div>

                                <div className="grid grid-cols-7 gap-1 text-center font-mono text-[9px] uppercase tracking-widest opacity-50 mb-2 font-bold">
                                  {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                                    <div key={day} className="py-1">{day}</div>
                                  ))}
                                </div>

                                <div className="grid grid-cols-7 gap-1 md:gap-1.5 text-center">
                                  {calendarCells.map((cell, idx) => {
                                    if (!cell.dayNum) {
                                      return <div key={`empty-${idx}`} className="aspect-square" />;
                                    }

                                    const isSelected = selectedDate === cell.dateString;
                                    return (
                                      <button
                                        key={cell.dateString}
                                        type="button"
                                        disabled={!cell.hasSlots}
                                        onClick={() => {
                                          setSelectedDate(cell.dateString);
                                          setCurrentStep(6);
                                        }}
                                        className={`
                                          aspect-square rounded-full text-[10px] md:text-xs font-mono font-bold flex flex-col items-center justify-center transition-all cursor-pointer relative
                                          ${!cell.hasSlots 
                                            ? 'opacity-25 text-ink/30 cursor-not-allowed' 
                                            : isSelected
                                              ? 'bg-brand text-ink border border-ink shadow-[0_0_8px_rgba(255,255,255,0.15)] scale-110'
                                              : 'bg-ink/5 hover:bg-brand/10 hover:border-brand/40 border border-ink/10 text-ink'
                                          }
                                        `}
                                      >
                                        {cell.dayNum}
                                        {cell.hasSlots && !isSelected && (
                                          <span className="absolute bottom-1 w-1 h-1 bg-brand rounded-full" />
                                        )}
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          })()}
                        </div>
                      ) : (
                        /* Step 6: Time Slot Selection */
                        <div className="space-y-4">
                          <div className="flex items-center justify-between border-b border-ink/10 pb-2">
                            <p className="font-sans opacity-60 text-xs font-semibold">Select your preferred time slot.</p>
                            <button
                              type="button"
                              onClick={() => setCurrentStep(5)}
                              className="text-[9px] font-bold text-ink/40 hover:text-ink uppercase tracking-wider underline cursor-pointer font-mono"
                            >
                              &larr; Back to calendar
                            </button>
                          </div>

                          {(() => {
                            const slotsForSelectedDate = slots.filter(s => {
                              const d = new Date(s.startTime || s.start_time);
                              const ds = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
                              return ds === selectedDate;
                            });

                            const formatTimeSlotButton = (isoString: string) => {
                              try {
                                const clientTz = selectedTimezone;
                                const localStr = new Date(isoString).toLocaleString('en-US', {
                                  hour: '2-digit',
                                  minute: '2-digit',
                                  hour12: true,
                                  timeZone: clientTz
                                });
                                const istStr = new Date(isoString).toLocaleString('en-US', {
                                  hour: '2-digit',
                                  minute: '2-digit',
                                  hour12: true,
                                  timeZone: 'Asia/Kolkata'
                                });
                                
                                return { 
                                  localStr, 
                                  istStr, 
                                  isSameTz: clientTz === 'Asia/Kolkata' || clientTz === 'IST' || clientTz.includes('Calcutta') 
                                };
                              } catch (e) {
                                const time = new Date(isoString).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
                                return { localStr: time, istStr: '', isSameTz: true };
                              }
                            };

                            return (
                              <div className="space-y-4">
                                <div className="flex items-center justify-between border-b border-ink/10 pb-2">
                                  <h4 className="font-display text-xs md:text-sm uppercase tracking-wider text-ink/80">
                                    Available Times: <span className="text-brand font-mono font-black">{selectedDate ? new Date(selectedDate).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }) : 'Select Date'}</span>
                                  </h4>
                                  <span className="font-mono text-[8px] uppercase tracking-widest opacity-40">30 min duration</span>
                                </div>

                                {slotsForSelectedDate.length === 0 ? (
                                  <div className="text-center py-6 border border-ink/10 rounded-2xl bg-ink/[0.01]">
                                    <p className="font-sans text-xs opacity-50 italic">No available times on this date. Please go back and select another calendar day.</p>
                                  </div>
                                ) : (
                                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[260px] overflow-y-auto pr-1 no-scrollbar">
                                    {slotsForSelectedDate.map(s => {
                                      const { localStr, istStr, isSameTz } = formatTimeSlotButton(s.startTime || s.start_time);
                                      return (
                                        <button
                                          key={s.id || s.startTime}
                                          type="button"
                                          onClick={() => setSelectedSlot(s)}
                                          className="p-3 rounded-2xl bg-ink/5 border border-ink/10 hover:border-brand/50 hover:bg-brand text-ink hover:text-ink font-sans font-semibold transition-all hover:scale-[1.02] flex flex-col items-center justify-center gap-0.5 cursor-pointer text-center group"
                                        >
                                          <span className="font-mono text-xs font-black">{localStr}</span>
                                          {!isSameTz && (
                                            <span className="text-[9px] opacity-50 font-medium group-hover:text-ink/80 font-mono">({istStr} IST)</span>
                                          )}
                                        </button>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>
                            );
                          })()}
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Step 6 Review & Final Confirmation Screen (when slot is selected) */
                    <form onSubmit={handleBookingSubmit} className="space-y-6">
                      <div className="p-5 bg-brand/5 border-2 border-brand/20 rounded-[2.5rem] space-y-4">
                        <div className="flex items-center justify-between border-b border-ink/10 pb-3">
                          <div>
                            <p className="text-[8px] opacity-40 uppercase tracking-widest font-black">Selected Call Slot</p>
                            <p className="font-mono text-xs text-ink font-bold mt-1">
                              {formatSlotTime(selectedSlot.startTime || selectedSlot.start_time)}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => setSelectedSlot(null)}
                            className="text-[9px] font-bold text-ink/40 hover:text-ink uppercase tracking-wider underline cursor-pointer"
                          >
                            Change Time
                          </button>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-xs font-sans">
                          <div>
                            <span className="opacity-80 block uppercase font-mono text-[8px] tracking-wider font-bold">Client Name</span>
                            <span className="font-bold text-ink">{bookingForm.clientName}</span>
                          </div>
                          <div>
                            <span className="opacity-80 block uppercase font-mono text-[8px] tracking-wider font-bold">Brand / Company</span>
                            <span className="font-bold text-ink">{bookingForm.brand}</span>
                          </div>
                          <div className="col-span-2 pt-2">
                            <span className="opacity-80 block uppercase font-mono text-[8px] tracking-wider font-bold">Contact Email</span>
                            <span className="font-bold text-ink font-mono">{bookingForm.email}</span>
                          </div>
                          <div className="col-span-2 pt-2 border-t border-ink/5">
                            <span className="opacity-80 block uppercase font-mono text-[8px] tracking-wider font-bold">website/social media handle</span>
                            <span className="font-bold text-ink truncate block">{bookingForm.website}</span>
                          </div>
                          <div className="col-span-2 pt-2">
                            <span className="opacity-80 block uppercase font-mono text-[8px] tracking-wider font-bold">Campaign Goals</span>
                            <p className="text-ink/80 font-normal leading-relaxed mt-1 text-[11px] max-h-[80px] overflow-y-auto no-scrollbar">{bookingForm.goal}</p>
                          </div>
                          <div className="col-span-2 pt-2 border-t border-ink/5">
                            <span className="opacity-80 block uppercase font-mono text-[8px] tracking-wider font-bold">Decision Makers</span>
                            <span className="text-emerald-500 font-bold flex items-center gap-1 mt-1"><Check size={12} className="stroke-[3]" /> Confirmed</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 pt-6 border-t border-ink/10">
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedSlot(null);
                            setCurrentStep(5);
                          }}
                          className="px-6 py-4 rounded-xl border border-ink/20 hover:border-ink text-ink font-sans font-bold text-xs uppercase tracking-widest transition-all cursor-pointer"
                        >
                          Edit Info
                        </button>
                        <button
                          type="submit"
                          disabled={bookingStatus === 'booking'}
                          className="flex-grow bg-brand text-ink font-sans font-bold py-4 rounded-xl uppercase tracking-widest disabled:opacity-30 transition-all cursor-pointer disabled:cursor-not-allowed text-xs text-center shadow-[0_10px_30px_rgba(245,158,11,0.25)] hover:shadow-[0_10px_40px_rgba(245,158,11,0.45)]"
                        >
                          {bookingStatus === 'booking' ? 'Reserving...' : 'Confirm Strategy Call'}
                        </button>
                      </div>

                      {bookingStatus === 'error' && (
                        <p className="text-center text-red-500 text-[10px] uppercase font-bold mt-2">
                          Booking failed. Slot may already be reserved.
                        </p>
                      )}
                    </form>
                  )}
                </div>
              )}
            </div>

            <button
              onClick={onClose}
              className="w-full mt-8 py-2 text-[10px] font-black uppercase tracking-[0.4em] opacity-30 hover:opacity-100 transition-opacity"
            >
              EXIT
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};


const Hero = ({ activeView, setActiveView, onBrandLaunch }: { activeView: 'clipper' | 'brand', setActiveView: (v: 'clipper' | 'brand') => void, onBrandLaunch: () => void }) => {
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


        </div>

        <motion.p
          key={activeView + "p"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 max-w-xl mx-auto font-sans text-xl opacity-60 font-light text-balance"
        >
          {activeView === 'clipper'
            ? "Pick a video, cut it into a short clip, post it on TikTok or Reels. That's it. Every time someone watches your clip, you get paid. No boss. No schedule. Just post and earn."
            : "You make the videos. We get them in front of millions. Our editors chop your content into short viral clips and post them all over TikTok, Reels and YouTube Shorts organically, for free, until the views come in."
          }
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-col items-center gap-12"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="bg-white/5 p-2 rounded-full border border-white/10 flex gap-2 relative z-20">
              <button
                onMouseEnter={() => setActiveView('clipper')}
                onClick={() => {
                  if (activeView === 'clipper') window.location.href = 'https://dash.clipnic.com/clipper';
                  else setActiveView('clipper');
                }}
                className={`px-8 py-3 rounded-full font-sans font-bold text-[10px] md:text-sm transition-all ${activeView === 'clipper' ? 'bg-brand text-black shadow-[0_0_30px_rgba(var(--color-brand-rgb),0.4)]' : 'text-white hover:bg-white/10'}`}
              >
                START EARNING
              </button>
              <button
                onMouseEnter={() => setActiveView('brand')}
                onClick={() => {
                  if (activeView === 'brand') onBrandLaunch();
                  else setActiveView('brand');
                }}
                className={`px-8 py-3 rounded-full font-sans font-bold text-[10px] md:text-sm transition-all ${activeView === 'brand' ? 'bg-brand text-black shadow-[0_0_30px_rgba(var(--color-brand-rgb),0.4)]' : 'text-white hover:bg-white/10'}`}
              >
                LAUNCH CAMPAIGN
              </button>
            </div>
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

const LetterReveal = ({ text, className, delay = 0 }: { text: string, className?: string, delay?: number }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {text}
    </motion.span>
  );
};

const WordReveal = ({ text, className }: { text: string, className?: string }) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {text}
    </motion.span>
  );
};

const ProcessStep = ({ icon: Icon, title, desc, dashPreview, index }: { icon: any, title: string, desc: string, dashPreview?: ReactNode, index: number }) => (
  <section className={`py-24 md:py-40 px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center ${index % 2 !== 0 ? 'bg-ink text-paper' : 'bg-paper text-ink'}`}>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`relative aspect-square md:aspect-video lg:aspect-square bg-black border border-white/10 rounded-[2rem] overflow-hidden flex items-center justify-center p-4 sm:p-8`}
    >
      <div className="w-full scale-[0.85] sm:scale-100 origin-center flex justify-center">
        {dashPreview}
      </div>
    </motion.div>
  </section>
);

const ConnectDash = () => (
  <div className="w-full space-y-4 max-w-sm">
    <div className="p-6 rounded-3xl bg-black border border-white/10 flex items-center justify-between text-white shadow-2xl">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-white/5 rounded-full grid place-items-center"><Instagram size={20} className="text-white" /></div>
        <div>
          <p className="font-sans font-bold text-sm text-white">Link Socials</p>
          <p className="font-sans text-[10px] text-white/40 uppercase tracking-widest">Primary Platform</p>
        </div>
      </div>
      <div className="text-emerald-400 font-mono text-[10px] uppercase font-bold flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        @CLIPNICTEAM
      </div>
    </div>

    <div className="p-6 rounded-3xl bg-black border border-white/10 flex items-center justify-between text-white shadow-2xl">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-white/5 rounded-full grid place-items-center"><Share2 size={18} className="text-white" /></div>
        <div>
          <p className="font-sans font-bold text-sm text-white">Discord Verification</p>
          <p className="font-sans text-[10px] text-white/40 uppercase tracking-widest">Identity Sync</p>
        </div>
      </div>
      <div className="bg-emerald-500 text-black px-3 py-1 rounded-full font-sans text-[10px] uppercase font-black flex items-center gap-2">
        <CheckCircle2 size={10} />
        Verified
      </div>
    </div>
  </div>
);

const SubmissionDash = () => (
  <div className="w-full max-w-md space-y-4">
    <div className="bg-black border border-white/10 p-6 rounded-3xl shadow-2xl">
      <p className="font-sans text-[10px] text-white/40 uppercase tracking-widest mb-3">Secure  </p>
      <div className="relative">
        <input
          disabled
          value="https://tiktok.com/@clipnic/video/123..."
          className="w-full bg-white/5 border border-white/10 rounded-xl pl-4 pr-10 py-3 font-mono text-[10px] sm:text-sm focus:outline-none text-white/60"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <CheckCircle2 className="text-emerald-500" size={14} />
        </div>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div className="p-5 bg-black border border-white/10 rounded-3xl shadow-2xl">
        <p className="font-sans text-[9px] text-white/40 uppercase tracking-widest mb-2">Network Status</p>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <p className="font-sans font-bold text-sm text-white">Live Sync</p>
        </div>
      </div>
      <div className="p-5 bg-black border border-white/10 rounded-3xl shadow-2xl">
        <p className="font-sans text-[9px] text-white/40 uppercase tracking-widest mb-2">Total Yield</p>
        <p className="font-mono font-bold text-white text-lg">$120.50</p>
      </div>
    </div>
  </div>
);

const EarningsDash = () => (
  <div className="w-full space-y-6 max-w-md">
    <div className="grid grid-cols-2 gap-4">
      <div className="p-6 bg-black border border-white/10 rounded-3xl shadow-2xl">
        <p className="font-sans text-[9px] text-white/40 uppercase tracking-widest mb-3">Assets</p>
        <p className="font-display text-4xl text-white">24</p>
      </div>
      <div className="p-6 bg-black border border-white/10 rounded-3xl shadow-2xl">
        <p className="font-sans text-[9px] text-white/40 uppercase tracking-widest mb-3">Reach</p>
        <p className="font-display text-4xl text-white">1.2M</p>
      </div>
    </div>

    <div className="p-8 bg-black border border-white/10 rounded-[2.5rem] shadow-2xl">
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-display text-xl uppercase text-white">Recent Yield</h3>
        <p className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full uppercase font-bold">Safe: $8,512</p>
      </div>
      <div className="space-y-4">
        {[
          { date: 'APR 23', amt: '+ $2,400.00', label: 'Inbound Yield' },
          { date: 'APR 21', amt: '+ $1,150.20', label: 'Network Share' }
        ].map((tx, i) => (
          <div key={i} className="flex justify-between items-center py-4 border-b border-white/5 last:border-0 last:pb-0">
            <div>
              <p className="font-sans font-bold text-sm text-white">{tx.label}</p>
              <p className="font-mono text-[9px] text-white/30 mt-1 uppercase tracking-widest">{tx.date}</p>
            </div>
            <p className="font-mono text-sm text-white font-bold">{tx.amt}</p>
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

const brandFaqItems = [
  {
    q: 'What kind of content works best?',
    a: 'Long form content works best, podcasts, YouTube videos, Twitch streams, interviews. Basically anything over 10 minutes that has entertaining or valuable moments inside it. Our editors are trained to find those moments and turn them into clips that stop the scroll.',
  },
  {
    q: 'How is this different from running ads?',
    a: 'With ads, you pay for impressions whether or not anyone actually cares. With Clipnic, real creators post your content on their real accounts. It looks native, it feels native, and people actually watch it. You only pay based on real views, making your budget go 5 to 10x further than traditional ads.',
  },
  {
    q: 'Will I have to manage anything?',
    a: 'Nothing. We handle everything, briefing the editors, reviewing their clips, pushing distribution, and reporting performance. You get a live dashboard with all your numbers and a weekly summary from our team. Your only job is to watch the growth.',
  },
  {
    q: 'How quickly can I see results?',
    a: 'Most campaigns see their first clips posted within 48 hours of launch. Views typically start building within the first week. By week 3 or 4 you usually see compounding organic growth as the best performing clips keep circulating through algorithmic feeds.',
  },
  {
    q: 'What results can I realistically expect?',
    a: 'It depends on your content and niche, but here is what a typical campaign looks like: millions of views across TikTok, Reels and Shorts, hundreds of pieces of branded short form content across different creators, measurable follower growth and brand search uplift, all tracked live in your dashboard.',
  },
];

const clipperFaqItems = [
  {
    q: 'Do I need to be a professional editor?',
    a: 'Not at all. If you know how to cut a video in CapCut, Premiere, or even your phone\'s built in editor, you can do this. We provide the source content and specific instructions on what kind of clip to make. Most of our top earners started with zero editing experience.',
  },
  {
    q: 'Do I need to monetize my channel to earn?',
    a: 'No. Your channel does not need to be monetized. We pay you directly based on how many views your clips get, completely separate from YouTube or TikTok\'s own monetization. Even a brand new account with 0 followers can start earning on day one.',
  },
  {
    q: 'How much can I actually make?',
    a: 'It depends on how many clips you post and how well they perform. Some clippers earn $50 to $200 a month posting casually. Others who post consistently and hit viral clips are making $1,000 to $5,000 plus per month. There is no cap, the more views you drive, the more you earn.',
  },
  {
    q: 'How do I get paid?',
    a: 'You link your bank account or PayPal when you sign up. Every time your clips hit the payout threshold, the money is sent directly to you. You can track every cent in real time on your dashboard, no guessing, no waiting for a reply.',
  },
  {
    q: 'Can I post clips on multiple platforms?',
    a: 'Yes, and we encourage it. Posting the same clip on TikTok, YouTube Shorts, and Instagram Reels means three separate view counts, which means three separate payouts. Cross posting is one of the fastest ways to multiply your earnings.',
  },
  {
    q: 'Am I allowed to re-post content I do not own?',
    a: 'Yes, that is literally what this is. The brands and creators on Clipnic have given you explicit permission to clip and post their content. You are fully covered. Think of it like being an authorized redistributor, not copyright infringement.',
  },
];

const GenericFAQ = ({ items, title, subtitle }: { items: { q: string, a: string }[], title: string, subtitle: string }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 lg:px-12 bg-paper text-ink border-t border-ink/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-start">

          {/* Left label */}
          <div className="lg:w-1/3 space-y-6 lg:sticky lg:top-32">
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand">Before You Ask</p>
            <h2 className="font-display text-5xl md:text-7xl tracking-tighter uppercase leading-none">
              {title}
            </h2>
            <p className="font-sans text-base opacity-60 font-light leading-relaxed max-w-xs">
              {subtitle}
            </p>
          </div>

          {/* Accordion */}
          <div className="lg:w-2/3 space-y-0 divide-y-2 divide-ink/10 border-y-2 border-ink/10">
            {items.map((item, i) => (
              <div
                key={i}
                onMouseEnter={() => setOpenIndex(i)}
                onMouseLeave={() => setOpenIndex(null)}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-8 py-8 text-left group"
                >
                  <span className="font-display text-xl md:text-2xl uppercase tracking-tight group-hover:text-brand transition-colors">
                    {item.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="shrink-0 w-8 h-8 rounded-full border-2 border-ink/20 flex items-center justify-center group-hover:border-brand group-hover:bg-brand transition-all"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <line x1="6" y1="0" x2="6" y2="12" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="0" y1="6" x2="12" y2="6" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-base md:text-lg opacity-60 font-light leading-relaxed pb-8 max-w-2xl">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};


const Contact = ({ activeView, setActiveView, onBrandLaunch }: { activeView: 'clipper' | 'brand', setActiveView: (v: 'clipper' | 'brand') => void, onBrandLaunch: () => void }) => {
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
        {activeView === 'clipper' ? <>Ready to <br /> Get Paid?</> : <>Ready to <br /> Dominate?</>}
      </h2>
      <p className="max-w-2xl font-sans text-xl opacity-60 mb-16 font-light">
        {activeView === 'clipper'
          ? "Thousands of people are already getting paid just for posting short clips online. Join them today."
          : "Great content deserves to be seen. Stop letting it sit unwatched, let us distribute it for you."
        }
      </p>
      <div className="flex flex-col md:flex-row gap-6 mt-8">
        {activeView === 'clipper' && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.location.href = 'https://dash.clipnic.com/clipper';
            }}
            className="px-12 py-5 rounded-full font-sans font-bold text-lg uppercase tracking-widest transition-all shadow-xl bg-ink text-paper"
          >
            Start Earning
          </motion.button>
        )}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBrandLaunch}
          className={`px-12 py-5 rounded-full font-sans font-bold text-lg uppercase tracking-widest transition-all shadow-xl ${activeView === 'brand'
            ? 'bg-ink text-paper'
            : 'bg-white border-2 border-ink text-ink hover:bg-ink hover:text-paper'
            }`}
        >
          Launch Campaign
        </motion.button>
      </div>


    </section>
  );
};

const Footer = () => <SharedFooter />;

const PrivacyOverlay = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] bg-ink text-paper overflow-y-auto p-6 md:p-20 font-sans cursor-auto selection:bg-brand selection:text-ink scroll-smooth"
      >
        <button
          onClick={onClose}
          className="fixed top-10 left-10 flex items-center gap-2 px-5 py-2.5 rounded-lg bg-paper text-ink font-sans font-bold text-xs tracking-widest hover:bg-white transition-all z-[210] shadow-xl uppercase"
        >
          <ArrowLeft size={14} />
          Return
        </button>

        <div className="max-w-3xl mx-auto space-y-12 pb-32 font-sans text-paper">
          <div className="pt-12 space-y-4 border-b-2 border-paper/20 pb-8">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Privacy Policy</h1>
            <div className="flex flex-col md:flex-row md:justify-between gap-2 font-mono text-[10px] uppercase tracking-widest opacity-60 font-bold">
              <p>Document: Privacy Policy for Clipnic</p>
              <p>Last Updated: April 24, 2026</p>
            </div>
          </div>

          <div className="text-lg leading-relaxed space-y-6">
            <p className="font-bold uppercase tracking-tight text-sm text-brand">Your Privacy is Important</p>
            <p className="opacity-80">
              This Privacy Policy explains how Clipnic ("we," "our," or "us") collects, uses, and protects your personal information when you use our platform (clipnic.com) to connect brands, creators, and independent editors ("Clippers").
            </p>
          </div>

          <div className="space-y-10">
            <section className="p-8 bg-paper/5 border border-paper/10 rounded-2xl">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 opacity-40">Table of Contents</h3>
              <nav className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 text-sm font-medium">
                <ol className="list-decimal pl-4 space-y-3">
                  <li><a href="#p-1" className="hover:text-brand transition-colors">Introduction & Scope</a></li>
                  <li><a href="#p-2" className="hover:text-brand transition-colors">Children's Privacy & Parental Consent</a></li>
                  <li><a href="#p-3" className="hover:text-brand transition-colors">Information Collection</a></li>
                  <li><a href="#p-4" className="hover:text-brand transition-colors">How We Use Your Information</a></li>
                </ol>
                <ol className="list-decimal pl-4 space-y-3" start={5}>
                  <li><a href="#p-5" className="hover:text-brand transition-colors">Cookies and Tracking</a></li>
                  <li><a href="#p-6" className="hover:text-brand transition-colors">Data Security</a></li>
                  <li><a href="#p-7" className="hover:text-brand transition-colors">Your Rights & API Revocation</a></li>
                  <li><a href="#p-8" className="hover:text-brand transition-colors">Contact Information</a></li>
                </ol>
              </nav>
            </section>

            <section id="p-1" className="space-y-4 scroll-mt-20">
              <h3 className="text-xl font-black uppercase tracking-tight border-l-4 border-brand pl-4">1.0 Introduction & Scope</h3>
              <p className="leading-relaxed opacity-60">
                Clipnic is committed to protecting your privacy and handling your personal information in accordance with applicable data protection laws, including the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), the Children's Online Privacy Protection Act (COPPA), and other relevant privacy legislation.
              </p>
              <p className="leading-relaxed opacity-60">
                This Privacy Policy applies to all users—including content creators, brands, and clippers—and covers all data processing activities across our platform.
              </p>
            </section>

            <section id="p-2" className="space-y-4 scroll-mt-20">
              <h3 className="text-xl font-black uppercase tracking-tight border-l-4 border-brand pl-4">2.0 Children's Privacy & Parental Consent</h3>
              <div className="space-y-4 leading-relaxed opacity-60">
                <p>Because Clipnic offers earning opportunities, we take the privacy of our younger users very seriously.</p>
                <ul className="list-disc pl-6 space-y-4">
                  <li><span className="font-bold text-paper">Under 13:</span> Our platform is not directed at, nor do we knowingly collect personal information from, children under the age of 13. If we discover we have inadvertently collected data from a child under 13, we will delete it immediately.</li>
                  <li><span className="font-bold text-paper">Ages 13 to 17:</span> Users between 13 and the age of legal majority in their jurisdiction may only use Clipnic with the verifiable consent of a parent or legal guardian.</li>
                  <li><span className="font-bold text-paper">Guardian Rights:</span> Parents or guardians who have consented to their child's use of the platform have the right to review the minor's personal information, request its deletion, and refuse to allow further collection of data by contacting us at contact@clipnic.com.</li>
                </ul>
              </div>
            </section>

            <section id="p-3" className="space-y-4 scroll-mt-20">
              <h3 className="text-xl font-black uppercase tracking-tight border-l-4 border-brand pl-4">3.0 Information Collection</h3>
              <div className="space-y-6 leading-relaxed opacity-60">
                <p>We collect information through three primary methods:</p>

                <div className="space-y-4">
                  <h4 className="font-bold text-sm uppercase underline text-paper">A. Directly from You</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><span className="font-bold text-paper">Account Details:</span> Name, email address, and date of birth (to verify age requirements).</li>
                    <li><span className="font-bold text-paper">Profile Information:</span> Usernames, bios, and profile pictures.</li>
                    <li><span className="font-bold text-paper">Financial Information:</span> Payout details (e.g., PayPal email, bank details) collected securely through third-party payment processors to issue campaign bounties.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-sm uppercase underline text-paper">B. Automatically</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><span className="font-bold text-paper">Technical Data:</span> IP addresses, browser type, operating system, and device identifiers.</li>
                    <li><span className="font-bold text-paper">Analytics Data:</span> Platform usage, page interactions, and time spent on the site.</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-sm uppercase underline text-paper">C. Third-Party Sources (APIs & OAuth)</h4>
                  <p>To track clip performance and verify bounties, Clipnic connects with third-party platforms (e.g., YouTube, TikTok, Instagram, X).</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><span className="font-bold text-paper">OAuth Tokens:</span> When you link a social media account, we use secure OAuth authentication. We do not see or store your platform passwords.</li>
                    <li><span className="font-bold text-paper">API Data:</span> We collect public metrics (views, likes, engagement data) related only to the specific clips submitted for Clipnic campaigns.</li>
                    <li><span className="font-bold text-paper">Platform Policies:</span> By linking your YouTube account, for example, you also agree to be bound by the YouTube Terms of Service and Google Privacy Policy.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="p-4" className="space-y-4 scroll-mt-20">
              <h3 className="text-xl font-black uppercase tracking-tight border-l-4 border-brand pl-4">4.0 How We Use Your Information</h3>
              <div className="space-y-4 leading-relaxed opacity-60">
                <p>We use your information for legitimate business purposes, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><span className="font-bold text-paper">Service Provision:</span> To host the marketplace, track campaign performance, and facilitate collaboration between Brands and Clippers.</li>
                  <li><span className="font-bold text-paper">Bounty Verification:</span> To analyze engagement metrics, detect fraudulent activity (e.g., viewbotting, engagement pods), and ensure fair payouts.</li>
                  <li><span className="font-bold text-paper">Platform Security:</span> To monitor for unauthorized access, enforce our Terms of Service, and comply with legal or tax reporting obligations.</li>
                  <li><span className="font-bold text-paper">Communication:</span> To notify you about campaign updates, payout statuses, and platform changes.</li>
                </ul>
              </div>
            </section>

            <section id="p-5" className="space-y-4 scroll-mt-20">
              <h3 className="text-xl font-black uppercase tracking-tight border-l-4 border-brand pl-4">5.0 Cookies and Tracking</h3>
              <div className="space-y-4 leading-relaxed opacity-60">
                <p>We use cookies and similar tracking technologies to ensure the platform functions properly:</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><span className="font-bold text-paper">Essential Cookies:</span> Necessary for account authentication, security, and tracking active sessions. (Cannot be disabled).</li>
                  <li><span className="font-bold text-paper">Analytics Cookies:</span> Help us understand user behavior and improve platform design. (Opt-out available).</li>
                  <li><span className="font-bold text-paper">Cookie Management:</span> You can control or delete non-essential cookies through your browser settings at any time.</li>
                </ul>
              </div>
            </section>

            <section id="p-6" className="space-y-4 scroll-mt-20">
              <h3 className="text-xl font-black uppercase tracking-tight border-l-4 border-brand pl-4">6.0 Data Security</h3>
              <div className="space-y-4 leading-relaxed opacity-60">
                <p>We implement strict security measures to protect your data, including:</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><span className="font-bold text-paper">Encryption:</span> Data is encrypted in transit (HTTPS/TLS) and at rest.</li>
                  <li><span className="font-bold text-paper">Access Control:</span> Restricted, role-based access to personal data by Clipnic staff.</li>
                  <li><span className="font-bold text-paper">Data Retention:</span> We retain your data only as long as necessary to provide our services, process your payouts, or comply with legal tax obligations.</li>
                </ul>
              </div>
            </section>

            <section id="p-7" className="space-y-4 scroll-mt-20">
              <h3 className="text-xl font-black uppercase tracking-tight border-l-4 border-brand pl-4">7.0 Your Rights & API Revocation</h3>
              <div className="space-y-4 leading-relaxed opacity-60">
                <p>Depending on your location (e.g., under GDPR or CCPA), you have the right to:</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><span className="font-bold text-paper">Access & Portability:</span> Request a copy of the personal data we hold about you.</li>
                  <li><span className="font-bold text-paper">Correction:</span> Update or correct inaccurate account information.</li>
                  <li><span className="font-bold text-paper">Deletion (Right to be Forgotten):</span> Request the deletion of your account and personal data, subject to legal and financial retention requirements.</li>
                  <li><span className="font-bold text-paper">Revoking API Access:</span> You can disconnect your social media accounts from Clipnic at any time. For example, you can revoke Clipnic's access to your YouTube data via your Google Account Security Settings page. Doing so will stop further data collection but may prevent you from participating in active campaigns.</li>
                </ul>
              </div>
            </section>

            <div id="p-8" className="pt-12 border-t border-paper/20 space-y-6 scroll-mt-20">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest font-black mb-2 opacity-40">8.0 Contact Information</p>
                <p className="opacity-60 text-sm mb-4">If you have any questions about this Privacy Policy, need to verify parental consent, or wish to exercise your data rights, please contact our privacy team:</p>
                <div className="space-y-2">
                  <p className="text-xl font-black underline decoration-brand decoration-2 underline-offset-4 text-brand"> hello@clipnic.com</p>
                  <p className="font-mono text-xs uppercase tracking-widest opacity-40">Subject Line: Privacy Policy Inquiry - [Your Subject]</p>
                </div>
              </div>
            </div>
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
        className="fixed inset-0 z-[200] bg-ink text-paper overflow-y-auto p-6 md:p-20 font-sans cursor-auto selection:bg-brand selection:text-ink scroll-smooth"
      >
        <button
          onClick={onClose}
          className="fixed top-10 left-10 flex items-center gap-2 px-5 py-2.5 rounded-lg bg-paper text-ink font-sans font-bold text-xs tracking-widest hover:bg-white transition-all z-[210] shadow-xl uppercase"
        >
          <ArrowLeft size={14} />
          Return
        </button>

        <div className="max-w-3xl mx-auto space-y-12 pb-32 font-sans text-paper">
          <div className="pt-12 space-y-4 border-b-2 border-paper/20 pb-8">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Terms of Service</h1>
            <div className="flex flex-col md:flex-row md:justify-between gap-2 font-mono text-[10px] uppercase tracking-widest opacity-60 font-bold">
              <p>Platform: Clipnic (clipnic.com)</p>
              <p>Last Updated: April 24, 2026</p>
            </div>
          </div>

          <div className="text-lg leading-relaxed space-y-6">
            <p className="font-bold uppercase tracking-tight text-sm text-brand">Agreement to Terms</p>
            <p className="opacity-80">
              By accessing and using Clipnic (clipnic.com), you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
          </div>

          <div className="space-y-10">
            <section className="p-8 bg-paper/5 border border-paper/10 rounded-2xl">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 opacity-40">Table of Contents</h3>
              <nav className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 text-sm font-medium">
                <ol className="list-decimal pl-4 space-y-3">
                  <li><a href="#t-1" className="hover:text-brand transition-colors">Acceptance of Terms</a></li>
                  <li><a href="#t-2" className="hover:text-brand transition-colors">Account & Age Requirements</a></li>
                  <li><a href="#t-3" className="hover:text-brand transition-colors">Service Description</a></li>
                  <li><a href="#t-4" className="hover:text-brand transition-colors">User Responsibilities</a></li>
                  <li><a href="#t-5" className="hover:text-brand transition-colors">Prohibited Uses</a></li>
                </ol>
                <ol className="list-decimal pl-4 space-y-3" start={6}>
                  <li><a href="#t-6" className="hover:text-brand transition-colors">Intellectual Property</a></li>
                  <li><a href="#t-7" className="hover:text-brand transition-colors">Payouts and Taxes</a></li>
                  <li><a href="#t-8" className="hover:text-brand transition-colors">Limitation of Liability</a></li>
                  <li><a href="#t-9" className="hover:text-brand transition-colors">Contact Information</a></li>
                </ol>
              </nav>
            </section>

            <section id="t-1" className="space-y-4 scroll-mt-20">
              <h3 className="text-xl font-black uppercase tracking-tight border-l-4 border-brand pl-4">1.0 Acceptance of Terms</h3>
              <p className="leading-relaxed opacity-60">
                These Terms of Service ("Terms") govern your use of Clipnic's platform, which connects brands and content creators with independent video editors ("Clippers") to create and distribute promotional short-form content. By creating an account or using our services, you agree to these terms. These terms constitute a legally binding agreement between you and Clipnic. If you do not agree to these terms, you may not use our services.
              </p>
            </section>

            <section id="t-2" className="space-y-4 scroll-mt-20">
              <h3 className="text-xl font-black uppercase tracking-tight border-l-4 border-brand pl-4">2.0 Account & Age Requirements</h3>
              <div className="space-y-4 leading-relaxed opacity-60">
                <p>Because our platform involves financial payouts and independent work, we have specific age requirements to comply with international laws:</p>
                <ul className="list-disc pl-6 space-y-4">
                  <li><span className="font-bold text-paper">Minimum Age:</span> You must be at least 13 years old to use our services.</li>
                  <li><span className="font-bold text-paper">Users Under 18 (Minors):</span> If you are between the ages of 13 and the age of legal majority in your jurisdiction (usually 18), you may only use Clipnic with the explicit consent, involvement, and supervision of a parent or legal guardian.</li>
                  <li className="list-none pl-4 border-l-2 border-paper/10 italic"><span className="font-bold text-paper">Guardian Liability:</span> By allowing a minor to use the platform, the parent or legal guardian agrees to be bound by these Terms and assumes full responsibility for the minor's actions, content, and any legal or tax obligations arising from payouts.</li>
                  <li><span className="font-bold text-paper">Account Verification:</span> We reserve the right to request proof of age or parental consent at any time.</li>
                </ul>
              </div>
            </section>

            <section id="t-3" className="space-y-4 scroll-mt-20">
              <h3 className="text-xl font-black uppercase tracking-tight border-l-4 border-brand pl-4">3.0 Service Description</h3>
              <div className="space-y-4 leading-relaxed opacity-60">
                <p>Clipnic acts as an intermediary platform facilitating campaigns between Content Creators/Brands and Clippers:</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><span className="font-bold text-paper">For Brands/Creators:</span> A marketplace to post content, set bounties/campaign rules, and leverage a network of clippers to expand your audience.</li>
                  <li><span className="font-bold text-paper">For Clippers:</span> A platform to access approved source content, create short-form clips, post them to social media (TikTok, YouTube Shorts, Instagram Reels, X), and earn bounties based on views, engagement, or conversions.</li>
                  <li><span className="font-bold text-paper">Tracking & Analytics:</span> Tools to verify clip performance, track legitimate engagement, and process campaign bounties.</li>
                </ul>
              </div>
            </section>

            <section id="t-4" className="space-y-4 scroll-mt-20">
              <h3 className="text-xl font-black uppercase tracking-tight border-l-4 border-brand pl-4">4.0 User Responsibilities</h3>
              <div className="space-y-6 leading-relaxed opacity-60">
                <p>Depending on your role on the platform, you have specific obligations:</p>
                <div className="space-y-4">
                  <h4 className="font-bold text-sm uppercase underline text-paper">All Users</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Maintain accurate account and payment information.</li>
                    <li>Keep login credentials secure and notify us immediately of unauthorized access.</li>
                    <li>Comply with the Terms of Service of third-party platforms (TikTok, YouTube, Meta, etc.) where clips are posted.</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-sm uppercase underline text-paper">For Clippers</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><span className="font-bold text-paper">Quality & Brand Guidelines:</span> Only post clips that align with the specific campaign guidelines set by the Brand/Creator.</li>
                    <li><span className="font-bold text-paper">Authentic Engagement:</span> You must generate organic views. The use of viewbots, engagement pods, or purchased traffic is strictly prohibited and will result in immediate termination and forfeiture of earnings.</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-sm uppercase underline text-paper">For Brands/Creators</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><span className="font-bold text-paper">Rights to Content:</span> You represent and warrant that you own or have the necessary licenses to the content you upload for Clippers to use.</li>
                    <li><span className="font-bold text-paper">Clear Terms:</span> You are responsible for clearly defining campaign rules, acceptable content, and payout metrics.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="t-5" className="space-y-4 scroll-mt-20">
              <h3 className="text-xl font-black uppercase tracking-tight border-l-4 border-brand pl-4">5.0 Prohibited Uses</h3>
              <p className="leading-relaxed opacity-60 mb-4">You may not use our services for any unlawful purpose or in a way that damages the Clipnic ecosystem:</p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { t: "Fake Engagement", d: "Using automated tools, bots, or paid services to artificially inflate views, likes, or followers on clips." },
                  { t: "Harmful Content", d: "Creating or distributing clips that promote hate speech, violence, harassment, illegal acts, or explicit material." },
                  { t: "Platform Abuse", d: "Attempting to manipulate Clipnic's tracking metrics, reverse engineering our software, or creating multiple accounts to exploit bounties." },
                  { t: "Off-Platform Circumvention", d: "Brands and Clippers may not use Clipnic to make initial contact and then move their transactions off-platform to avoid fees." }
                ].map((item, i) => (
                  <div key={i} className="p-4 border border-paper/10 rounded-xl bg-paper/5">
                    <p className="font-bold text-xs uppercase mb-1 text-paper">{item.t}</p>
                    <p className="text-sm opacity-50">{item.d}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="t-6" className="space-y-4 scroll-mt-20">
              <h3 className="text-xl font-black uppercase tracking-tight border-l-4 border-brand pl-4">6.0 Intellectual Property</h3>
              <ul className="list-disc pl-6 space-y-3 leading-relaxed opacity-60">
                <li><span className="font-bold text-paper">Clipnic's Rights:</span> All platform software, design, and trademarks are owned by Clipnic.</li>
                <li><span className="font-bold text-paper">Creator Content:</span> Brands/Creators retain ultimate ownership of their original content. By launching a campaign, the Creator grants Clippers a limited, revocable, non-exclusive license to edit, modify, and distribute the content solely for the purpose of the specific Clipnic campaign.</li>
                <li><span className="font-bold text-paper">Takedown Rights:</span> Brands/Creators and Clipnic reserve the right to demand the removal of any clip from social media platforms if it violates campaign guidelines, harms the brand's reputation, or breaches these Terms.</li>
              </ul>
            </section>

            <section id="t-7" className="space-y-4 scroll-mt-20">
              <h3 className="text-xl font-black uppercase tracking-tight border-l-4 border-brand pl-4">7.0 Payouts and Taxes</h3>
              <ul className="list-disc pl-6 space-y-3 leading-relaxed opacity-60">
                <li><span className="font-bold text-paper">Bounties:</span> Clippers earn money based on the metrics explicitly defined in the active campaign. Payouts are subject to verification of organic engagement.</li>
                <li><span className="font-bold text-paper">Withholding:</span> Clipnic reserves the right to withhold or cancel payouts if fraudulent activity, viewbotting, or copyright infringement is suspected.</li>
                <li><span className="font-bold text-paper">Taxes:</span> Clippers (or their legal guardians, if under 18) are considered independent contractors. You are solely responsible for calculating, reporting, and paying all applicable local, state, or federal taxes on your Clipnic earnings.</li>
              </ul>
            </section>

            <section id="t-8" className="space-y-4 scroll-mt-20">
              <h3 className="text-xl font-black uppercase tracking-tight border-l-4 border-brand pl-4">8.0 Limitation of Liability</h3>
              <div className="space-y-4 leading-relaxed opacity-60">
                <p>To the maximum extent permitted by law:</p>
                <ul className="list-disc pl-6 space-y-3">
                  <li><span className="font-bold text-paper">"As Is" Service:</span> Clipnic is provided "as is" without warranties of any kind. We do not guarantee uninterrupted service or specific financial returns.</li>
                  <li><span className="font-bold text-paper">Third-Party Platforms:</span> We are not responsible for changes to algorithms, API access, or bans issued by third-party platforms (e.g., TikTok, YouTube) that may affect a Clipper's ability to earn or a Brand's campaign reach.</li>
                  <li><span className="font-bold text-paper">Dispute Resolution:</span> Clipnic acts as a facilitator. While we may offer mediation tools, we are not legally liable for disputes between Brands and Clippers regarding creative direction or third-party copyright strikes. Total liability to Clipnic is limited to the fees collected by Clipnic related to the specific dispute.</li>
                </ul>
              </div>
            </section>

            <div id="t-9" className="pt-12 border-t border-paper/20 space-y-6 scroll-mt-20">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest font-black mb-2 opacity-40">9.0 Contact Information</p>
                <p className="opacity-60 text-sm mb-4">If you have any questions, concerns, or need to verify parental consent regarding these Terms of Service, please contact us:</p>
                <div className="space-y-2">
                  <p className="text-xl font-black underline decoration-brand decoration-2 underline-offset-4 text-brand"> hello@clipnic.com</p>
                  <p className="font-mono text-sm opacity-40">www.clipnic.com/support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

// ─── Case Studies Data ───────────────────────────────────────────────────────

const caseStudiesData = [
  {
    id: 'daxmain',
    client: 'Dax',
    handle: '@daxmainfocus',
    handleUrl: 'https://www.youtube.com/@daxmainfocus',
    category: 'Music Artist',
    tagline: 'Internal Pilot · Real-World Testing',
    description:
      'The Dax campaign was our first internal test to show how effectively our community of editors can drive growth. By providing authorized videos to our editors, we proved that viral moments can be systematically found and shared at scale without any traditional advertising.',
    result: '250K+',
    resultLabel: 'Organic Views Generated',
    duration: '6 Weeks',
    clippers: '12',
    featuredVideos: [
      {
        url: 'https://www.youtube.com/shorts/zqdjDLRnvUE',
        videoId: 'zqdjDLRnvUE',
        views: '190K+',
        label: 'Top Performing Clip',
        type: 'YouTube Short',
      },
      {
        url: 'https://www.youtube.com/shorts/zNv2-8o4-78',
        videoId: 'zNv2-8o4-78',
        views: '40K+',
        label: 'Viral Moment',
        type: 'YouTube Short',
      },
    ],
    metrics: [
      { label: 'Total Views', value: '250K+', icon: Eye },
      { label: 'Clips Published', value: '40+', icon: Play },
      { label: 'Avg. Views / Clip', value: '6,250', icon: BarChart2 },
      { label: 'Impressions', value: '400K+', icon: TrendingUp },
    ],
    highlight:
      'Every single view was organic, no ad spend, no botted traffic. Pure editor-driven sharing across all short-form platforms.',
    color: '#C8F135',
    accentRgb: '200,241,53',
  },
];

// ─── CaseStudiesPage ─────────────────────────────────────────────────────────

const CaseStudiesPage = ({ activeView, setActiveView, onBrandLaunch }: { activeView: string, setActiveView: (v: 'clipper' | 'brand') => void, onBrandLaunch: () => void }) => {
  return (
    <div className="min-h-screen bg-ink text-paper selection:bg-brand selection:text-ink">
      <SEO 
        title="Clipnic | Case Studies Viral Success Ledger"
        description="See how Clipnic drives millions of organic views for brands through our decentralized editor network. Real results, zero ad spend."
        url="/case-studies"
      />
      {/* Nav */}
      <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-white py-6 md:py-8 px-6 lg:px-12 flex justify-between items-center">
        <div className="flex items-center gap-6 md:gap-12">
          <button
            onClick={() => (window.location.href = '/?v=brand')}
            className="font-mono text-[10px] uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity flex items-center gap-2"
          >
            <ArrowLeft size={14} />
            <span className="hidden sm:inline">Back</span>
          </button>
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => (window.location.href = '/?v=brand')}
          >
            <img src="logo.webp" className="w-8 h-8 md:w-10 md:h-10 rounded-lg object-cover grayscale group-hover:grayscale-0 transition-all" alt="Clipnic Logo" />
            <span className="font-display text-lg md:text-2xl tracking-widest uppercase">CLIPNIC</span>
          </div>
        </div>

        <button
          onClick={() => (window.location.href = '/?v=brand')}
          className="px-5 py-2 rounded-full border border-white font-sans font-bold text-[10px] md:text-xs tracking-widest hover:bg-white hover:text-black transition-all whitespace-nowrap"
        >
          Getting Started
        </button>
      </nav>

      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 pt-32 md:pt-48 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6 md:space-y-8"
        >
          <div className="flex items-center gap-4">
            <div className="w-8 md:w-12 h-px bg-brand" />
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand">Success Ledger 001</p>
          </div>
          <h1 className="font-display text-[12vw] md:text-[10vw] leading-[0.85] tracking-tighter uppercase">
            Case <br />
            <span className="text-brand">Studies</span>
          </h1>
          <p className="font-sans text-lg md:text-2xl opacity-60 font-light max-w-2xl leading-relaxed">
            Real views. Real growth. Zero ad spend. This is the Clipnic standard for organic short form success.
          </p>
        </motion.div>
      </div>

      {/* Case Study Cards */}
      <div className="max-w-7xl mx-auto px-6 pb-32 md:pb-48 space-y-16 md:space-y-24">
        {caseStudiesData.map((cs) => {
          const MetricIcon0 = cs.metrics[0].icon;
          const MetricIcon1 = cs.metrics[1].icon;
          const MetricIcon2 = cs.metrics[2].icon;
          const MetricIcon3 = cs.metrics[3].icon;
          const metricIcons = [MetricIcon0, MetricIcon1, MetricIcon2, MetricIcon3];

          return (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Card Container */}
              <div className="relative bg-white/[0.02] border border-white/10 rounded-[2.5rem] md:rounded-[3rem] overflow-hidden backdrop-blur-sm shadow-2xl">

                {/* Header Section */}
                <div
                  className="px-6 md:px-16 pt-12 md:pt-16 pb-10 md:pb-12 border-b border-white/5"
                  style={{ background: `radial-gradient(circle at top left, rgba(${cs.accentRgb},0.08) 0%, transparent 60%)` }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 md:gap-12">
                    <div className="space-y-4 md:space-y-6 flex-1">
                      <div className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                        <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest opacity-40">{cs.category}</span>
                      </div>
                      <h2 className="font-display text-5xl md:text-9xl tracking-tighter uppercase leading-none m-0">
                        {cs.client}
                      </h2>
                      <p className="font-sans text-base md:text-lg opacity-40 font-light max-w-lg italic">
                        "{cs.tagline}"
                      </p>
                    </div>

                    {/* Highlight Metric */}
                    <div className="lg:text-right space-y-2 md:space-y-4">
                      <p className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-30">{cs.resultLabel}</p>
                      <div className="flex lg:justify-end items-baseline gap-4">
                        <p className="font-display text-7xl md:text-[10rem] leading-none tracking-tighter text-brand">
                          {cs.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 border-b border-white/5 divide-x divide-y md:divide-y-0 divide-white/5 bg-white/[0.01]">
                  {cs.metrics.map((m, i) => {
                    const Icon = metricIcons[i];
                    return (
                      <div key={i} className="px-6 md:px-12 py-8 md:py-10 space-y-4">
                        <div className="flex items-center justify-between opacity-30">
                          <Icon size={14} />
                          <TrendingUp size={10} className="text-brand" />
                        </div>
                        <div className="space-y-1">
                          <p className="font-display text-3xl md:text-5xl tracking-tight leading-none">
                            {m.value}
                          </p>
                          <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest opacity-40">{m.label}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Body Content */}
                <div className="grid lg:grid-cols-5 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/5">
                  {/* Left: Executive Summary */}
                  <div className="lg:col-span-2 px-6 md:px-16 py-12 md:py-20 space-y-12 md:space-y-16">
                    <div className="space-y-6 md:space-y-8">
                      <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-brand/20 bg-brand/5">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand" />
                        <span className="font-mono text-[9px] uppercase tracking-widest text-brand">Case ID: {cs.id.slice(-4)}</span>
                      </div>
                      <div className="space-y-4 md:space-y-6">
                        <p className="font-mono text-[10px] uppercase tracking-widest opacity-30">The Strategy</p>
                        <p className="font-sans text-lg md:text-2xl font-light leading-relaxed opacity-80">
                          {cs.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-8 md:space-y-10">
                      <p className="font-mono text-[10px] uppercase tracking-widest opacity-30">Our Standards</p>
                      <div className="space-y-6 md:space-y-8">
                        <div className="flex items-start gap-5 md:gap-6">
                          <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                            <TrendingUp size={16} className="text-brand" />
                          </div>
                          <div>
                            <h4 className="font-display text-base md:text-lg uppercase tracking-tight">Massive Scale</h4>
                            <p className="font-sans text-xs md:text-sm opacity-40 font-light mt-1">Growth achieved through our decentralized network of editors.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-5 md:gap-6">
                          <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                            <Box size={16} className="text-brand" />
                          </div>
                          <div>
                            <h4 className="font-display text-base md:text-lg uppercase tracking-tight">Verified Assets</h4>
                            <p className="font-sans text-xs md:text-sm opacity-40 font-light mt-1">Every clip is tracked and validated through our hub.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Video Grid */}
                  <div className="lg:col-span-3 px-6 md:px-16 py-12 md:py-20 bg-white/[0.01] relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(200,241,53,0.02)_0%,transparent_60%)]" />

                    <div className="relative z-10 space-y-12 md:space-y-16">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="font-mono text-[10px] uppercase tracking-widest opacity-30">Distribution Data</p>
                          <h4 className="font-display text-2xl md:text-3xl uppercase">Viral Components</h4>
                        </div>
                        <div className="px-3 py-1.5 md:px-4 md:py-2 bg-ink border border-white/10 rounded-lg md:rounded-xl font-mono text-[8px] md:text-[9px] uppercase tracking-widest opacity-60">
                          Live Results
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 md:gap-12">
                        {cs.featuredVideos.map((v) => (
                          <a
                            key={v.videoId}
                            href={v.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative flex flex-col gap-4 md:gap-6"
                          >
                            {/* Thumbnail */}
                            <div className="relative aspect-[9/16] rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-white/10 group-hover:border-brand/40 transition-all duration-700 shadow-2xl">
                              <img
                                src={`https://i.ytimg.com/vi/${v.videoId}/hqdefault.jpg`}
                                alt={v.label}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                              />
                              <div className="absolute inset-0 bg-ink/50 group-hover:bg-ink/20 transition-colors duration-700" />

                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-brand text-ink flex items-center justify-center opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500 shadow-[0_0_60px_rgba(200,241,53,0.5)]">
                                  <Play size={16} md:size={22} fill="currentColor" />
                                </div>
                              </div>

                              <div className="absolute top-3 right-3 md:top-6 md:right-6 font-display text-xs md:text-base px-3 py-1 md:px-5 md:py-2 rounded-xl md:rounded-2xl bg-ink/90 backdrop-blur-xl border border-white/10 text-white">
                                {v.views}
                              </div>
                            </div>

                            <div className="space-y-1 px-2 md:px-4">
                              <p className="font-mono text-[8px] md:text-[10px] uppercase tracking-[0.3em] opacity-30">{v.type}</p>
                              <h4 className="font-display text-sm md:text-xl uppercase tracking-tight group-hover:text-brand transition-colors duration-300">{v.label}</h4>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center pt-16 md:pt-24 space-y-8 md:space-y-12"
        >
          <div className="space-y-4">
            <p className="font-mono text-[10px] uppercase tracking-widest opacity-40">The engine is ready</p>
            <h2 className="font-display text-5xl md:text-9xl tracking-tighter uppercase leading-tight md:leading-none">
              Launch Your <br />
              <span className="text-brand">Campaign</span>
            </h2>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              if (activeView === 'brand') onBrandLaunch();
              else {
                setActiveView('brand');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-4 px-10 py-5 md:px-16 md:py-6 bg-brand text-ink font-bold uppercase tracking-widest text-sm md:text-base rounded-full shadow-[0_20px_60px_rgba(200,241,53,0.3)] hover:shadow-[0_20px_80px_rgba(200,241,53,0.5)] transition-all"
          >
            Get Started Now
            <ArrowRight size={18} md:size={20} />
          </motion.button>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

// ─── CaseStudies Landing Section ─────────────────────────────────────────────

const CaseStudiesSection = () => {
  const cs = caseStudiesData[0];
  const metricIcons = [Eye, Play, BarChart2, TrendingUp];
  return (
    <section className="py-24 md:py-40 px-6 lg:px-12 bg-ink text-paper border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(200,241,53,0.05)_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 md:gap-12 mb-16 md:mb-24 text-center md:text-left">
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-8 h-px bg-brand" />
              <p className="font-mono text-[10px] uppercase tracking-[0.5em] text-brand">Featured Success</p>
            </div>
            <h2 className="font-display text-6xl md:text-9xl tracking-tighter uppercase leading-[0.85] md:leading-[0.8] m-0">
              Case <br className="hidden md:block" /> <span className="text-brand">Studies</span>
            </h2>
          </div>
          <motion.a
            href="/case-studies"
            whileHover={{ x: 10 }}
            className="inline-flex items-center justify-center md:justify-start gap-4 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.3em] hover:text-brand transition-all pb-2 border-b border-white/10 group"
          >
            Explore Success Ledger
            <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
          </motion.a>
        </div>

        {/* Featured Case Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-white/[0.02] border border-white/10 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden cursor-pointer group shadow-xl"
          onClick={() => (window.location.href = '/case-studies')}
        >
          {/* Hover glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
            style={{ background: `radial-gradient(circle at center, rgba(${cs.accentRgb},0.08) 0%, transparent 70%)` }}
          />

          <div className="relative grid lg:grid-cols-2 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/5">
            {/* Left: Info */}
            <div className="px-8 md:px-16 py-12 md:py-16 space-y-10 md:space-y-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand font-bold">
                    {cs.category}
                  </span>
                  <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-widest opacity-40">{cs.duration} Phase</span>
                </div>
                <h3 className="font-display text-5xl md:text-8xl tracking-tighter uppercase leading-none">
                  {cs.client}
                </h3>
                <p className="font-sans text-lg md:text-xl opacity-40 font-light leading-relaxed max-w-md">
                  {cs.description}
                </p>
              </div>

              <div className="inline-flex items-center gap-3 font-mono text-[9px] md:text-[10px] uppercase tracking-widest group-hover:text-brand transition-colors">
                Read Full Case Study
                <ArrowRight size={12} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </div>

            {/* Right: Big Stat Focus */}
            <div
              className="px-8 md:px-16 py-12 md:py-16 flex flex-col justify-center items-center text-center space-y-8 md:space-y-10 bg-white/[0.01]"
            >
              <div className="space-y-2">
                <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.4em] opacity-30">{cs.resultLabel}</p>
                <p className="font-display text-8xl md:text-[12rem] leading-none tracking-tighter text-brand group-hover:scale-105 transition-transform duration-1000">
                  {cs.result}
                </p>
              </div>

              {/* Mini metric grid */}
              <div className="grid grid-cols-2 gap-6 md:gap-8 w-full max-w-sm">
                {cs.metrics.slice(0, 2).map((m, i) => {
                  const Icon = metricIcons[i];
                  return (
                    <div key={i} className="text-center space-y-2">
                      <div className="flex items-center justify-center gap-2 opacity-30">
                        <Icon size={12} />
                        <span className="font-mono text-[9px] uppercase tracking-widest">{m.label}</span>
                      </div>
                      <p className="font-display text-2xl md:text-3xl tracking-tight">{m.value}</p>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-white/5 bg-white/5 font-mono text-[8px] md:text-[9px] uppercase tracking-widest opacity-40">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Verified Organic Distribution
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  const getInitialView = (): 'clipper' | 'brand' => {
    const params = new URLSearchParams(window.location.search);
    const currentPath = window.location.pathname.replace(/\/$/, "");
    if (params.get('v') === 'brand' || currentPath === '/brand' || currentPath === '/brands') return 'brand';
    return 'clipper';
  };
  const [activeView, setActiveView] = useState<'clipper' | 'brand'>(getInitialView);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [getStartedOpen, setGetStartedOpen] = useState(false);
  const [brandGatewayOpen, setBrandGatewayOpen] = useState(false);
  const currentPath = window.location.pathname.replace(/\/$/, "");
  const isBrandPath = currentPath === '/brand' || currentPath === '/brands';
  const isPrivacyPath = currentPath === '/privacy';
  const isTermsPath = currentPath === '/terms' || currentPath === '/clipper-terms';
  const isCaseStudiesPath = currentPath === '/case-studies';
  const isHowToPath = currentPath.startsWith('/docs/get-started');
  const isTier1GuidePath = currentPath.startsWith('/docs/how-to-target-tier1');
  const isAvoidZeroViewsPath = currentPath.startsWith('/docs/avoid-0-views');
  const isReferralGuideDocsPath = currentPath.startsWith('/docs/referrals') || currentPath === '/referral-guide';
  const isDocsHubPath = currentPath === '/docs' || currentPath === '/docs/';
  const isHome = currentPath === '' || currentPath === '/';
  const isComingSoon = currentPath === '/coming-soon';
  
  useEffect(() => {
    reportVisit();
    // Scroll to the top if path is /brands
    if (isBrandPath) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }

    // Global click monitoring for the landing page
    const handleGlobalClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const interactiveEl = target.closest('a, button');
      if (!interactiveEl) return;

      const tagName = interactiveEl.tagName.toLowerCase();
      const href = interactiveEl.getAttribute('href') || '';
      const id = interactiveEl.id || '';
      const classList = Array.from(interactiveEl.classList).join(' ').slice(0, 80);

      // Get the cleanest name possible for the element
      let elementText = (interactiveEl.textContent || '').trim().replace(/\s+/g, ' ');
      
      if (!elementText) {
        elementText = interactiveEl.getAttribute('aria-label') || 
                      interactiveEl.getAttribute('title') || 
                      interactiveEl.getAttribute('name') || 
                      '';
      }

      if (!elementText) {
        const img = interactiveEl.querySelector('img');
        if (img) {
          elementText = img.getAttribute('alt') || '';
        }
      }

      if (!elementText) {
        if (href.includes('discord.gg') || href.includes('discord.com')) {
          elementText = 'Discord Invite Icon';
        } else if (href.includes('x.com') || href.includes('twitter.com')) {
          elementText = 'X / Twitter Icon';
        } else if (href.includes('instagram.com')) {
          elementText = 'Instagram Icon';
        } else if (href.startsWith('mailto:')) {
          elementText = href.replace('mailto:', '');
        } else {
          elementText = href || id || 'Icon/Unnamed Button';
        }
      }

      const elementName = elementText.slice(0, 60);

      // Determine parent section context
      let section = 'Main Layout';
      if (interactiveEl.closest('footer')) {
        section = 'Footer Section';
      } else if (interactiveEl.closest('nav')) {
        section = 'Navbar / Navigation';
      } else if (interactiveEl.closest('#hero') || interactiveEl.closest('.hero')) {
        section = 'Hero Section';
      } else if (interactiveEl.closest('#brands')) {
        section = 'Brands Section';
      } else if (interactiveEl.closest('#process')) {
        section = 'Process Steps Section';
      } else if (interactiveEl.closest('#faq')) {
        section = 'FAQ Section';
      } else if (interactiveEl.closest('.modal') || interactiveEl.closest('[role="dialog"]') || id.toLowerCase().includes('modal')) {
        section = 'Modal Overlay';
      } else if (window.location.pathname.startsWith('/docs')) {
        section = 'Docs Hub / Guides';
      }

      let logTitle = '';
      let details = '';

      // Discord links
      if (href.includes('discord.gg') || href.includes('discord.com')) {
        logTitle = `👾 Discord Link: "${elementName}"`;
        details = `**Invite/URL**: \`${href}\`\n**Section**: \`${section}\``;
      } 
      // X / Twitter
      else if (href.includes('x.com') || href.includes('twitter.com')) {
        logTitle = `🐦 X/Twitter Link: "${elementName}"`;
        details = `**URL**: \`${href}\`\n**Section**: \`${section}\``;
      } 
      // Instagram
      else if (href.includes('instagram.com')) {
        logTitle = `📸 Instagram Link: "${elementName}"`;
        details = `**URL**: \`${href}\`\n**Section**: \`${section}\``;
      } 
      // Emails
      else if (href.startsWith('mailto:')) {
        logTitle = `✉️ Email Link: "${elementName}"`;
        details = `**Email**: \`${href.replace('mailto:', '')}\`\n**Section**: \`${section}\``;
      } 
      // Documentation
      else if (href.startsWith('/docs') || href.includes('/docs/')) {
        logTitle = `📚 Docs Link: "${elementName}"`;
        details = `**Path**: \`${href}\`\n**Section**: \`${section}\``;
      } 
      // Legal
      else if (href === '/privacy' || href === '/terms' || href === '/clipper-terms') {
        logTitle = `⚖️ Legal Link: "${elementName}"`;
        details = `**Page**: \`${href}\`\n**Section**: \`${section}\``;
      } 
      // Standard buttons
      else if (tagName === 'button') {
        logTitle = `⚡ Button: "${elementName}"`;
        details = `**Section**: \`${section}\`\n**ID**: \`${id || 'None'}\`\n**Classes**: \`${classList || 'None'}\``;
      } 
      // Fallback for anchors
      else if (tagName === 'a') {
        logTitle = `🔗 Link: "${elementName}"`;
        details = `**Destination**: \`${href || 'None'}\`\n**Section**: \`${section}\``;
      }

      if (logTitle) {
        reportClick(logTitle, details);
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, [isBrandPath]);

  if (isComingSoon) return <ComingSoon />;
  if (isHowToPath) return <><SEO title="Clipnic | How to Get Started" description="Complete guide on how to start earning with Clipnic. Connect socials, post clips, and track your yield." url="/docs/get-started" /><HowToPage /></>;
  if (isTier1GuidePath) return <><SEO title="Clipnic | Tier 1 Targeting Guide" description="Master the art of targeting Tier 1 regions (USA, UK, Canada) to maximize your clipping earnings." url="/docs/how-to-target-tier1" /><Tier1Guide /></>;
  if (isAvoidZeroViewsPath) return <><SEO title="Clipnic | Avoiding 0 Views Guide" description="Learn the essential techniques to ensure your clips get pushed by the algorithm and avoid the 0 views trap." url="/docs/avoid-0-views" /><AvoidZeroViews /></>;
  if (isReferralGuideDocsPath) return <><SEO title="Clipnic | Referral Program Guide" description="Learn how the Clipnic referral system works, invite friends, and collect cash bonuses." url="/docs/referrals" /><ReferralsGuideDocs /></>;
  if (isDocsHubPath) return <><SEO title="Clipnic | Documentation Hub" description="Explore our guides, tutorials, and resources to help you succeed as a clipper or brand on our platform." url="/docs" /><DocsHub /></>;
  if (isPrivacyPath) return <PrivacyOverlay isOpen={true} onClose={() => window.location.href = '/'} />;
  if (isTermsPath) return <TermsOverlay isOpen={true} onClose={() => window.location.href = '/'} />;
  if (isCaseStudiesPath) return <CaseStudiesPage activeView={activeView} setActiveView={setActiveView} onBrandLaunch={() => setBrandGatewayOpen(true)} />;
  if (!isHome && !isBrandPath) return <NotFound />;

  return (
    <div className="relative font-sans selection:bg-ink selection:text-paper">
      <SpeedInsights />
      <Navigation onGetStarted={() => setGetStartedOpen(true)} activeView={activeView} />

      <main className="relative">
        <Hero
          activeView={activeView}
          setActiveView={setActiveView}
          onBrandLaunch={() => setBrandGatewayOpen(true)}
        />

        <div id="process">
          <AnimatePresence mode="wait">
            {activeView === 'clipper' ? (
              <motion.div
                key="clipper-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Intro Section for Clippers */}
                <section className="pt-64 pb-32 px-6 lg:px-12 text-center bg-paper text-ink relative overflow-hidden border-b border-ink/5">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand/10 blur-[120px] rounded-full pointer-events-none" />
                  <div className="max-w-5xl mx-auto space-y-12 relative z-10">
                    <h2 className="font-display text-4xl md:text-8xl tracking-tighter uppercase leading-[0.95] flex flex-wrap justify-center gap-x-[0.35em] gap-y-3 md:gap-y-5">
                      <LetterReveal text="Wanna get paid by just" />
                      <LetterReveal text="editing" className="text-brand" />
                      <LetterReveal text="short form contents?" />
                    </h2>
                    <p className="font-sans text-xl md:text-2xl text-ink/70 font-light max-w-4xl mx-auto leading-relaxed flex flex-wrap justify-center">
                      <WordReveal 
                        text="Whether you are a passionate editor or just a beginner who knows how the algorithm works or even if you want to learn the secrets of going viral, you can start earning right now. All you have to do is take the long form content from our brand campaigns, turn them into high impact clips, and watch the views turn into payouts. No more hunting for clients or dealing with complex contracts, just join a campaign and start your journey." 
                      />
                    </p>
                   </div>
                </section>

                <ProcessStep
                  index={0}
                  icon={LinkIcon}
                  title="CONNECT YOUR ACCOUNTS"
                  desc="Link your TikTok, Instagram, or YouTube in 2 minutes. No minimum followers. No special skills. If you have an account, you can start. We just need to confirm it is really you."
                  dashPreview={<ConnectDash />}
                />
                <ProcessStep
                  index={1}
                  icon={UploadIcon}
                  title="POST A CLIP & SHARE THE LINK"
                  desc={
                    <>
                      Browse open campaigns, pick a video, cut a short clip from it (we show you exactly how).
                      <span className="block mt-4 text-brand font-bold uppercase tracking-wider text-sm">
                        Add your video's hooks and make it reach millions
                      </span>
                      Post it on your account, then paste the link into your dashboard. Done. We track your views automatically.
                    </>
                  }
                  dashPreview={<SubmissionDash />}
                />
                <ProcessStep
                  index={2}
                  icon={History}
                  title="COLLECT YOUR EARNINGS"
                  desc="Every 1,000 views puts money in your balance. Post more clips, earn more money. When you want to cash out, hit withdraw and it goes straight to your bank or PayPal. Simple as that."
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
                {/* 1. WHAT WE DO */}
                <section id="brands" className="py-32 px-6 lg:px-12 bg-white text-ink border-t border-ink/5">
                  <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto"
                  >
                    <p className="font-sans text-[10px] uppercase tracking-[0.4em] opacity-40 mb-12 font-bold">What are we?</p>
                    <h2 className="font-display text-5xl md:text-8xl tracking-tighter uppercase mb-16 leading-[0.9]">
                      We are a <br /><span className="text-brand">Content Distribution</span><br />Platform.
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
                      <div className="space-y-8">
                        <h4 className="font-display text-3xl uppercase tracking-tight">The Problem we fix</h4>
                        <p className="font-sans text-xl opacity-60 leading-relaxed font-light">
                          Most brands and products care deeply about making great content. They spend thousands on production, but they <span className="text-[#cc0000] opacity-100 font-medium">fail at distribution</span>.
                          <span className="block mt-4 font-bold text-ink opacity-100">Creation without distribution is a <span className="text-[#cc0000]">waste of time and money</span>.</span>
                        </p>
                      </div>
                      <div className="space-y-8">
                        <h4 className="font-display text-3xl uppercase tracking-tight">The Solution</h4>
                        <p className="font-sans text-xl opacity-60 leading-relaxed font-light">
                          We fix this so you can <span className="text-[#cc0000] opacity-100 font-medium">focus only on creation</span> while we <span className="text-[#cc0000] opacity-100 font-medium">handle the distribution</span>. We have a massive community of professional editors who take your long videos and turn them into <span className="text-[#cc0000] opacity-100 font-medium">viral shorts</span> with high impact hooks.
                          <span className="block mt-4 font-bold text-ink opacity-100">You get the views, we do the work, and you <span className="text-[#cc0000]">see all the data live</span> in your dashboard.</span>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </section>

                {/* 2. WHY CHOOSE US */}
                <section className="py-32 px-6 lg:px-12 bg-ink text-paper">
                  <div className="max-w-6xl mx-auto">
                    <p className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40 mb-12 text-brand">Why Clipnic</p>
                    <h2 className="font-display text-5xl md:text-8xl tracking-tighter uppercase mb-20">Built for <br /> Scale.</h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                      {[
                        { title: "Zero Effort", desc: "Just send us your video link. Our community handles the editing, posting, and distribution across TikTok, Reels, and Shorts." },
                        { title: "Performance Only", desc: "Stop paying for 'hopes and dreams'. You only pay when real people actually watch and engage with your content." },
                        { title: "Brand Safe", desc: "We brief every editor on your brand guidelines. You maintain total control over your image while getting massive reach." },
                        { title: "Full Transparency", desc: "Track every view, like, and share in real time. Our dashboard gives you more data than any traditional agency ever could." }
                      ].map((item, i) => (
                        <div key={i} className="p-10 border border-white/10 rounded-[2.5rem] bg-white/[0.02] space-y-6">
                          <h4 className="font-display text-2xl uppercase text-brand">{item.title}</h4>
                          <p className="font-sans opacity-60 leading-relaxed font-light text-sm">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* 3. HOW IT WORKS (ROADMAP + VISUALS) */}
                <section id="how-it-works" className="bg-white text-ink border-t border-ink/5 pt-32 pb-60">
                  <div className="max-w-6xl mx-auto px-6 lg:px-0">
                    <p className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40 mb-12">The Roadmap</p>
                    <h2 className="font-display text-5xl md:text-8xl tracking-tighter uppercase mb-20">How it<br />works</h2>

                    <div className="relative">
                      {/* Connecting Arrows (Desktop) */}
                      <div className="hidden md:flex absolute top-5 left-0 w-full pointer-events-none opacity-20">
                        <div className="flex-1 flex justify-center items-center translate-x-1/2"><ArrowRight size={16} /></div>
                        <div className="flex-1 flex justify-center items-center translate-x-1/2"><ArrowRight size={16} /></div>
                        <div className="flex-1 flex justify-center items-center translate-x-1/2"><ArrowRight size={16} /></div>
                        <div className="flex-1" /> {/* Spacer for last column */}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">
                        <div className="space-y-4 relative">
                          <p className="font-display text-4xl text-brand">01</p>
                          <h4 className="font-display text-xl uppercase">Send us your video</h4>
                          <p className="font-sans opacity-60 text-sm leading-relaxed font-light">
                            Share any long video, a podcast, YouTube video, stream, interview. Does not need to be perfect. Just send it.
                          </p>
                          {/* Mobile Arrow */}
                          <div className="md:hidden flex justify-center pt-8 opacity-20"><ArrowRight size={16} className="rotate-90" /></div>
                        </div>

                        <div className="space-y-4 relative">
                          <p className="font-display text-4xl text-brand">02</p>
                          <h4 className="font-display text-xl uppercase">We study your brand</h4>
                          <p className="font-sans opacity-60 text-sm leading-relaxed font-light">
                            Our team learns your tone, your style, your audience. Then we brief our editors on exactly how your clips should look and feel.
                          </p>
                          {/* Mobile Arrow */}
                          <div className="md:hidden flex justify-center pt-8 opacity-20"><ArrowRight size={16} className="rotate-90" /></div>
                        </div>

                        <div className="space-y-4 relative">
                          <p className="font-display text-4xl text-brand">03</p>
                          <h4 className="font-display text-xl uppercase">Clips go everywhere</h4>
                          <p className="font-sans opacity-60 text-sm leading-relaxed font-light">
                            Editors make short clips with catchy hooks and post them on TikTok, Reels and Shorts, on their own accounts. Hundreds of clips. Zero effort from you.
                          </p>
                          {/* Mobile Arrow */}
                          <div className="md:hidden flex justify-center pt-8 opacity-20"><ArrowRight size={16} className="rotate-90" /></div>
                        </div>

                        <div className="space-y-4">
                          <p className="font-display text-4xl text-brand">04</p>
                          <h4 className="font-display text-xl uppercase">Watch the views grow</h4>
                          <p className="font-sans opacity-60 text-sm leading-relaxed font-light">
                            Log into your dashboard and see every view, like and follower in real-time. Pay only for what actually gets watched.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 4. WATCH YOUR BRAND GROW (ANALYTICS PREVIEW) */}
                <section className="py-32 px-6 lg:px-12 bg-ink text-paper">
                  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand mb-8">See It Working</p>
                      <h2 className="font-display text-5xl md:text-7xl tracking-tighter uppercase mb-12 leading-none">Watch your<br />brand grow</h2>
                      <p className="font-sans text-xl opacity-60 leading-relaxed mb-12 font-light">
                        Every view, every like, every new follower, you see it all happening live on your dashboard. No spreadsheets. No waiting for reports. Just open the screen and watch your content spread across the internet.
                      </p>
                      <button
                        onClick={() => setBrandGatewayOpen(true)}
                        className="px-10 py-5 bg-brand text-ink font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white transition-all"
                      >
                        Start Growing Today
                      </button>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-0 bg-brand/20 blur-[120px] rounded-full animate-pulse" />
                      <div className="relative bg-ink border border-white/10 rounded-[3rem] p-10 overflow-hidden backdrop-blur-xl">
                        <div className="space-y-8">
                          <div className="flex justify-between items-end">
                            <div>
                              <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1 text-paper">Growth Velocity</p>
                              <p className="text-4xl font-bold font-mono text-brand">+842%</p>
                            </div>
                            <TrendingUp className="text-brand" size={32} />
                          </div>
                          <div className="h-40 flex items-end gap-2 text-paper">
                            {[40, 70, 45, 90, 65, 80, 95].map((h, i) => (
                              <div key={i} className="flex-1 bg-brand/20 rounded-t-lg transition-all hover:bg-brand" style={{ height: `${h}%` }} />
                            ))}
                          </div>
                          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/5 text-paper">
                            <div>
                              <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Total Reach</p>
                              <p className="text-xl font-bold font-mono">12.4M</p>
                            </div>
                            <div>
                              <p className="text-[10px] uppercase tracking-widest opacity-40 mb-1">Active Nodes</p>
                              <p className="text-xl font-bold font-mono">1,204</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 5. NOT ADS. REAL REACH. */}
                <section className="py-32 px-6 lg:px-12 bg-white text-ink border-t border-ink/5">
                  <div className="max-w-6xl mx-auto">
                    <p className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-40 mb-12">The Strategy</p>
                    <h2 className="font-display text-5xl md:text-8xl tracking-tighter uppercase mb-20">Not ads.<br />Real reach.</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                      <div className="space-y-6">
                        <div className="w-12 h-12 bg-ink text-paper rounded-2xl flex items-center justify-center">
                          <CheckCircle2 size={24} />
                        </div>
                        <h4 className="font-display text-2xl uppercase">Real people, real accounts</h4>
                        <p className="font-sans opacity-60 leading-relaxed font-light">Every clip is posted by a real person on their real TikTok or Instagram account. No bots. No fake views. When someone watches your clip, it is because they chose to.</p>
                      </div>

                      <div className="space-y-6">
                        <div className="w-12 h-12 bg-ink text-paper rounded-2xl flex items-center justify-center">
                          <CheckCircle2 size={24} />
                        </div>
                        <h4 className="font-display text-2xl uppercase">No ad spend needed</h4>
                        <p className="font-sans opacity-60 leading-relaxed font-light">You do not pay thousands upfront hoping an ad might work. With Clipnic, you only pay after real people actually watch your clips. Your money goes 5 to 10x further than traditional advertising.</p>
                      </div>

                      <div className="space-y-6">
                        <div className="w-12 h-12 bg-ink text-paper rounded-2xl flex items-center justify-center">
                          <CheckCircle2 size={24} />
                        </div>
                        <h4 className="font-display text-2xl uppercase">See everything live</h4>
                        <p className="font-sans opacity-60 leading-relaxed font-light">Your dashboard shows you exactly how many views you got, on which platform, from which clip. No guessing. No waiting for a report. Just open your screen and see your brand growing in real time.</p>
                      </div>
                    </div>
                  </div>
                </section>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {activeView === 'brand' && <CaseStudiesSection />}

        {activeView === 'brand' ? (
          <GenericFAQ
            items={brandFaqItems}
            title={<>Common<br />Questions</>}
            subtitle="Everything you need to know before launching your first campaign with Clipnic."
          />
        ) : (
          <GenericFAQ
            items={clipperFaqItems}
            title={<>Clipper<br />Questions</>}
            subtitle="Everything you need to know before you start editing and earning with Clipnic."
          />
        )}

        <Contact
          activeView={activeView}
          setActiveView={setActiveView}
          onBrandLaunch={() => setBrandGatewayOpen(true)}
        />
      </main>

      <Footer />
      <PrivacyOverlay isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <TermsOverlay isOpen={termsOpen} onClose={() => setTermsOpen(false)} />
      <GetStartedModal
        isOpen={getStartedOpen}
        onClose={() => setGetStartedOpen(false)}
        onBrandLaunch={() => {
          setGetStartedOpen(false);
          setBrandGatewayOpen(true);
        }}
      />
      <BrandGatewayModal
        isOpen={brandGatewayOpen}
        onClose={() => setBrandGatewayOpen(false)}
      />

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
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
