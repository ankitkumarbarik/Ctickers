import React from 'react';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import NotificationToast from './components/NotificationToast';
import ScrollToTop from './components/ScrollToTop';
import { CartProvider } from './context/CartContext';

import HomePage from './pages/HomePage';
import StickersPage from './pages/StickersPage';
import CustomStickerPage from './pages/CustomStickerPage';
import InspirationPage from './pages/InspirationPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ContactPage from './pages/ContactPage';

function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center space-y-4">
      <div className="text-6xl font-black text-rose-500">404</div>
      <h1 className="text-2xl font-black text-slate-900">Page Not Found</h1>
      <p className="text-sm text-slate-500">
        The sticker page you are looking for doesn't exist or has moved.
      </p>
      <div className="pt-2">
        <Link
          to="/"
          className="inline-block bg-slate-900 text-white text-xs font-bold px-6 py-3 rounded-xl hover:bg-slate-800 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-slate-900 antialiased selection:bg-rose-500 selection:text-white">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/stickers" element={<StickersPage />} />
            <Route path="/custom-sticker" element={<CustomStickerPage />} />
            <Route path="/inspiration" element={<InspirationPage />} />
            {/* The /privacy route must work reliably for Pinterest Developer App Verification */}
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
        <CartDrawer />
        <NotificationToast />
      </div>
    </CartProvider>
  );
}
