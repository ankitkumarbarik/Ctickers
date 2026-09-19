import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, Mail, ArrowUpRight, Heart } from 'lucide-react';
import { InstagramIcon, TwitterIcon } from './BrandIcons';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#E5E7EB] mt-16 sm:mt-24">
      {/* Top feature row */}
      <div className="border-b border-[#E5E7EB] bg-[#F7F7F7] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#0A0A0A] text-white flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-[#FF1F8F]" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-xs text-[#0A0A0A]">100% Waterproof</h4>
                <p className="font-mono text-[11px] text-[#6B6B6B] mt-0.5">Dishwasher and outdoor UV safe</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#0A0A0A] text-white flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-[#FF1F8F]" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-xs text-[#0A0A0A]">Laser Die-Cut</h4>
                <p className="font-mono text-[11px] text-[#6B6B6B] mt-0.5">Optical cut precision around any shape</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#0A0A0A] text-white flex items-center justify-center shrink-0">
                <span className="font-mono font-bold text-xs text-[#FF1F8F]">1x</span>
              </div>
              <div>
                <h4 className="font-sans font-bold text-xs text-[#0A0A0A]">No Minimums</h4>
                <p className="font-mono text-[11px] text-[#6B6B6B] mt-0.5">Order 10 sample packs or 10,000 bulk</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#0A0A0A] text-white flex items-center justify-center shrink-0">
                <ArrowUpRight className="w-4 h-4 text-[#FF1F8F]" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-xs text-[#0A0A0A]">Fast 2-Day Turnaround</h4>
                <p className="font-mono text-[11px] text-[#6B6B6B] mt-0.5">Printed & dispatched in 24-48h</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-10">
          {/* Brand Column */}
          <div className="sm:col-span-2 md:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#0A0A0A] flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 36 36" fill="none">
                  <path d="M18 5C11 5 5 11 5 18C5 24.5 10 29.5 16.5 30.5V31H19.5V30.5C26 29.5 31 24.5 31 18C31 11 25 5 18 5Z" fill="#0A0A0A" />
                  <path d="M18 5C17 8 15 11 11 13" stroke="#FF1F8F" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M18 5C19 8 21 11 25 13" stroke="#FF1F8F" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="13" cy="18" r="1.8" fill="#FFFFFF" />
                  <circle cx="23" cy="18" r="1.8" fill="#FFFFFF" />
                  <circle cx="10" cy="21" r="1.5" fill="#FF1F8F" />
                  <circle cx="26" cy="21" r="1.5" fill="#FF1F8F" />
                </svg>
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-[#0A0A0A]">
                Ctickers<span className="text-[#FF1F8F]">.</span>
              </span>
            </Link>

            <p className="font-mono text-xs text-[#6B6B6B] leading-relaxed max-w-sm">
              High-contrast, durable vinyl sticker manufacturing for developers, tech communities, and independent artists.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 border border-[#E5E7EB] hover:border-[#0A0A0A] flex items-center justify-center text-[#0A0A0A] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 border border-[#E5E7EB] hover:border-[#0A0A0A] flex items-center justify-center text-[#0A0A0A] transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="mailto:support@ctickers.com"
                className="w-8 h-8 border border-[#E5E7EB] hover:border-[#0A0A0A] flex items-center justify-center text-[#0A0A0A] transition-colors"
                aria-label="Email support"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h5 className="font-sans font-bold text-xs text-[#0A0A0A] uppercase tracking-wider mb-4">Catalog</h5>
            <ul className="space-y-2 font-mono text-xs text-[#6B6B6B]">
              <li>
                <Link to="/" className="hover:text-[#FF1F8F] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/stickers" className="hover:text-[#FF1F8F] transition-colors">
                  Sticker Catalog
                </Link>
              </li>
              <li>
                <Link to="/custom-sticker" className="hover:text-[#FF1F8F] transition-colors">
                  Custom Studio
                </Link>
              </li>
              <li>
                <Link to="/inspiration" className="hover:text-[#FF1F8F] transition-colors">
                  Pinterest Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#FF1F8F] transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal / Policy Links */}
          <div className="md:col-span-3">
            <h5 className="font-sans font-bold text-xs text-[#0A0A0A] uppercase tracking-wider mb-4">Trust & Developer</h5>
            <ul className="space-y-2 font-mono text-xs text-[#6B6B6B]">
              <li>
                <Link to="/privacy" className="text-[#FF1F8F] hover:underline flex items-center gap-1.5">
                  <span>Privacy Policy</span>
                  <span className="chip-bun text-[9px] py-0 px-1 border border-[#E5E7EB]">Live</span>
                </Link>
              </li>
              <li>
                <span className="text-[#9CA3AF]">Terms of Service (Demo)</span>
              </li>
              <li>
                <span className="text-[#9CA3AF]">Pinterest Developer Terms</span>
              </li>
              <li>
                <span className="text-[#9CA3AF]">Cookie Specifications</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Demo CTA */}
          <div className="md:col-span-3 space-y-3 font-mono">
            <h5 className="font-sans font-bold text-xs text-[#0A0A0A] uppercase tracking-wider">Developer Drops</h5>
            <p className="text-xs text-[#6B6B6B] leading-relaxed">
              Get notified of limited holographic foil drops and new API tools.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for joining Ctickers developer drop alerts.');
              }}
              className="flex items-center gap-1"
            >
              <input
                type="email"
                required
                placeholder="developer@domain.com"
                className="input-bun text-xs py-1.5 px-2.5 w-full rounded-none"
              />
              <button
                type="submit"
                className="btn-secondary text-xs py-1.5 px-3 rounded-none whitespace-nowrap"
              >
                Join
              </button>
            </form>
            <p className="text-[10px] text-[#9CA3AF]">
              Prepared for Pinterest App Verification compliance.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#E5E7EB] mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between font-mono text-xs text-[#6B6B6B] gap-4">
          <p>© {new Date().getFullYear()} Ctickers. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-[#FF1F8F]">Privacy Policy</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-[#FF1F8F]">Help & Docs</Link>
            <span>•</span>
            <span className="inline-flex items-center gap-1 text-[#9CA3AF]">
              Built with <Heart className="w-3 h-3 text-[#FF1F8F] fill-current" /> for vinyl fans
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
