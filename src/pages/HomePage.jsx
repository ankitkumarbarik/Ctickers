import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  CheckCircle,
  Star,
  Layers,
  Palette,
  Eye,
  Flame,
  Truck
} from 'lucide-react';
import StickerCard from '../components/StickerCard';
import { STICKER_PRODUCTS, PINTEREST_INSPIRATION_PINS } from '../data/stickersData';

export default function HomePage() {
  const featuredStickers = STICKER_PRODUCTS.slice(0, 4);
  const inspirationTeasers = PINTEREST_INSPIRATION_PINS.slice(0, 4);

  return (
    <div className="space-y-14 sm:space-y-24 overflow-x-clip">
      {/* HERO SECTION */}
      <section className="relative pt-4 sm:pt-12 pb-8 sm:pb-16 overflow-hidden">
        {/* Background decorative gradient blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] sm:h-[500px] pointer-events-none -z-10 overflow-hidden">
          <div className="absolute -top-20 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-rose-200/40 rounded-full blur-3xl" />
          <div className="absolute top-10 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-200/35 rounded-full blur-3xl" />
          <div className="absolute top-40 left-1/3 w-60 sm:w-80 h-60 sm:h-80 bg-amber-200/30 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/95 border border-slate-200/90 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold text-slate-800 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-rose-500 animate-ping" />
                <Sparkles className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                <span>Next-Gen Custom Vinyl Stickers</span>
              </div>

              {/* Heading */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]">
                Turn Your Ideas <br />
                <span className="bg-gradient-to-r from-rose-500 via-fuchsia-600 to-indigo-600 bg-clip-text text-transparent">
                  Into Stickers
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Choose a design or create a custom sticker from your own photo.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1">
                <Link
                  to="/stickers"
                  className="w-full sm:w-auto px-7 py-3.5 sm:py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl shadow-lg shadow-slate-900/15 transition-all hover:scale-[1.02] active:scale-95 text-center flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <span>Explore Stickers</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/custom-sticker"
                  className="w-full sm:w-auto px-7 py-3.5 sm:py-4 bg-gradient-to-r from-rose-500 to-fuchsia-600 hover:from-rose-600 hover:to-fuchsia-700 text-white font-bold rounded-2xl shadow-lg shadow-rose-500/25 transition-all hover:scale-[1.02] active:scale-95 text-center flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Create Custom Sticker</span>
                </Link>
              </div>

              {/* Social Proof Stats */}
              <div className="pt-5 border-t border-slate-200/80 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                <div className="p-1">
                  <p className="text-xl sm:text-2xl font-black text-slate-900">50K+</p>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-medium">Stickers Printed</p>
                </div>
                <div className="p-1">
                  <p className="text-xl sm:text-2xl font-black text-slate-900">4.9 / 5</p>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-medium">Customer Rating</p>
                </div>
                <div className="p-1">
                  <p className="text-xl sm:text-2xl font-black text-slate-900">100%</p>
                  <p className="text-[10px] sm:text-xs text-slate-500 font-medium">Waterproof Vinyl</p>
                </div>
              </div>
            </div>

            {/* Right Hero Sticker Collage Visual */}
            <div className="lg:col-span-5 relative flex items-center justify-center px-4 sm:px-0">
              <div className="relative w-full max-w-[320px] sm:max-w-md aspect-square bg-gradient-to-br from-rose-100/50 via-indigo-50/40 to-amber-50/60 rounded-3xl p-4 sm:p-6 border border-white/80 shadow-xl flex items-center justify-center">
                
                {/* Floating sticker 1: Astro Cat */}
                <div className="absolute -top-3 -left-2 sm:-top-4 sm:-left-6 w-28 sm:w-44 bg-white p-2 sm:p-2.5 rounded-xl sm:rounded-2xl shadow-lg border border-slate-100 transform -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80"
                    alt="Astro Cat Sticker"
                    className="w-full h-24 sm:h-32 object-cover rounded-lg sm:rounded-xl"
                  />
                  <div className="mt-1.5 sm:mt-2 flex items-center justify-between">
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-800">Astro Cat</span>
                    <span className="text-[9px] sm:text-[10px] bg-rose-100 text-rose-700 font-extrabold px-1.5 py-0.5 rounded">Holo</span>
                  </div>
                </div>

                {/* Floating sticker 2: Synthwave Sunset */}
                <div className="absolute -bottom-3 -right-2 sm:-bottom-6 sm:-right-4 w-28 sm:w-44 bg-white p-2 sm:p-2.5 rounded-xl sm:rounded-2xl shadow-lg border border-slate-100 transform rotate-8 hover:rotate-0 hover:scale-105 transition-all duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=400&q=80"
                    alt="Synthwave Sunset Sticker"
                    className="w-full h-24 sm:h-32 object-cover rounded-lg sm:rounded-xl"
                  />
                  <div className="mt-1.5 sm:mt-2 flex items-center justify-between">
                    <span className="text-[10px] sm:text-[11px] font-bold text-slate-800">Synth Dusk</span>
                    <span className="text-[9px] sm:text-[10px] bg-indigo-100 text-indigo-700 font-extrabold px-1.5 py-0.5 rounded">Matte</span>
                  </div>
                </div>

                {/* Floating sticker 3: Ramen Bowl in Center */}
                <div className="relative z-10 w-40 sm:w-56 bg-white p-2.5 sm:p-3 rounded-2xl shadow-xl border-2 border-white transform hover:scale-105 transition-all duration-300">
                  <div className="relative overflow-hidden rounded-xl bg-slate-900">
                    <img
                      src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=500&q=80"
                      alt="Cyberpunk Ramen Bowl"
                      className="w-full h-32 sm:h-44 object-cover"
                    />
                    <div className="absolute bottom-1.5 left-1.5 bg-slate-900/85 backdrop-blur-md px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] text-white font-bold flex items-center gap-1">
                      <Flame className="w-3 h-3 text-amber-400" />
                      Die-cut
                    </div>
                  </div>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs font-black text-slate-900">Cyber Ramen</span>
                    <span className="text-xs font-bold text-rose-600">$4.25</span>
                  </div>
                </div>

                {/* Floating badge peel */}
                <div className="absolute top-1/2 -left-8 bg-slate-900 text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg border border-slate-700 -rotate-12 hidden sm:flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  Peel & Stick Anywhere
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE EASY STEPS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3">
            Custom Stickers in 3 Quick Steps
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            From your camera roll or design software straight to durable waterproof vinyl.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all text-center group">
            <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
              <Palette className="w-7 h-7" />
            </div>
            <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">Step 01</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Upload Any Design</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Upload your photos, logos, doodles, or pet portraits. Any PNG, JPG, or SVG works.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all text-center group">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
              <Layers className="w-7 h-7" />
            </div>
            <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">Step 02</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Pick Shape & Finish</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Choose Die-Cut, Circle, or Square, plus Glossy, Matte, or Rainbow Holographic sheen.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all text-center group">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
              <Truck className="w-7 h-7" />
            </div>
            <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest">Step 03</span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2">Printed & Delivered</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              We cut them with razor precision on durable vinyl and ship them fast to your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED STICKERS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full mb-2">
              <Flame className="w-3.5 h-3.5" />
              <span>Trending Now</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              Popular Sticker Picks
            </h2>
          </div>
          <Link
            to="/stickers"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-rose-600 transition-colors group"
          >
            <span>View All Stickers ({STICKER_PRODUCTS.length})</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredStickers.map((sticker) => (
            <StickerCard key={sticker.id} sticker={sticker} />
          ))}
        </div>
      </section>

      {/* PINTEREST INSPIRATION TEASER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-rose-500 via-rose-600 to-indigo-700 rounded-3xl p-6 sm:p-10 md:p-14 text-white relative overflow-hidden shadow-xl">
          {/* Background shapes */}
          <div className="absolute top-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-72 sm:w-80 h-72 sm:h-80 bg-fuchsia-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
            <div className="lg:col-span-6 space-y-4 sm:space-y-5">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white">
                <Sparkles className="w-3.5 h-3.5" />
                Pinterest Ready Demo
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Pinterest Inspiration <br />
                Turned Into Stickers
              </h2>
              <p className="text-rose-100 text-xs sm:text-base leading-relaxed max-w-lg">
                Explore hundreds of curated aesthetic designs, lofi art, vintage botanicals, and cute memes.
                Spot what you love and print it on waterproof vinyl with a single click.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  to="/inspiration"
                  className="px-6 py-3.5 bg-white text-slate-900 font-bold rounded-xl shadow-lg hover:bg-slate-100 transition-all flex items-center justify-center gap-2 text-sm text-center"
                >
                  <span>Explore Pinterest Gallery</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/custom-sticker"
                  className="px-6 py-3.5 bg-rose-700/50 hover:bg-rose-700/80 border border-white/30 text-white font-bold rounded-xl transition-all text-sm text-center flex items-center justify-center"
                >
                  Upload Your Own
                </Link>
              </div>
            </div>

            {/* Micro grid of teaser pins */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-4">
              {inspirationTeasers.map((pin, i) => (
                <div
                  key={pin.id}
                  className={`bg-white/10 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 ${
                    i % 2 === 1 ? 'sm:translate-y-4' : ''
                  }`}
                >
                  <img
                    src={pin.image}
                    alt={pin.title}
                    className="w-full h-24 sm:h-36 object-cover rounded-xl"
                  />
                  <div className="mt-2">
                    <p className="text-xs font-bold text-white truncate">{pin.title}</p>
                    <p className="text-[10px] text-rose-200 mt-0.5">{pin.saves} Saves</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY PROMISE & MATERIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center">
            <div className="space-y-5 sm:space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
                Premium Specs
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
                Built To Survive The Dishwasher, Sun & Daily Adventures
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                We use commercial grade thick vinyl with an aggressive permanent adhesive and an extra UV-protective laminate coating. Stick them on water bottles, laptops, cars, or phone cases without fear of peeling or fading.
              </p>

              <div className="space-y-2.5 sm:space-y-3 pt-1 sm:pt-2">
                <div className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-semibold text-slate-800">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 shrink-0" />
                  <span>Weatherproof & UV fade resistant for 5+ years outdoors</span>
                </div>
                <div className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-semibold text-slate-800">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 shrink-0" />
                  <span>100% Dishwasher safe adhesive (tested over 100 cycles)</span>
                </div>
                <div className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-semibold text-slate-800">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 shrink-0" />
                  <span>Residue-free removal whenever you want to re-stick</span>
                </div>
                <div className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-semibold text-slate-800">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 shrink-0" />
                  <span>Choose between Glossy, Soft-Touch Matte, and Rainbow Holographic</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center mb-2.5 sm:mb-3">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Holographic Sheen</h4>
                <p className="text-xs text-slate-500 mt-1">Light-catching iridescent shimmer foil</p>
              </div>

              <div className="bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-2.5 sm:mb-3">
                  <Layers className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Die-Cut Edges</h4>
                <p className="text-xs text-slate-500 mt-1">Exact contour lines hugging your art</p>
              </div>

              <div className="bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-2.5 sm:mb-3">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Scratch Resistant</h4>
                <p className="text-xs text-slate-500 mt-1">Heavy-duty thick 6 mil vinyl film</p>
              </div>

              <div className="bg-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-2.5 sm:mb-3">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">Fast Turnaround</h4>
                <p className="text-xs text-slate-500 mt-1">Quick preview and rapid dispatch</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-extrabold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
            Real Reviews
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3">
            Loved By Artists & Sticker Collectors
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
              "The holographic sticker quality is out of this world! I put them on my skateboard deck and water bottle, and after 4 months they look brand new."
            </p>
            <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                alt="Maya L."
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className="text-xs font-bold text-slate-900">Maya Lin</p>
                <p className="text-[10px] text-slate-400">Illustrator & Comic Artist</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
              "Uploading my logo and choosing the die-cut finish took 30 seconds. Best custom sticker ordering flow I've ever experienced."
            </p>
            <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                alt="Liam K."
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className="text-xs font-bold text-slate-900">Liam Keller</p>
                <p className="text-[10px] text-slate-400">Coffee Roaster Founder</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic">
              "Ctickers made our conference swag look 10x more premium. The soft-touch matte finish is so silky and colors are super sharp."
            </p>
            <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                alt="Sarah P."
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className="text-xs font-bold text-slate-900">Sarah Patel</p>
                <p className="text-[10px] text-slate-400">Dev Community Lead</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12">
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 md:p-14 text-center space-y-5 sm:space-y-6 relative overflow-hidden shadow-xl">
          <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-rose-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-10 -top-10 w-60 h-60 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Ready to Make Your Custom Stickers?
          </h2>
          <p className="text-slate-300 text-xs sm:text-base max-w-xl mx-auto leading-relaxed">
            Upload your photo, pick your quantity and shape, and we will handle the rest.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-1 sm:pt-2">
            <Link
              to="/custom-sticker"
              className="w-full sm:w-auto px-7 py-3.5 sm:py-4 bg-gradient-to-r from-rose-500 to-fuchsia-600 hover:from-rose-600 hover:to-fuchsia-700 text-white font-bold rounded-2xl shadow-lg transition-all hover:scale-[1.02] active:scale-95 text-center text-sm sm:text-base"
            >
              Start Custom Sticker
            </Link>
            <Link
              to="/stickers"
              className="w-full sm:w-auto px-7 py-3.5 sm:py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl border border-white/20 transition-all hover:scale-[1.02] active:scale-95 text-center text-sm sm:text-base"
            >
              Browse Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
