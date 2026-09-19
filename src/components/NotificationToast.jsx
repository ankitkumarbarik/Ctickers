import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function NotificationToast() {
  const { toast, setIsCartOpen } = useCart();

  if (!toast) return null;

  return (
    <aside
      aria-label="Cart Notification"
      className="fixed bottom-5 right-5 z-50 bg-[#0A0A0A] text-white p-3.5 border border-[#262626] flex items-center gap-3 max-w-sm font-mono text-xs shadow-lg"
    >
      <div className="w-7 h-7 bg-[#141414] text-[#FF1F8F] flex items-center justify-center shrink-0 border border-[#262626]">
        <CheckCircle className="w-4 h-4" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-bold text-white truncate">{toast.message}</p>
        <p className="text-[#9CA3AF] text-[10px]">Added to queue</p>
      </div>
      <button
        onClick={() => setIsCartOpen(true)}
        className="btn-primary text-xs py-1 px-2.5 min-h-0"
      >
        <span>View</span>
        <ArrowRight className="w-3 h-3" />
      </button>
    </aside>
  );
}
