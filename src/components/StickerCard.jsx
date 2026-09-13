import React, { useState } from 'react';
import { ShoppingBag, Star, Check, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function StickerCard({ sticker }) {
  const { addToCart } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(sticker, 1, {
      size: sticker.size,
      finish: sticker.finish,
      shape: sticker.shape
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1600);
  };

  return (
    <div className="group bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 hover:border-rose-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden">
      {/* Image container */}
      <div className="relative aspect-square w-full bg-gradient-to-br from-slate-50 via-slate-100 to-rose-50/30 p-3.5 sm:p-6 flex items-center justify-center overflow-hidden">
        {/* Badge */}
        {sticker.badge && (
          <span className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10 text-[9px] sm:text-[11px] font-extrabold uppercase tracking-wide px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-white/95 text-slate-900 shadow-sm border border-slate-200/60 flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-500 fill-amber-400 shrink-0" />
            <span>{sticker.badge}</span>
          </span>
        )}

        {/* Finish Tag */}
        <span className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-10 text-[9px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded-md bg-slate-900/75 text-white backdrop-blur-sm">
          {sticker.finish}
        </span>

        {/* Sticker visual with die-cut shadow effect */}
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={sticker.image}
            alt={sticker.name}
            className="max-h-full max-w-full object-contain rounded-xl sticker-outline group-hover:scale-105 group-hover:rotate-2 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      </div>

      {/* Card Content */}
      <div className="p-3.5 sm:p-5 flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
        <div>
          <div className="flex items-center justify-between gap-1 text-[11px] sm:text-xs text-slate-400 font-medium">
            <span className="truncate">{sticker.category}</span>
            <div className="flex items-center gap-0.5 sm:gap-1 text-amber-500 font-bold shrink-0">
              <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
              <span>{sticker.rating}</span>
              <span className="text-slate-400 font-normal hidden xs:inline">({sticker.reviewsCount})</span>
            </div>
          </div>

          <h3 className="font-bold text-slate-900 text-sm sm:text-base mt-1 group-hover:text-rose-600 transition-colors line-clamp-1">
            {sticker.name}
          </h3>

          <p className="text-[11px] sm:text-xs text-slate-500 mt-1 line-clamp-2">
            {sticker.description}
          </p>
        </div>

        {/* Price and CTA */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2">
          <div className="flex items-baseline gap-1">
            <span className="text-base sm:text-xl font-extrabold text-slate-900">
              ${sticker.price.toFixed(2)}
            </span>
            {sticker.originalPrice && (
              <span className="text-[10px] sm:text-xs text-slate-400 line-through">
                ${sticker.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            disabled={justAdded}
            className={`px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold flex items-center gap-1 sm:gap-1.5 transition-all shadow-sm shrink-0 touch-manipulation ${
              justAdded
                ? 'bg-emerald-500 text-white scale-95'
                : 'bg-slate-900 hover:bg-rose-600 text-white hover:shadow-rose-500/20 active:scale-95'
            }`}
            aria-label={`Add ${sticker.name} to cart`}
          >
            {justAdded ? (
              <>
                <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                <span>Added!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
