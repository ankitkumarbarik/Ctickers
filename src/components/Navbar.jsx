import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, ArrowRight, Terminal } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Stickers', path: '/stickers' },
    { name: 'Custom Studio', path: '/custom-sticker', badge: 'Fast' },
    { name: 'Inspiration', path: '/inspiration', badge: 'Pinterest' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[#E5E7EB]">
      {/* Top developer announcement strip */}
      <div className="bg-[#0A0A0A] text-white text-[11px] sm:text-xs font-mono py-1.5 px-3 flex items-center justify-center gap-2 border-b border-[#262626]">
        <Terminal className="w-3 h-3 text-[#FF1F8F] shrink-0" />
        <span className="truncate">
          Use code <span className="bg-[#FF1F8F] text-white px-1.5 py-0.5 font-bold rounded-none">STICKERLOVE</span> for 15% off $20+
        </span>
        <span className="hidden md:inline text-[#6B6B6B]">|</span>
        <span className="hidden md:inline text-[#9CA3AF]">Free 2-day dispatch on custom vinyl packs</span>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo / Mascot Brand */}
        <Link to="/" className="flex items-center gap-2.5 group shrink-0">
          {/* Bun-inspired mascot sticker icon */}
          <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#0A0A0A] flex items-center justify-center transition-transform duration-150 group-hover:scale-105">
            <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 36 36" fill="none">
              <path d="M18 5C11 5 5 11 5 18C5 24.5 10 29.5 16.5 30.5V31H19.5V30.5C26 29.5 31 24.5 31 18C31 11 25 5 18 5Z" fill="#0A0A0A" />
              <path d="M18 5C17 8 15 11 11 13" stroke="#FF1F8F" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M18 5C19 8 21 11 25 13" stroke="#FF1F8F" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="13" cy="18" r="1.8" fill="#FFFFFF" />
              <circle cx="23" cy="18" r="1.8" fill="#FFFFFF" />
              <path d="M15.5 22.5C16.5 24 19.5 24 20.5 22.5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="10" cy="21" r="1.5" fill="#FF1F8F" />
              <circle cx="26" cy="21" r="1.5" fill="#FF1F8F" />
            </svg>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-[#0A0A0A]">
              Ctickers
            </span>
            <span className="hidden xs:inline-block font-mono text-[10px] text-[#6B6B6B] border border-[#E5E7EB] bg-[#F7F7F7] px-1.5 py-0.5 rounded-none">
              v1.0
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `px-3 py-1.5 text-[13.5px] font-sans font-semibold transition-colors flex items-center gap-1.5 border-b-2 rounded-none ${
                  isActive
                    ? 'text-[#0A0A0A] border-[#FF1F8F] bg-[#F7F7F7]'
                    : 'text-[#6B6B6B] border-transparent hover:text-[#0A0A0A] hover:bg-[#F7F7F7]'
                }`
              }
            >
              <span>{link.name}</span>
              {link.badge && (
                <span className={`text-[10px] font-mono uppercase font-bold px-1.5 py-0.5 rounded-none border ${
                  link.badge === 'Fast'
                    ? 'bg-[#FF1F8F] text-white border-[#FF1F8F]'
                    : 'bg-[#F7F7F7] text-[#0A0A0A] border-[#E5E7EB]'
                }`}>
                  {link.badge}
                </span>
              )}
            </NavLink>
          ))}
        </div>

        {/* Action Buttons: Custom CTA + Cart Drawer */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            to="/custom-sticker"
            className="hidden sm:inline-flex items-center gap-1.5 btn-primary text-[13px] tracking-tight"
          >
            <span>Custom Sticker</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {/* Cart Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 rounded-none border border-[#E5E7EB] hover:border-[#0A0A0A] text-[#0A0A0A] bg-white transition-colors touch-manipulation"
            aria-label="Open Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#FF1F8F] text-white text-[10px] font-mono font-bold px-1.5 py-0.2 rounded-none leading-tight border border-white">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile menu hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-none border border-[#E5E7EB] text-[#0A0A0A] hover:bg-[#F7F7F7] transition-colors touch-manipulation"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#E5E7EB] px-4 py-4 space-y-2 border-b">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center justify-between px-3 py-2.5 text-sm font-sans font-semibold rounded-none border-l-2 ${
                  isActive
                    ? 'border-[#FF1F8F] bg-[#F7F7F7] text-[#0A0A0A]'
                    : 'border-transparent text-[#6B6B6B] hover:text-[#0A0A0A] hover:bg-[#F7F7F7]'
                }`
              }
            >
              <span>{link.name}</span>
              {link.badge && (
                <span className="text-[10px] font-mono uppercase font-bold px-1.5 py-0.5 rounded-none bg-[#0A0A0A] text-white">
                  {link.badge}
                </span>
              )}
            </NavLink>
          ))}
          <div className="pt-2 border-t border-[#E5E7EB]">
            <Link
              to="/custom-sticker"
              className="w-full btn-primary text-sm flex items-center justify-center gap-2"
            >
              <span>Create Custom Sticker</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
