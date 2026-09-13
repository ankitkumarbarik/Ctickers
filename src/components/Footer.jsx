import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, ShieldCheck, Mail, ArrowUpRight } from 'lucide-react';
import { InstagramIcon, TwitterIcon, PinterestIcon } from './BrandIcons';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-12 sm:mt-20">
      {/* Top feature badges */}
      <div className="border-b border-slate-100 bg-slate-50/50 py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 text-left">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">100% Waterproof</h4>
                <p className="text-xs text-slate-500 mt-0.5">Dishwasher and outdoor UV safe vinyl</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">Custom Die-Cut</h4>
                <p className="text-xs text-slate-500 mt-0.5">Precise laser cutting around any shape</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">No Minimums</h4>
                <p className="text-xs text-slate-500 mt-0.5">Order 1 sample or 10,000 bulk packs</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <ArrowUpRight className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-slate-900">Fast 2-Day Turnaround</h4>
                <p className="text-xs text-slate-500 mt-0.5">Printed & dispatched with care</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-10">
          {/* Brand Col */}
          <div className="sm:col-span-2 md:col-span-4 space-y-3 sm:space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-rose-500 to-fuchsia-600 flex items-center justify-center text-white shadow-md shadow-rose-500/20">
                <span className="font-extrabold text-lg">C</span>
              </div>
              <span className="text-2xl font-black tracking-tight text-slate-900">
                Ctickers<span className="text-rose-500">.</span>
              </span>
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              Turn your creative ideas, photography, digital artwork, and viral memes into vibrant, ultra-durable vinyl stickers.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-rose-50 text-slate-600 hover:text-rose-600 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-sky-50 text-slate-600 hover:text-sky-500 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:support@ctickers.com"
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 flex items-center justify-center transition-colors"
                aria-label="Email support"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Explore</h5>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-600 hover:text-rose-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/stickers" className="text-slate-600 hover:text-rose-600 transition-colors">
                  Sticker Catalog
                </Link>
              </li>
              <li>
                <Link to="/custom-sticker" className="text-slate-600 hover:text-rose-600 transition-colors">
                  Custom Stickers
                </Link>
              </li>
              <li>
                <Link to="/inspiration" className="text-slate-600 hover:text-rose-600 transition-colors">
                  Pinterest Inspiration
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 hover:text-rose-600 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Policy Links */}
          <div className="md:col-span-3">
            <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">Trust & Legal</h5>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/privacy" className="text-rose-600 font-semibold hover:underline flex items-center gap-1.5">
                  <span>Privacy Policy</span>
                  <span className="text-[10px] bg-rose-100 text-rose-700 px-1.5 py-0.2 rounded">Official</span>
                </Link>
              </li>
              <li>
                <span className="text-slate-400 text-xs">Terms of Service (Demo)</span>
              </li>
              <li>
                <span className="text-slate-400 text-xs">Cookie Preferences</span>
              </li>
              <li>
                <span className="text-slate-400 text-xs">Pinterest Integration Guidelines</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Demo CTA */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Stay In The Loop</h5>
            <p className="text-xs text-slate-500 leading-normal">
              Get secret drops, holographic restock notifications, and weekly design prompts.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for subscribing to Ctickers demo updates!');
              }}
              className="flex items-center gap-1.5"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="bg-slate-100 border border-slate-200 text-xs rounded-xl px-3 py-2.5 w-full focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white transition-all"
              />
              <button
                type="submit"
                className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-3.5 py-2.5 rounded-xl shrink-0 transition-colors"
              >
                Join
              </button>
            </form>
            <p className="text-[11px] text-slate-400">
              Demo site prepared for Pinterest Developer App Verification.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-100 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Ctickers. All rights reserved. Built with React & Vite.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-rose-600">Privacy Policy</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-rose-600">Get Help</Link>
            <span>•</span>
            <span className="inline-flex items-center gap-1 text-slate-400">
              Made with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> for sticker fans
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
