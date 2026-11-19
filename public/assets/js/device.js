/* The live JukaHub Home screen at the top of jukalang.com.
 *
 * Two Homes, as on the device (Settings → Theme & look → Home layout):
 *
 *   Tabs       the default (JukaHubV2 docs/HOME_TABS.md). A strip of tabs in
 *              the top bar; L1 / R1 change the page, and each page lays its
 *              tiles out with the device's own arithmetic (homeTabsLayout in
 *              player/hometabs_draw.go): a grid, or rows with a hero.
 *   Standard   the dashboard from JukaHubV2/mockups/home-16x9-and-4x3.html:
 *              the search bar, the Remote Play pills, Continue, Media and the
 *              tiles. Q / E jump between its three bands in the preview.
 *
 * One focus ring that the D-pad moves (hover paints the same ring; there is
 * no separate hover style), A opens, B goes back, Start opens the Start menu,
 * Menu opens the voice orb, Select opens Quick Settings, and Exit (or Select +
 * Start) hands the screen back to the stock launcher.
 *
 * Input, in the order people reach for it:
 *   keyboard   the twins in JukaHubV2/docs/CONTROLS.md: arrows (or WASD),
 *              Enter / Space (A), Esc (B; Backspace too), Q / E and Page Up /
 *              Page Down (L1 / R1), F10 (Start), F4 (Menu), X, Y, while the
 *              screen has focus (click it or Tab to it)
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

  const homes = {
    tabs: ui.querySelector('[data-home="tabs"]'),
    standard: ui.querySelector('[data-home="standard"]'),
  };
  if (!homes.tabs || !homes.standard) return;

  const stage = document.getElementById('demo') || device;
  const caption = document.getElementById('demo-caption');
  const live = document.getElementById('demo-live');
  const howto = document.getElementById('demo-how');
  const switchButtons = Array.from(document.querySelectorAll('.layout-switch__btn[data-layout]'));
  const layer = ui.querySelector('[data-layer]');
  const toastEl = ui.querySelector('[data-toast]');
  const stock = ui.querySelector('[data-stock]');
  const clockEls = ui.querySelectorAll('[data-clock]');
  const greetEls = ui.querySelectorAll('[data-greet]');
  const weatherEl = ui.querySelector('[data-weather]');
  const buildEls = ui.querySelectorAll('[data-build]');
  const strip = homes.tabs.querySelector('[data-f="strip"]');
  const page = homes.tabs.querySelector('[data-page]');
  const grid = homes.tabs.querySelector('[data-grid]');
  const tabExit = homes.tabs.querySelector('[data-f="exit"]');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const SVG_NS = 'http://www.w3.org/2000/svg';

  /* ── The Tabs Home: its pages ──────────────────────────────────────────── */
  // An item is [key, title, sub, look, panel or toast, caption, badge]. look
  // is 'art:<cover>' for a tile with a picture, else the sprite symbol of its
  // glyph; a trailing '!' dims it and badges it Install (a console with no
  // emulator yet). The Games and Main lists follow player/hometabs_games.go and
  // player/hometabs_items.go; titles, counts and covers are made up.
  const TABS = [
    {
      id: 'recent',
      view: 'row',
      hero: true,
      caption: ['Recent', 'What Continue resumes, the games you played last with their covers, then the apps you opened last. L1 and R1 change tabs.'],
      items: [
        ['continue', 'Lo-fi beats for long train rides', 'Continue watching · 2:34 left', 'art:continue', '>Resuming where you left off', ['Continue', 'Resume the last thing you watched or played in one press.']],
        ['tobu', 'Tobu Tobu Girl', 'Game Boy · 2h ago', 'art:gb', '>Starting Tobu Tobu Girl where you left off', ['Tobu Tobu Girl', 'A game you played last, with its cover. A starts it from its automatic save state; X adds it to Favourites or a collection.']],
        ['mages', 'Micro Mages', 'NES · yesterday', 'art:nes', '>Starting Micro Mages where you left off', ['Micro Mages', 'A game with no cover in the box-art index gets one from two minutes of its own gameplay.']],
        ['celeste', 'Celeste Classic', 'PICO-8 · Monday', 'art:p8', '>Starting Celeste Classic', ['Celeste Classic', 'PICO-8 carts start in the official PICO-8, with Splore, when you have copied your own PICO-8 to the card.']],
        ['youtube', 'YouTube', 'Videos and channels', 'h-media', 'youtube'],
        ['music', 'Music', 'Your songs and playlists', 'i-music', 'music'],
        ['settings', 'Settings', 'Device and design', 'h-settings', 'settings'],
      ],
    },
    {
      id: 'main',
      view: 'grid',
      caption: ['Main', 'Settings, Trophies, RetroAchievements, Chat, the Browser, the Store, Tools, Files, Bluetooth and Wi-Fi.'],
      items: [
        ['settings', 'Settings', 'Device and design', 'h-settings', 'settings'],
        ['trophies', 'Trophies', 'JukaHub achievements', 'i-trophy', 'trophies'],
        ['retro', 'RetroAchievements', 'RetroArch achievements', 'i-star', '>Your RetroAchievements profile, game by game', ['RetroAchievements', 'Your RetroAchievements progress, in RetroArch games and in JukaHub’s own PPSSPP.']],
        ['chat', 'Chat', 'Messages and servers', 'h-chat', 'chat'],
        ['mail', 'Mail', 'Your inbox', 'i-mail', '>Your inbox, with its unread count on the tile', ['Mail', 'Your inbox and your calendars, with accounts added from your phone. New, and still being confirmed on hardware.']],
        ['browser', 'Browser', 'The open web', 'h-browser', 'browser'],
        ['store', 'Store', 'Apps and downloads', 'h-packages', 'store'],
        ['tools', 'Tools', 'Network and system', 'h-tools', 'tools'],
        ['files', 'Files', 'Browse storage', 'h-files', 'files'],
        ['bluetooth', 'Bluetooth', 'Headphones and controllers', 'i-bluetooth', 'bluetooth'],
        ['wifi', 'Wi-Fi', 'Networks and hotspots', 'i-wifi', 'wifi'],
      ],
    },
    {
      id: 'games',
      view: 'grid',
      caption: ['Games', 'Your consoles with their covers, most recently played first, then JukaHub’s own games, Remote Play, PC streaming, Steam, Minecraft, ports and the Emulators page.'],
      items: [
        ['gba', 'Game Boy Advance', '42 games', 'art:gba', 'console'],
        ['snes', 'Super Nintendo', '61 games', 'art:snes', 'console'],
        ['ps1', 'PlayStation', '18 games', 'art:ps1', 'console'],
        ['md', 'Mega Drive', '33 games', 'art:md', 'console'],
        ['nds', 'Nintendo DS', '3 games', 'art:nds!', 'emulators', ['Nintendo DS', 'A console that has games but no emulator to run them is dimmed with an Install badge. A opens the Emulators page on it, where X installs one.']],
        ['minigames', 'Games', 'JukaGames', 'h-emulator', 'jukagames', null, 'Built-in'],
        ['jukaland', 'JukaLand', 'JukaGames', 'i-layers', '>A block world to build and mine in', ['JukaLand', 'A block world built into JukaHub, with its own trophies for blocks placed and ores mined.'], 'Built-in'],
        ['synth', 'Synth', 'JukaGames', 'i-music', '>Seven lanes, a 16-step sequencer and pads in the song’s key', null, 'Built-in'],
        ['remote', 'PS Remote Play', 'Remote play', 'i-tv', 'remote'],
        ['xremote', 'Xbox Remote Play', 'Remote play', 'i-gamepad', 'x1'],
        ['pcstream', 'PC streaming (Moonlight)', 'Your gaming PC', 'i-monitor', 'pc'],
        ['cloud', 'Cloud Gaming', 'Game Pass · GeForce NOW', 'i-cloud-up', 'cloud'],
        ['steam', 'Steam', 'Your Steam library', 'i-apps', 'steam'],
        ['minecraft', 'Minecraft', 'Every way to play', 'i-package', 'minecraft'],
        ['portsstore', 'Ports Store', 'Download ports', 'i-download', 'ports'],
        ['portmaster', 'PortMaster Ports', 'PC ports', 'i-layers', 'ports'],
        ['windows', 'Windows Apps', 'Windows games', 'i-monitor', 'windows'],
        ['emulators', 'Emulators', 'Install and update', 'i-cpu', 'emulators'],
        ['library', 'Games Library', 'Every game, by console', 'i-folder', 'library'],
      ],
    },
    {
      id: 'entertainment',
      view: 'grid',
      caption: ['Entertainment', 'YouTube, Shorts, Live TV, what you downloaded for offline, Music, Podcasts and the game clips your emulators recorded.'],
      items: [
        ['youtube', 'YouTube', 'Videos and channels', 'h-media', 'youtube'],
        ['shorts', 'Shorts', 'Short videos', 'i-play', '>One vertical video after another', ['Shorts', 'Vertical videos, one after another, with the D-pad.']],
        ['livetv', 'Live TV', 'Channels to watch now', 'i-tv', '>Channels from your IPTV playlists', ['Live TV', 'Channels from your own .m3u playlists or the public iptv-org list, grouped by category.']],
        ['downloaded', 'Downloaded', 'Saved videos and music', 'i-download', '>The Saved tab of Downloads: everything kept for offline', ['Downloaded', 'Videos and tracks saved to the card, each playable with Wi-Fi off. A link from your phone can be saved the same way.']],
        ['music', 'Music', 'Your songs and playlists', 'i-music', 'music'],
        ['podcasts', 'Podcasts', 'Shows and episodes', 'i-mic', '>Your subscriptions and new episodes', ['Podcasts', 'A subscription library with new episodes, and audiobooks with chapters.']],
        ['clips', 'Game clips', 'Recorded gameplay', 'i-camera', '>Clips RetroArch recorded, played in JukaHub’s player', ['Game clips', 'What your emulators recorded, listed and playable in one place, plus time-lapse films of a playthrough.']],
      ],
    },
    {
      id: 'favourites',
      view: 'grid',
      caption: ['Favourites', 'Your favourite games A to Z, then everything else you marked, then your saved videos. X on any tile adds or removes it.'],
      items: [
        ['celeste', 'Celeste Classic', 'PICO-8', 'art:p8', '>Starting Celeste Classic'],
        ['mages', 'Micro Mages', 'NES', 'art:nes', '>Starting Micro Mages'],
        ['tobu', 'Tobu Tobu Girl', 'Game Boy', 'art:gb', '>Starting Tobu Tobu Girl'],
        ['pcfav', 'Gaming PC', 'PC streaming', 'art:pc', 'pc'],
        ['synth', 'Synth', 'A pocket groovebox', 'i-music', 'jukagames'],
        ['saved', 'Saved videos', '4 items', 'i-star', '>Videos and links you saved, one press away'],
      ],
    },
    {
      id: 'collections',
      view: 'grid',
      caption: ['Collections', 'Folders of games and apps you make yourself, plus Most played, Recently added and Never played, which keep themselves up to date.'],
      items: [
        ['newcol', 'New collection', 'Group games and apps', 'i-folder', '>Name it on the on-screen keyboard, or from your phone'],
        ['couch', 'Couch co-op', '6 items', 'i-share', '>A collection opens as a page of its own, with its own view'],
        ['most', 'Most played', '12 items', 'i-chart', '>Your games by play time; the list keeps itself up to date'],
        ['added', 'Recently added', '9 items', 'i-clock', '>The newest games on the card; the list keeps itself up to date'],
        ['never', 'Never played', '31 items', 'i-gamepad', '>Everything still waiting for a first go'],
      ],
    },
  ];
  const TAB_IDS = TABS.map((t) => t.id);
  const tabById = (id) => TABS.find((t) => t.id === id) || TABS[0];

  /* ── The Standard Home: focus graph, Frame A (1280 x 720) ──────────────── */
  // Vertical moves land on the tile with the most overlap underneath or above,
  // so the ring never jumps across the screen. The bottom row clamps at both
  // ends, as on the device.
  const STRIP = ['favorites', 'browser', 'chat', 'tools', 'files', 'settings'];
  const UP_FROM_STRIP = {
    favorites: 'continue',
    browser: 'continue',
    chat: 'games',
    tools: 'games',
    files: 'packages',
    settings: 'apps',
  };
  const GRAPH = {
    bell: { down: 'scan', left: 'scan' },
    search: { right: 'ps4', down: 'continue' },
    ps4: { left: 'search', right: 'ps5', down: 'media', up: 'bell' },
    ps5: { left: 'ps4', right: 'x1', down: 'media', up: 'bell' },
    x1: { left: 'ps5', right: 'pc', down: 'media', up: 'bell' },
    pc: { left: 'x1', right: 'scan', down: 'media', up: 'bell' },
    scan: { left: 'pc', down: 'media', up: 'bell' },
    continue: { right: 'media', down: 'favorites', up: 'search' },
    media: { left: 'continue', down: 'games', up: 'ps4' },
    games: { left: 'continue', right: 'packages', up: 'media', down: 'tools' },
    packages: { left: 'games', right: 'apps', up: 'media', down: 'files' },
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
    ['search', 'ps4', 'ps5', 'x1', 'pc', 'scan'],
    ['continue', 'media', 'games', 'packages', 'apps'],
    STRIP,
  ];

  /* ── What each Standard control is, in the caption under the device ───── */
  const CAPTIONS = {
    continue: ['Continue', 'Resume the last thing you watched or played in one press.'],
    media: ['Media', 'YouTube with Continue watching and Trending, Shorts, Live TV, podcasts, downloads for offline, and music with synced lyrics.'],
    games: ['Games', 'The Games library: every console on the card with covers, play time, save slots, netplay and RetroAchievements, plus PortMaster ports.'],
    packages: ['Packages', 'Apps, games and emulators, installed next to JukaHub with a rollback copy. The APK Store is one press away.'],
    apps: ['Apps', 'Every other app on the card with its own icon, Steam, Windows Apps, and the built-ins: JukaLand, Weather and the Browser.'],
    favorites: ['Favorites', 'Videos and links you saved, one press away.'],
    browser: ['Browser', 'A web browser built for the D-pad that blocks ads and trackers and plays YouTube links in Media.'],
    chat: ['Chat', 'The community Discord channel on the handheld, voice clips and voice channels, and a Juka AI tab. The badge counts unread messages.'],
    tools: ['Tools', 'The IP address, FTP and SFTP, the phone companion, Screen Share, Save sync, the Toolbox and the Security & trust page.'],
    files: ['Files', 'A file manager for the card: open photos, music, videos and books, extract archives, and move files between two consoles.'],
    settings: ['Settings', 'Display, over 50 themes, the Home layout, Voice & AI, JukaHub OS and seven languages.'],
    search: ['Search', 'Y from anywhere on Home: apps, games, settings rows, files and the web, typed, said or sent from your phone.'],
    ps4: ['PS4', 'JukaHub’s own Remote Play client: it finds the console on your network, pairs once with a PIN, and streams.'],
    ps5: ['PS5', 'Remote Play for the PS5 as well. A PS5 also needs your PSN account ID, which your phone can send.'],
    x1: ['X1', 'Your Xbox One or Series console, streamed through GreenOvercast. The dot lights once a client is installed.'],
    pc: ['PC', 'JukaHub’s own Moonlight client for Vibepollo, Apollo and Sunshine: your PC’s games with their covers, at the handheld’s own screen size.'],
    scan: ['Phone companion', 'Scan the QR and your phone becomes a keyboard, a remote and a way to send links and files to the handheld.'],
    bell: ['Notifications', 'The notification centre. The badge counts what you have not read yet.'],
    exit: ['Exit', 'Select + Start does this from any screen: JukaHub saves, stops what it started and hands back the stock launcher. Press A to watch.'],
  };
  // Captions for Tabs tiles that do not carry their own.
  const ITEM_CAPTIONS = {
    youtube: ['YouTube', 'Search, Continue watching and Trending; Shorts, Downloads, History, Live TV and Podcasts are tabs on the same screen.'],
    music: ['Music', 'Open a song and the player takes its folder: shuffle that visits each track once, a play-next queue, synced lyrics, a sleep timer and a spectrum.'],
    trophies: ['Trophies', '391 of JukaHub’s own, for what you play, watch, make and do, beside RetroAchievements.'],
    store: ['Store', 'A folder of everything that installs something: Android apps, Packages, PortMaster, Windows Apps, Downloads, Themes and Wallpapers.'],
    bluetooth: ['Bluetooth', 'Headphones and pads that reconnect by themselves, sound that follows the headset, and a volume for each device.'],
    wifi: ['Wi-Fi', 'Scan and join with the on-screen keyboard; saved networks reconnect without the password.'],
    minigames: ['Games', 'The minigames built into JukaHub, from Snake and Tetris to 2048, each keeping its best scores and trophies.'],
    remote: ['PS Remote Play', 'Your PS4 and PS5 through JukaHub’s own client: it finds the console, pairs once with a PIN, and streams.'],
    xremote: ['Xbox Remote Play', 'Your Xbox One or Series console, streamed through GreenOvercast, a native client for ARM handhelds.'],
    portsstore: ['Ports Store', 'PortMaster’s whole catalogue as a store, filtered for the handheld you hold. New, and still being confirmed on hardware.'],
    cloud: ['Cloud Gaming', 'Xbox Cloud Gaming and GeForce NOW, streamed through GreenOvercast on the handheld.'],
    steam: ['Steam', 'Every game on your account with its cover and play time. The ones PortMaster has a port of can play on the handheld; the rest stream from your PC.'],
    minecraft: ['Minecraft', 'Every way to play on the card: Java Edition through PortMaster with your own files, Bedrock through AndroidRT, and two free alternatives.'],
    portmaster: ['PortMaster Ports', 'Ports play as games here, with Continue, play time, trophies and the in-game menu.'],
    windows: ['Windows Apps', 'Small Windows programs through Box64 and Wine, with the pad as a mouse. Still experimental on the handheld.'],
    emulators: ['Emulators', 'Install emulators and RetroArch cores, keep them updated every day, and roll an update back in one press.'],
    library: ['Games Library', 'Every game by console, with search, a random pick, collections and a ROM manager.'],
    synth: ['Synth', 'A pocket groovebox: seven lanes, a 16-step sequencer and pads in the song’s key.'],
    pcfav: ['Gaming PC', 'Favourites hold apps and PCs as well as games.'],
    saved: ['Saved videos', 'The media Favorites screen joins the tab when it has anything in it.'],
  };
  const LAYOUT_CAPTIONS = {
    tabs: ['Tabs', 'The default Home. L1 and R1 change tabs; each tab is a page of apps or games, and A on the strip changes its view.'],
    standard: ['Standard', 'The dashboard: Continue, Media and the tiles you use most under the greeting, the search bar and the Remote Play pills.'],
  };

  /* ── The panels A opens (titles, rows and actions from the docs) ──────── */
  const REMOTE_PLAY = {
    title: 'Remote Play',
    sub: 'JukaHub client · PS4 + PS5 · native libchiaki',
    rows: [
      ['Living Room · PS5', 'Ready to stream · 720p30', 'Play', 'accent'],
      ['Bedroom · PS4', 'Not paired: press A, then type the PIN on the console', 'Pair'],
      ['Xbox (X1)', 'Through GreenOvercast; sign in with a code on your phone', 'Open'],
      ['Scan for consoles', 'Search the LAN for PS4 and PS5 consoles', 'Scan'],
      ['Add console by address', 'For a console discovery cannot see', 'Add'],
    ],
  };
  const PC_STREAMING = {
    title: 'PC streaming',
    sub: 'Moonlight · Vibepollo, Apollo, Sunshine',
    rows: [
      ['Gaming PC · Vibepollo', 'Paired · Auto: Balanced · 1280 × 720', 'Games', 'accent'],
      ['Living room PC · Sunshine', 'Not paired: press A for a 4-digit PIN', 'Pair'],
      ['Add a PC by address', 'A host name, a VPN address or an internet address', 'Add'],
      ['Check this handheld', 'Picture, sound, controls and rumble', 'Check'],
    ],
  };
  const SETTINGS = {
    title: 'Settings',
    sub: 'Device and design',
    rows: [
      ['Display', 'Brightness, lock screen, colour and fonts', 'Open'],
      ['Theme & look', 'Over 50 themes, Home layout, glass and wallpaper', 'Open'],
      ['Voice & AI', 'Speech recognition, Hey Juka, the game assistant', 'Open'],
      ['JukaHub OS', 'Power on straight into JukaHub', 'Off', 'muted'],
      ['Language', 'English and six more', 'English'],
    ],
  };
  const MEDIA = {
    title: 'YouTube',
    sub: 'Continue watching and Trending now',
    rows: [
      ['Search', 'Type, say it, or send it from your phone', 'Search', 'accent'],
      ['Continue watching', 'Pick up where you stopped', 'Open'],
      ['Trending now', 'What is popular today', 'Open'],
      ['Downloads', 'Keep a video, or just its sound, for offline', 'Open'],
      ['History', 'Everything you watched', 'Open'],
    ],
  };
  const MUSIC = {
    title: 'Music',
    sub: 'Your songs and playlists',
    rows: [
      ['Shuffle', 'Visits every track once', 'On', 'ok'],
      ['Synced lyrics', 'From the .lrc file beside a song', 'Auto'],
      ['Sleep timer', 'Stops the music, the screen can stay off', 'Off', 'muted'],
      ['Listening history', 'What you played, and how often', 'Open'],
      ['Background music', 'Calm, Lo-fi, Chiptune or your own, while you browse', 'Off', 'muted'],
    ],
  };
  const FILES = {
    title: 'Files',
    sub: 'SD card',
    rows: [
      ['Roms', 'One folder per console', 'Open'],
      ['Music', 'Opens in the audio player', 'Open'],
      ['Videos', 'Plays with subtitles', 'Open'],
      ['Photos', 'Left and Right browse, L1 and R1 zoom', 'Open'],
      ['PhoneDrop', 'Files sent from your phone', 'Open'],
    ],
  };
  const CHAT = {
    title: 'Chat',
    sub: 'Juka Discord · #general',
    rows: [
      ['retro_rin', 'Netplay found my Brick by itself, no IP typed', '2m'],
      ['pixelpilot', 'Is PS5 pairing fine on hotel Wi-Fi?', '9m'],
      ['Juka AI', 'Ask about the handheld; it can look before it answers', 'Open', 'accent'],
      ['Reply', 'Type here, from your phone, or hold the mic for a clip', ''],
    ],
  };
  const BROWSER = {
    title: 'Browser',
    sub: 'The open web, built for the D-pad',
    rows: [
      ['Search the web', 'DuckDuckGo Lite, or the engine you choose', 'Search', 'accent'],
      ['JukaHub issues', 'github.com/jukaLang/JukaHubV2/issues', 'Open'],
      ['Blocked on this page', 'Ads and trackers, counted', '12'],
      ['Favorites', 'Your saved links', 'Open'],
    ],
  };
  const TOOLS = {
    title: 'Tools',
    sub: 'Network and system',
    rows: [
      ['IP address', '192.168.1.42', 'Copy'],
      ['FTP & SFTP', 'Share Roms, BIOS and Saves over Wi-Fi', 'Start'],
      ['Screen Share', 'The screen, games too, in a browser on your TV', 'Off', 'muted'],
      ['Save sync', 'Google Drive or WebDAV, around each game', 'Set up'],
      ['Security & trust', 'What this build protects', 'View'],
    ],
  };
  const PANELS = {
    // Tabs pages
    youtube: MEDIA,
    music: MUSIC,
    settings: SETTINGS,
    files: FILES,
    chat: CHAT,
    browser: BROWSER,
    tools: TOOLS,
    trophies: {
      title: 'Trophies',
      sub: '391 to earn · JukaHub’s own achievements',
      rows: [
        ['Time played', 'The first hundred count hours of play', 'View'],
        ['Games', 'Launched, finished, and played on different systems', 'View'],
        ['Minigames', 'Best scores in Snake, Tetris, 2048, Pong and more', 'View'],
        ['Night Owl', 'One of the clock trophies', 'Earned', 'ok'],
      ],
    },
    store: {
      title: 'Store',
      sub: 'Everything that installs or downloads something',
      rows: [
        ['Android apps', 'APK Store', 'Open'],
        ['Packages', 'Apps, games and emulators', 'Open'],
        ['PortMaster', 'Ports for the handheld', 'Open'],
        ['Windows Apps', 'Programs and installers', 'Open'],
        ['Themes', 'Colours, consoles and experience packs', 'Open'],
      ],
    },
    bluetooth: {
      title: 'Bluetooth',
      sub: 'Headphones and controllers',
      rows: [
        ['Earbuds', 'Connected · the sound follows them', 'Disconnect', 'accent'],
        ['Wireless controller', 'Remembered · reconnects by itself', 'Connect'],
        ['Search for devices', 'Headphones, pads and keyboards', 'Search'],
      ],
    },
    wifi: {
      title: 'Wi-Fi',
      sub: 'Networks and hotspots',
      rows: [
        ['HomeNet', 'Connected · saved', 'Details', 'accent'],
        ['Scan', 'Find networks nearby', 'Scan'],
        ['Hotspot', 'Make this handheld a network of its own', 'Off', 'muted'],
        ['Wi-Fi diagnostics', 'A sheet you can copy when something is wrong', 'View'],
      ],
    },
    console: {
      title: 'Games library',
      sub: 'Sorted by last played',
      rows: [
        ['A on a game', 'Plays it with the emulator that owns its console', ''],
        ['X on a game', 'Netplay: host it, or join a room on your Wi-Fi', ''],
        ['Start on a game', 'Emulator, cover, rename, hide or delete', ''],
        ['Random pick', 'Let the library choose tonight’s game', ''],
        ['Select + L2 in a game', 'The in-game menu: save slots, Ask Juka, Quit', ''],
      ],
    },
    emulators: {
      title: 'Emulators',
      sub: 'Install and update',
      rows: [
        ['Nintendo DS', '3 games, no emulator yet', 'Install', 'accent'],
        ['RetroArch', 'Every core in the ARM64 buildbot index', 'Open'],
        ['PPSSPP', 'JukaHub’s own current build for PSP', 'Update'],
        ['Emulator updates', 'Daily, with a one-press roll back', 'Auto'],
        ['Get more cores', 'The cores worth having for your consoles', 'Get'],
      ],
    },
    jukagames: {
      title: 'JukaGames',
      sub: 'Built into JukaHub',
      rows: [
        ['JukaLand', 'A block world to build and mine in', 'Play'],
        ['Synth', 'A pocket groovebox with a 16-step sequencer', 'Play'],
        ['Snake, Tetris and 2048', 'Minigames that keep your best scores', 'Play'],
        ['Pong, Minesweeper and Flappy', 'More of them, each with its trophies', 'Play'],
      ],
    },
    remote: REMOTE_PLAY,
    pc: PC_STREAMING,
    cloud: {
      title: 'Cloud Gaming',
      sub: 'Games that run on someone else’s servers',
      rows: [
        ['Xbox Cloud Gaming', 'Game Pass games marked for the cloud', 'Open'],
        ['GeForce NOW', 'Games you own, on NVIDIA’s servers', 'Open'],
        ['GreenOvercast', 'The client both stream through on the handheld', 'Install'],
      ],
    },
    steam: {
      title: 'Steam',
      sub: 'Your library · signed in with the Steam app',
      rows: [
        ['All games', 'Covers, play time and size, by last played', ''],
        ['Installed', 'What is on your PC, and where', ''],
        ['Handheld', 'Games with a PortMaster port, ready to play here', ''],
        ['Account', 'Scan a code with the Steam app; no password typed', 'X'],
      ],
    },
    minecraft: {
      title: 'Minecraft',
      sub: 'Your own copy, or a free game',
      rows: [
        ['Minecraft: Java Edition', 'PortMaster’s port with your own game files', 'Install'],
        ['Minecraft: Bedrock Edition', 'Your own APK through AndroidRT · experimental', 'Open'],
        ['ClassiCube', 'Free Minecraft Classic client', 'Install'],
        ['Luanti · Mineclonia', 'Free Minecraft-like survival game', 'Install'],
      ],
    },
    ports: {
      title: 'PortMaster',
      sub: 'Ports for the handheld',
      rows: [
        ['Ports Store', 'PortMaster’s whole catalogue, filtered for this handheld', 'Browse', 'accent'],
        ['Installed ports', 'They play from Games like any console', '9'],
        ['PortMaster', 'Install, update and manage ports', 'Open'],
      ],
    },
    windows: {
      title: 'Windows Apps',
      sub: 'Box64 and Wine on the handheld · experimental',
      rows: [
        ['Scan for programs', 'Finds .exe files on the card', 'Scan'],
        ['Windows runtime', 'Set up and update Box64 and Wine', 'Open'],
        ['Pad as mouse', 'The sticks and buttons drive the pointer', 'On', 'ok'],
      ],
    },
    library: {
      title: 'Games library',
      sub: 'Every console on the card',
      rows: [
        ['Search', 'By title, across every console', 'Y'],
        ['Random pick', 'Let the library choose', 'Roll'],
        ['Collections', 'Your own, and the automatic ones', 'Open'],
        ['ROM manager', 'Duplicates, cut-off zips and missing BIOS', 'Open'],
      ],
    },
    // Standard Home
    media: MEDIA,
    games: {
      title: 'Games library',
      sub: 'Roms on this card, console by console',
      rows: [
        ['Game Boy Advance', '42 games', 'Browse'],
        ['Super Nintendo', '61 games', 'Browse'],
        ['PlayStation', '18 games', 'Browse'],
        ['Mega Drive', '33 games', 'Browse'],
        ['PortMaster Ports', '9 ports', 'Browse'],
      ],
    },
    packages: {
      title: 'Packages',
      sub: 'Apps, games and emulators',
      rows: [
        ['Browse packages', 'Install next to JukaHub, with a rollback copy', 'Open', 'accent'],
        ['Installed', 'Run each one from here', '2'],
        ['Check for updates', 'Compare with the registry', 'Check'],
        ['More stores', 'The APK Store and F-Droid', 'Open'],
      ],
    },
    apps: {
      title: 'Apps',
      sub: 'On this card',
      rows: [
        ['JukaLand', 'Built in', 'Open'],
        ['Weather', 'Built in · seven-day forecast', 'Open'],
        ['Steam', 'Your Steam library', 'Open'],
        ['Windows Apps', 'Programs through Box64 and Wine', 'Open'],
        ['RetroArch', 'Apps/RetroArch', 'Open'],
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
    ps4: REMOTE_PLAY,
    ps5: REMOTE_PLAY,
    x1: {
      title: 'X1',
      sub: 'Your Xbox One or Series, through GreenOvercast',
      rows: [
        ['Open GreenOvercast', 'Sign in with a code on your phone, once', 'Open', 'accent'],
        ['Remote features', 'Turn them on in the console’s settings', ''],
        ['Cloud Gaming', 'Game Pass in the cloud, from Start → Games', 'Open'],
      ],
    },
    scan: {
      title: 'Phone companion',
      sub: 'Scan the QR with your phone, on the same Wi-Fi',
      rows: [
        ['Type', 'Text lands in the field that has focus', ''],
        ['Remote', 'D-pad, A B X Y, Start and the shoulders', ''],
        ['Send to the handheld', 'Games, covers and music go where they belong', ''],
        ['Files', 'Browse, upload and download from a browser', ''],
        ['New PIN', 'Every link already shared stops working', 'Y', 'muted'],
      ],
    },
    bell: {
      title: 'Notifications',
      sub: '2 unread',
      rows: [
        ['Saves backed up', 'Save guard · 3 games changed', 'Today'],
        ['Download finished', 'Lo-fi beats for long train rides.m4a', '1h'],
        ['Update ready', 'Installs at the next start', '2h', 'muted'],
      ],
    },
    search: {
      title: 'Search',
      sub: 'Apps, games, settings, files and the web',
      rows: [
        ['Type', 'On the on-screen keyboard, or from your phone', ''],
        ['Say it', 'Y on the search sheet listens', 'Y'],
        ['Settings rows', 'A result opens the exact row', ''],
        ['The web', 'Anything else goes to the Browser', ''],
      ],
    },
    // Both Homes
    start: {
      title: 'Start',
      sub: 'Every scene, game and tool',
      rows: [
        ['Scenes', 'Media, Files, Music, Live TV, Podcasts, Recordings', ''],
        ['Games', 'Library, Remote Play, PC streaming, Steam, Minecraft, Synth', ''],
        ['Tools', 'Downloads, Screen Share, Save sync, Voice command', ''],
        ['Device', 'Quick Settings, Edit Home, Screenshot, About', ''],
      ],
    },
    quick: {
      title: 'Quick Settings',
      sub: 'Select on Home, or Start → Device',
      rows: [
        ['Wi-Fi', 'HomeNet', 'On', 'ok'],
        ['Bluetooth', 'Earbuds connected', 'On', 'ok'],
        ['Brightness and volume', 'Left and Right change them', '60%'],
        ['Quiet Mode', 'Holds toasts and sounds, never an alarm', 'Off', 'muted'],
        ['Close all apps', 'Games save and quit; says what memory came back', 'Run'],
      ],
    },
    voice: {
      title: 'Listening…',
      sub: 'Say what to open, or ask Juka',
      rows: [
        ['"Open YouTube"', 'Screens, apps, games, settings pages and songs', ''],
        ['"Volume 50"', 'Volume, brightness, Wi-Fi, Bluetooth, the music', ''],
        ['"Take a screenshot"', 'And the small things you would otherwise dig for', ''],
        ['"Why won’t my last game start?"', 'Juka checks the device before it answers', ''],
      ],
    },
  };

  // A few rows answer with something more specific than "opens on the device".
  const ROW_TOASTS = {
    'IP address': 'Copied 192.168.1.42',
    'FTP & SFTP': 'FTP on ftp://192.168.1.42:2121, user juka',
    'Living Room · PS5': 'Handing the screen to the stream…',
    'Gaming PC · Vibepollo': 'The PC’s library, with its covers',
    'Check for updates': 'Everything is up to date',
    'Close all apps': 'Closed 3 apps · 412 MB free now',
  };

  /* ── State ─────────────────────────────────────────────────────────────── */
  const stdNodes = new Map();
  for (const el of homes.standard.querySelectorAll('[data-f]')) stdNodes.set(el.dataset.f, el);

  const state = {
    layout: 'tabs', // tabs | standard
    view: 'home', // home | panel | teardown | stock
    focus: 'continue', // Standard's focused control
    tab: 'recent',
    tabFocus: 'tile', // strip | tile | exit (Tabs)
    tabIndex: {}, // the focused tile of each tab
    tabRects: [],
    tabExtent: 0,
    tabScroll: 0,
    panel: null, // { key, def, index, rowEls, hintsEl }
    stockIndex: 0,
    input: 'key',
  };
  for (const id of TAB_IDS) state.tabIndex[id] = 0;

  // Delayed steps (a press flash, the panel that follows a press, the
  // teardown card) re-check the state when they fire, so input that arrives in
  // between cannot open the wrong panel or run a step twice.
  const later = (fn, ms) => window.setTimeout(fn, ms);

  // Below this width a panel's text would be a few pixels high, so A and
  // Start report into the caption under the device instead of opening one.
  const compact = () => screen.clientWidth < 500;

  /* ── Painting ──────────────────────────────────────────────────────────── */
  // The caption under the device is the page-sized account of what the demo
  // just did (#ui itself is aria-hidden). It follows every move at once; a
  // screen reader hears it through #demo-live, which waits for the moves to
  // settle and stays quiet for the pointer sweeping over tiles.
  let liveTimer = 0;
  let quietAnnounce = false;
  function announce(title, text) {
    if (!caption || !title) return;
    const said = `${title}|${text}`;
    if (caption.dataset.said === said) return;
    caption.dataset.said = said;
    const b = document.createElement('b');
    b.textContent = title;
    caption.replaceChildren(b, document.createTextNode(text));
    if (!live || quietAnnounce) return;
    window.clearTimeout(liveTimer);
    liveTimer = window.setTimeout(() => {
      live.textContent = `${title}. ${text}`;
    }, 350);
  }

  const listOf = (items) => (items.length < 2 ? items.join('') : `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`);

  function pressFlash(el) {
    if (!el) return;
    el.classList.add('is-p');
    later(() => el.classList.remove('is-p'), 90);
  }

  let toastTimer = 0;
  function hideToast() {
    window.clearTimeout(toastTimer);
    if (toastEl) toastEl.hidden = true;
  }

  function toast(text, title) {
    if (!toastEl || !text) return;
    announce(title || currentTitle(), text);
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

  function homeHints(layout) {
    // The device's own footers (player/hometabs.go, player/homelayout.go);
    // with keys, the preview's twins instead.
    if (layout === 'tabs') {
      return usesKeys()
        ? [[['Arrows'], 'Move'], [['Enter'], 'Open'], [['Q', 'E'], 'Tabs'], [['Y'], 'Search'], [['F10'], 'Start Menu']]
        : [[['dpad'], 'Navigate'], [['Y'], 'Search'], [['L2'], 'Edit'], [['X'], 'Options'], [['A'], 'Open'], [['L1', 'R1'], 'Tabs'], [['Start'], 'Menu']];
    }
    return usesKeys()
      ? [[['Arrows'], 'Move'], [['Enter'], 'Open'], [['Y'], 'Search'], [['F10'], 'Start Menu']]
      : [[['dpad'], 'Navigate'], [['A'], 'Open'], [['Y'], 'Search'], [['L2'], 'Edit'], [['R2'], 'Water'], [['Start'], 'Menu'], [['Select+Start'], 'Quit']];
  }

  function panelHints() {
    return usesKeys()
      ? [[['Arrows'], 'Choose'], [['Enter'], 'Select'], [['Esc'], 'Close']]
      : [[['dpad'], 'Choose'], [['A'], 'Select'], [['B'], 'Close']];
  }

  function renderHints() {
    for (const name of Object.keys(homes)) {
      const el = homes[name].querySelector('[data-hints]');
      if (el) el.replaceChildren(...hintList(homeHints(name), 'ui-hint'));
    }
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

  /* ── Tabs: laying out a page the way the device does ───────────────────── */
  // homeTabsLayout (player/hometabs_draw.go) on the 1200 x 568 body of a
  // 1280 x 720 canvas: 16 px gaps; grid tiles aim at 210 px and stop at 260,
  // six cards make two rows of three, seven and eight four columns, fuller
  // pages five; the rows view stacks two rows of 236 px tiles behind a hero.
  const BODY_W = 1200;
  const BODY_H = 568;
  const GAP = 16;

  function layoutTab(view, n, hero) {
    const rects = [];
    if (n <= 0) return { rects, horiz: view === 'row', extent: 0 };
    if (view === 'row') {
      let side = Math.min(Math.floor((BODY_H - GAP) / 2), 236);
      let rows = 1;
      const visible = Math.floor((BODY_W + GAP) / Math.max(side + GAP, 1));
      if (n > visible) rows = 2;
      if (rows === 1) side = Math.min(BODY_H, 280);
      const block = rows * side + (rows - 1) * GAP;
      const y0 = Math.floor((BODY_H - block) / 2);
      let x = 0;
      let start = 0;
      if (hero) {
        const w = rows === 1 ? Math.floor((side * 16) / 10) : Math.floor((side * 3) / 2);
        rects.push({ x: 0, y: y0, w, h: block });
        x = w + GAP;
        start = 1;
      }
      for (let i = start; i < n; i++) {
        const j = i - start;
        rects.push({ x: x + Math.floor(j / rows) * (side + GAP), y: y0 + (j % rows) * (side + GAP), w: side, h: side });
      }
      const last = rects[rects.length - 1];
      return { rects, horiz: true, extent: last.x + last.w };
    }
    let cols = Math.max(1, Math.floor((BODY_W + GAP) / (210 + GAP)));
    let wanted = n;
    if (n === 6) wanted = 3;
    else if (n === 7 || n === 8) wanted = 4;
    else if (n > 8) wanted = 5;
    cols = Math.min(cols, wanted);
    let side = Math.min(Math.max(1, Math.floor((BODY_W - (cols - 1) * GAP) / cols)), 260);
    const rows = Math.ceil(n / cols);
    if (rows <= 2) side = Math.min(side, Math.max(1, Math.floor((BODY_H - (rows - 1) * GAP - 28) / rows)));
    const gridW = cols * side + (cols - 1) * GAP;
    const gridH = rows * side + (rows - 1) * GAP;
    const x0 = Math.max(0, Math.floor((BODY_W - gridW) / 2));
    const y0 = gridH <= BODY_H ? Math.floor((BODY_H - gridH) / 2) : 0;
    for (let i = 0; i < n; i++) {
      const r = Math.floor(i / cols);
      const c = i % cols;
      let rowX = x0;
      if (n <= 10 && r === rows - 1) {
        const rowCols = n - r * cols;
        rowX = Math.max(0, Math.floor((BODY_W - (rowCols * side + (rowCols - 1) * GAP)) / 2));
      }
      rects.push({ x: rowX + c * (side + GAP), y: y0 + r * (side + GAP), w: side, h: side });
    }
    return { rects, horiz: false, extent: y0 + gridH };
  }

  // The nearest tile in a direction: left and right stay in the tile's own
  // band; up and down take the nearest band, then the closest centre.
  function neighbour(rects, i, dir) {
    const a = rects[i];
    if (!a) return -1;
    let best = -1;
    let bestScore = Infinity;
    rects.forEach((b, j) => {
      if (j === i) return;
      let gap;
      let overlap;
      let off;
      if (dir === 'right' || dir === 'left') {
        if (dir === 'right' ? b.x < a.x + a.w - 1 : b.x + b.w > a.x + 1) return;
        overlap = Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y);
        if (overlap <= 0) return;
        gap = dir === 'right' ? b.x - (a.x + a.w) : a.x - (b.x + b.w);
        off = Math.abs(b.y + b.h / 2 - (a.y + a.h / 2));
      } else {
        if (dir === 'down' ? b.y < a.y + a.h - 1 : b.y + b.h > a.y + 1) return;
        gap = dir === 'down' ? b.y - (a.y + a.h) : a.y - (b.y + b.h);
        off = Math.abs(b.x + b.w / 2 - (a.x + a.w / 2));
      }
      const score = gap * 1000 + off;
      if (score < bestScore) {
        bestScore = score;
        best = j;
      }
    });
    return best;
  }

  function svgUse(id, className) {
    const svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    if (className) svg.setAttribute('class', className);
    const use = document.createElementNS(SVG_NS, 'use');
    use.setAttribute('href', `#${id}`);
    svg.appendChild(use);
    return svg;
  }

  function buildTile(item, i, rect, hero) {
    const [, title, sub, lookRaw, , , badgeText] = item;
    const dim = lookRaw.endsWith('!');
    const look = dim ? lookRaw.slice(0, -1) : lookRaw;
    const tile = document.createElement('div');
    tile.className = 'ui-tt';
    tile.dataset.t = String(i);
    if (look.startsWith('art:')) {
      tile.classList.add('ui-tt--art');
      const art = document.createElement('span');
      art.className = `ui-tt__art ui-art--${look.slice(4)}`;
      tile.appendChild(art);
    } else {
      tile.appendChild(svgUse(look, 'ui-tt__glyph'));
    }
    if (hero) tile.classList.add('ui-tt--hero');
    if (dim) tile.classList.add('is-dim');
    if (dim || badgeText) {
      const badge = document.createElement('span');
      badge.className = 'ui-tt__badge';
      badge.textContent = dim ? 'Install' : badgeText;
      tile.appendChild(badge);
    }
    const text = document.createElement('span');
    text.className = 'ui-tt__text';
    const b = document.createElement('b');
    b.textContent = title;
    text.appendChild(b);
    // The subtitle shows on tiles tall enough for it, as on the device.
    if (sub && rect.h >= 150) {
      const small = document.createElement('small');
      small.textContent = sub;
      text.appendChild(small);
    }
    tile.appendChild(text);
    tile.style.setProperty('--x', String(rect.x));
    tile.style.setProperty('--y', String(rect.y));
    tile.style.setProperty('--w', String(rect.w));
    tile.style.setProperty('--h', String(rect.h));
    return tile;
  }

  function renderTab(slideFrom) {
    if (!grid) return;
    const tab = tabById(state.tab);
    const lay = layoutTab(tab.view, tab.items.length, !!tab.hero);
    state.tabRects = lay.rects;
    state.tabExtent = lay.extent;
    state.tabHoriz = lay.horiz;
    state.tabScroll = 0;
    const tiles = tab.items.map((item, i) => buildTile(item, i, lay.rects[i], tab.hero && i === 0));
    grid.replaceChildren(...tiles);
    grid.classList.remove('ui-grid--row');
    grid.classList.add('is-laid');
    if (page) page.classList.toggle('is-scroll', lay.extent > (lay.horiz ? BODY_W : BODY_H));
    for (const t of strip ? strip.querySelectorAll('[data-tab]') : []) {
      t.classList.toggle('is-on', t.dataset.tab === state.tab);
    }
    grid.classList.remove('is-in-left', 'is-in-right');
    if (slideFrom && !reduced.matches) {
      void grid.offsetWidth;
      grid.classList.add(slideFrom === 'right' ? 'is-in-right' : 'is-in-left');
    }
    scrollTab(true);
  }

  // Keep the focused tile in view with room for its ring (homeTabsScrollTarget).
  function scrollTab(instant) {
    if (!grid) return;
    const r = state.tabRects[state.tabIndex[state.tab]];
    const size = state.tabHoriz ? BODY_W : BODY_H;
    let s = state.tabScroll;
    if (r && state.tabFocus === 'tile') {
      const lo = state.tabHoriz ? r.x : r.y;
      const hi = lo + (state.tabHoriz ? r.w : r.h);
      if (lo - s < 14) s = lo - 14;
      if (hi - s > size - 14) s = hi - size + 14;
    }
    s = Math.max(0, Math.min(s, Math.max(0, state.tabExtent - size)));
    state.tabScroll = s;
    if (instant) grid.classList.add('is-instant');
    grid.style.setProperty('--sx', String(state.tabHoriz ? -s : 0));
    grid.style.setProperty('--sy', String(state.tabHoriz ? 0 : -s));
    if (instant) {
      void grid.offsetWidth;
      grid.classList.remove('is-instant');
    }
  }

  function tabItem() {
    const tab = tabById(state.tab);
    return tab.items[state.tabIndex[state.tab]] || null;
  }

  function itemCaption(item) {
    if (!item) return null;
    if (item[5]) return item[5];
    if (ITEM_CAPTIONS[item[0]]) return ITEM_CAPTIONS[item[0]];
    if (item[4] === 'console') return [item[1], `${item[2]}, with their covers. A opens the Games library straight on this console.`];
    if (CAPTIONS[item[4]]) return CAPTIONS[item[4]];
    return [item[1], `${item[2]}.`];
  }

  function paintTabs() {
    if (strip) strip.classList.toggle('is-f', state.tabFocus === 'strip');
    if (tabExit) tabExit.classList.toggle('is-f', state.tabFocus === 'exit');
    if (grid) {
      const index = state.tabIndex[state.tab];
      for (const tile of grid.children) {
        tile.classList.toggle('is-f', state.tabFocus === 'tile' && Number(tile.dataset.t) === index);
      }
    }
  }

  function tabsCaption() {
    if (state.tabFocus === 'strip') {
      const c = tabById(state.tab).caption;
      announce(c[0], c[1]);
    } else if (state.tabFocus === 'exit') {
      announce(CAPTIONS.exit[0], CAPTIONS.exit[1]);
    } else {
      const c = itemCaption(tabItem());
      if (c) announce(c[0], c[1]);
    }
  }

  function setTab(id, slideFrom) {
    if (!TAB_IDS.includes(id)) return;
    state.tab = id;
    renderTab(slideFrom);
    paintTabs();
    const c = tabById(id).caption;
    announce(c[0], c[1]);
  }

  function stepTab(dir) {
    const i = TAB_IDS.indexOf(state.tab);
    const next = TAB_IDS[(i + dir + TAB_IDS.length) % TAB_IDS.length];
    setTab(next, dir > 0 ? 'right' : 'left');
  }

  function focusTabTile(i) {
    if (i < 0 || i >= state.tabRects.length) return false;
    state.tabFocus = 'tile';
    state.tabIndex[state.tab] = i;
    scrollTab(false);
    paintTabs();
    tabsCaption();
    return true;
  }

  /* ── Standard: painting ────────────────────────────────────────────────── */
  function paintStandard() {
    for (const [key, el] of stdNodes) el.classList.toggle('is-f', key === state.focus);
  }

  function focusStd(key) {
    if (!key || !stdNodes.has(key) || key === state.focus) return false;
    state.focus = key;
    paintStandard();
    const entry = CAPTIONS[key];
    if (entry) announce(entry[0], entry[1]);
    return true;
  }

  function currentTitle() {
    if (state.layout === 'tabs') {
      if (state.tabFocus === 'tile') {
        const c = itemCaption(tabItem());
        if (c) return c[0];
      }
      return tabById(state.tab).caption[0];
    }
    return (CAPTIONS[state.focus] || ['JukaHub'])[0];
  }

  function paintHome() {
    if (state.layout === 'tabs') paintTabs();
    else paintStandard();
  }

  /* ── Choosing the Home ─────────────────────────────────────────────────── */
  function setLayout(name, quiet) {
    if (!homes[name]) return;
    hideToast();
    const atHome = state.view === 'home' || state.view === 'panel';
    if (state.panel && state.view === 'panel') closePanel(true);
    state.layout = name;
    ui.dataset.layout = name;
    if (howto) howto.dataset.layout = name;
    for (const b of switchButtons) b.setAttribute('aria-pressed', String(b.dataset.layout === name));
    // During the teardown or on the stock launcher the new Home simply shows
    // when JukaHub opens again.
    if (!atHome) return;
    state.view = 'home';
    paintHome();
    if (!quiet) announce(LAYOUT_CAPTIONS[name][0], LAYOUT_CAPTIONS[name][1]);
  }

  for (const b of switchButtons) {
    b.addEventListener('click', () => setLayout(b.dataset.layout));
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

  function openPanel(key, titleOverride) {
    const base = PANELS[key];
    if (!base || !layer) return;
    const def = titleOverride ? { ...base, title: titleOverride } : base;
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

  function closePanel(quiet) {
    if (!layer) return;
    layer.hidden = true;
    layer.replaceChildren();
    state.panel = null;
    state.view = 'home';
    paintHome();
    if (quiet) return;
    if (state.layout === 'tabs') tabsCaption();
    else {
      const entry = CAPTIONS[state.focus];
      if (entry) announce(entry[0], entry[1]);
    }
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
    if (p.key === 'voice') {
      toast('Say it on the device, or type it there with Type instead', 'Voice command');
      return;
    }
    toast(ROW_TOASTS[title] || `${title} opens on the device`, title);
  }

  /* ── Exit: the teardown card, then the stock launcher ──────────────────── */
  let closing = false;
  function teardown() {
    if (closing || !layer || !stock) return;
    closing = true;
    hideToast();
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
    announce('Stock launcher', 'JukaHub has handed the screen back, with the firmware untouched. Press A (Enter on a keyboard) on JukaHub to start it again.');
  }

  function openFromStock() {
    if (state.stockIndex !== 0) {
      toast('Only JukaHub is installed in this preview', 'Stock launcher');
      return;
    }
    stock.hidden = true;
    closing = false;
    state.view = 'home';
    if (state.layout === 'tabs') {
      state.tabFocus = 'tile';
      state.tabIndex[state.tab] = 0;
      renderTab();
      paintTabs();
      tabsCaption();
    } else {
      state.focus = '';
      focusStd('continue');
    }
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
        return state.layout === 'tabs' ? pressTabs(button) : pressStandard(button);
    }
  }

  // Buttons that mean the same thing on both Homes.
  function pressCommon(button, el) {
    switch (button) {
      case 'start':
        openPanel('start');
        return true;
      case 'menu':
        openPanel('voice');
        return true;
      case 'select':
        openPanel('quick');
        return true;
      case 'b':
        // Home has nothing to go back to; on a keyboard, Esc lets go of the
        // screen so the arrow keys scroll the page again.
        if (state.input === 'key') screen.blur();
        return true;
      case 'a':
        if (el && el.dataset.f === 'exit') {
          pressFlash(el);
          state.view = 'teardown'; // input stops now; the card follows the press
          later(teardown, 120);
          return true;
        }
        return false;
      default:
        return false;
    }
  }

  function pressTabs(button) {
    const dirs = ['up', 'down', 'left', 'right'];
    if (dirs.includes(button)) {
      if (state.tabFocus === 'strip') {
        if (button === 'left') stepTab(-1);
        else if (button === 'right') stepTab(1);
        else if (button === 'down') focusTabTile(state.tabIndex[state.tab] || 0);
        return;
      }
      if (state.tabFocus === 'exit') {
        if (button === 'up') {
          // Back to the bottom row of the page, nearest the left edge.
          const rects = state.tabRects;
          let best = 0;
          rects.forEach((r, i) => {
            const b = rects[best];
            if (r.y + r.h > b.y + b.h || (r.y + r.h === b.y + b.h && r.x < b.x)) best = i;
          });
          focusTabTile(best);
        }
        return;
      }
      const next = neighbour(state.tabRects, state.tabIndex[state.tab], button);
      if (next >= 0) focusTabTile(next);
      else if (button === 'up') {
        state.tabFocus = 'strip';
        paintTabs();
        tabsCaption();
      } else if (button === 'down') {
        state.tabFocus = 'exit';
        paintTabs();
        tabsCaption();
      }
      return;
    }
    if (button === 'l1' || button === 'r1') {
      stepTab(button === 'r1' ? 1 : -1);
      return;
    }
    if (button === 'l2') {
      toast('L2 arranges the tabs: their order, their views, and which ones show', 'Arrange tabs');
      return;
    }
    if (button === 'r2') {
      toast('R2 steps the liquid background under the glass', 'Liquid background');
      return;
    }
    const el = state.tabFocus === 'exit' ? tabExit : null;
    if (pressCommon(button, el)) return;
    if (state.tabFocus === 'exit') {
      if (button === 'y') openPanel('search');
      return;
    }
    if (state.tabFocus === 'strip') {
      if (button === 'a') toast('A on the strip changes the page’s view: grid, rows, list, carousel or compact', tabById(state.tab).caption[0]);
      else if (button === 'y') openPanel('search');
      return;
    }
    const item = tabItem();
    if (!item) return;
    const tile = grid ? grid.querySelector(`[data-t="${state.tabIndex[state.tab]}"]`) : null;
    switch (button) {
      case 'a': {
        pressFlash(tile);
        const action = item[4];
        if (typeof action === 'string' && action.startsWith('>')) {
          toast(action.slice(1), item[1]);
          return;
        }
        const tabNow = state.tab;
        const indexNow = state.tabIndex[tabNow];
        later(() => {
          if (state.view !== 'home' || state.layout !== 'tabs' || state.tabFocus !== 'tile' || state.tab !== tabNow || state.tabIndex[tabNow] !== indexNow) return;
          if (action === 'console') openPanel('console', item[1]);
          else if (PANELS[action]) openPanel(action);
          else toast(`${item[1]} opens on the device`, item[1]);
        }, 90);
        return;
      }
      case 'x':
        toast('Options: play, add to Favourites, add to a collection', item[1]);
        return;
      case 'y':
        openPanel('search');
        return;
      default:
    }
  }

  function pressStandard(button) {
    if (['up', 'down', 'left', 'right'].includes(button)) {
      const next = (GRAPH[state.focus] || {})[button];
      focusStd(next);
      return;
    }
    if (button === 'l2') {
      toast('L2 edits Home in place: move and resize tiles, arrange the top bar, pin Wi-Fi, Bluetooth and Power', 'Edit Home');
      return;
    }
    if (button === 'r2') {
      toast('R2 steps the liquid background: Off, Slight, Medium, Lively', 'Liquid background');
      return;
    }
    // Q / E on a keyboard: a jump between the three bands, for the preview.
    if (button === 'l1' || button === 'r1') {
      let band = BANDS.findIndex((b) => b.includes(state.focus));
      if (band < 0) band = state.focus === 'bell' ? 0 : 2;
      const forward = button === 'r1';
      const step = forward ? 1 : BANDS.length - 1;
      focusStd(BANDS[(band + step) % BANDS.length][0]);
      return;
    }
    const key = state.focus;
    const el = stdNodes.get(key);
    if (pressCommon(button, el)) return;
    switch (button) {
      case 'a':
        pressFlash(el);
        if (key === 'continue') {
          toast('Resuming where you left off');
        } else {
          later(() => {
            if (state.view === 'home' && state.layout === 'standard' && state.focus === key) openPanel(key);
          }, 90);
        }
        return;
      case 'x':
        toast('X opens the Game switcher: recent games side by side, each with a picture of where you left it', 'Game switcher');
        return;
      case 'y':
        openPanel('search');
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
      case 'l1':
      case 'l2':
        p.index = 0;
        break;
      case 'r1':
      case 'r2':
        p.index = last;
        break;
      case 'a':
        activateRow();
        return;
      case 'b':
      case 'select':
        closePanel();
        return;
      case 'menu':
        if (p.key === 'voice') toast('Menu again sends what you said at once', 'Voice command');
        else closePanel();
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
    q: 'l1', e: 'r1', PageUp: 'l1', PageDown: 'r1',
    F10: 'start', F4: 'menu', x: 'x', y: 'y',
  };

  screen.addEventListener('keydown', (event) => {
    if (event.altKey || event.metaKey) return;
    const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
    let button = KEYS[key];
    if (event.ctrlKey) button = key === 'q' ? 'select' : '';
    if (!button) return;
    event.preventDefault();
    if (event.repeat && !['up', 'down', 'left', 'right'].includes(button)) return;
    setInput('key');
    flashDrawn(button);
    press(button);
  });

  screen.addEventListener('focus', () => device.classList.add('is-live'));
  screen.addEventListener('blur', () => device.classList.remove('is-live'));

  /* ── Pointer: hover paints the ring, a click or tap is A ───────────────── */
  function hoverHome(target) {
    if (state.layout === 'tabs') {
      if (target.closest('[data-f="strip"]')) {
        if (state.tabFocus !== 'strip') {
          state.tabFocus = 'strip';
          paintTabs();
          tabsCaption();
        }
        return;
      }
      const tile = target.closest('.ui-tt');
      if (tile && grid && grid.contains(tile)) {
        const i = Number(tile.dataset.t);
        if (state.tabFocus !== 'tile' || state.tabIndex[state.tab] !== i) focusTabTile(i);
        return;
      }
      if (target.closest('[data-f="exit"]') && state.tabFocus !== 'exit') {
        state.tabFocus = 'exit';
        paintTabs();
        tabsCaption();
      }
      return;
    }
    const tile = target.closest('[data-f]');
    if (tile && homes.standard.contains(tile)) focusStd(tile.dataset.f);
  }

  ui.addEventListener('pointerover', (event) => {
    if (event.pointerType === 'touch') return;
    quietAnnounce = true;
    try {
      if (state.view === 'home') {
        hoverHome(event.target);
      } else if (state.view === 'panel' && state.panel) {
        const row = event.target.closest('.srow');
        if (row && row.dataset.row && Number(row.dataset.row) !== state.panel.index) {
          state.panel.index = Number(row.dataset.row);
          paintPanel(true);
        }
      }
    } finally {
      quietAnnounce = false;
    }
  });

  ui.addEventListener('pointerdown', (event) => {
    if (event.pointerType === 'touch') setInput('touch');
  });

  ui.addEventListener('click', (event) => {
    if (state.view === 'home') {
      if (state.layout === 'tabs') {
        const tab = event.target.closest('[data-tab]');
        if (tab) {
          state.tabFocus = 'strip';
          if (tab.dataset.tab === state.tab) {
            paintTabs();
            press('a');
          } else {
            const from = TAB_IDS.indexOf(tab.dataset.tab) > TAB_IDS.indexOf(state.tab) ? 'right' : 'left';
            setTab(tab.dataset.tab, from);
          }
          return;
        }
        const tile = event.target.closest('.ui-tt');
        if (tile && grid && grid.contains(tile)) {
          state.tabFocus = 'tile';
          state.tabIndex[state.tab] = Number(tile.dataset.t);
          scrollTab(false);
          paintTabs();
          press('a');
          return;
        }
        if (event.target.closest('[data-f="exit"]')) {
          state.tabFocus = 'exit';
          paintTabs();
          press('a');
        }
        return;
      }
      const tile = event.target.closest('[data-f]');
      if (!tile || !homes.standard.contains(tile)) return;
      focusStd(tile.dataset.f);
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
      // Select is the first half of the quit chord as often as it is Quick
      // Settings, so it waits for its release before it opens anything.
      if (button === 'select') return;
      press(button);
      if (['up', 'down', 'left', 'right'].includes(button)) {
        const r = { every: 0, delay: 0 };
        r.delay = window.setTimeout(() => {
          r.every = window.setInterval(() => press(button), 110);
        }, 320);
        repeats.set(button, r);
      }
    });
    const up = (event) => {
      const wasHeld = held.has(button);
      release(button, el);
      if (button === 'select' && wasHeld && event.type === 'pointerup' && !closing) press('select');
    };
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
    l1: (g) => btn(g, 4),
    r1: (g) => btn(g, 5),
    l2: (g) => btn(g, 6),
    r2: (g) => btn(g, 7),
    select: (g) => btn(g, 8),
    start: (g) => btn(g, 9),
    menu: (g) => btn(g, 16),
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
  let selectAlone = false;

  function pollPads(now) {
    const list = navigator.getGamepads ? Array.from(navigator.getGamepads()).filter(Boolean) : [];
    if (!list.length) {
      polling = false;
      return;
    }
    const awake = inView && document.visibilityState === 'visible';
    const down = {};
    for (const name of Object.keys(PAD)) down[name] = list.some((g) => PAD[name](g));

    if (awake && down.select && down.start) {
      selectAlone = false;
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
      if (name === 'select') {
        // Select acts on release, and only when Start never joined it.
        if (down.select && !padPrev.select) selectAlone = true;
        if (!down.select && padPrev.select && selectAlone && awake) {
          selectAlone = false;
          setInput('pad');
          press('select');
        }
        padPrev.select = down.select;
        continue;
      }
      if (down[name] && !padPrev[name]) {
        padNext[name] = now + 320;
        if (awake && !(quitLatched && name === 'start')) {
          setInput('pad');
          flashDrawn(name);
          press(name);
        }
      } else if (down[name] && isDir && now >= (padNext[name] || 0)) {
        padNext[name] = now + 110;
        if (awake) press(name);
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
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    for (const el of clockEls) el.textContent = time;
    for (const el of greetEls) el.textContent = greeting(now.getHours());
  }

  if (weatherEl && !usesFahrenheit()) weatherEl.textContent = '18°C / 10°C';
  tick();
  window.setInterval(tick, 20000);

  // Home shows the installed build's date beside the JukaHub title; here it is
  // the date of the newest published build. site.js may have it already (a
  // cached answer resolves before this script runs), so read what it left on
  // <html> and listen for a later answer too.
  function showRelease(published) {
    if (typeof published === 'string' && /^\d{4}-\d{2}-\d{2}/.test(published)) {
      for (const el of buildEls) el.textContent = published.slice(0, 10);
    }
  }
  showRelease(document.documentElement.dataset.releasePublished);
  document.addEventListener('jukahub:release', (event) => showRelease(event.detail && event.detail.published));

  /* ── Start state ───────────────────────────────────────────────────────── */
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  state.input = fine ? 'key' : 'touch';
  if (howto) howto.dataset.input = state.input;
  if (howto) howto.dataset.layout = 'tabs';
  renderTab();
  setLayout('tabs', true);
  renderHints();
  // The page already shows Recent's caption; remember it rather than
  // rewriting the live region on load.
  if (caption) caption.dataset.said = `${TABS[0].caption[0]}|${TABS[0].caption[1]}`;
})();
