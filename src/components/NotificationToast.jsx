import React from 'react';
import { ShoppingBag, CheckCircle, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function NotificationToast() {
  const { toast, setIsCartOpen } = useCart();

  if (!toast) return null;

  return (
    <aside
      aria-label="Cart Notification"
      className="fixed bottom-5 right-5 z-50 bg-slate-900 text-white p-4 rounded-2xl shadow-2xl flex items-center gap-3.5 max-w-sm border border-slate-700/60 animate-bounce-short"
    >
      <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
        <CheckCircle className="w-5 h-5" />
      </div>
      <div className="flex-1 min-w-0 text-xs">
        <p className="font-semibold text-white truncate">{toast.message}</p>
        <p className="text-slate-400 text-[11px]">Ready for checkout or continue browsing</p>
      </div>
      <button
        onClick={() => setIsCartOpen(true)}
        className="text-xs bg-white/10 hover:bg-white/20 text-white font-bold px-2.5 py-1.5 rounded-lg flex items-center gap-1 transition-colors shrink-0"
      >
        <span>View</span>
        <ArrowRight className="w-3 h-3" />
      </button>
    </aside>
  );
}
