import React, { useState, useRef } from 'react';
import {
  Upload,
  Image as ImageIcon,
  Check,
  Sparkles,
  ShoppingBag,
  RotateCcw,
  Layers,
  ZoomIn,
  ShieldCheck,
  FileCheck
} from 'lucide-react';
import { useCart } from '../context/CartContext';

// Preset sample photos for rapid testing if user doesn't have an image ready
const SAMPLE_PRESETS = [
  {
    name: 'Neon Shزمت Fox',
    url: 'https://images.unsplash.com/photo-1516934024742-b461fba47600?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Coffee Drip Coffee Co.',
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
  { id: 'Die-cut', name: 'Die-Cut', desc: 'Contour laser cut around image edges', icon: '✂️' },
  { id: 'Circle', name: 'Circle', desc: 'Classic clean circular vinyl badge', icon: '⭕' },
  { id: 'Square', name: 'Square', desc: 'Rounded corners modern square', icon: '⏹️' },
  { id: 'Kiss-cut', name: 'Kiss-Cut', desc: 'Peels off a larger square backing sheet', icon: '📄' },
];

const FINISHES = [
  { id: 'Glossy', name: 'Glossy Finish', desc: 'High-shine reflective vibrant punch', extra: 0 },
  { id: 'Matte', name: 'Soft Matte', desc: 'Silky smooth non-glare premium finish', extra: 0.2 },
  { id: 'Holographic', name: 'Rainbow Holographic', desc: 'Shimmering iridescent rainbow foil', extra: 0.5 },
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

  // Handle local file selection
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2.5 sm:space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Interactive Custom Studio</span>
        </div>
        <h1 className="text-2xl xs:text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Create Custom Sticker
        </h1>
        <p className="text-slate-600 text-xs sm:text-base">
          Upload any photo, artwork, or logo. Preview live with real finishes, cuts, and transparent dummy pricing.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
        {/* LEFT COLUMN: Sticky Live Preview & File Upload */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-5 sm:space-y-6">
          {/* Live Mockup Box */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-sm text-center relative overflow-hidden">
            <div className="flex items-center justify-between text-xs text-slate-400 font-semibold mb-3 sm:mb-4">
              <span className="flex items-center gap-1">
                <ZoomIn className="w-3.5 h-3.5" /> Live Preview
              </span>
              <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full text-[11px] sm:text-xs">
                {selectedShape.name} • {selectedSize.label}
              </span>
            </div>

            {/* Sticker Preview Stage */}
            <div className="relative aspect-square max-w-[280px] sm:max-w-none mx-auto w-full bg-grid-pattern bg-[#f8fafc] rounded-2xl p-6 sm:p-8 flex items-center justify-center overflow-hidden border border-slate-100">
              
              {/* Finish specific effects */}
              {selectedFinish.id === 'Holographic' && (
                <div className="absolute inset-0 pointer-events-none holo-card opacity-35 mix-blend-color-dodge z-20" />
              )}

              {/* The Sticker Mask Container */}
              <div
                className={`relative max-w-[85%] max-h-[85%] transition-all duration-300 flex items-center justify-center p-2 bg-white ${
                  selectedShape.id === 'Circle'
                    ? 'rounded-full diecut-border aspect-square'
                    : selectedShape.id === 'Square'
                    ? 'rounded-2xl diecut-border aspect-square'
                    : selectedShape.id === 'Kiss-cut'
                    ? 'rounded-lg border-2 border-dashed border-rose-300 shadow-md p-3 sm:p-4 bg-slate-50'
                    : 'rounded-2xl diecut-border'
                }`}
              >
                <img
                  src={imagePreview}
                  alt="Custom Sticker Preview"
                  className={`w-full h-full object-cover transition-all duration-300 ${
                    selectedShape.id === 'Circle' ? 'rounded-full' : 'rounded-xl'
                  }`}
                />

                {/* Kiss-cut label */}
                {selectedShape.id === 'Kiss-cut' && (
                  <span className="absolute bottom-1 right-2 text-[8px] sm:text-[9px] font-bold text-rose-400 uppercase tracking-widest">
                    Kiss-Cut Backing
                  </span>
                )}
              </div>
            </div>

            {/* Micro details bar */}
            <div className="mt-3 sm:mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="truncate max-w-[150px] sm:max-w-none">{imageName}</span>
              <span className="font-semibold text-rose-600 shrink-0">{selectedFinish.name}</span>
            </div>
          </div>

          {/* Upload Component */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-sm space-y-3 sm:space-y-4">
            <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
              <Upload className="w-4 h-4 text-rose-500" />
              Upload Image From Your Device
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
              className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
                dragOver
                  ? 'border-rose-500 bg-rose-50/50 scale-[0.99]'
                  : 'border-slate-200 hover:border-slate-400 bg-slate-50/50'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-200 flex items-center justify-center mx-auto mb-3 text-slate-600">
                <ImageIcon className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold text-slate-800">
                Click to browse or drag & drop photo
              </p>
              <p className="text-xs text-slate-400 mt-1">
                PNG, JPG, SVG, WebP up to 25MB
              </p>
            </div>

            {/* Preset Samples */}
            <div>
              <p className="text-xs font-semibold text-slate-500 mb-2">Or test with demo sample designs:</p>
              <div className="grid grid-cols-4 gap-2">
                {SAMPLE_PRESETS.map((sample) => (
                  <button
                    key={sample.name}
                    onClick={() => {
                      setImagePreview(sample.url);
                      setImageName(sample.name);
                    }}
                    className={`p-1 rounded-xl border transition-all ${
                      imagePreview === sample.url
                        ? 'border-rose-500 ring-2 ring-rose-200'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <img
                      src={sample.url}
                      alt={sample.name}
                      className="w-full h-12 object-cover rounded-lg"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Customization Options & Pricing */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8">
          {/* STEP 1: SIZE */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-sm space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm sm:text-base text-slate-900 flex items-center gap-2">
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center shrink-0">1</span>
                Select Sticker Size
              </h3>
              <span className="text-xs font-semibold text-rose-600">Selected: {selectedSize.label}</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {SIZES.map((sz) => (
                <button
                  key={sz.id}
                  onClick={() => setSelectedSize(sz)}
                  className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-center transition-all relative touch-manipulation ${
                    selectedSize.id === sz.id
                      ? 'border-rose-500 bg-rose-50/40 ring-2 ring-rose-400/20'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  {sz.popular && (
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[8px] sm:text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-rose-500 text-white shrink-0 whitespace-nowrap">
                      Best Size
                    </span>
                  )}
                  <p className="text-sm sm:text-base font-extrabold text-slate-900">{sz.label}</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5">Custom fit</p>
                </button>
              ))}
            </div>
          </div>

          {/* STEP 2: SHAPE */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-sm space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm sm:text-base text-slate-900 flex items-center gap-2">
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center shrink-0">2</span>
                Select Cut Shape
              </h3>
              <span className="text-xs font-semibold text-rose-600">Selected: {selectedShape.name}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {SHAPES.map((shape) => (
                <button
                  key={shape.id}
                  onClick={() => setSelectedShape(shape)}
                  className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-left flex items-start gap-3 transition-all touch-manipulation ${
                    selectedShape.id === shape.id
                      ? 'border-rose-500 bg-rose-50/40 ring-2 ring-rose-400/20'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <span className="text-xl sm:text-2xl shrink-0 mt-0.5">{shape.icon}</span>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-slate-900">{shape.name}</p>
                    <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">{shape.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* STEP 3: FINISH & MATERIAL */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-sm space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm sm:text-base text-slate-900 flex items-center gap-2">
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center shrink-0">3</span>
                Select Vinyl Finish
              </h3>
              <span className="text-xs font-semibold text-rose-600">Selected: {selectedFinish.name}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
              {FINISHES.map((fn) => (
                <button
                  key={fn.id}
                  onClick={() => setSelectedFinish(fn)}
                  className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl border text-left transition-all touch-manipulation ${
                    selectedFinish.id === fn.id
                      ? 'border-rose-500 bg-rose-50/40 ring-2 ring-rose-400/20'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xs sm:text-sm font-bold text-slate-900">{fn.name}</p>
                    {fn.extra > 0 && (
                      <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">
                        +${fn.extra.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-1">{fn.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* STEP 4: QUANTITY & DUMMY PRICE SUMMARY */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-sm space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm sm:text-base text-slate-900 flex items-center gap-2">
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center shrink-0">4</span>
                Select Quantity
              </h3>
              <span className="text-xs font-semibold text-rose-600">
                {selectedQuantity.qty} stickers
              </span>
            </div>

            <div className="space-y-2">
              {QUANTITIES.map((q) => (
                <button
                  key={q.qty}
                  onClick={() => setSelectedQuantity(q)}
                  className={`w-full p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border flex items-center justify-between transition-all touch-manipulation ${
                    selectedQuantity.qty === q.qty
                      ? 'border-slate-900 bg-slate-900 text-white'
                      : 'border-slate-200 hover:border-slate-300 bg-white text-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xs sm:text-sm">{q.qty} Stickers</span>
                    {q.badge && (
                      <span className={`text-[9px] sm:text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        selectedQuantity.qty === q.qty
                          ? 'bg-rose-500 text-white'
                          : 'bg-rose-100 text-rose-700'
                      }`}>
                        {q.badge}
                      </span>
                    )}
                  </div>

                  <div className="text-right">
                    <span className="font-bold text-xs sm:text-sm">
                      ${(baseRate * selectedSize.multiplier * q.unitDiscount * q.qty).toFixed(2)}
                    </span>
                    <span className={`text-[10px] sm:text-xs ml-1.5 ${selectedQuantity.qty === q.qty ? 'text-slate-300' : 'text-slate-400'}`}>
                      (${(baseRate * selectedSize.multiplier * q.unitDiscount).toFixed(2)}/ea)
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* CHECKOUT SUMMARY CARD & ADD TO CART */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 space-y-5 sm:space-y-6 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-5 sm:pb-6 border-b border-slate-700">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Total Dummy Price</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl sm:text-4xl font-black">${totalPrice.toFixed(2)}</span>
                  <span className="text-xs text-slate-400">
                    (${unitPrice.toFixed(2)} ea)
                  </span>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl sm:rounded-2xl px-3.5 py-2 text-xs space-y-0.5 backdrop-blur-sm border border-white/10 self-start sm:self-auto">
                <p className="font-semibold text-white">✨ Free Shipping Included</p>
                <p className="text-slate-300 text-[11px]">Fast 2-Day Production Dispatch</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-slate-300">
              <div>
                <span className="text-slate-500 block text-[11px]">Shape:</span>
                <strong className="text-white truncate block">{selectedShape.name}</strong>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Size:</span>
                <strong className="text-white block">{selectedSize.label}</strong>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Finish:</span>
                <strong className="text-white truncate block">{selectedFinish.name}</strong>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Qty:</span>
                <strong className="text-white block">{selectedQuantity.qty} pcs</strong>
              </div>
            </div>

            {/* Add To Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={isAdded}
              className={`w-full py-3.5 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl font-black text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-xl touch-manipulation ${
                isAdded
                  ? 'bg-emerald-500 text-white scale-98'
                  : 'bg-gradient-to-r from-rose-500 to-fuchsia-600 hover:from-rose-600 hover:to-fuchsia-700 text-white hover:scale-[1.01] active:scale-98'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-5 h-5 stroke-[3]" />
                  <span>Custom Sticker Added to Cart!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-5 h-5" />
                  <span>Add {selectedQuantity.qty} Stickers (${totalPrice.toFixed(2)})</span>
                </>
              )}
            </button>

            <div className="flex flex-col xs:flex-row items-center justify-center gap-2 sm:gap-6 text-[11px] text-slate-400 text-center">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                Proof approval before print
              </span>
              <span className="flex items-center gap-1">
                <FileCheck className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                Waterproof vinyl guarantee
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
