import React, { useState, useRef } from 'react';
import {
  Upload,
  Image as ImageIcon,
  Check,
  ShoppingBag,
  ZoomIn,
  ShieldCheck,
  FileCheck
} from 'lucide-react';
import { useCart } from '../context/CartContext';

// Preset sample photos for rapid testing
const SAMPLE_PRESETS = [
  {
    name: 'Neon Shزمت Fox',
    url: 'https://images.unsplash.com/photo-1516934024742-b461fba47600?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Coffee Drip Co.',
    url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Cyberpunk Skyline',
    url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Golden Retriever Pup',
    url: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80',
  },
];

const SIZES = [
  { id: '2x2', label: '2" x 2"', multiplier: 0.85, popular: false },
  { id: '3x3', label: '3" x 3"', multiplier: 1.0, popular: true },
  { id: '4x4', label: '4" x 4"', multiplier: 1.35, popular: false },
  { id: '5x5', label: '5" x 5"', multiplier: 1.75, popular: false },
];

const SHAPES = [
  { id: 'Die-cut', name: 'Die-Cut', desc: 'Contour laser cut around image edges' },
  { id: 'Circle', name: 'Circle', desc: 'Classic clean circular vinyl badge' },
  { id: 'Square', name: 'Square', desc: 'Sharp edges architectural square' },
  { id: 'Kiss-cut', name: 'Kiss-Cut', desc: 'Peels off a larger backing sheet' },
];

const FINISHES = [
  { id: 'Glossy', name: 'Glossy Finish', desc: 'High-shine reflective vibrant punch', extra: 0 },
  { id: 'Matte', name: 'Soft Matte', desc: 'Silky smooth non-glare finish', extra: 0.2 },
  { id: 'Holographic', name: 'Rainbow Holographic', desc: 'Iridescent metallic rainbow foil', extra: 0.5 },
];

const QUANTITIES = [
  { qty: 10, unitDiscount: 1.0, label: '10 stickers (Sample pack)' },
  { qty: 25, unitDiscount: 0.88, label: '25 stickers' },
  { qty: 50, unitDiscount: 0.76, label: '50 stickers — Most Popular', badge: 'Popular' },
  { qty: 100, unitDiscount: 0.65, label: '100 stickers — Best Value', badge: 'Save 35%' },
  { qty: 200, unitDiscount: 0.55, label: '200 stickers' },
];

export default function CustomStickerPage() {
  const { addToCart } = useCart();
  const fileInputRef = useRef(null);

  const [imagePreview, setImagePreview] = useState(
    'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80'
  );
  const [imageName, setImageName] = useState('Custom Artwork');
  const [selectedSize, setSelectedSize] = useState(SIZES[1]); // 3" x 3"
  const [selectedShape, setSelectedShape] = useState(SHAPES[0]); // Die-cut
  const [selectedFinish, setSelectedFinish] = useState(FINISHES[0]); // Glossy
  const [selectedQuantity, setSelectedQuantity] = useState(QUANTITIES[2]); // 50
  const [isAdded, setIsAdded] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  // Dynamic pricing calculation
  const baseRate = 2.99;
  const unitPrice = Number(
    (baseRate * selectedSize.multiplier * selectedQuantity.unitDiscount + selectedFinish.extra).toFixed(2)
  );
  const totalPrice = Number((unitPrice * selectedQuantity.qty).toFixed(2));

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file (PNG, JPG, SVG, WebP).');
      return;
    }
    setImageName(file.name.replace(/\.[^/.]+$/, ''));
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files?.[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleAddToCart = () => {
    const customProduct = {
      id: `custom-${Date.now()}`,
      name: `Custom: ${imageName}`,
      price: unitPrice,
      image: imagePreview,
    };

    addToCart(customProduct, selectedQuantity.qty, {
      size: selectedSize.label,
      finish: selectedFinish.name,
      shape: selectedShape.name,
      customDetails: {
        totalPrice,
        unitPrice,
        quantity: selectedQuantity.qty,
      },
    });

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div className="space-y-3 pb-6 border-b border-[#E5E7EB]">
        <div className="chip-bun-pink">
          Interactive Custom Studio
        </div>
        <h1 className="font-headline-lg text-3xl sm:text-5xl text-[#0A0A0A]">
          Create Custom Sticker
        </h1>
        <p className="font-mono text-xs sm:text-sm text-[#6B6B6B] max-w-2xl">
          Upload any photo, artwork, or logo. Test live finishes, cut shapes, and configure exact batch quantities with transparent pricing.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: Sticky Live Preview & File Upload */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
          {/* Live Mockup Box */}
          <div className="card-bun space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-[#6B6B6B]">
              <span className="flex items-center gap-1">
                <ZoomIn className="w-3.5 h-3.5 text-[#0A0A0A]" /> Live Proof
              </span>
              <span className="chip-bun text-[11px] bg-[#F7F7F7]">
                {selectedShape.name} • {selectedSize.label}
              </span>
            </div>

            {/* Sticker Preview Stage */}
            <div className="relative aspect-square w-full bg-[#F7F7F7] border border-[#E5E7EB] p-6 flex items-center justify-center overflow-hidden">
              {/* Holographic sheen overlay */}
              {selectedFinish.id === 'Holographic' && (
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-[#FF1F8F]/10 via-transparent to-white/30 mix-blend-overlay z-20" />
              )}

              {/* The Sticker Mask Container */}
              <div
                className={`relative max-w-[85%] max-h-[85%] transition-all duration-200 flex items-center justify-center p-2 bg-white ${
                  selectedShape.id === 'Circle'
                    ? 'rounded-full border-2 border-white shadow-sm aspect-square'
                    : selectedShape.id === 'Square'
                    ? 'rounded-none border-2 border-white shadow-sm aspect-square'
                    : selectedShape.id === 'Kiss-cut'
                    ? 'rounded-none border border-dashed border-[#0A0A0A] p-3 bg-white'
                    : 'rounded-none border-2 border-white shadow-sm'
                }`}
              >
                <img
                  src={imagePreview}
                  alt="Custom Sticker Preview"
                  className={`w-full h-full object-cover ${
                    selectedShape.id === 'Circle' ? 'rounded-full' : 'rounded-none'
                  }`}
                />

                {selectedShape.id === 'Kiss-cut' && (
                  <span className="absolute bottom-1 right-2 text-[8px] font-mono text-[#0A0A0A] uppercase tracking-widest bg-[#F7F7F7] px-1 border border-[#E5E7EB]">
                    Kiss-Cut Backing
                  </span>
                )}
              </div>
            </div>

            {/* Micro details bar */}
            <div className="pt-2 border-t border-[#E5E7EB] flex items-center justify-between text-xs font-mono">
              <span className="text-[#6B6B6B] truncate max-w-[160px]">{imageName}</span>
              <span className="font-bold text-[#FF1F8F] shrink-0">{selectedFinish.name}</span>
            </div>
          </div>

          {/* Upload Component */}
          <div className="card-bun space-y-4">
            <h3 className="font-sans font-bold text-sm text-[#0A0A0A] flex items-center gap-2">
              <Upload className="w-4 h-4 text-[#FF1F8F]" />
              Upload Source Asset
            </h3>

            {/* Drag & Drop Zone */}
            <div
              onDragOver={(e) => {
                e.preventDefault();
                setDragOver(true);
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border border-dashed p-6 text-center cursor-pointer transition-colors ${
                dragOver
                  ? 'border-[#0A0A0A] bg-[#F7F7F7]'
                  : 'border-[#E5E7EB] hover:border-[#0A0A0A] bg-[#F7F7F7]'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <div className="w-10 h-10 border border-[#E5E7EB] bg-white flex items-center justify-center mx-auto mb-2 text-[#0A0A0A]">
                <ImageIcon className="w-5 h-5" />
              </div>
              <p className="font-sans font-semibold text-xs sm:text-sm text-[#0A0A0A]">
                Click or drag & drop image
              </p>
              <p className="font-mono text-[11px] text-[#6B6B6B] mt-0.5">
                PNG, JPG, SVG, WebP up to 25MB
              </p>
            </div>

            {/* Preset Samples */}
            <div className="space-y-2">
              <p className="font-mono text-xs text-[#6B6B6B]">Or test with demo specimens:</p>
              <div className="grid grid-cols-4 gap-2">
                {SAMPLE_PRESETS.map((sample) => (
                  <button
                    key={sample.name}
                    onClick={() => {
                      setImagePreview(sample.url);
                      setImageName(sample.name);
                    }}
                    className={`p-1 border transition-all rounded-none ${
                      imagePreview === sample.url
                        ? 'border-[#0A0A0A] bg-white ring-1 ring-[#0A0A0A]'
                        : 'border-[#E5E7EB] hover:border-[#0A0A0A] bg-[#F7F7F7]'
                    }`}
                  >
                    <img
                      src={sample.url}
                      alt={sample.name}
                      className="w-full h-11 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Customization Options & Pricing */}
        <div className="lg:col-span-7 space-y-6">
          {/* STEP 1: SIZE */}
          <div className="card-bun space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-sans font-bold text-sm text-[#0A0A0A] flex items-center gap-2">
                <span className="w-5 h-5 bg-[#0A0A0A] text-white text-xs font-mono flex items-center justify-center">1</span>
                Select Size
              </h3>
              <span className="font-mono text-xs text-[#FF1F8F] font-bold">Selected: {selectedSize.label}</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {SIZES.map((sz) => (
                <button
                  key={sz.id}
                  onClick={() => setSelectedSize(sz)}
                  className={`p-3 rounded-none border text-center transition-colors relative cursor-pointer ${
                    selectedSize.id === sz.id
                      ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]'
                      : 'bg-white hover:bg-[#F7F7F7] text-[#0A0A0A] border-[#E5E7EB]'
                  }`}
                >
                  {sz.popular && (
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[9px] font-mono font-bold uppercase px-1.5 py-0.2 bg-[#FF1F8F] text-white">
                      Popular
                    </span>
                  )}
                  <p className="font-mono font-bold text-sm sm:text-base">{sz.label}</p>
                  <p className={`font-mono text-[10px] mt-0.5 ${selectedSize.id === sz.id ? 'text-[#9CA3AF]' : 'text-[#6B6B6B]'}`}>
                    {sz.id === '3x3' ? 'Standard' : 'Custom'}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* STEP 2: SHAPE */}
          <div className="card-bun space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-sans font-bold text-sm text-[#0A0A0A] flex items-center gap-2">
                <span className="w-5 h-5 bg-[#0A0A0A] text-white text-xs font-mono flex items-center justify-center">2</span>
                Select Cut Shape
              </h3>
              <span className="font-mono text-xs text-[#FF1F8F] font-bold">Selected: {selectedShape.name}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {SHAPES.map((shape) => (
                <button
                  key={shape.id}
                  onClick={() => setSelectedShape(shape)}
                  className={`p-3 rounded-none border text-left transition-colors cursor-pointer ${
                    selectedShape.id === shape.id
                      ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]'
                      : 'bg-white hover:bg-[#F7F7F7] text-[#0A0A0A] border-[#E5E7EB]'
                  }`}
                >
                  <p className="font-sans font-bold text-sm">{shape.name}</p>
                  <p className={`font-mono text-[11px] mt-1 ${selectedShape.id === shape.id ? 'text-[#9CA3AF]' : 'text-[#6B6B6B]'}`}>
                    {shape.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* STEP 3: FINISH & MATERIAL */}
          <div className="card-bun space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-sans font-bold text-sm text-[#0A0A0A] flex items-center gap-2">
                <span className="w-5 h-5 bg-[#0A0A0A] text-white text-xs font-mono flex items-center justify-center">3</span>
                Select Vinyl Finish
              </h3>
              <span className="font-mono text-xs text-[#FF1F8F] font-bold">Selected: {selectedFinish.name}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {FINISHES.map((fn) => (
                <button
                  key={fn.id}
                  onClick={() => setSelectedFinish(fn)}
                  className={`p-3 rounded-none border text-left transition-colors cursor-pointer ${
                    selectedFinish.id === fn.id
                      ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]'
                      : 'bg-white hover:bg-[#F7F7F7] text-[#0A0A0A] border-[#E5E7EB]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="font-sans font-bold text-xs sm:text-sm">{fn.name}</p>
                    {fn.extra > 0 && (
                      <span className={`text-[10px] font-mono px-1 py-0.2 border ${
                        selectedFinish.id === fn.id
                          ? 'border-[#FF1F8F] text-[#FF1F8F]'
                          : 'border-[#E5E7EB] text-[#0A0A0A] bg-[#F7F7F7]'
                      }`}>
                        +${fn.extra.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <p className={`font-mono text-[11px] mt-1 ${selectedFinish.id === fn.id ? 'text-[#9CA3AF]' : 'text-[#6B6B6B]'}`}>
                    {fn.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* STEP 4: QUANTITY & DUMMY PRICE SUMMARY */}
          <div className="card-bun space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-sans font-bold text-sm text-[#0A0A0A] flex items-center gap-2">
                <span className="w-5 h-5 bg-[#0A0A0A] text-white text-xs font-mono flex items-center justify-center">4</span>
                Select Batch Quantity
              </h3>
              <span className="font-mono text-xs text-[#FF1F8F] font-bold">
                {selectedQuantity.qty} stickers
              </span>
            </div>

            <div className="space-y-2">
              {QUANTITIES.map((q) => (
                <button
                  key={q.qty}
                  onClick={() => setSelectedQuantity(q)}
                  className={`w-full p-3 rounded-none border flex items-center justify-between transition-colors cursor-pointer ${
                    selectedQuantity.qty === q.qty
                      ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]'
                      : 'bg-white hover:bg-[#F7F7F7] text-[#0A0A0A] border-[#E5E7EB]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-xs sm:text-sm">{q.qty} Stickers</span>
                    {q.badge && (
                      <span className={`text-[9px] font-mono uppercase font-bold px-1.5 py-0.5 ${
                        selectedQuantity.qty === q.qty
                          ? 'bg-[#FF1F8F] text-white'
                          : 'bg-[#F7F7F7] text-[#0A0A0A] border border-[#E5E7EB]'
                      }`}>
                        {q.badge}
                      </span>
                    )}
                  </div>

                  <div className="text-right font-mono">
                    <span className="font-bold text-xs sm:text-sm">
                      ${(baseRate * selectedSize.multiplier * q.unitDiscount * q.qty).toFixed(2)}
                    </span>
                    <span className={`text-[10px] sm:text-xs ml-1.5 ${selectedQuantity.qty === q.qty ? 'text-[#9CA3AF]' : 'text-[#6B6B6B]'}`}>
                      (${(baseRate * selectedSize.multiplier * q.unitDiscount).toFixed(2)}/ea)
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* CHECKOUT SUMMARY CARD & ADD TO CART */}
          <div className="bg-[#0A0A0A] text-white border border-[#262626] p-6 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#262626]">
              <div>
                <p className="font-mono text-xs text-[#9CA3AF] uppercase tracking-wider">Total Dummy Cost</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-mono text-3xl sm:text-4xl font-bold">${totalPrice.toFixed(2)}</span>
                  <span className="font-mono text-xs text-[#9CA3AF]">
                    (${unitPrice.toFixed(2)} / ea)
                  </span>
                </div>
              </div>

              <div className="bg-[#141414] border border-[#262626] px-3 py-2 text-xs font-mono space-y-0.5">
                <p className="text-white font-bold">Free 2-Day Shipping</p>
                <p className="text-[#9CA3AF] text-[11px]">Laser die-cut dispatch in 24h</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs text-[#9CA3AF]">
              <div>
                <span className="text-[#6B6B6B] block text-[10px]">Shape:</span>
                <strong className="text-white truncate block">{selectedShape.name}</strong>
              </div>
              <div>
                <span className="text-[#6B6B6B] block text-[10px]">Size:</span>
                <strong className="text-white block">{selectedSize.label}</strong>
              </div>
              <div>
                <span className="text-[#6B6B6B] block text-[10px]">Finish:</span>
                <strong className="text-white truncate block">{selectedFinish.name}</strong>
              </div>
              <div>
                <span className="text-[#6B6B6B] block text-[10px]">Qty:</span>
                <strong className="text-white block">{selectedQuantity.qty} pcs</strong>
              </div>
            </div>

            {/* Add To Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={isAdded}
              className={`w-full py-3.5 px-6 font-sans font-bold text-sm flex items-center justify-center gap-2 rounded-none transition-colors border cursor-pointer ${
                isAdded
                  ? 'bg-[#0A0A0A] text-[#FF1F8F] border-[#FF1F8F]'
                  : 'bg-[#FF1F8F] hover:bg-[#E0177D] text-white border-[#FF1F8F] hover:border-[#E0177D]'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4 text-[#FF1F8F]" />
                  <span>Custom Sticker Added to Cart!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add {selectedQuantity.qty} Stickers (${totalPrice.toFixed(2)})</span>
                </>
              )}
            </button>

            <div className="flex flex-col xs:flex-row items-center justify-center gap-4 text-[11px] font-mono text-[#9CA3AF] text-center pt-1 border-t border-[#262626]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF1F8F]" />
                Digital optical proof before print
              </span>
              <span className="flex items-center gap-1.5">
                <FileCheck className="w-3.5 h-3.5 text-white" />
                100% waterproof vinyl guarantee
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
