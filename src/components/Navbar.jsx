import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShoppingBag, Sparkles, Menu, X, ArrowRight, Flame } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Track scroll position for backdrop blur and shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Stickers', path: '/stickers' },
    { name: 'Custom Sticker', path: '/custom-sticker', badge: 'Popular' },
    { name: 'Inspiration', path: '/inspiration', badge: 'Pinterest' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-40 transition-all duration-200 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80' : 'bg-[#FAF9F6] border-b border-transparent'
    }`}>
      {/* Top promotional announcement bar */}
      <div className="bg-gradient-to-r from-rose-500 via-fuchsia-600 to-indigo-600 text-white text-[11px] sm:text-xs font-semibold py-1.5 px-3 text-center flex items-center justify-center gap-1.5">
        <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 animate-spin" style={{ animationDuration: '8s' }} />
        <span className="truncate">Use code <strong>STICKERLOVE</strong> for 15% off $20+</span>
        <span className="hidden md:inline text-rose-200">|</span>
        <span className="hidden md:inline">Free US shipping on custom orders</span>
      </div>

      <nav className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <Link to="/" className="flex items-center gap-2 sm:gap-2.5 group shrink-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-gradient-to-tr from-rose-500 to-fuchsia-600 flex items-center justify-center text-white shadow-md shadow-rose-500/20 group-hover:scale-105 transition-transform duration-200">
            <span className="font-extrabold text-base sm:text-xl tracking-tighter">C</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-2xl font-extrabold tracking-tight text-slate-900 flex items-center">
              Ctickers
              <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-rose-500 ml-1"></span>
            </span>
            <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-slate-400 -mt-1 hidden xs:block">
              Custom Vinyl Studio
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
                `relative px-3.5 py-2 rounded-full text-sm font-semibold transition-all duration-150 flex items-center gap-1.5 ${
                  isActive
                    ? 'text-rose-600 bg-rose-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`
              }
            >
              <span>{link.name}</span>
              {link.badge && (
                <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-full ${
                  link.badge === 'Popular' 
                    ? 'bg-amber-100 text-amber-700' 
                    : 'bg-rose-100 text-rose-700'
                }`}>
                  {link.badge}
                </span>
              )}
            </NavLink>
          ))}
        </div>

        {/* Action Buttons: Custom CTA + Cart Drawer */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          <Link
            to="/custom-sticker"
            className="hidden sm:inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full shadow-sm hover:shadow transition-all hover:scale-[1.02]"
          >
            <span>Upload Design</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </Link>

          {/* Cart Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 sm:p-2.5 rounded-full text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors touch-manipulation"
            aria-label="Open Cart"
          >
            <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6" />
            {totalItems > 0 && (
              <span className="absolute top-0.5 right-0.5 bg-rose-500 text-white text-[10px] sm:text-[11px] font-bold h-4.5 w-4.5 sm:h-5 sm:w-5 rounded-full flex items-center justify-center animate-pulse">
                {totalItems}
              </span>
            )}
          </button>

          {/* Mobile menu hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors touch-manipulation"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation with backdrop */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-[88px] bg-slate-900/30 backdrop-blur-xs z-30 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative z-40 md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-1.5 shadow-2xl max-h-[calc(100vh-90px)] overflow-y-auto">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-colors ${
                    isActive
                      ? 'bg-rose-50 text-rose-600'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`
                }
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-700">
                    {link.badge}
                  </span>
                )}
              </NavLink>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <Link
                to="/custom-sticker"
                className="w-full text-center bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 rounded-xl transition-colors shadow-sm text-sm flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Create Custom Sticker</span>
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
