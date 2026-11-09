/* jukalang.com: behaviour shared by every page.
 *
 * No dependencies and no tracking. The only network request is one call to
 * GitHub's public API for the date of the latest release, cached for the
 * session; the download links work without it because they point at
 * /releases/latest/download/<asset>.
 */
(() => {
  'use strict';

  document.documentElement.classList.add('js');

  /* ── Top bar: a hairline once the page scrolls, a menu on narrow screens ── */
  const bar = document.querySelector('.topbar');
  if (bar) {
    const onScroll = () => bar.classList.toggle('is-scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const toggle = bar.querySelector('.menu-toggle');
    const nav = bar.querySelector('.nav');
    if (toggle && nav) {
      const setOpen = (open) => {
        bar.classList.toggle('is-open', open);
        toggle.setAttribute('aria-expanded', String(open));
      };
      toggle.addEventListener('click', () => setOpen(!bar.classList.contains('is-open')));
      nav.addEventListener('click', (event) => {
        if (event.target.closest('a')) setOpen(false);
      });
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && bar.classList.contains('is-open')) {
          setOpen(false);
          toggle.focus();
        }
      });
      const wide = window.matchMedia('(min-width: 961px)');
      const onWide = () => {
        if (wide.matches) setOpen(false);
      };
      if (wide.addEventListener) wide.addEventListener('change', onWide);
    }
  }

  /* ── On-page contents (install and features): mark the section in view ── */
  const tocLinks = Array.from(document.querySelectorAll('.toc a[href^="#"]'));
  if (tocLinks.length && 'IntersectionObserver' in window) {
    const byId = new Map();
    for (const link of tocLinks) {
      const target = document.getElementById(decodeURIComponent(link.hash.slice(1)));
      if (target) byId.set(target, link);
    }
    const visible = new Set();
    const mark = () => {
      // The first section (in document order) that is on screen wins.
      let current = null;
      for (const section of byId.keys()) {
        if (visible.has(section)) {
          current = section;
          break;
        }
      }
      for (const [section, link] of byId) {
        const on = section === current;
        link.classList.toggle('is-current', on);
        if (on) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    };
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      }
      mark();
    }, { rootMargin: '-20% 0px -55% 0px' });
    for (const section of byId.keys()) io.observe(section);
  }

  /* ── Latest release ──────────────────────────────────────────────────── */
  const slots = document.querySelectorAll('[data-release-date], [data-release-line]');
  const wantsRelease = slots.length > 0 || document.getElementById('ui');
  if (!wantsRelease || !('fetch' in window)) return;

  const API = 'https://api.github.com/repos/jukaLang/JukaHubV2/releases/latest';
  const CACHE_KEY = 'jukahub:release';
  const CACHE_MS = 60 * 60 * 1000;

  const readCache = () => {
    try {
      const raw = window.sessionStorage.getItem(CACHE_KEY);
      if (!raw) return null;
      const data = JSON.parse(raw);
      return data && Date.now() - data.at < CACHE_MS ? data.release : null;
    } catch (err) {
      return null;
    }
  };

  const writeCache = (release) => {
    try {
      window.sessionStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), release }));
    } catch (err) {
      /* storage can be full or disabled; the page works without it */
    }
  };

  const load = async () => {
    const cached = readCache();
    if (cached) return cached;
    const response = await fetch(API, { headers: { Accept: 'application/vnd.github+json' } });
    if (!response.ok) throw new Error(`GitHub answered ${response.status}`);
    const body = await response.json();
    const asset = Array.isArray(body.assets)
      ? body.assets.find((a) => a && a.name === 'JukaHub-Trimui.zip')
      : null;
    const release = {
      tag: String(body.tag_name || ''),
      published: String(body.published_at || ''),
      size: asset && Number.isFinite(asset.size) ? asset.size : 0,
    };
    writeCache(release);
    return release;
  };

  // UTC, so the page and the device's version line name the same day.
  const longDate = (iso) => {
    const date = new Date(iso);
    if (Number.isNaN(date.getTime())) return '';
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
  };

  const megabytes = (bytes) => (bytes > 0 ? `${Math.round(bytes / 1048576)} MB` : '');

  load()
    .then((release) => {
      const when = longDate(release.published);
      if (!when) return;
      // Left on <html> for device.js, which may run after this has resolved.
      document.documentElement.dataset.releasePublished = release.published;
      for (const slot of document.querySelectorAll('[data-release-date]')) {
        slot.textContent = `Latest build published ${when}.`;
      }
      for (const slot of document.querySelectorAll('[data-release-line]')) {
        const size = megabytes(release.size);
        slot.textContent = size
          ? `Latest build: ${when}, ${size} for TrimUI.`
          : `Latest build: ${when}.`;
      }
      document.dispatchEvent(new CustomEvent('jukahub:release', { detail: release }));
    })
    .catch(() => {
      /* offline, rate-limited or blocked: the static text stands */
    });
})();
