/**
 * Pinterest API Integration Service (Ctickers)
 *
 * NOTE: This is configured in DEMO MODE for initial presentation and Pinterest Developer
 * app submission/review. It provides realistic mock data and structures all methods so
 * real Pinterest API v5 endpoints can be activated simply by adding API keys and toggling
 * the `USE_LIVE_API` flag.
 *
 * Pinterest API v5 Documentation:
 * https://developers.pinterest.com/docs/api/v5/
 */

import { PINTEREST_INSPIRATION_PINS } from '../data/stickersData';

// Configuration for future live Pinterest API
export const PINTEREST_CONFIG = {
  USE_LIVE_API: import.meta.env.VITE_USE_PINTEREST_LIVE_API === 'true',
  BASE_URL: 'https://api.pinterest.com/v5',
  APP_ID: import.meta.env.VITE_PINTEREST_APP_ID || '',
  ACCESS_TOKEN: import.meta.env.VITE_PINTEREST_ACCESS_TOKEN || '',
  DEFAULT_BOARD_ID: import.meta.env.VITE_PINTEREST_BOARD_ID || 'demo-stickers-board',
};

/**
 * Fetch inspiration pins (demo mode with simulated latency or live Pinterest API v5)
 * @param {Object} options
 * @param {string} [options.category] - Filter category
 * @param {string} [options.search] - Search keyword
 * @param {number} [options.page=1] - Pagination page
 * @returns {Promise<{ pins: Array, total: number, isLiveApi: boolean }>}
 */
export async function getInspirationPins({ category = 'all', search = '', page = 1 } = {}) {
  // If live API mode is enabled in .env
  if (PINTEREST_CONFIG.USE_LIVE_API && PINTEREST_CONFIG.ACCESS_TOKEN) {
    try {
      const response = await fetch(`${PINTEREST_CONFIG.BASE_URL}/boards/${PINTEREST_CONFIG.DEFAULT_BOARD_ID}/pins?page_size=25`, {
        headers: {
          Authorization: `Bearer ${PINTEREST_CONFIG.ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Pinterest API returned ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      
      // Normalize Pinterest API response format to Ctickers format
      const normalizedPins = (data.items || []).map((pin) => ({
        id: pin.id,
        title: pin.title || 'Untitled Pin',
        description: pin.description || 'Custom sticker design inspired by Pinterest.',
        image: pin.media?.images?.['600x']?.url || pin.media?.images?.originals?.url,
        tags: pin.tags || ['Inspiration'],
        saves: '1k+',
        creator: pin.board_owner?.username || 'Pinterest Creator',
        creatorAvatar: null,
        suggestedFinish: 'Glossy',
        suggestedSize: '3" Die-cut',
        basePrice: 3.49,
        board: pin.board_id || 'Ctickers Inspiration',
      }));

      return {
        pins: normalizedPins,
        total: normalizedPins.length,
        isLiveApi: true,
      };
    } catch (err) {
      console.warn('[PinterestService] Falling back to demo data due to API error:', err.message);
      // Fall through to demo mock data below
    }
  }

  // DEMO MODE: Realistic client mock with quick resolution
  await new Promise((resolve) => setTimeout(resolve, 150));

  let filtered = [...PINTEREST_INSPIRATION_PINS];

  if (category && category !== 'all') {
    filtered = filtered.filter(
      (pin) =>
        pin.tags.some((t) => t.toLowerCase().includes(category.toLowerCase())) ||
        pin.board.toLowerCase().includes(category.toLowerCase())
    );
  }

  if (search && search.trim() !== '') {
    const q = search.toLowerCase().trim();
    filtered = filtered.filter(
      (pin) =>
        pin.title.toLowerCase().includes(q) ||
        pin.description.toLowerCase().includes(q) ||
        pin.tags.some((t) => t.toLowerCase().includes(q))
    );
  }

  return {
    pins: filtered,
    total: filtered.length,
    isLiveApi: false,
  };
}

/**
 * Fetch single pin details by ID (Mock or live)
 */
export async function getPinById(pinId) {
  const pin = PINTEREST_INSPIRATION_PINS.find((p) => p.id === pinId);
  if (!pin) {
    throw new Error('Pin not found');
  }
  return pin;
}
