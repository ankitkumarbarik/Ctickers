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
    confetti({
      particleCount: 80,
      spread: 60,
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
        className="fixed inset-0 bg-[#0A0A0A]/50 transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-full sm:max-w-md bg-white border-l border-[#E5E7EB] flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-[#E5E7EB] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-[#FF1F8F]" />
              <h3 className="font-sans font-bold text-base text-[#0A0A0A]">Shopping Cart</h3>
              <span className="chip-bun text-[10px] py-0 px-1.5">
                {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1 border border-[#E5E7EB] hover:border-[#0A0A0A] text-[#0A0A0A] cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          {isOrdered ? (
            <div className="flex-1 p-6 flex flex-col items-center justify-center text-center space-y-4 font-mono">
              <div className="w-12 h-12 bg-[#0A0A0A] text-[#FF1F8F] flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-sans font-bold text-xl text-[#0A0A0A]">Demo Order Placed</h4>
              <p className="text-xs text-[#6B6B6B] max-w-xs">
                Simulated checkout complete. In production, this routes through payment gateway & print queue.
              </p>
              <div className="p-3 bg-[#F7F7F7] border border-[#E5E7EB] w-full text-left text-xs space-y-1">
                <p className="font-bold text-[#0A0A0A]">Order Reference: #CTK-{(Math.random() * 90000 + 10000).toFixed(0)}</p>
                <p className="text-[#6B6B6B]">Status: Ready for Laser Die-Cut Queue</p>
              </div>
              <button
                onClick={handleResetAfterOrder}
                className="w-full btn-secondary text-xs py-3"
              >
                Back to Shopping
              </button>
            </div>
          ) : cartItems.length === 0 ? (
            <div className="flex-1 p-6 flex flex-col items-center justify-center text-center space-y-4 font-mono">
              <div className="w-14 h-14 bg-[#F7F7F7] border border-[#E5E7EB] flex items-center justify-center text-[#9CA3AF]">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-base text-[#0A0A0A]">Your cart is empty</h4>
                <p className="text-xs text-[#6B6B6B] mt-1 max-w-xs">
                  Browse the sticker catalog or create a custom die-cut design.
                </p>
              </div>
              <div className="flex flex-col gap-2 w-full pt-2">
                <Link
                  to="/stickers"
                  onClick={() => setIsCartOpen(false)}
                  className="btn-primary text-xs w-full py-2.5"
                >
                  Explore Stickers
                </Link>
                <Link
                  to="/custom-sticker"
                  onClick={() => setIsCartOpen(false)}
                  className="btn-outline text-xs w-full py-2.5"
                >
                  Custom Sticker Studio
                </Link>
              </div>
            </div>
          ) : (
            <>
              {/* Item list */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 divide-y divide-[#E5E7EB]">
                {cartItems.map((item) => (
                  <div key={item.key} className="pt-3 first:pt-0 flex gap-3 items-start">
                    {/* Thumbnail */}
                    <div className="w-14 h-14 bg-[#F7F7F7] border border-[#E5E7EB] shrink-0 p-1 flex items-center justify-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0 font-mono">
                      <h5 className="font-sans font-bold text-xs sm:text-sm text-[#0A0A0A] truncate">{item.name}</h5>
                      <div className="flex flex-wrap items-center gap-1 text-[10px] text-[#6B6B6B] mt-0.5">
                        <span className="bg-[#F7F7F7] border border-[#E5E7EB] px-1">{item.size}</span>
                        <span className="bg-[#F7F7F7] border border-[#E5E7EB] px-1">{item.finish}</span>
                        <span className="bg-[#F7F7F7] border border-[#E5E7EB] px-1">{item.shape}</span>
                      </div>

                      <div className="flex items-center justify-between mt-2.5">
                        <div className="flex items-center border border-[#E5E7EB]">
                          <button
                            onClick={() => updateQuantity(item.key, -1)}
                            className="p-1 hover:bg-[#F7F7F7] text-[#0A0A0A]"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-bold text-[#0A0A0A]">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.key, 1)}
                            className="p-1 hover:bg-[#F7F7F7] text-[#0A0A0A]"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="flex items-center gap-2.5">
                          <span className="font-bold text-xs sm:text-sm text-[#0A0A0A]">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                          <button
                            onClick={() => removeFromCart(item.key)}
                            className="text-[#9CA3AF] hover:text-[#FF1F8F] p-0.5"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer Summary */}
              <div className="p-4 border-t border-[#E5E7EB] bg-[#F7F7F7] space-y-3 font-mono">
                <div className="flex items-center justify-between text-xs text-[#6B6B6B]">
                  <span>Shipping</span>
                  <span className="text-[#0A0A0A] font-bold">FREE (Demo)</span>
                </div>
                <div className="flex items-center justify-between text-sm font-bold text-[#0A0A0A]">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <button
                  onClick={handleCheckoutDemo}
                  className="w-full btn-primary text-xs py-3"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Demo Checkout (${subtotal.toFixed(2)})</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[10px] text-center text-[#9CA3AF]">
                  Demonstration checkout • No payment charged
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
