import React, { useState } from 'react';
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
  Terminal,
  Copy,
  Check,
  Truck
} from 'lucide-react';
import StickerCard from '../components/StickerCard';
import { STICKER_PRODUCTS, PINTEREST_INSPIRATION_PINS } from '../data/stickersData';

export default function HomePage() {
  const featuredStickers = STICKER_PRODUCTS.slice(0, 4);
  const inspirationTeasers = PINTEREST_INSPIRATION_PINS.slice(0, 4);
  const [copiedCmd, setCopiedCmd] = useState(false);
  const [activeTab, setActiveTab] = useState('cli');

  const cliCommand = 'npx ctickers create --shape die-cut --finish holo';

  const handleCopy = () => {
    navigator.clipboard.writeText(cliCommand);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* HERO SECTION */}
      <section className="pt-2 sm:pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2">
              <span className="chip-bun-pink">
                v1.0
              </span>
              <span className="chip-bun">
                <Sparkles className="w-3 h-3 text-[#FF1F8F]" />
                Laser-Cut Vinyl Engineering
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="font-headline-display text-4xl sm:text-6xl lg:text-[68px] text-[#0A0A0A] leading-[1.08] tracking-[-1.36px]">
              Turn Your Ideas <br />
              <span className="text-[#FF1F8F]">Into Stickers.</span>
            </h1>

            {/* Mono Body Text */}
            <p className="font-mono text-sm sm:text-base text-[#6B6B6B] max-w-xl leading-relaxed">
              Ultra-durable, waterproof vinyl stickers cut with razor precision. Built for developers, designers, and creators who value speed and print fidelity.
            </p>

            {/* Terminal / Interactive Code Block */}
            <div className="border border-[#E5E7EB] bg-[#F7F7F7] p-1 space-y-1 max-w-xl">
              <div className="flex items-center justify-between px-2 pt-1 pb-1 text-xs">
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab('cli')}
                    className={`px-2.5 py-1 text-xs font-sans font-semibold rounded-none border transition-colors ${
                      activeTab === 'cli'
                        ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]'
                        : 'bg-white text-[#6B6B6B] border-[#E5E7EB] hover:text-[#0A0A0A]'
                    }`}
                  >
                    terminal
                  </button>
                  <button
                    onClick={() => setActiveTab('spec')}
                    className={`px-2.5 py-1 text-xs font-sans font-semibold rounded-none border transition-colors ${
                      activeTab === 'spec'
                        ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]'
                        : 'bg-white text-[#6B6B6B] border-[#E5E7EB] hover:text-[#0A0A0A]'
                    }`}
                  >
                    specs.json
                  </button>
                </div>
                <button
                  onClick={handleCopy}
                  className="font-mono text-[11px] text-[#6B6B6B] hover:text-[#0A0A0A] flex items-center gap-1 p-1"
                  title="Copy command"
                >
                  {copiedCmd ? <Check className="w-3 h-3 text-[#FF1F8F]" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedCmd ? 'copied' : 'copy'}</span>
                </button>
              </div>

              {activeTab === 'cli' ? (
                <div className="code-block-bun text-xs sm:text-sm">
                  <div className="flex items-center gap-2 text-[#9CA3AF]">
                    <span className="text-[#FF1F8F]">$</span>
                    <span className="text-white font-semibold">{cliCommand}</span>
                  </div>
                  <div className="text-[#6B6B6B] text-[11px] mt-2 font-mono space-y-0.5">
                    <p className="text-white">✓ Tracing vector contours... <span className="text-[#FF1F8F]">done (12ms)</span></p>
                    <p>✓ UV protective film applied (6 mil heavy vinyl)</p>
                    <p className="text-[#9CA3AF]">✓ 50x custom stickers ready for dispatch in 24h</p>
                  </div>
                </div>
              ) : (
                <div className="code-block-bun text-xs font-mono text-[#9CA3AF] space-y-0.5">
                  <p><span className="text-[#FF1F8F]">"material"</span>: <span className="text-white">"weatherproof-vinyl"</span>,</p>
                  <p><span className="text-[#FF1F8F]">"laminate"</span>: <span className="text-white">"UV-shield-matte-holo"</span>,</p>
                  <p><span className="text-[#FF1F8F]">"tolerance"</span>: <span className="text-white">"±0.2mm optical cut"</span>,</p>
                  <p><span className="text-[#FF1F8F]">"dishwasher_safe"</span>: <span className="text-[#FF1F8F]">true</span></p>
                </div>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                to="/stickers"
                className="btn-primary text-sm px-5 py-2.5"
              >
                <span>Explore Stickers</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/custom-sticker"
                className="btn-secondary text-sm px-5 py-2.5"
              >
                <span>Custom Sticker Studio</span>
              </Link>
            </div>

            {/* Fast Stats Bar */}
            <div className="pt-6 border-t border-[#E5E7EB] grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div>
                <p className="font-mono text-xl font-bold text-[#0A0A0A]">50,000+</p>
                <p className="font-mono text-[11px] text-[#6B6B6B] mt-0.5">Stickers Cut</p>
              </div>
              <div>
                <p className="font-mono text-xl font-bold text-[#0A0A0A]">4.9 / 5.0</p>
                <p className="font-mono text-[11px] text-[#6B6B6B] mt-0.5">Rating</p>
              </div>
              <div>
                <p className="font-mono text-xl font-bold text-[#0A0A0A]">100%</p>
                <p className="font-mono text-[11px] text-[#6B6B6B] mt-0.5">Waterproof Vinyl</p>
              </div>
              <div>
                <p className="font-mono text-xl font-bold text-[#FF1F8F]">24h</p>
                <p className="font-mono text-[11px] text-[#6B6B6B] mt-0.5">Fast Turnaround</p>
              </div>
            </div>
          </div>

          {/* Right Column: Product Proof Grid */}
          <div className="lg:col-span-5">
            <div className="border border-[#E5E7EB] bg-[#F7F7F7] p-4 sm:p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-[#FF1F8F]"></span>
                  <span className="font-sans font-semibold text-xs text-[#0A0A0A] uppercase tracking-wider">
                    Featured Specimen
                  </span>
                </div>
                <span className="chip-bun text-[10px] bg-white">
                  Die-Cut • Holographic
                </span>
              </div>

              {/* Main Preview Box */}
              <div className="relative aspect-square w-full bg-white border border-[#E5E7EB] p-6 flex items-center justify-center overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80"
                  alt="Cyberpunk Ramen Bowl"
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Floating Specs overlay */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#0A0A0A] text-white p-3 border border-[#262626] flex items-center justify-between text-xs font-mono">
                  <div>
                    <span className="text-[#FF1F8F] font-bold">Cyber Ramen</span>
                    <span className="text-[#9CA3AF] block text-[10px]">3" x 3" • Rainbow Foil</span>
                  </div>
                  <span className="font-bold text-sm text-white">$4.25</span>
                </div>
              </div>

              {/* Micro specs comparison row */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                <div className="bg-white border border-[#E5E7EB] p-2">
                  <span className="text-[#9CA3AF] block text-[10px]">UV RATING</span>
                  <strong className="text-[#0A0A0A] text-[11px]">5+ Years</strong>
                </div>
                <div className="bg-white border border-[#E5E7EB] p-2">
                  <span className="text-[#9CA3AF] block text-[10px]">ADHESIVE</span>
                  <strong className="text-[#0A0A0A] text-[11px]">Permanent</strong>
                </div>
                <div className="bg-white border border-[#E5E7EB] p-2">
                  <span className="text-[#9CA3AF] block text-[10px]">FINISH</span>
                  <strong className="text-[#FF1F8F] text-[11px]">Hologram</strong>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* THREE PRECISION STEPS */}
      <section className="space-y-8 pt-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#E5E7EB]">
          <div>
            <div className="inline-block chip-bun mb-2">
              Simple Workflow
            </div>
            <h2 className="font-headline-lg text-2xl sm:text-4xl text-[#0A0A0A]">
              Production in 3 Quick Steps
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-[#6B6B6B] max-w-md">
            From image upload to durable waterproof vinyl on your laptop or water bottle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card-bun space-y-3">
            <div className="flex items-center justify-between">
              <span className="chip-bun-pink text-[11px]">STEP 01</span>
              <Palette className="w-5 h-5 text-[#0A0A0A]" />
            </div>
            <h3 className="font-sans font-bold text-lg text-[#0A0A0A]">Upload Any Artwork</h3>
            <p className="font-mono text-xs text-[#6B6B6B] leading-relaxed">
              Upload PNG, JPG, SVG, or PSD files. Our engine auto-detects transparent borders and traces cutlines.
            </p>
          </div>

          <div className="card-bun space-y-3">
            <div className="flex items-center justify-between">
              <span className="chip-bun-pink text-[11px]">STEP 02</span>
              <Layers className="w-5 h-5 text-[#0A0A0A]" />
            </div>
            <h3 className="font-sans font-bold text-lg text-[#0A0A0A]">Pick Shape & Finish</h3>
            <p className="font-mono text-xs text-[#6B6B6B] leading-relaxed">
              Select Die-Cut, Circle, Square, or Kiss-Cut. Choose Glossy, Soft Matte, or Rainbow Holographic foil.
            </p>
          </div>

          <div className="card-bun space-y-3">
            <div className="flex items-center justify-between">
              <span className="chip-bun-pink text-[11px]">STEP 03</span>
              <Truck className="w-5 h-5 text-[#0A0A0A]" />
            </div>
            <h3 className="font-sans font-bold text-lg text-[#0A0A0A]">Printed & Shipped</h3>
            <p className="font-mono text-xs text-[#6B6B6B] leading-relaxed">
              Printed on heavy 6 mil vinyl, laminated against UV rays, and dispatched directly within 24–48 hours.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED STICKERS CATALOG SHOWCASE */}
      <section className="space-y-6 pt-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#E5E7EB]">
          <div>
            <div className="inline-block chip-bun-pink text-[11px] mb-2">
              Trending Drops
            </div>
            <h2 className="font-headline-lg text-2xl sm:text-4xl text-[#0A0A0A]">
              Popular Sticker Picks
            </h2>
          </div>
          <Link
            to="/stickers"
            className="btn-secondary text-xs sm:text-sm"
          >
            <span>View All Stickers ({STICKER_PRODUCTS.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredStickers.map((sticker) => (
            <StickerCard key={sticker.id} sticker={sticker} />
          ))}
        </div>
      </section>

      {/* PINTEREST INSPIRATION TEASER */}
      <section className="bg-[#0A0A0A] text-white p-6 sm:p-10 lg:p-12 border border-[#262626]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="chip-bun-pink text-[11px]">
              PINTEREST INTEGRATION
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-4xl text-white">
              Pinterest Inspiration <br />
              <span className="text-[#FF1F8F]">Turned Into Stickers.</span>
            </h2>
            <p className="font-mono text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
              Discover aesthetic moodboards, lo-fi anime art, vintage botanicals, and dev memes. Pick any inspired design and send it straight to vinyl printing.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                to="/inspiration"
                className="btn-primary text-xs sm:text-sm"
              >
                <span>Explore Pinterest Gallery</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/custom-sticker"
                className="btn-outline text-xs sm:text-sm bg-[#0A0A0A] text-white border-[#262626] hover:bg-[#1A1A1A] hover:border-white"
              >
                Upload Your Own Art
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-4">
            {inspirationTeasers.map((pin) => (
              <div
                key={pin.id}
                className="bg-[#141414] border border-[#262626] p-2.5 space-y-2"
              >
                <div className="aspect-video w-full overflow-hidden bg-black">
                  <img
                    src={pin.image}
                    alt={pin.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-white truncate max-w-[110px] sm:max-w-none">{pin.title}</span>
                  <span className="text-[#FF1F8F] font-bold shrink-0">{pin.saves} saves</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL SPECIFICATIONS & DURABILITY */}
      <section className="space-y-6 pt-6">
        <div className="pb-4 border-b border-[#E5E7EB]">
          <span className="chip-bun mb-2">Engineering Standards</span>
          <h2 className="font-headline-lg text-2xl sm:text-4xl text-[#0A0A0A]">
            Materials Built For Real Life
          </h2>
          <p className="font-mono text-xs sm:text-sm text-[#6B6B6B] mt-1">
            Engineered to endure the dishwasher, UV exposure, rain, and repeated handling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <div className="card-bun space-y-4">
            <h3 className="font-sans font-bold text-base text-[#0A0A0A]">Technical Specifications</h3>
            
            <div className="space-y-2.5 font-mono text-xs divide-y divide-[#E5E7EB]">
              <div className="pt-2 flex justify-between">
                <span className="text-[#6B6B6B]">Base Vinyl Thickness</span>
                <strong className="text-[#0A0A0A]">6.0 mil Commercial PVC</strong>
              </div>
              <div className="pt-2 flex justify-between">
                <span className="text-[#6B6B6B]">Outdoor Durability</span>
                <strong className="text-[#0A0A0A]">5+ Years UV Fade Resistant</strong>
              </div>
              <div className="pt-2 flex justify-between">
                <span className="text-[#6B6B6B]">Dishwasher Rating</span>
                <strong className="text-[#0A0A0A]">Tested 100+ cycles</strong>
              </div>
              <div className="pt-2 flex justify-between">
                <span className="text-[#6B6B6B]">Adhesive Formulation</span>
                <strong className="text-[#0A0A0A]">Aggressive acrylic (residue-free)</strong>
              </div>
              <div className="pt-2 flex justify-between">
                <span className="text-[#6B6B6B]">Optical Cut Accuracy</span>
                <strong className="text-[#FF1F8F]">± 0.2 mm precision registration</strong>
              </div>
            </div>
          </div>

          <div className="card-bun space-y-4 flex flex-col justify-between">
            <div>
              <h3 className="font-sans font-bold text-base text-[#0A0A0A]">Finish Formulations</h3>
              <p className="font-mono text-xs text-[#6B6B6B] mt-1 mb-4">
                Choose the optical finish that complements your artwork.
              </p>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 bg-[#F7F7F7] border border-[#E5E7EB]">
                  <span className="font-bold text-[#0A0A0A] block">1. High-Gloss Lamination</span>
                  <span className="text-[#6B6B6B] text-[11px]">Maximum contrast, vivid color pop, reflective protective topcoat.</span>
                </div>
                <div className="p-3 bg-[#F7F7F7] border border-[#E5E7EB]">
                  <span className="font-bold text-[#0A0A0A] block">2. Soft-Touch Matte</span>
                  <span className="text-[#6B6B6B] text-[11px]">Silky non-glare finish with zero reflection under harsh lights.</span>
                </div>
                <div className="p-3 bg-[#F7F7F7] border border-[#E5E7EB]">
                  <span className="font-bold text-[#FF1F8F] block">3. Rainbow Holographic</span>
                  <span className="text-[#6B6B6B] text-[11px]">Iridescent metallic sheen reflecting full spectrum rainbow light.</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link to="/custom-sticker" className="btn-secondary w-full text-xs">
                Test With Your Own Design
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY REVIEWS */}
      <section className="space-y-6 pt-6">
        <div className="pb-4 border-b border-[#E5E7EB]">
          <span className="chip-bun mb-2">Verified Feedback</span>
          <h2 className="font-headline-lg text-2xl sm:text-4xl text-[#0A0A0A]">
            Loved By Developers & Creators
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="card-bun space-y-3">
            <div className="flex items-center gap-1 text-[#FF1F8F]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <p className="font-mono text-xs text-[#0A0A0A] leading-relaxed">
              "The holographic print quality is unreal. I stick them on my laptop chassis and hydro flask — four months in, zero edge peeling."
            </p>
            <div className="pt-2 border-t border-[#E5E7EB] text-xs font-mono">
              <p className="font-bold text-[#0A0A0A]">Maya Lin</p>
              <p className="text-[11px] text-[#6B6B6B]">Comic Illustrator</p>
            </div>
          </div>

          <div className="card-bun space-y-3">
            <div className="flex items-center gap-1 text-[#FF1F8F]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <p className="font-mono text-xs text-[#0A0A0A] leading-relaxed">
              "Uploading SVG logos and getting exact contour kiss-cuts took seconds. The sharpest developer swag we've ever distributed at hackathons."
            </p>
            <div className="pt-2 border-t border-[#E5E7EB] text-xs font-mono">
              <p className="font-bold text-[#0A0A0A]">Liam Keller</p>
              <p className="text-[11px] text-[#6B6B6B]">Dev Tools Founder</p>
            </div>
          </div>

          <div className="card-bun space-y-3">
            <div className="flex items-center gap-1 text-[#FF1F8F]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <p className="font-mono text-xs text-[#0A0A0A] leading-relaxed">
              "Fast 2-day turnaround, high contrast colors, and completely flat border-led ordering flow. Exactly what a modern sticker brand should feel like."
            </p>
            <div className="pt-2 border-t border-[#E5E7EB] text-xs font-mono">
              <p className="font-bold text-[#0A0A0A]">Sarah Patel</p>
              <p className="text-[11px] text-[#6B6B6B]">Community Lead</p>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA CALLOUT */}
      <section className="bg-[#0A0A0A] text-white p-8 sm:p-14 border border-[#262626] text-center space-y-5">
        <h2 className="font-headline-lg text-2xl sm:text-5xl text-white">
          Ready to make custom stickers?
        </h2>
        <p className="font-mono text-xs sm:text-sm text-[#9CA3AF] max-w-lg mx-auto">
          Upload any design, select your quantity, and we will handle precision cutting and rapid delivery.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            to="/custom-sticker"
            className="btn-primary text-sm px-6 py-3"
          >
            <span>Start Custom Sticker</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/stickers"
            className="btn-outline text-sm px-6 py-3 bg-[#0A0A0A] text-white border-[#262626] hover:bg-[#1A1A1A] hover:border-white"
          >
            Browse Sticker Catalog
          </Link>
        </div>
      </section>
    </div>
  );
}
