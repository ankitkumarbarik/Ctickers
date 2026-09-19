import React, { useState } from 'react';
import { ShoppingBag, Star, Check } from 'lucide-react';
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
    <div className="card-bun group flex flex-col justify-between hover:border-[#0A0A0A] transition-colors duration-150">
      {/* Top Image Stage */}
      <div>
        <div className="relative aspect-square w-full bg-[#F7F7F7] border border-[#E5E7EB] p-4 flex items-center justify-center overflow-hidden">
          {/* Badge */}
          {sticker.badge && (
            <span className="absolute top-2 left-2 z-10 chip-bun-pink">
              {sticker.badge}
            </span>
          )}

          {/* Finish Tag */}
          <span className="absolute top-2 right-2 z-10 chip-bun text-[10px] bg-white text-[#0A0A0A]">
            {sticker.finish}
          </span>

          {/* Sticker Visual */}
          <div className="relative w-full h-full flex items-center justify-center p-2">
            <img
              src={sticker.image}
              alt={sticker.name}
              className="max-h-full max-w-full object-contain transition-transform duration-200 group-hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>

        {/* Metadata & Title */}
        <div className="mt-3.5 space-y-1.5">
          <div className="flex items-center justify-between text-[11px] font-mono text-[#6B6B6B]">
            <span className="truncate">{sticker.category}</span>
            <div className="flex items-center gap-1 text-[#0A0A0A] font-semibold shrink-0">
              <Star className="w-3 h-3 fill-current text-[#FF1F8F]" />
              <span>{sticker.rating}</span>
              <span className="text-[#9CA3AF] text-[10px]">({sticker.reviewsCount})</span>
            </div>
          </div>

          <h3 className="font-sans font-semibold text-[15px] leading-tight text-[#0A0A0A] group-hover:text-[#FF1F8F] transition-colors line-clamp-1">
            {sticker.name}
          </h3>

          <p className="font-mono text-[12px] text-[#6B6B6B] line-clamp-2 leading-relaxed">
            {sticker.description}
          </p>
        </div>
      </div>

      {/* Price and CTA */}
      <div className="mt-4 pt-3 border-t border-[#E5E7EB] flex items-center justify-between gap-2">
        <div className="flex items-baseline gap-1.5">
          <span className="font-mono font-bold text-base sm:text-lg text-[#0A0A0A]">
            ${sticker.price.toFixed(2)}
          </span>
          {sticker.originalPrice && (
            <span className="font-mono text-[11px] text-[#9CA3AF] line-through">
              ${sticker.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        <button
          onClick={handleAddToCart}
          disabled={justAdded}
          className={`h-9 px-3 rounded-none text-[13px] font-sans font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer border ${
            justAdded
              ? 'bg-[#0A0A0A] text-[#FF1F8F] border-[#0A0A0A]'
              : 'bg-[#0A0A0A] hover:bg-[#FF1F8F] text-white border-[#0A0A0A] hover:border-[#FF1F8F]'
          }`}
          aria-label={`Add ${sticker.name} to cart`}
        >
          {justAdded ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#FF1F8F]" />
              <span>Added</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Add</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
