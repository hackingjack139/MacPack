const apps = [
  {
    name: "Arc",
    slug: "arc",
    category: "Browser",
    description: "Modern browsing for fast-moving work.",
    install: { kind: "cask", package: "arc" },
    homepage: "https://arc.net",
  },
  {
    name: "Google Chrome",
    slug: "google-chrome",
    category: "Browser",
    description: "Default web stack for testing, logins, and client handoff.",
    install: { kind: "cask", package: "google-chrome" },
    homepage: "https://www.google.com/chrome",
  },
  {
    name: "Firefox",
    slug: "firefox",
    category: "Browser",
    description: "Privacy-friendly browser with strong dev tooling.",
    install: { kind: "cask", package: "firefox" },
    homepage: "https://www.mozilla.org/firefox",
  },
  {
    name: "Brave",
    slug: "brave-browser",
    category: "Browser",
    description: "Chromium-based browser with privacy defaults and built-in blocking.",
    install: { kind: "cask", package: "brave-browser" },
    homepage: "https://brave.com",
  },
  {
    name: "Microsoft Edge",
    slug: "microsoft-edge",
    category: "Browser",
    description: "Enterprise-friendly browser for Microsoft-heavy workflows and testing.",
    install: { kind: "cask", package: "microsoft-edge" },
    homepage: "https://www.microsoft.com/edge",
  },
  {
    name: "Vivaldi",
    slug: "vivaldi",
    category: "Browser",
    description: "Highly customizable browser for tab-heavy and power-user setups.",
    install: { kind: "cask", package: "vivaldi" },
    homepage: "https://vivaldi.com",
  },
  {
    name: "Orion",
    slug: "orion",
    category: "Browser",
    description: "WebKit browser for people who want Safari feel with extension support.",
    install: { kind: "cask", package: "orion" },
    homepage: "https://browser.kagi.com",
  },
  {
    name: "Tor Browser",
    slug: "tor-browser",
    category: "Browser",
    description: "Security-focused browser for private browsing and network isolation.",
    install: { kind: "cask", package: "tor-browser" },
    homepage: "https://www.torproject.org",
  },
  {
    name: "Visual Studio Code",
    slug: "visual-studio-code",
    category: "Dev",
    description: "Editor base camp for code, notes, and terminals.",
    install: { kind: "cask", package: "visual-studio-code" },
    homepage: "https://code.visualstudio.com",
  },
  {
    name: "Cursor",
    slug: "cursor",
    category: "Dev",
    description: "AI-native editor for shipping code with tight feedback loops.",
    install: { kind: "cask", package: "cursor" },
    homepage: "https://www.cursor.com",
  },
  {
    name: "Warp",
    slug: "warp",
    category: "Dev",
    description: "Modern terminal with blocks, workflows, and command recall.",
    install: { kind: "cask", package: "warp" },
    homepage: "https://www.warp.dev",
  },
  {
    name: "Ghostty",
    slug: "ghostty",
    category: "Dev",
    description: "Fast native terminal with GPU rendering and modern Mac feel.",
    install: { kind: "cask", package: "ghostty" },
    homepage: "https://ghostty.org",
  },
  {
    name: "iTerm2",
    slug: "iterm2",
    category: "Dev",
    description: "Terminal staple for panes, profiles, and shell-heavy work.",
    install: { kind: "cask", package: "iterm2" },
    homepage: "https://iterm2.com",
  },
  {
    name: "Zed",
    slug: "zed",
    category: "Dev",
    description: "High-speed editor with collaborative workflows and native feel.",
    install: { kind: "cask", package: "zed" },
    homepage: "https://zed.dev",
  },
  {
    name: "Node.js",
    slug: "nodejs",
    category: "Dev",
    description: "JavaScript runtime for local tooling, package managers, and web development.",
    install: { kind: "formula", package: "node" },
    homepage: "https://nodejs.org",
  },
  {
    name: "Figma",
    slug: "figma",
    category: "Design",
    description: "Design, review, and handoff in one place.",
    install: { kind: "cask", package: "figma" },
    homepage: "https://www.figma.com",
  },
  {
    name: "Sketch",
    slug: "sketch",
    category: "Design",
    description: "Native Mac design tool for interface systems and flows.",
    install: { kind: "cask", package: "sketch" },
    homepage: "https://www.sketch.com",
  },
  {
    name: "Framer",
    slug: "framer",
    category: "Design",
    description: "Interactive site and prototype builder for fast publishing.",
    install: { kind: "cask", package: "framer" },
    homepage: "https://www.framer.com",
  },
  {
    name: "Adobe Creative Cloud",
    slug: "adobe-creative-cloud",
    category: "Design",
    description: "Creative suite launcher for Photoshop, Illustrator, Premiere, and more.",
    install: { kind: "cask", package: "adobe-creative-cloud" },
    homepage: "https://www.adobe.com/creativecloud.html",
  },
  {
    name: "Notion",
    slug: "notion",
    category: "Docs",
    description: "Docs, tasks, and internal knowledge hub.",
    install: { kind: "cask", package: "notion" },
    homepage: "https://www.notion.so",
  },
  {
    name: "Obsidian",
    slug: "obsidian",
    category: "Docs",
    description: "Markdown note vault for local knowledge and deep linking.",
    install: { kind: "cask", package: "obsidian" },
    homepage: "https://obsidian.md",
  },
  {
    name: "Discord",
    slug: "discord",
    category: "Comms",
    description: "Team chat, calls, and community rooms.",
    install: { kind: "cask", package: "discord" },
    homepage: "https://discord.com",
  },
  {
    name: "Telegram",
    slug: "telegram",
    category: "Comms",
    description: "Fast messaging with channels, file sharing, and multi-device sync.",
    install: { kind: "cask", package: "telegram" },
    homepage: "https://telegram.org",
  },
  {
    name: "Slack",
    slug: "slack",
    category: "Comms",
    description: "Default async hub for work threads, huddles, and alerts.",
    install: { kind: "cask", package: "slack" },
    homepage: "https://slack.com",
  },
  {
    name: "Zoom",
    slug: "zoom",
    category: "Comms",
    description: "Meetings, screen share, and client calls without setup drama.",
    install: { kind: "cask", package: "zoom" },
    homepage: "https://zoom.us",
  },
  {
    name: "Microsoft Teams",
    slug: "microsoft-teams",
    category: "Comms",
    description: "Enterprise meetings and chat for Microsoft-heavy teams.",
    install: { kind: "cask", package: "microsoft-teams" },
    homepage: "https://www.microsoft.com/microsoft-teams",
  },
  {
    name: "WhatsApp",
    slug: "whatsapp",
    category: "Comms",
    description: "Native desktop WhatsApp for personal and international messaging.",
    install: { kind: "cask", package: "whatsapp" },
    homepage: "https://www.whatsapp.com",
  },
  {
    name: "Spotify",
    slug: "spotify",
    category: "Media",
    description: "Background fuel while machine gets packed.",
    install: { kind: "cask", package: "spotify" },
    homepage: "https://www.spotify.com",
  },
  {
    name: "Steam",
    slug: "steam",
    category: "Media",
    description: "Game library, updates, and social features for desktop gaming.",
    install: { kind: "cask", package: "steam" },
    homepage: "https://store.steampowered.com/about/",
  },
  {
    name: "VLC",
    slug: "vlc",
    category: "Media",
    description: "Reliable media player for odd formats and local playback.",
    install: { kind: "cask", package: "vlc" },
    homepage: "https://www.videolan.org/vlc",
  },
  {
    name: "IINA",
    slug: "iina",
    category: "Media",
    description: "Modern Mac video player with clean controls and streaming support.",
    install: { kind: "cask", package: "iina" },
    homepage: "https://iina.io",
  },
  {
    name: "Blender",
    slug: "blender",
    category: "Media",
    description: "3D creation suite for modeling, animation, rendering, and motion work.",
    install: { kind: "cask", package: "blender" },
    homepage: "https://www.blender.org",
  },
  {
    name: "Audacity",
    slug: "audacity",
    category: "Media",
    description: "Open-source audio editor for recording, cleanup, and quick waveform edits.",
    install: { kind: "cask", package: "audacity" },
    homepage: "https://www.audacityteam.org",
  },
  {
    name: "OBS Studio",
    slug: "obs-studio",
    category: "Media",
    description: "Streaming and screen-recording staple for tutorials, demos, and live sessions.",
    install: { kind: "cask", package: "obs" },
    homepage: "https://obsproject.com",
  },
  {
    name: "CapCut",
    slug: "capcut",
    category: "Media",
    description: "Fast social-first video editor for short-form clips and lightweight edits.",
    install: { kind: "cask", package: "capcut" },
    homepage: "https://www.capcut.com",
  },
  {
    name: "HandBrake",
    slug: "handbrake",
    category: "Media",
    description: "Open-source video transcoder for compressing and converting media.",
    install: { kind: "cask", package: "handbrake-app" },
    homepage: "https://handbrake.fr",
  },
  {
    name: "Raycast",
    slug: "raycast",
    category: "Utility",
    description: "Launcher, snippets, and workflow shortcuts.",
    install: { kind: "cask", package: "raycast" },
    homepage: "https://www.raycast.com",
  },
  {
    name: "Alfred",
    slug: "alfred",
    category: "Utility",
    description: "Keyboard launcher and automation classic for Mac power users.",
    install: { kind: "cask", package: "alfred" },
    homepage: "https://www.alfredapp.com",
  },
  {
    name: "Rectangle",
    slug: "rectangle",
    category: "Utility",
    description: "Window management shortcuts for quick multi-app layouts.",
    install: { kind: "cask", package: "rectangle" },
    homepage: "https://rectangleapp.com",
  },
  {
    name: "Bartender",
    slug: "bartender",
    category: "Utility",
    description: "Menu bar organizer for hiding clutter and taming busy status items.",
    install: { kind: "cask", package: "bartender" },
    homepage: "https://www.macbartender.com",
  },
  {
    name: "CleanShot X",
    slug: "cleanshot",
    category: "Utility",
    description: "Fast screenshots, recordings, and share links for async work.",
    install: { kind: "cask", package: "cleanshot" },
    homepage: "https://cleanshot.com",
  },
  {
    name: "AppCleaner",
    slug: "appcleaner",
    category: "Utility",
    description: "Removes apps with leftover files instead of dragging half the mess along.",
    install: { kind: "cask", package: "appcleaner" },
    homepage: "https://freemacsoft.net/appcleaner/",
  },
  {
    name: "DaisyDisk",
    slug: "daisydisk",
    category: "Utility",
    description: "Disk visualizer for finding giant folders and reclaiming storage fast.",
    install: { kind: "cask", package: "daisydisk" },
    homepage: "https://daisydiskapp.com",
  },
  {
    name: "Keka",
    slug: "keka",
    category: "Utility",
    description: "Modern file archiver for zips, rar files, and password-protected archives.",
    install: { kind: "cask", package: "keka" },
    homepage: "https://www.keka.io",
  },
  {
    name: "The Unarchiver",
    slug: "the-unarchiver",
    category: "Utility",
    description: "Lightweight extractor for odd archive formats that macOS still fumbles.",
    install: { kind: "cask", package: "the-unarchiver" },
    homepage: "https://theunarchiver.com",
  },
  {
    name: "Cyberduck",
    slug: "cyberduck",
    category: "Utility",
    description: "Browser for S3, FTP, WebDAV, and cloud storage transfers.",
    install: { kind: "cask", package: "cyberduck" },
    homepage: "https://cyberduck.io",
  },
  {
    name: "Transmission",
    slug: "transmission",
    category: "Utility",
    description: "Minimal BitTorrent client that stays out of the way.",
    install: { kind: "cask", package: "transmission" },
    homepage: "https://transmissionbt.com",
  },
  {
    name: "Docker",
    slug: "docker",
    category: "Dev",
    description: "Container tools for local app stacks.",
    install: { kind: "cask", package: "docker-desktop" },
    homepage: "https://www.docker.com",
  },
  {
    name: "Postman",
    slug: "postman",
    category: "Dev",
    description: "API testing, collections, and quick endpoint debugging.",
    install: { kind: "cask", package: "postman" },
    homepage: "https://www.postman.com",
  },
  {
    name: "Bruno",
    slug: "bruno",
    category: "Dev",
    description: "Open-source API client with local-first files and cleaner workflows.",
    install: { kind: "cask", package: "bruno" },
    homepage: "https://www.usebruno.com",
  },
  {
    name: "Insomnia",
    slug: "insomnia",
    category: "Dev",
    description: "API client for REST and GraphQL with a cleaner feel than older enterprise tools.",
    install: { kind: "cask", package: "insomnia" },
    homepage: "https://insomnia.rest",
  },
  {
    name: "TablePlus",
    slug: "tableplus",
    category: "Dev",
    description: "Database client for SQL work, schema edits, and query runs.",
    install: { kind: "cask", package: "tableplus" },
    homepage: "https://tableplus.com",
  },
  {
    name: "GitHub Desktop",
    slug: "github-desktop",
    category: "Dev",
    description: "Visual Git workflow for cloning, branching, and review basics.",
    install: { kind: "cask", package: "github" },
    homepage: "https://desktop.github.com",
  },
  {
    name: "Sublime Text",
    slug: "sublime-text",
    category: "Dev",
    description: "Fast editor for code and prose with low overhead and deep keyboard flow.",
    install: { kind: "cask", package: "sublime-text" },
    homepage: "https://www.sublimetext.com",
  },
  {
    name: "Linear",
    slug: "linear",
    category: "Productivity",
    description: "Issue tracking with fast keyboard flow and clean triage.",
    install: { kind: "cask", package: "linear" },
    homepage: "https://linear.app",
  },
  {
    name: "Todoist",
    slug: "todoist",
    category: "Productivity",
    description: "Task manager for quick capture, planning, and recurring work.",
    install: { kind: "cask", package: "todoist-app" },
    homepage: "https://todoist.com",
  },
  {
    name: "Fantastical",
    slug: "fantastical",
    category: "Productivity",
    description: "Calendar command center for scheduling and time blocking.",
    install: { kind: "cask", package: "fantastical" },
    homepage: "https://flexibits.com/fantastical",
  },
  {
    name: "ChatGPT",
    slug: "chatgpt",
    category: "AI",
    description: "Official ChatGPT desktop app for fast prompting and sidekick workflows.",
    install: { kind: "cask", package: "chatgpt" },
    homepage: "https://chatgpt.com",
  },
  {
    name: "Claude",
    slug: "claude",
    category: "AI",
    description: "Official Claude desktop app for writing, planning, and deep analysis.",
    install: { kind: "cask", package: "claude" },
    homepage: "https://claude.com/download",
  },
  {
    name: "Thunderbird",
    slug: "thunderbird",
    category: "Productivity",
    description: "Power-user email client with strong account support and local control.",
    install: { kind: "cask", package: "thunderbird" },
    homepage: "https://www.thunderbird.net",
  },
  {
    name: "Google Drive",
    slug: "google-drive",
    category: "Productivity",
    description: "Desktop sync client for Drive files, shared folders, and team docs.",
    install: { kind: "cask", package: "google-drive" },
    homepage: "https://www.google.com/drive/",
  },
  {
    name: "OneDrive",
    slug: "onedrive",
    category: "Productivity",
    description: "Microsoft cloud storage sync client for work files and shared folders.",
    install: { kind: "cask", package: "onedrive" },
    homepage: "https://www.microsoft.com/microsoft-365/onedrive/online-cloud-storage",
  },
  {
    name: "1Password",
    slug: "1password",
    category: "Security",
    description: "Password manager for vaults, passkeys, and team secrets.",
    install: { kind: "cask", package: "1password" },
    homepage: "https://1password.com",
  },
  {
    name: "Tailscale",
    slug: "tailscale",
    category: "Security",
    description: "Modern mesh VPN for private access across devices and dev boxes.",
    install: { kind: "cask", package: "tailscale-app" },
    homepage: "https://tailscale.com",
  },
  {
    name: "Proton VPN",
    slug: "proton-vpn",
    category: "Security",
    description: "Quick VPN setup for safer networks and region-flex testing.",
    install: { kind: "cask", package: "protonvpn" },
    homepage: "https://protonvpn.com",
  },
  {
    name: "Little Snitch",
    slug: "little-snitch",
    category: "Security",
    description: "Network monitor and outbound firewall for Mac traffic control.",
    install: { kind: "cask", package: "little-snitch" },
    homepage: "https://www.obdev.at/products/littlesnitch",
  },
  {
    name: "LocalSend",
    slug: "localsend",
    category: "Utility",
    description: "Cross-platform AirDrop-style sharing for fast local file transfers.",
    install: { kind: "cask", package: "localsend" },
    homepage: "https://localsend.org",
  },
  {
    name: "GIMP",
    slug: "gimp",
    category: "Design",
    description: "Open-source image editor for heavier bitmap work and plugin workflows.",
    install: { kind: "cask", package: "gimp" },
    homepage: "https://www.gimp.org",
  },
  {
    name: "Inkscape",
    slug: "inkscape",
    category: "Design",
    description: "Open-source vector editor for SVG work, diagrams, and print assets.",
    install: { kind: "cask", package: "inkscape" },
    homepage: "https://inkscape.org",
  },
];

const defaultSelection = [
  "arc",
  "discord",
  "figma",
  "notion",
  "spotify",
  "visual-studio-code",
];

const presets = [
  {
    name: "Starter",
    slug: "starter",
    description: "Daily-driver setup for most fresh Macs.",
    apps: [
      "arc",
      "google-chrome",
      "notion",
      "slack",
      "spotify",
      "raycast",
      "rectangle",
      "1password",
    ],
  },
  {
    name: "Developer",
    slug: "developer",
    description: "Code, terminal, containers, APIs, and database tools.",
    apps: [
      "arc",
      "visual-studio-code",
      "cursor",
      "ghostty",
      "docker",
      "bruno",
      "tableplus",
      "claude",
      "raycast",
      "1password",
    ],
  },
  {
    name: "Designer",
    slug: "designer",
    description: "Design, prototype, async review, and screenshot workflow.",
    apps: [
      "arc",
      "figma",
      "framer",
      "sketch",
      "notion",
      "slack",
      "cleanshot",
      "rectangle",
    ],
  },
  {
    name: "Focus",
    slug: "focus",
    description: "Calm solo stack for planning, notes, and fewer tabs.",
    apps: [
      "arc",
      "obsidian",
      "todoist",
      "fantastical",
      "raycast",
      "rectangle",
      "1password",
      "spotify",
    ],
  },
];

const iconVersion = "16.15.0";
const iconMap = {
  arc: "arc",
  "google-chrome": "googlechrome",
  firefox: "firefoxbrowser",
  "brave-browser": "brave",
  "microsoft-edge": "microsoftedge",
  vivaldi: "vivaldi",
  orion: "orion",
  "tor-browser": "torbrowser",
  "visual-studio-code": "visualstudiocode",
  cursor: "cursor",
  warp: "warp",
  ghostty: "ghostty",
  iterm2: "iterm2",
  zed: "zedindustries",
  nodejs: "nodedotjs",
  figma: "figma",
  sketch: "sketch",
  framer: "framer",
  "adobe-creative-cloud": "adobecreativecloud",
  notion: "notion",
  obsidian: "obsidian",
  discord: "discord",
  telegram: "telegram",
  slack: "slack",
  zoom: "zoom",
  "microsoft-teams": "microsoftteams",
  whatsapp: "whatsapp",
  spotify: "spotify",
  steam: "steam",
  vlc: "vlcmediaplayer",
  iina: "iina",
  blender: "blender",
  audacity: "audacity",
  "obs-studio": "obsstudio",
  capcut: "capcut",
  handbrake: "handbrake",
  raycast: "raycast",
  alfred: "alfred",
  rectangle: "rectangle",
  bartender: "bartender",
  appcleaner: "appcleaner",
  daisydisk: "daisydisk",
  keka: "keka",
  "the-unarchiver": "theunarchiver",
  cyberduck: "cyberduck",
  transmission: "transmission",
  localsend: "localsend",
  docker: "docker",
  postman: "postman",
  bruno: "bruno",
  insomnia: "insomnia",
  "github-desktop": "github",
  "sublime-text": "sublimetext",
  linear: "linear",
  todoist: "todoist",
  thunderbird: "thunderbird",
  "google-drive": "googledrive",
  onedrive: "microsoftonedrive",
  chatgpt: "openai",
  claude: "anthropic",
  "1password": "1password",
  tailscale: "tailscale",
  "proton-vpn": "protonvpn",
  gimp: "gimp",
  inkscape: "inkscape",
};

const storageKey = "macpack-selection";
const searchKey = "macpack-search";
const filterKey = "macpack-filter";

const selected = new Set(loadSelection());
const categories = ["All", ...new Set(apps.map((app) => app.category))];
let activeCategory = loadStoredValue(filterKey, "All");
let searchQuery = loadStoredValue(searchKey, "");

const catalogNode = document.querySelector("#catalog");
const selectionNode = document.querySelector("#selection-list");
const commandNode = document.querySelector("#command-output");
const terminalNode = document.querySelector("#terminal-output");
const clearButton = document.querySelector("#clear-button");
const copyButton = document.querySelector("#copy-button");
const downloadButton = document.querySelector("#download-button");
const searchInput = document.querySelector("#search-input");
const filterGroup = document.querySelector("#filter-group");
const statusMessage = document.querySelector("#status-message");
const statCountNode = document.querySelector("#stat-count");
const presetGrid = document.querySelector("#preset-grid");

function loadStoredValue(key, fallback) {
  try {
    return localStorage.getItem(key) ?? fallback;
  } catch {
    return fallback;
  }
}

function loadSelection() {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) {
      return defaultSelection;
    }

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return defaultSelection;
    }

    return parsed.filter((slug) => apps.some((app) => app.slug === slug));
  } catch {
    return defaultSelection;
  }
}

function saveSelection() {
  try {
    localStorage.setItem(storageKey, JSON.stringify([...selected]));
  } catch {
    // Ignore storage errors so builder still works in restricted contexts.
  }
}

function saveSearch() {
  try {
    localStorage.setItem(searchKey, searchQuery);
  } catch {
    // Ignore storage errors so builder still works in restricted contexts.
  }
}

function saveFilter() {
  try {
    localStorage.setItem(filterKey, activeCategory);
  } catch {
    // Ignore storage errors so builder still works in restricted contexts.
  }
}

function getSelectedApps() {
  return apps.filter((app) => selected.has(app.slug));
}

function getVisibleApps() {
  const query = searchQuery.trim().toLowerCase();

  return apps.filter((app) => {
    const matchesCategory =
      activeCategory === "All" || app.category === activeCategory;
    const matchesQuery =
      !query ||
      [app.name, app.category, app.description]
        .join(" ")
        .toLowerCase()
        .includes(query);

    return matchesCategory && matchesQuery;
  });
}

function sameSelection(slugs) {
  if (slugs.length !== selected.size) {
    return false;
  }

  return slugs.every((slug) => selected.has(slug));
}

function getAppBySlug(slug) {
  return apps.find((app) => app.slug === slug);
}

function getAppInitials(app) {
  return app.name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function getAppIconUrl(app) {
  const iconSlug = iconMap[app.slug];
  return iconSlug
    ? `https://cdn.jsdelivr.net/npm/simple-icons@${iconVersion}/icons/${iconSlug}.svg`
    : "";
}

function renderAppIcon(app) {
  const iconUrl = getAppIconUrl(app);

  if (!iconUrl) {
    return `<span class="app-icon app-icon-fallback-only" aria-hidden="true">${escapeHtml(getAppInitials(app))}</span>`;
  }

  return `
    <span class="app-icon" aria-hidden="true">
      <img
        src="${escapeHtml(iconUrl)}"
        alt=""
        loading="lazy"
        onerror="this.parentElement.classList.add('app-icon-fallback-only'); this.remove()"
      />
      <span class="app-icon-fallback">${escapeHtml(getAppInitials(app))}</span>
    </span>
  `;
}

function renderAppLabel(app) {
  return `
    <span class="app-label">
      ${renderAppIcon(app)}
      <span class="app-label-text">${escapeHtml(app.name)}</span>
    </span>
  `;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function commandText() {
  const picked = getSelectedApps();
  const casks = picked
    .filter((app) => app.install.kind === "cask")
    .map((app) => app.install.package);
  const formulae = picked
    .filter((app) => app.install.kind === "formula")
    .map((app) => app.install.package);

  if (!picked.length) {
    return "brew install --cask";
  }

  const lines = [];

  if (formulae.length) {
    lines.push(`brew install ${formulae.join(" ")}`);
  }

  if (casks.length) {
    lines.push(`brew install --cask ${casks.join(" ")}`);
  }

  return lines.join("\n");
}

function shellScriptText() {
  const picked = getSelectedApps();
  const casks = picked
    .filter((app) => app.install.kind === "cask")
    .map((app) => app.install.package);
  const formulae = picked
    .filter((app) => app.install.kind === "formula")
    .map((app) => app.install.package);

  const lines = [
    "#!/usr/bin/env bash",
    "set -euo pipefail",
    "",
    'if ! command -v brew >/dev/null 2>&1; then',
    '  echo "Homebrew not found. Installing Homebrew..."',
    '  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"',
    "fi",
    "",
    'echo "Refreshing Homebrew..."',
    "brew update",
  ];

  if (formulae.length) {
    lines.push("", `echo "Installing formulae..."`, `brew install ${formulae.join(" ")}`);
  }

  if (casks.length) {
    lines.push("", `echo "Installing apps..."`, `brew install --cask ${casks.join(" ")}`);
  }

  if (!picked.length) {
    lines.push("", 'echo "No apps selected yet. Add apps in MacPack first."');
  } else {
    lines.push("", 'echo "MacPack setup complete."');
  }

  return lines.join("\n");
}

function setStatus(message) {
  statusMessage.textContent = message;
}

function renderSelection() {
  const picked = getSelectedApps();

  selectionNode.innerHTML = picked.length
    ? picked
        .map(
          (app) =>
            `<li>${renderAppLabel(app)}<span>${escapeHtml(app.category)}</span></li>`,
        )
        .join("")
    : `<li><span>No apps yet</span><span>Pick from left</span></li>`;

  const command = shellScriptText();
  commandNode.textContent = command;
  terminalNode.textContent = commandText();
  statCountNode.textContent = String(picked.length);
}

function toggleApp(slug) {
  if (selected.has(slug)) {
    selected.delete(slug);
  } else {
    selected.add(slug);
  }

  saveSelection();
  renderPresets();
  renderCatalog();
  renderSelection();
  setStatus("");
}

function renderFilters() {
  filterGroup.innerHTML = categories
    .map((category) => {
      const isActive = category === activeCategory;
      return `
        <button
          class="filter-chip ${isActive ? "active" : ""}"
          data-category="${escapeHtml(category)}"
          type="button"
        >
          ${escapeHtml(category)}
        </button>
      `;
    })
    .join("");

  document.querySelectorAll(".filter-chip").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      saveFilter();
      renderFilters();
      renderCatalog();
    });
  });
}

function renderPresets() {
  presetGrid.innerHTML = presets
    .map((preset) => {
      const isActive = sameSelection(preset.apps);
      const previewApps = preset.apps
        .slice(0, 4)
        .map(getAppBySlug)
        .filter(Boolean);
      const overflowCount = Math.max(preset.apps.length - previewApps.length, 0);
      return `
        <article class="preset-card ${isActive ? "active" : ""}">
          <div>
            <p class="preset-kicker">${preset.apps.length} apps</p>
            <h4>${escapeHtml(preset.name)}</h4>
            <p>${escapeHtml(preset.description)}</p>
            <div class="preset-preview" aria-label="${escapeHtml(preset.name)} apps">
              ${previewApps
                .map((app) => `<span>${renderAppLabel(app)}</span>`)
                .join("")}
              ${overflowCount ? `<span>+${overflowCount} more</span>` : ""}
            </div>
          </div>
          <button
            class="preset-button ${isActive ? "active" : ""}"
            data-preset="${escapeHtml(preset.slug)}"
            type="button"
          >
            ${isActive ? "Applied" : "Use preset"}
          </button>
        </article>
      `;
    })
    .join("");

  document.querySelectorAll(".preset-button").forEach((button) => {
    button.addEventListener("click", () => {
      applyPreset(button.dataset.preset);
    });
  });
}

function renderCatalog() {
  const visibleApps = getVisibleApps();

  if (!visibleApps.length) {
    catalogNode.innerHTML = `
      <article class="empty-state">
        <h3>No matches</h3>
        <p>Try another search or switch category.</p>
      </article>
    `;
    return;
  }

  catalogNode.innerHTML = visibleApps
    .map((app) => {
      const isSelected = selected.has(app.slug);
      return `
        <article class="catalog-card ${isSelected ? "selected" : ""}" data-slug="${app.slug}">
          <header>
            <h3>${renderAppLabel(app)}</h3>
            <span class="tag">${escapeHtml(app.category)}</span>
          </header>
          <p>${escapeHtml(app.description)}</p>
          <footer>
            <span>${escapeHtml(app.install.kind)}</span>
            <a href="${app.homepage}" target="_blank" rel="noreferrer">Site</a>
          </footer>
        </article>
      `;
    })
    .join("");

  document.querySelectorAll(".catalog-card").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        return;
      }

      toggleApp(card.dataset.slug);
    });
  });
}

async function copyScript() {
  try {
    await navigator.clipboard.writeText(shellScriptText());
    setStatus("Script copied to clipboard.");
  } catch {
    setStatus("Clipboard blocked. Copy from script panel instead.");
  }
}

function downloadScript() {
  const blob = new Blob([shellScriptText()], { type: "text/x-shellscript" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "macpack-install.sh";
  link.click();
  URL.revokeObjectURL(url);
  setStatus("Downloaded macpack-install.sh.");
}

function applyPreset(presetSlug) {
  const preset = presets.find((item) => item.slug === presetSlug);
  if (!preset) {
    return;
  }

  selected.clear();
  preset.apps.forEach((slug) => {
    selected.add(slug);
  });

  saveSelection();
  renderPresets();
  renderCatalog();
  renderSelection();
  setStatus(`${preset.name} preset applied.`);
}

clearButton.addEventListener("click", () => {
  selected.clear();
  saveSelection();
  renderPresets();
  renderCatalog();
  renderSelection();
  setStatus("Selection cleared.");
});

copyButton.addEventListener("click", () => {
  copyScript();
});

downloadButton.addEventListener("click", () => {
  downloadScript();
});

searchInput.value = searchQuery;
searchInput.addEventListener("input", (event) => {
  searchQuery = event.target.value;
  saveSearch();
  renderCatalog();
});

renderFilters();
renderPresets();
renderCatalog();
renderSelection();
