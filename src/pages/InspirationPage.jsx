import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Search,
  Bookmark,
  ExternalLink,
  ShoppingBag,
  Layers,
  Heart,
  Info,
  Check,
  Tag
} from 'lucide-react';
import { getInspirationPins } from '../services/pinterestService';
import { useCart } from '../context/CartContext';

export default function InspirationPage() {
  const { addToCart } = useCart();
  const [pins, setPins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [activeBoard, setActiveBoard] = useState('all');
  const [addedPins, setAddedPins] = useState({});
  const [selectedPin, setSelectedPin] = useState(null);

  const boardCategories = [
    { id: 'all', name: 'All Boards' },
    { id: 'Aesthetic', name: 'Aesthetic & Lo-Fi' },
    { id: 'Retro', name: '70s & 80s Retro' },
    { id: 'Nature', name: 'Botanical & Mushrooms' },
    { id: 'Cyberpunk', name: 'Cyberpunk & Neon' },
    { id: 'Holographic', name: 'Holo & Crystals' },
    { id: 'CuteAnimals', name: 'Cute Animals' },
  ];

  // Load pins via the modular Pinterest Service
  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    getInspirationPins({
      category: activeBoard === 'all' ? '' : activeBoard,
      search: search,
    })
      .then((res) => {
        if (isMounted) {
          setPins(res.pins);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error('Error fetching inspiration pins:', err);
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [activeBoard, search]);

  const handleGetThisSticker = (pin, e) => {
    if (e) e.stopPropagation();

    addToCart(
      {
        id: pin.id,
        name: pin.title,
        price: pin.basePrice || 3.49,
        image: pin.image,
      },
      1,
      {
        size: pin.suggestedSize || '3" Die-cut',
        finish: pin.suggestedFinish || 'Glossy',
        shape: 'Die-cut',
      }
    );

    setAddedPins((prev) => ({ ...prev, [pin.id]: true }));
    setTimeout(() => {
      setAddedPins((prev) => ({ ...prev, [pin.id]: false }));
    }, 1800);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Title Section as specified */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curated Moodboards</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Pinterest Inspiration
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          Find your favorite designs and turn them into stickers.
        </p>
      </div>

      {/* Developer Notice for Pinterest Reviewers */}
      <div className="bg-gradient-to-r from-rose-50 via-indigo-50 to-amber-50 border border-rose-200/80 rounded-2xl p-4 text-xs text-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
        <div className="flex items-start sm:items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-rose-500 text-white flex items-center justify-center shrink-0">
            <Info className="w-4 h-4" />
          </div>
          <div>
            <span className="font-bold text-slate-900">Pinterest Developer Integration Status: </span>
            <span className="text-slate-600">
              Demo mode active. Ready for Pinterest API v5 OAuth & Board sync via{' '}
              <code className="bg-white/80 px-1 py-0.5 rounded font-mono text-[11px] text-rose-600 border border-rose-200">
                src/services/pinterestService.js
              </code>.
            </span>
          </div>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider bg-white px-2.5 py-1 rounded-full text-rose-600 border border-rose-200 shrink-0 self-start sm:self-auto">
          Demo Mode (Pre-API Live)
        </span>
      </div>

      {/* Filters and Search Bar */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search inspiration pins, aesthetic tags, or board titles..."
              className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500 transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Board tags carousel */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {boardCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveBoard(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 ${
                activeBoard === cat.id
                  ? 'bg-rose-500 text-white shadow-sm'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* PINTEREST STYLE MASONRY GRID */}
      {loading ? (
        <div className="py-20 text-center space-y-3">
          <div className="w-8 h-8 border-4 border-rose-500 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs text-slate-400">Loading Pinterest inspiration gallery...</p>
        </div>
      ) : pins.length === 0 ? (
        <div className="bg-white rounded-3xl p-8 sm:p-12 text-center border border-slate-200 space-y-3">
          <p className="font-bold text-slate-800">No inspiration pins found</p>
          <p className="text-xs text-slate-500">Try changing your search term or select another board.</p>
          <button
            onClick={() => {
              setSearch('');
              setActiveBoard('all');
            }}
            className="text-xs font-bold text-rose-600 hover:underline"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6">
          {pins.map((pin) => {
            const isAdded = addedPins[pin.id];

            return (
              <div
                key={pin.id}
                onClick={() => setSelectedPin(pin)}
                className="masonry-col break-inside-avoid mb-4 sm:mb-6 bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                {/* Image Container with Hover Overlay */}
                <div className="relative overflow-hidden bg-slate-100">
                  <img
                    src={pin.image}
                    alt={pin.title}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-4 flex flex-col justify-between" />

                  {/* Pinterest-style top badge: saves count */}
                  <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold text-slate-800 shadow-sm flex items-center gap-1">
                    <Bookmark className="w-3 h-3 text-rose-500 fill-rose-500" />
                    <span>{pin.saves} saves</span>
                  </div>

                  {/* Suggested Finish pill */}
                  <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 bg-slate-900/80 backdrop-blur-md px-2 py-0.5 rounded-md text-[9px] sm:text-[10px] font-semibold text-white">
                    {pin.suggestedFinish}
                  </div>

                  {/* Floating "Get This Sticker" CTA Button */}
                  <div className="absolute bottom-2.5 inset-x-2.5 sm:bottom-3 sm:inset-x-3 z-10">
                    <button
                      onClick={(e) => handleGetThisSticker(pin, e)}
                      disabled={isAdded}
                      className={`w-full py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl text-[11px] sm:text-xs font-bold flex items-center justify-center gap-1.5 sm:gap-2 shadow-xl transition-all touch-manipulation ${
                        isAdded
                          ? 'bg-emerald-500 text-white scale-98'
                          : 'bg-rose-500 hover:bg-rose-600 text-white hover:scale-[1.02] active:scale-95'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
                          <span>Added to Cart!</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          <span>Get This Sticker (${(pin.basePrice || 3.49).toFixed(2)})</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Pin info below image */}
                <div className="p-3.5 sm:p-4 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-rose-600 transition-colors line-clamp-1">
                      {pin.title}
                    </h3>
                    <span className="text-xs font-black text-rose-600 shrink-0">
                      ${(pin.basePrice || 3.49).toFixed(2)}
                    </span>
                  </div>

                  <p className="text-[11px] sm:text-xs text-slate-500 line-clamp-2">
                    {pin.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {pin.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] sm:text-[10px] font-semibold bg-slate-100 text-slate-600 px-1.5 sm:px-2 py-0.5 rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Creator Attribution */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400">
                    <div className="flex items-center gap-1.5 truncate">
                      {pin.creatorAvatar ? (
                        <img
                          src={pin.creatorAvatar}
                          alt={pin.creator}
                          className="w-4 h-4 rounded-full object-cover shrink-0"
                        />
                      ) : (
                        <div className="w-4 h-4 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold text-[8px] shrink-0">
                          P
                        </div>
                      )}
                      <span className="font-medium text-slate-600 truncate">{pin.creator}</span>
                    </div>
                    <span className="text-[10px] text-slate-400 shrink-0">{pin.board}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* DETAIL MODAL WHEN CLICKING A PIN */}
      {selectedPin && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
          onClick={() => setSelectedPin(null)}
        >
          <div
            className="bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-slate-100 max-h-56 sm:max-h-[420px] overflow-hidden flex items-center justify-center p-4">
                <img
                  src={selectedPin.image}
                  alt={selectedPin.title}
                  className="max-h-full max-w-full object-contain rounded-xl sm:rounded-2xl shadow-lg sticker-outline"
                />
              </div>

              <div className="p-4 sm:p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="bg-rose-50 text-rose-600 font-bold px-2 py-0.5 rounded-full text-[11px]">
                      {selectedPin.board}
                    </span>
                    <span className="text-[11px]">{selectedPin.saves} Pinterest Saves</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-slate-900">{selectedPin.title}</h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {selectedPin.description}
                  </p>

                  <div className="mt-3 sm:mt-4 p-3 bg-slate-50 rounded-xl space-y-1.5 text-xs text-slate-600">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Recommended Size:</span>
                      <strong className="text-slate-800">{selectedPin.suggestedSize}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Recommended Finish:</span>
                      <strong className="text-slate-800">{selectedPin.suggestedFinish}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Material:</span>
                      <strong className="text-slate-800">Waterproof Heavy-Duty Vinyl</strong>
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5 sm:space-y-3 pt-3 sm:pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400">Base Unit Price:</span>
                    <span className="text-xl sm:text-2xl font-black text-slate-900">
                      ${(selectedPin.basePrice || 3.49).toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      handleGetThisSticker(selectedPin, e);
                      setSelectedPin(null);
                    }}
                    className="w-full bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-rose-500/20 transition-all text-xs sm:text-sm touch-manipulation"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add Inspired Sticker To Cart</span>
                  </button>

                  <button
                    onClick={() => setSelectedPin(null)}
                    className="w-full text-center text-xs text-slate-500 hover:text-slate-800 py-1"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
