import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Sparkles, Filter, X } from 'lucide-react';
import StickerCard from '../components/StickerCard';
import { STICKER_PRODUCTS } from '../data/stickersData';

export default function StickersPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFinish, setSelectedFinish] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['All', 'Cute', 'Retro', 'Food & Drink', 'Dev & Tech', 'Nature', 'Aesthetic', 'Typography'];
  const finishes = ['All', 'Glossy', 'Matte', 'Holographic'];

  const filteredStickers = useMemo(() => {
    return STICKER_PRODUCTS.filter((sticker) => {
      const matchesCategory =
        selectedCategory === 'All' || sticker.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesFinish =
        selectedFinish === 'All' || sticker.finish.toLowerCase() === selectedFinish.toLowerCase();
      const matchesSearch =
        searchQuery.trim() === '' ||
        sticker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sticker.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        sticker.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesFinish && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // 'featured' retains original order
    });
  }, [selectedCategory, selectedFinish, searchQuery, sortBy]);

  const hasActiveFilters = selectedCategory !== 'All' || selectedFinish !== 'All' || searchQuery !== '';

  const clearFilters = () => {
    setSelectedCategory('All');
    setSelectedFinish('All');
    setSearchQuery('');
    setSortBy('featured');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-2.5 sm:space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curated Sticker Collection</span>
        </div>
        <h1 className="text-2xl xs:text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Explore Stickers
        </h1>
        <p className="text-slate-600 text-xs sm:text-base">
          Browse our favorite waterproof vinyl designs. Perfect for decorating laptops, hydro flasks, notebooks, and luggage.
        </p>
      </div>

      {/* Filter and Search Controls */}
      <div className="bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 border border-slate-200/90 shadow-sm space-y-3 sm:space-y-4">
        {/* Search Bar & Sort Dropdown */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stickers by name, tag, or theme..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2 sm:py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center justify-between sm:justify-start gap-2 sm:gap-3 w-full sm:w-auto">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 shrink-0">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Sort:</span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 sm:py-2.5 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-rose-500 cursor-pointer flex-1 sm:flex-none"
            >
              <option value="featured">Featured Picks</option>
              <option value="rating">Top Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Category Pills with horizontal touch scroll */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 scrollbar-none -mx-1 px-1">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1 hidden md:inline">
            Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 sm:px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold transition-all shrink-0 touch-manipulation ${
                selectedCategory === cat
                  ? 'bg-rose-500 text-white shadow-sm'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Finish Filters & Clear Option */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pt-2 border-t border-slate-100 text-xs">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-0">
            <span className="font-semibold text-slate-500 text-[11px] sm:text-xs">Finish:</span>
            {finishes.map((f) => (
              <button
                key={f}
                onClick={() => setSelectedFinish(f)}
                className={`px-2.5 py-1 rounded-lg text-[11px] sm:text-xs font-medium transition-colors shrink-0 ${
                  selectedFinish === f
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-rose-600 hover:text-rose-700 text-xs font-semibold flex items-center gap-1"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Product Grid - 2 cols on mobile, 3 on tablet, 4 on desktop */}
      <div>
        <div className="flex items-center justify-between text-xs text-slate-500 mb-3 sm:mb-4 px-1">
          <span>Showing <strong>{filteredStickers.length}</strong> stickers</span>
          <span className="hidden xs:inline">Free shipping on all custom orders</span>
        </div>

        {filteredStickers.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 text-center space-y-3">
            <p className="text-base font-bold text-slate-800">No stickers found</p>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              We couldn't find any stickers matching your criteria. Try adjusting your filters or search keywords.
            </p>
            <button
              onClick={clearFilters}
              className="mt-2 px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-slate-800"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {filteredStickers.map((sticker) => (
              <StickerCard key={sticker.id} sticker={sticker} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
