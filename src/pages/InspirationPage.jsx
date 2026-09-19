import React, { useState, useEffect } from 'react';
import {
  Search,
  Bookmark,
  ShoppingBag,
  Info,
  Check,
  X
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
    { id: 'Nature', name: 'Botanical & Fungi' },
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
      {/* Title Section */}
      <div className="space-y-3 pb-6 border-b border-[#E5E7EB]">
        <div className="chip-bun-pink">
          Curated Moodboards
        </div>
        <h1 className="font-headline-lg text-3xl sm:text-5xl text-[#0A0A0A]">
          Pinterest Inspiration
        </h1>
        <p className="font-mono text-xs sm:text-sm text-[#6B6B6B] max-w-2xl">
          Discover trending aesthetics, digital artwork, and viral pins. Click any design to preview and print on waterproof vinyl.
        </p>
      </div>

      {/* Developer Notice */}
      <div className="bg-[#F7F7F7] border border-[#E5E7EB] p-4 text-xs font-mono text-[#0A0A0A] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-start sm:items-center gap-2.5">
          <div className="w-6 h-6 bg-[#0A0A0A] text-white flex items-center justify-center shrink-0">
            <Info className="w-3.5 h-3.5 text-[#FF1F8F]" />
          </div>
          <div>
            <strong className="text-[#0A0A0A]">Pinterest Developer Integration: </strong>
            <span className="text-[#6B6B6B]">
              Demo mode active. Ready for Pinterest API v5 OAuth sync via{' '}
              <code className="bg-white px-1.5 py-0.5 border border-[#E5E7EB] text-[#FF1F8F]">
                src/services/pinterestService.js
              </code>.
            </span>
          </div>
        </div>
        <span className="chip-bun text-[10px] bg-white self-start sm:self-auto shrink-0">
          Ready for API Live Sync
        </span>
      </div>

      {/* Filters and Search Bar */}
      <div className="card-bun space-y-4">
        <div className="relative w-full">
          <Search className="w-4 h-4 text-[#6B6B6B] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search inspiration pins, aesthetic tags, or board titles..."
            className="w-full bg-white border border-[#E5E7EB] rounded-none pl-10 pr-4 py-2 font-mono text-xs sm:text-sm text-[#0A0A0A] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0A0A0A] transition-colors"
          />
        </div>

        {/* Board tags carousel */}
        <div className="pt-2 border-t border-[#E5E7EB] flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {boardCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveBoard(cat.id)}
              className={`tab-bun text-xs py-1.5 px-3 shrink-0 ${
                activeBoard === cat.id ? 'active' : ''
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* PINTEREST STYLE MASONRY GRID */}
      {loading ? (
        <div className="py-20 text-center space-y-3 font-mono">
          <div className="w-6 h-6 border-2 border-[#0A0A0A] border-t-[#FF1F8F] animate-spin mx-auto" />
          <p className="text-xs text-[#6B6B6B]">Loading Pinterest inspiration gallery...</p>
        </div>
      ) : pins.length === 0 ? (
        <div className="card-bun p-12 text-center space-y-3 font-mono">
          <p className="font-bold text-[#0A0A0A] text-sm">No inspiration pins found</p>
          <p className="text-xs text-[#6B6B6B]">Try changing your search term or select another board.</p>
          <button
            onClick={() => {
              setSearch('');
              setActiveBoard('all');
            }}
            className="btn-secondary text-xs mt-2"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
          {pins.map((pin) => {
            const isAdded = addedPins[pin.id];

            return (
              <div
                key={pin.id}
                onClick={() => setSelectedPin(pin)}
                className="masonry-col break-inside-avoid mb-5 card-bun group cursor-pointer hover:border-[#0A0A0A] transition-colors"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden bg-[#F7F7F7] border border-[#E5E7EB]">
                  <img
                    src={pin.image}
                    alt={pin.title}
                    className="w-full object-cover group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />

                  {/* Top badges */}
                  <div className="absolute top-2 left-2 chip-bun text-[10px] bg-white">
                    <Bookmark className="w-3 h-3 text-[#FF1F8F] fill-current" />
                    <span>{pin.saves} saves</span>
                  </div>

                  <div className="absolute top-2 right-2 chip-bun text-[10px] bg-[#0A0A0A] text-white">
                    {pin.suggestedFinish}
                  </div>

                  {/* CTA overlay button */}
                  <div className="p-2 bg-white border-t border-[#E5E7EB]">
                    <button
                      onClick={(e) => handleGetThisSticker(pin, e)}
                      disabled={isAdded}
                      className={`w-full py-2 px-3 text-xs font-sans font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer border ${
                        isAdded
                          ? 'bg-[#0A0A0A] text-[#FF1F8F] border-[#0A0A0A]'
                          : 'bg-[#0A0A0A] hover:bg-[#FF1F8F] text-white border-[#0A0A0A] hover:border-[#FF1F8F]'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#FF1F8F]" />
                          <span>Added to Cart</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span>Print Sticker (${(pin.basePrice || 3.49).toFixed(2)})</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Pin Info */}
                <div className="pt-3 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-sans font-bold text-sm text-[#0A0A0A] group-hover:text-[#FF1F8F] transition-colors line-clamp-1">
                      {pin.title}
                    </h3>
                    <span className="font-mono font-bold text-xs text-[#0A0A0A] shrink-0">
                      ${(pin.basePrice || 3.49).toFixed(2)}
                    </span>
                  </div>

                  <p className="font-mono text-[11px] text-[#6B6B6B] line-clamp-2 leading-relaxed">
                    {pin.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {pin.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] text-[#6B6B6B] bg-[#F7F7F7] border border-[#E5E7EB] px-1.5 py-0.5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Creator */}
                  <div className="pt-2 border-t border-[#E5E7EB] flex items-center justify-between text-[11px] font-mono text-[#9CA3AF]">
                    <span className="text-[#0A0A0A] truncate">{pin.creator}</span>
                    <span className="shrink-0">{pin.board}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* DETAIL MODAL */}
      {selectedPin && (
        <div
          className="fixed inset-0 z-50 bg-[#0A0A0A]/60 flex items-center justify-center p-4"
          onClick={() => setSelectedPin(null)}
        >
          <div
            className="bg-white border border-[#0A0A0A] max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-[#E5E7EB]">
              <span className="chip-bun-pink text-xs">{selectedPin.board}</span>
              <button
                onClick={() => setSelectedPin(null)}
                className="p-1 border border-[#E5E7EB] hover:border-[#0A0A0A] text-[#0A0A0A]"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-[#F7F7F7] p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#E5E7EB]">
                <img
                  src={selectedPin.image}
                  alt={selectedPin.title}
                  className="max-h-64 object-contain"
                />
              </div>

              <div className="p-6 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <h3 className="font-sans font-bold text-lg text-[#0A0A0A]">{selectedPin.title}</h3>
                  <p className="font-mono text-xs text-[#6B6B6B] leading-relaxed">
                    {selectedPin.description}
                  </p>

                  <div className="p-3 bg-[#F7F7F7] border border-[#E5E7EB] space-y-1.5 font-mono text-xs">
                    <div className="flex justify-between">
                      <span className="text-[#6B6B6B]">Recommended Size:</span>
                      <strong className="text-[#0A0A0A]">{selectedPin.suggestedSize}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6B6B6B]">Recommended Finish:</span>
                      <strong className="text-[#0A0A0A]">{selectedPin.suggestedFinish}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#6B6B6B]">Material:</span>
                      <strong className="text-[#0A0A0A]">Waterproof 6 mil Vinyl</strong>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E5E7EB] space-y-3">
                  <div className="flex items-center justify-between font-mono">
                    <span className="text-xs text-[#6B6B6B]">Base Price:</span>
                    <span className="text-xl font-bold text-[#0A0A0A]">
                      ${(selectedPin.basePrice || 3.49).toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={(e) => {
                      handleGetThisSticker(selectedPin, e);
                      setSelectedPin(null);
                    }}
                    className="w-full btn-primary text-xs sm:text-sm py-3"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add Inspired Sticker To Cart</span>
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
