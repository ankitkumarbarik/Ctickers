import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    clearCart
  } = useCart();

  const [isOrdered, setIsOrdered] = useState(false);

  if (!isCartOpen) return null;

  const handleCheckoutDemo = () => {
    // Fire festive confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setIsOrdered(true);
  };

  const handleResetAfterOrder = () => {
    setIsOrdered(false);
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-full sm:max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-rose-500" />
              <h3 className="text-base sm:text-lg font-bold text-slate-900">Your Cart</h3>
              <span className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full font-semibold">
                {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors touch-manipulation"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          {isOrdered ? (
            <div className="flex-1 p-6 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Demo Order Placed!</h4>
              <p className="text-sm text-slate-600 max-w-xs">
                This is a demo checkout for Ctickers. In production, this would direct to a secure checkout gateway.
              </p>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl w-full text-left text-xs space-y-1">
                <p className="font-semibold text-slate-700">Order Reference: #CTK-{(Math.random() * 90000 + 10000).toFixed(0)}</p>
                <p className="text-slate-500">Status: Demo Simulated Ready for Print</p>
              </div>
              <button
                onClick={handleResetAfterOrder}
                className="w-full bg-slate-900 text-white font-semibold py-3 rounded-xl hover:bg-slate-800 transition-colors"
              >
                Back to Shopping
              </button>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="flex-1 p-6 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-20 h-20 rounded-3xl bg-rose-50 flex items-center justify-center text-rose-400">
                <ShoppingBag className="w-10 h-10 stroke-1" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-900">Your cart is empty</h4>
                <p className="text-sm text-slate-500 mt-1 max-w-xs">
                  Discover our sticker catalog or upload your custom design to fill it up!
                </p>
              </div>
              <div className="flex flex-col gap-2 w-full pt-2">
                <Link
                  to="/stickers"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold py-2.5 rounded-xl transition-colors text-center text-sm"
                >
                  Explore Stickers
                </Link>
                <Link
                  to="/custom-sticker"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-2.5 rounded-xl transition-colors text-center text-sm"
                >
                  Create Custom Sticker
                </Link>
              </div>
            </div>
          ) : (
            <>
              {/* Item list */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4 divide-y divide-slate-100">
                {cartItems.map((item) => (
                  <div key={item.key} className="pt-4 first:pt-0 flex gap-3.5 items-start">
                    {/* Thumbnail */}
                    <div className="w-16 h-16 rounded-xl bg-slate-100 overflow-hidden border border-slate-200 shrink-0 p-1 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h5 className="font-bold text-sm text-slate-900 truncate">{item.name}</h5>
                      <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-slate-500 mt-1">
                        <span className="bg-slate-100 px-1.5 py-0.5 rounded font-medium">{item.size}</span>
                        <span className="bg-slate-100 px-1.5 py-0.5 rounded font-medium">{item.finish}</span>
                        <span className="bg-slate-100 px-1.5 py-0.5 rounded font-medium">{item.shape}</span>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                          <button
                            onClick={() => updateQuantity(item.key, -1)}
                            className="p-1 hover:bg-slate-200 text-slate-600 transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-2.5 text-xs font-bold text-slate-800">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.key, 1)}
                            className="p-1 hover:bg-slate-200 text-slate-600 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="font-bold text-sm text-slate-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                          <button
                            onClick={() => removeFromCart(item.key)}
                            className="text-slate-400 hover:text-rose-600 p-1 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer Summary */}
              <div className="p-5 border-t border-slate-200 bg-slate-50 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Shipping</span>
                  <span className="text-emerald-600 font-semibold">FREE (Demo)</span>
                </div>
                <div className="flex items-center justify-between text-base font-bold text-slate-900">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <button
                  onClick={handleCheckoutDemo}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-slate-900/10 transition-all hover:scale-[1.01]"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Demo Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-center text-slate-400">
                  Frontend demonstration only • No real payment charged
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
