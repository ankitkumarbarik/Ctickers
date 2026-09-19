import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
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
      <div className="space-y-3 pb-6 border-b border-[#E5E7EB]">
        <div className="chip-bun">
          Curated Catalog
        </div>
        <h1 className="font-headline-lg text-3xl sm:text-5xl text-[#0A0A0A]">
          Sticker Catalog
        </h1>
        <p className="font-mono text-xs sm:text-sm text-[#6B6B6B] max-w-2xl">
          Laser-cut waterproof vinyl designs engineered for laptops, hydro flasks, skateboards, and hardware cases.
        </p>
      </div>

      {/* Filter and Search Controls */}
      <div className="card-bun space-y-4">
        {/* Search Bar & Sort Dropdown */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-[#6B6B6B] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stickers by title, tag, or theme..."
              className="w-full bg-white border border-[#E5E7EB] rounded-none pl-10 pr-9 py-2 font-mono text-xs sm:text-sm text-[#0A0A0A] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0A0A0A] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#0A0A0A] p-0.5"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#6B6B6B] shrink-0">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Sort:</span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-[#E5E7EB] rounded-none px-3 py-2 text-xs font-mono text-[#0A0A0A] focus:outline-none focus:border-[#0A0A0A] cursor-pointer flex-1 sm:flex-none"
            >
              <option value="featured">Featured Picks</option>
              <option value="rating">Top Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Category Tabs: segmented control with square edges and inverted active state */}
        <div className="pt-2 border-t border-[#E5E7EB]">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            <span className="font-mono text-xs text-[#6B6B6B] shrink-0 mr-1 hidden sm:inline">
              Category:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`tab-bun text-xs py-1.5 px-3 shrink-0 ${
                  selectedCategory === cat ? 'active' : ''
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Finish Filters & Clear Option */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#E5E7EB] text-xs font-mono">
          <div className="flex items-center gap-1.5">
            <span className="text-[#6B6B6B]">Finish:</span>
            {finishes.map((f) => (
              <button
                key={f}
                onClick={() => setSelectedFinish(f)}
                className={`px-2.5 py-1 rounded-none border text-xs font-mono transition-colors ${
                  selectedFinish === f
                    ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]'
                    : 'bg-[#F7F7F7] text-[#0A0A0A] border-[#E5E7EB] hover:border-[#0A0A0A]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-[#FF1F8F] hover:underline text-xs font-mono flex items-center gap-1"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Product Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs font-mono text-[#6B6B6B] px-1">
          <span>
            Showing <strong className="text-[#0A0A0A]">{filteredStickers.length}</strong> items
          </span>
          <span className="hidden xs:inline">
            Free 2-day dispatch on $20+ orders
          </span>
        </div>

        {filteredStickers.length === 0 ? (
          <div className="card-bun p-12 text-center space-y-3">
            <p className="font-sans font-bold text-[#0A0A0A] text-base">No stickers found</p>
            <p className="font-mono text-xs text-[#6B6B6B] max-w-sm mx-auto">
              We couldn't find any stickers matching your criteria. Try adjusting your query or filter selections.
            </p>
            <button
              onClick={clearFilters}
              className="btn-secondary text-xs mt-2"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredStickers.map((sticker) => (
              <StickerCard key={sticker.id} sticker={sticker} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
