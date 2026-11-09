/* The live JukaHub Home screen at the top of jukalang.com.
 *
 * It behaves like the Home screen in JukaHubV2/mockups/home-16x9-and-4x3.html:
 * one focus ring that the D-pad moves (hover paints the same ring; there is no
 * separate hover style), A opens, B goes back, L2 / R2 jump between the three
 * bands, Start opens the Start menu, and Exit hands the screen back to the
 * stock launcher the way Select + Start does on the device.
 *
 * Input, in the order people reach for it:
 *   keyboard   the twins in JukaHubV2/docs/CONTROLS.md: arrows (or WASD),
 *              Enter / Space (A), Esc (B; Backspace too), Q / E (L2 / R2 on
 *              Home, Page Up / Page Down as well), F10 (Start), X, Y, while
 *              the screen has focus (click it or Tab to it)
 *   gamepad    any controller the browser reports, standard mapping
 *   pointer    hover moves the ring, a click or tap opens
 *   the drawn  D-pad, ABXY, Select, Start and Menu on the handheld
 *
 * The hints follow the input used last, the rule player/inputhints.go applies
 * on the device: keyboard words after a key press, controller glyphs after a
 * pad, a tap or a press on the drawn buttons.
 */
(() => {
  'use strict';

  const screen = document.getElementById('screen');
  const ui = document.getElementById('ui');
  const device = document.getElementById('device');
  if (!screen || !ui || !device) return;

  const stage = document.getElementById('demo') || device;
  const caption = document.getElementById('demo-caption');
  const howto = document.getElementById('demo-how');
  const layer = ui.querySelector('[data-layer]');
  const toastEl = ui.querySelector('[data-toast]');
  const stock = ui.querySelector('[data-stock]');
  const hintsEl = ui.querySelector('[data-hints]');
  const clockEl = ui.querySelector('[data-clock]');
  const greetEl = ui.querySelector('[data-greet]');
  const weatherEl = ui.querySelector('[data-weather]');
  const verEl = ui.querySelector('[data-ver]');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const SVG_NS = 'http://www.w3.org/2000/svg';

  /* ── Focus graph, Frame A (1280 x 720) ────────────────────────────────── */
  // Vertical moves land on the tile with the most overlap underneath or above,
  // so the ring never jumps across the screen. The bottom row clamps at both
  // ends, as on the device.
  const STRIP = ['favorites', 'browser', 'chat', 'tools', 'emulator', 'settings'];
  const UP_FROM_STRIP = {
    favorites: 'continue',
    browser: 'continue',
    chat: 'files',
    tools: 'files',
    emulator: 'packages',
    settings: 'apps',
  };
  const GRAPH = {
    bell: { down: 'scan' },
    ps4: { right: 'ps5', down: 'media', up: 'bell' },
    ps5: { left: 'ps4', right: 'scan', down: 'media', up: 'bell' },
    scan: { left: 'ps5', down: 'media', up: 'bell', right: 'bell' },
    continue: { right: 'media', down: 'favorites', up: 'ps4' },
    media: { left: 'continue', down: 'files', up: 'ps4' },
    files: { left: 'continue', right: 'packages', up: 'media', down: 'tools' },
    packages: { left: 'files', right: 'apps', up: 'media', down: 'emulator' },
    apps: { left: 'packages', up: 'media', down: 'settings' },
    exit: { up: 'favorites' },
  };
  STRIP.forEach((key, i) => {
    GRAPH[key] = {
      left: STRIP[i - 1],
      right: STRIP[i + 1],
      up: UP_FROM_STRIP[key],
      down: 'exit',
    };
  });
  const BANDS = [
    ['ps4', 'ps5', 'scan'],
    ['continue', 'media', 'files', 'packages', 'apps'],
    STRIP,
  ];

  /* ── What each control is, in the caption under the device ─────────────── */
  const CAPTIONS = {
    continue: ['Continue', 'Resume the last thing you watched or played in one press.'],
    media: ['Media', 'YouTube search and trending, Shorts, podcasts with a subscription library, IPTV channels, and music with synced lyrics and a sleep timer.'],
    files: ['Files', 'Browse the card and open what you find: photos, music, videos and books. Files from your PC arrive over FTP or SFTP.'],
    packages: ['Packages', 'Apps from the JukaLang registry, installed next to JukaHub with a rollback copy. Patch, the signed package manager, is in Tools.'],
    apps: ['Apps', 'Every other app on the card with its own icon, plus the built-ins: JukaLand, Weather and a text web browser.'],
    favorites: ['Favorites', 'Videos and links you saved, one press away.'],
    browser: ['Browser', 'A text web browser built for the D-pad, with quick links for reporting a bug.'],
    chat: ['Chat', 'The community Discord channel on the handheld: read, reply and share links.'],
    tools: ['Tools', 'The IP address, FTP and SFTP servers, the phone companion, Remote Cast, the Toolbox and the Security & trust page.'],
    emulator: ['Games', 'The Games Library: every console on the card with box art, play time, RetroAchievements and LAN play, plus PortMaster ports.'],
    settings: ['Settings', 'Playback resolution, the weather, 25 colour themes, and Smart Widgets such as the battery saver.'],
    ps4: ['PS4', 'JukaHub’s own Remote Play client: it finds the console on your network, pairs once with a PIN, and streams.'],
    ps5: ['PS5', 'Remote Play for the PS5 as well. A PS5 also needs your PSN account ID, entered once.'],
    scan: ['Phone companion', 'Scan the QR and your phone becomes a keyboard, a remote and a way to send links and files to the handheld.'],
    bell: ['Notifications', 'The notification centre. The badge counts what you have not read yet.'],
    exit: ['Exit', 'Select + Start does this from any screen: JukaHub saves, stops what it started and hands back the stock launcher. Press A to watch.'],
  };

  /* ── The panels A opens (titles, rows and actions from the docs) ──────── */
  const REMOTE_PLAY = {
    title: 'PS Remote Play',
    sub: 'JukaHub client · PS4 + PS5 · native libchiaki',
    rows: [
      ['Living Room · PS5', 'Ready to stream · 720p30', 'Play', 'accent'],
      ['Bedroom · PS4', 'Not paired: press A, then type the PIN on the console', 'Pair'],
      ['Scan for consoles', 'Search the LAN for PS4 and PS5 consoles', 'Scan'],
      ['Add console by address', 'For a console discovery cannot see', 'Add'],
      ['PSN Account-ID', 'Needed once for a PS5', 'Not set', 'muted'],
    ],
  };
  const PANELS = {
    media: {
      title: 'Media',
      sub: 'Watch and listen',
      rows: [
        ['Tube', 'YouTube search and trending', 'Open'],
        ['Shorts', 'One vertical video after another', 'Open'],
        ['Podcasts', 'Your subscriptions and new episodes', 'Open'],
        ['Live TV', 'Channels from your IPTV playlists', 'Open'],
        ['Music', 'Shuffle, repeat, synced lyrics, sleep timer', 'Open'],
      ],
    },
    files: {
      title: 'Files',
      sub: 'SD card',
      rows: [
        ['Roms', 'One folder per console', 'Open'],
        ['Music', 'Opens in the audio player', 'Open'],
        ['Videos', 'Plays with subtitles', 'Open'],
        ['Photos', 'Left and Right browse, Up and Down zoom', 'Open'],
        ['PhoneDrop', 'Files sent from your phone', 'Open'],
      ],
    },
    packages: {
      title: 'Packages',
      sub: 'Apps from the JukaLang registry',
      rows: [
        ['Browse packages', 'Install an app into packages/ next to JukaHub', 'Open', 'accent'],
        ['Installed', 'Each update keeps a rollback copy', '2'],
        ['Check for updates', 'Compare with the registry', 'Check'],
        ['Patch', 'The signed package manager, in Tools', 'Tools'],
      ],
    },
    apps: {
      title: 'Apps',
      sub: 'On this card',
      rows: [
        ['JukaLand', 'Built in', 'Open'],
        ['Weather', 'Built in · seven-day forecast', 'Open'],
        ['Browser', 'Built in · text web browser', 'Open'],
        ['RetroArch', 'Apps/RetroArch', 'Open'],
        ['PPSSPP', 'Apps/PPSSPP', 'Open'],
      ],
    },
    favorites: {
      title: 'Favorites',
      sub: 'Videos and links you saved',
      rows: [
        ['Lo-fi beats for long train rides', 'Video · 2:34 left', 'Play'],
        ['Retro handheld news, episode 112', 'Podcast', 'Play'],
        ['github.com/jukaLang/JukaHubV2', 'Link', 'Open'],
      ],
    },
    browser: {
      title: 'Browser',
      sub: 'A text web browser for the D-pad',
      rows: [
        ['Search the web', 'Type with the on-screen keyboard or your phone', 'Search', 'accent'],
        ['JukaHub issues', 'github.com/jukaLang/JukaHubV2/issues', 'Open'],
        ['Report a bug', 'A prefilled issue with redacted diagnostics', 'Open'],
        ['Favorites', 'Your saved links', 'Open'],
      ],
    },
    chat: {
      title: 'Chat',
      sub: 'Juka Discord · #general',
      rows: [
        ['retro_rin', 'LAN play worked first try on two Bricks', '2m'],
        ['pixelpilot', 'Is the PS5 pairing fine on hotel Wi-Fi?', '9m'],
        ['Juka', 'Pinned: share a layout as a link from the builder', 'Pinned', 'accent'],
        ['Reply', 'Type here, or from your phone', ''],
      ],
    },
    tools: {
      title: 'Tools',
      sub: 'Network and system',
      rows: [
        ['IP address', '192.168.1.42', 'Copy'],
        ['FTP server', 'Share Roms, BIOS and Saves over Wi-Fi', 'Start'],
        ['SSH / SFTP', 'Encrypted, with a password made for each start', 'Start'],
        ['Toolbox', 'rclone, jq, ripgrep, fd, pandoc, age', 'Open'],
        ['Security & trust', 'What this build protects', 'View'],
      ],
    },
    emulator: {
      title: 'Games Library',
      sub: 'Roms on this card, console by console',
      rows: [
        ['Game Boy Advance', '42 games', 'Browse'],
        ['Super Nintendo', '61 games', 'Browse'],
        ['PlayStation', '18 games', 'Browse'],
        ['Mega Drive', '33 games', 'Browse'],
        ['PortMaster Ports', '9 ports', 'Browse'],
      ],
    },
    settings: {
      title: 'Settings',
      sub: 'Device and design',
      rows: [
        ['Theme', '25 presets, from Dark and Light to Matrix', 'Hub'],
        ['Weather', 'Celsius or Fahrenheit, picked for your country', 'Auto'],
        ['Battery saver', 'Below 20%, until it is charged again', 'On', 'ok'],
        ['Playback resolution', 'Lower it if a video stutters', '720p'],
        ['Start at login', 'Open JukaHub when the handheld starts', 'Off', 'muted'],
      ],
    },
    ps4: REMOTE_PLAY,
    ps5: REMOTE_PLAY,
    scan: {
      title: 'Phone companion',
      sub: 'Scan the QR with your phone, on the same Wi-Fi',
      rows: [
        ['Type', 'Text lands in the field that has focus', ''],
        ['Remote', 'D-pad, A B X Y, Start and the shoulders', ''],
        ['Send a link', 'A YouTube or stream link starts playing here', ''],
        ['Send a file', 'Lands in the PhoneDrop folder', ''],
        ['New PIN', 'Every link already shared stops working', 'Y', 'muted'],
      ],
    },
    bell: {
      title: 'Notifications',
      sub: '2 unread',
      rows: [
        ['Saves backed up', 'Snapshot 20261109-071502', 'Today'],
        ['Download finished', 'Lo-fi beats for long train rides.m4a', '1h'],
        ['Wi-Fi connected', 'HomeNet', '2h', 'muted'],
      ],
    },
    start: {
      title: 'Start',
      sub: 'Every scene, game and tool',
      rows: [
        ['Scenes', 'Media, Files, Music, Live TV, Podcasts and more', ''],
        ['Games', 'Games Library, PS Remote Play, Save Manager, PortMaster', ''],
        ['Tools', 'Downloads, Remote Cast, Smart Home, Accessibility', ''],
        ['Device', 'Quick Settings, Wi-Fi, Screenshot, Ambient, About', ''],
      ],
    },
  };

  // A few rows answer with something more specific than "opens on the device".
  const ROW_TOASTS = {
    'IP address': 'Copied 192.168.1.42',
    'FTP server': 'FTP on ftp://192.168.1.42:2121, user juka',
    'SSH / SFTP': 'SFTP on sftp://juka@192.168.1.42:2222',
    'Living Room · PS5': 'Handing the screen to the stream…',
    'Check for updates': 'Everything is up to date',
  };

  /* ── State ─────────────────────────────────────────────────────────────── */
  const nodes = new Map();
  for (const el of ui.querySelectorAll('[data-f]')) nodes.set(el.dataset.f, el);

  const state = {
    view: 'home', // home | panel | teardown | stock
    focus: 'continue',
    panel: null, // { key, def, index, rowEls }
    stockIndex: 0,
    input: 'key',
  };

  // Delayed steps (a press flash, the panel that follows a press, the
  // teardown card) re-check the state when they fire, so input that arrives in
  // between cannot open the wrong panel or run a step twice.
  const later = (fn, ms) => window.setTimeout(fn, ms);

  // Below this width a panel's text would be a few pixels high, so A and
  // Start report into the caption under the device instead of opening one.
  const compact = () => screen.clientWidth < 500;

  /* ── Painting ──────────────────────────────────────────────────────────── */
  // The caption under the device is the page-sized, screen-reader-announced
  // account of what the demo just did (#ui itself is aria-hidden). It is only
  // rewritten when the words change, so a live region never repeats itself.
  function announce(title, text) {
    if (!caption || !title) return;
    const said = `${title}|${text}`;
    if (caption.dataset.said === said) return;
    caption.dataset.said = said;
    const b = document.createElement('b');
    b.textContent = title;
    caption.replaceChildren(b, document.createTextNode(text));
  }

  function setCaption(key) {
    const entry = CAPTIONS[key];
    if (entry) announce(entry[0], entry[1]);
  }

  const listOf = (items) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`);

  function paintHome() {
    for (const [key, el] of nodes) el.classList.toggle('is-f', key === state.focus);
  }

  function focusTile(key) {
    if (!key || !nodes.has(key) || key === state.focus) return false;
    state.focus = key;
    paintHome();
    setCaption(key);
    return true;
  }

  function pressFlash(el) {
    if (!el) return;
    el.classList.add('is-p');
    later(() => el.classList.remove('is-p'), 90);
  }

  let toastTimer = 0;
  function toast(text, title) {
    if (!toastEl || !text) return;
    announce(title || (CAPTIONS[state.focus] || ['JukaHub'])[0], text);
    toastEl.textContent = text;
    // Hiding it for one layout restarts the entrance animation.
    toastEl.hidden = true;
    void toastEl.offsetWidth;
    toastEl.hidden = false;
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      toastEl.hidden = true;
    }, 2200);
  }

  function hintChip(content) {
    const chip = document.createElement('span');
    chip.className = 'hk';
    if (content === 'dpad') {
      const svg = document.createElementNS(SVG_NS, 'svg');
      svg.setAttribute('viewBox', '0 0 24 24');
      const use = document.createElementNS(SVG_NS, 'use');
      use.setAttribute('href', '#h-dpad');
      svg.appendChild(use);
      chip.appendChild(svg);
    } else {
      chip.textContent = content;
    }
    return chip;
  }

  function hintList(pairs, className) {
    return pairs.map(([chips, label]) => {
      const hint = document.createElement('span');
      hint.className = className;
      for (const c of chips) hint.appendChild(hintChip(c));
      hint.appendChild(document.createTextNode(label));
      return hint;
    });
  }

  const usesKeys = () => state.input === 'key';

  function homeHints() {
    return usesKeys()
      ? [[['Arrows'], 'Move'], [['Enter'], 'Open'], [['F10'], 'Start Menu'], [['Q', 'E'], 'Sections']]
      : [[['dpad'], 'D-Pad Navigate'], [['A'], 'Open'], [['Start'], 'Start Menu'], [['L2', 'R2'], 'Sections']];
  }

  function panelHints() {
    return usesKeys()
      ? [[['Arrows'], 'Choose'], [['Enter'], 'Select'], [['Esc'], 'Close']]
      : [[['dpad'], 'Choose'], [['A'], 'Select'], [['B'], 'Close']];
  }

  function renderHints() {
    if (hintsEl) hintsEl.replaceChildren(...hintList(homeHints(), 'ui-hint'));
    if (state.panel && state.panel.hintsEl) {
      state.panel.hintsEl.replaceChildren(...hintList(panelHints(), 'sheet__hint'));
    }
  }

  function setInput(mode) {
    if (state.input === mode) return;
    state.input = mode;
    if (howto) howto.dataset.input = mode;
    renderHints();
  }

  /* ── Panels ────────────────────────────────────────────────────────────── */
  function buildSheet(def) {
    const sheet = document.createElement('div');
    sheet.className = 'sheet';
    const title = document.createElement('span');
    title.className = 'sheet__title';
    title.textContent = def.title;
    const sub = document.createElement('span');
    sub.className = 'sheet__sub';
    sub.textContent = def.sub;
    const list = document.createElement('ul');
    list.className = 'sheet__rows';
    const rowEls = def.rows.map(([t, s, a, tone], i) => {
      const row = document.createElement('li');
      row.className = 'srow';
      row.dataset.row = String(i);
      const text = document.createElement('span');
      const rt = document.createElement('span');
      rt.className = 'srow__t';
      rt.textContent = t;
      const rs = document.createElement('span');
      rs.className = 'srow__s';
      rs.textContent = s;
      text.append(rt, rs);
      const act = document.createElement('span');
      act.className = 'srow__a' + (tone ? ` srow__a--${tone}` : '');
      act.textContent = a || '';
      row.append(text, act);
      list.appendChild(row);
      return row;
    });
    const hints = document.createElement('div');
    hints.className = 'sheet__hints';
    sheet.append(title, sub, list, hints);
    return { sheet, rowEls, hintsEl: hints };
  }

  function paintPanel(announceRow) {
    const p = state.panel;
    if (!p) return;
    p.rowEls.forEach((row, i) => row.classList.toggle('is-f', i === p.index));
    if (announceRow) {
      const [title, sub] = p.def.rows[p.index];
      announce(title, sub);
    }
  }

  function openPanel(key) {
    const def = PANELS[key];
    if (!def || !layer) return;
    const names = listOf(def.rows.map((r) => r[0]));
    if (compact()) {
      // Too small to read inside the screen: say what it holds instead.
      announce(def.title, `${def.sub}: ${names}.`);
      return;
    }
    const built = buildSheet(def);
    state.panel = { key, def, index: 0, rowEls: built.rowEls, hintsEl: built.hintsEl };
    state.view = 'panel';
    layer.replaceChildren(built.sheet);
    layer.hidden = false;
    paintPanel(false);
    renderHints();
    announce(def.title, `${def.sub}: ${names}.`);
  }

  function closePanel() {
    if (!layer) return;
    layer.hidden = true;
    layer.replaceChildren();
    state.panel = null;
    state.view = 'home';
    paintHome();
    setCaption(state.focus);
  }

  function activateRow() {
    const p = state.panel;
    if (!p) return;
    const row = p.rowEls[p.index];
    pressFlash(row);
    const [title] = p.def.rows[p.index];
    if (p.key === 'start') {
      toast(`The ${title} group opens on the device`, title);
      return;
    }
    toast(ROW_TOASTS[title] || `${title} opens on the device`, title);
  }

  /* ── Exit: the teardown card, then the stock launcher ──────────────────── */
  let closing = false;
  function teardown() {
    if (closing || !layer || !stock) return;
    closing = true;
    state.view = 'teardown';
    state.panel = null;
    announce('Closing JukaHub', 'Saving settings, stopping what it started, and returning to the stock launcher.');
    const steps = [
      ['Saving settings', 'jukauser.json'],
      ['Stopping servers and players', 'FTP, SFTP, companion'],
      ['Returning to the launcher', 'Select + Start does this anywhere'],
    ];
    const def = { title: 'Closing JukaHub', sub: 'Your Continue row and play time are kept', rows: steps.map(([t, s]) => [t, s, '…', 'muted']) };
    const built = buildSheet(def);
    built.hintsEl.remove();
    layer.replaceChildren(built.sheet);
    layer.hidden = false;
    const fast = reduced.matches;
    built.rowEls.forEach((row, i) => {
      later(() => {
        const act = row.querySelector('.srow__a');
        act.textContent = 'Done';
        act.className = 'srow__a srow__a--ok';
      }, fast ? 0 : 320 + i * 330);
    });
    later(showStock, fast ? 400 : 1500);
  }

  function paintStock() {
    if (!stock) return;
    stock.querySelectorAll('.ui-stock__app').forEach((app, i) => {
      app.classList.toggle('is-sel', i === state.stockIndex);
    });
  }

  function showStock() {
    if (!layer || !stock) return;
    layer.hidden = true;
    layer.replaceChildren();
    state.panel = null;
    state.view = 'stock';
    state.stockIndex = 0;
    stock.hidden = false;
    paintStock();
    announce('Stock launcher', 'JukaHub has handed the screen back, with the firmware untouched. Press A on JukaHub to start it again.');
  }

  function openFromStock() {
    if (state.stockIndex !== 0) {
      toast('Only JukaHub is installed in this preview', 'Stock launcher');
      return;
    }
    stock.hidden = true;
    closing = false;
    state.view = 'home';
    state.focus = '';
    focusTile('continue');
    reboot();
  }

  function reboot() {
    const boot = ui.querySelector('[data-boot]');
    if (!boot) return;
    const fresh = boot.cloneNode(true);
    boot.replaceWith(fresh); // a new node restarts the CSS power-on sequence
  }

  /* ── The one dispatcher every input goes through ───────────────────────── */
  function press(button) {
    switch (state.view) {
      case 'teardown':
        return;
      case 'stock':
        return pressStock(button);
      case 'panel':
        return pressPanel(button);
      default:
        return pressHome(button);
    }
  }

  function pressHome(button) {
    if (['up', 'down', 'left', 'right'].includes(button)) {
      const next = (GRAPH[state.focus] || {})[button];
      focusTile(next);
      return;
    }
    if (button === 'l2' || button === 'r2') {
      let band = BANDS.findIndex((b) => b.includes(state.focus));
      if (band < 0) band = state.focus === 'bell' ? 0 : 2;
      const step = button === 'r2' ? 1 : BANDS.length - 1;
      focusTile(BANDS[(band + step) % BANDS.length][0]);
      return;
    }
    const key = state.focus;
    const el = nodes.get(key);
    switch (button) {
      case 'a':
        pressFlash(el);
        if (key === 'exit') {
          state.view = 'teardown'; // input stops now; the card follows the press
          later(teardown, 120);
        } else if (key === 'continue') {
          toast('Resuming where you left off');
        } else {
          later(() => {
            if (state.view === 'home' && state.focus === key) openPanel(key);
          }, 90);
        }
        return;
      case 'start':
        openPanel('start');
        return;
      case 'x':
        toast('X is the secondary action: delete, toggle or search, depending on the screen');
        return;
      case 'y':
        toast('Y is the tertiary action: new, save or submit');
        return;
      case 'b':
      case 'select':
      case 'menu':
        // Home has nothing to go back to; on a keyboard, Esc lets go of the
        // screen so the arrow keys scroll the page again.
        if (state.input === 'key') screen.blur();
        return;
      default:
    }
  }

  function pressPanel(button) {
    const p = state.panel;
    if (!p) return;
    const last = p.rowEls.length - 1;
    switch (button) {
      case 'up':
        p.index = Math.max(0, p.index - 1);
        break;
      case 'down':
        p.index = Math.min(last, p.index + 1);
        break;
      case 'l2':
        p.index = 0;
        break;
      case 'r2':
        p.index = last;
        break;
      case 'a':
        activateRow();
        return;
      case 'b':
      case 'select':
      case 'menu':
        closePanel();
        return;
      case 'start':
        if (p.key === 'start') closePanel();
        return;
      default:
        return;
    }
    paintPanel(true);
  }

  function pressStock(button) {
    const count = stock ? stock.querySelectorAll('.ui-stock__app').length : 1;
    if (button === 'left') state.stockIndex = Math.max(0, state.stockIndex - 1);
    else if (button === 'right') state.stockIndex = Math.min(count - 1, state.stockIndex + 1);
    else if (button === 'a') {
      openFromStock();
      return;
    } else return;
    paintStock();
  }

  /* ── Keyboard: only while the screen has focus ─────────────────────────── */
  const KEYS = {
    ArrowUp: 'up', ArrowDown: 'down', ArrowLeft: 'left', ArrowRight: 'right',
    w: 'up', s: 'down', a: 'left', d: 'right',
    Enter: 'a', ' ': 'a',
    Escape: 'b', Backspace: 'b',
    q: 'l2', e: 'r2', PageUp: 'l2', PageDown: 'r2',
    F10: 'start', x: 'x', y: 'y',
  };

  screen.addEventListener('keydown', (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
    const button = KEYS[key];
    if (!button) return;
    event.preventDefault();
    setInput('key');
    flashDrawn(button);
    press(button);
  });

  screen.addEventListener('focus', () => device.classList.add('is-live'));
  screen.addEventListener('blur', () => device.classList.remove('is-live'));

  /* ── Pointer: hover paints the ring, a click or tap is A ───────────────── */
  ui.addEventListener('pointerover', (event) => {
    if (event.pointerType === 'touch') return;
    if (state.view === 'home') {
      const tile = event.target.closest('[data-f]');
      if (tile) focusTile(tile.dataset.f);
    } else if (state.view === 'panel' && state.panel) {
      const row = event.target.closest('.srow');
      if (row && row.dataset.row && Number(row.dataset.row) !== state.panel.index) {
        state.panel.index = Number(row.dataset.row);
        paintPanel(true);
      }
    }
  });

  ui.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'touch') setInput('touch');
  });

  ui.addEventListener('click', (event) => {
    if (state.view === 'home') {
      const tile = event.target.closest('[data-f]');
      if (!tile) return;
      focusTile(tile.dataset.f);
      press('a');
    } else if (state.view === 'panel' && state.panel) {
      const row = event.target.closest('.srow');
      if (row && row.dataset.row) {
        state.panel.index = Number(row.dataset.row);
        paintPanel(false);
        press('a');
      } else if (!event.target.closest('.sheet')) {
        press('b'); // a tap outside the card closes it
      }
    } else if (state.view === 'stock') {
      const app = event.target.closest('.ui-stock__app');
      if (!app) return;
      state.stockIndex = Array.from(stock.querySelectorAll('.ui-stock__app')).indexOf(app);
      paintStock();
      press('a');
    }
  });

  /* ── The buttons drawn on the handheld ─────────────────────────────────── */
  const held = new Set();
  const repeats = new Map();

  function flashDrawn(button) {
    const el = device.querySelector(`[data-btn="${button}"]`);
    if (!el) return;
    el.classList.add('is-down');
    later(() => {
      if (!held.has(button)) el.classList.remove('is-down');
    }, 130);
  }

  function release(button, el) {
    held.delete(button);
    if (el) el.classList.remove('is-down');
    const r = repeats.get(button);
    if (r) {
      window.clearTimeout(r.delay);
      window.clearInterval(r.every);
      repeats.delete(button);
    }
  }

  for (const el of device.querySelectorAll('[data-btn]')) {
    const button = el.dataset.btn;
    el.addEventListener('pointerdown', (event) => {
      event.preventDefault(); // keep focus on the screen, no text selection
      if (event.button !== undefined && event.button > 0) return;
      // A second finger on a button already held: drop the first press so
      // its repeat timer cannot outlive both.
      if (held.has(button)) release(button, el);
      setInput('pad');
      held.add(button);
      el.classList.add('is-down');
      if (el.setPointerCapture) {
        try {
          el.setPointerCapture(event.pointerId);
        } catch (err) {
          /* not every pointer can be captured */
        }
      }
      screen.focus({ preventScroll: true });
      if (held.has('select') && held.has('start') && state.view !== 'teardown' && state.view !== 'stock') {
        teardown();
        return;
      }
      press(button);
      if (['up', 'down', 'left', 'right'].includes(button)) {
        const r = { every: 0, delay: 0 };
        r.delay = window.setTimeout(() => {
          r.every = window.setInterval(() => press(button), 110);
        }, 320);
        repeats.set(button, r);
      }
    });
    const up = () => release(button, el);
    el.addEventListener('pointerup', up);
    el.addEventListener('pointercancel', up);
    el.addEventListener('lostpointercapture', up);
    el.addEventListener('contextmenu', (event) => event.preventDefault());
  }

  /* ── Gamepad: standard mapping, polled while one is connected ──────────── */
  let inView = true;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver((entries) => {
      for (const entry of entries) inView = entry.isIntersecting;
    }, { threshold: 0.25 }).observe(stage);
  }

  const PAD = {
    up: (g) => btn(g, 12) || axis(g, 1) < -0.55,
    down: (g) => btn(g, 13) || axis(g, 1) > 0.55,
    left: (g) => btn(g, 14) || axis(g, 0) < -0.55,
    right: (g) => btn(g, 15) || axis(g, 0) > 0.55,
    a: (g) => btn(g, 0),
    b: (g) => btn(g, 1),
    x: (g) => btn(g, 2),
    y: (g) => btn(g, 3),
    l2: (g) => btn(g, 4) || btn(g, 6),
    r2: (g) => btn(g, 5) || btn(g, 7),
    select: (g) => btn(g, 8),
    start: (g) => btn(g, 9),
  };
  function btn(g, i) {
    const b = g.buttons[i];
    return !!b && (b.pressed || b.value > 0.5);
  }
  function axis(g, i) {
    return g.axes && typeof g.axes[i] === 'number' ? g.axes[i] : 0;
  }

  const padPrev = {};
  const padNext = {};
  let polling = false;
  let quitLatched = false;

  function pollPads(now) {
    const list = navigator.getGamepads ? Array.from(navigator.getGamepads()).filter(Boolean) : [];
    if (!list.length) {
      polling = false;
      return;
    }
    const live = inView && document.visibilityState === 'visible';
    const down = {};
    for (const name of Object.keys(PAD)) down[name] = list.some((g) => PAD[name](g));

    if (live && down.select && down.start) {
      if (!quitLatched && state.view !== 'teardown' && state.view !== 'stock') {
        quitLatched = true;
        setInput('pad');
        teardown();
      }
    } else if (!down.select || !down.start) {
      quitLatched = false;
    }

    for (const name of Object.keys(PAD)) {
      const isDir = name === 'up' || name === 'down' || name === 'left' || name === 'right';
      if (down[name] && !padPrev[name]) {
        padNext[name] = now + 320;
        if (live && !(quitLatched && (name === 'select' || name === 'start'))) {
          setInput('pad');
          flashDrawn(name);
          press(name);
        }
      } else if (down[name] && isDir && now >= (padNext[name] || 0)) {
        padNext[name] = now + 110;
        if (live) press(name);
      }
      padPrev[name] = down[name];
    }
    window.requestAnimationFrame(pollPads);
  }

  window.addEventListener('gamepadconnected', () => {
    if (!polling) {
      polling = true;
      window.requestAnimationFrame(pollPads);
    }
  });

  /* ── Status bar: the visitor's own clock, greeting and units ───────────── */
  const FAHRENHEIT = new Set(['US', 'PR', 'GU', 'VI', 'AS', 'MP', 'UM']);
  function usesFahrenheit() {
    const tags = [].concat(navigator.languages || [], navigator.language || []);
    for (const tag of tags) {
      try {
        const region = new Intl.Locale(tag).maximize().region;
        if (region) return FAHRENHEIT.has(region);
      } catch (err) {
        /* an odd language tag: try the next one */
      }
    }
    return true;
  }

  function greeting(hour) {
    if (hour >= 5 && hour < 12) return 'Good morning';
    if (hour >= 12 && hour < 18) return 'Good afternoon';
    if (hour >= 18 && hour < 22) return 'Good evening';
    return 'Good night';
  }

  function tick() {
    const now = new Date();
    if (clockEl) clockEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    if (greetEl) greetEl.textContent = greeting(now.getHours());
  }

  if (weatherEl && !usesFahrenheit()) weatherEl.textContent = '18°C / 10°C';
  tick();
  window.setInterval(tick, 20000);

  // The version line carries the release date, as the About line does.
  // site.js may have it already (a cached answer resolves before this script
  // runs), so read what it left on <html> and listen for a later answer too.
  function showRelease(published) {
    if (verEl && typeof published === 'string' && /^\d{4}-\d{2}-\d{2}/.test(published)) {
      verEl.textContent = `v0.4.0 · ${published.slice(0, 10)}`;
    }
  }
  showRelease(document.documentElement.dataset.releasePublished);
  document.addEventListener('jukahub:release', (event) => showRelease(event.detail && event.detail.published));

  /* ── Start state ───────────────────────────────────────────────────────── */
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  state.input = fine ? 'key' : 'touch';
  if (howto) howto.dataset.input = state.input;
  renderHints();
  paintHome();
  // The page already shows Continue's caption; remember it rather than
  // rewriting the live region on load.
  if (caption && CAPTIONS[state.focus]) caption.dataset.said = `${CAPTIONS[state.focus][0]}|${CAPTIONS[state.focus][1]}`;
})();
