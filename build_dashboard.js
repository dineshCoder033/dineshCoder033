const fs = require('fs');

// Read the user photo and encode as Base64 Data URI
const userPhotoB64 = fs.readFileSync('assets/user_photo.jpg').toString('base64');
const userPhotoDataUri = `data:image/jpeg;base64,${userPhotoB64}`;

// 1. BANNER-DARK.SVG (TOP TERMINAL WINDOW WITH EMBEDDED REAL PHOTO & CSS ANIMATIONS)
const bannerDarkSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1000 350" width="100%" height="100%">
  <defs>
    <!-- Dark Cyber Terminal Background Gradient -->
    <linearGradient id="term-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070a11" />
      <stop offset="50%" stop-color="#0d111a" />
      <stop offset="100%" stop-color="#090d16" />
    </linearGradient>

    <!-- Header Bar Gradient -->
    <linearGradient id="header-bar" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#121824" />
      <stop offset="100%" stop-color="#1a2333" />
    </linearGradient>

    <!-- Glowing Cyan Filter -->
    <filter id="glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="4" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
    <filter id="glow-border" x="-10%" y="-10%" width="120%" height="120%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>

    <!-- Halftone Dot Pattern -->
    <pattern id="halftone" width="8" height="8" patternUnits="userSpaceOnUse">
      <circle cx="4" cy="4" r="1.2" fill="#00e5ff" opacity="0.35" />
    </pattern>

    <!-- CSS Animations -->
    <style>
      @keyframes cursorBlink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
      @keyframes pulseLive {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.4; transform: scale(0.85); }
      }
      @keyframes scanline {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(100%); }
      }
      .cursor-blink { animation: cursorBlink 0.9s infinite; }
      .live-pulse { animation: pulseLive 1.5s infinite; }
      .scanline-anim { animation: scanline 4s linear infinite; }
    </style>
  </defs>

  <!-- Main Terminal Outer Box -->
  <rect width="1000" height="350" rx="12" fill="url(#term-bg)" stroke="#00e5ff" stroke-width="1.2" stroke-opacity="0.6" filter="url(#glow-border)" />

  <!-- Top Window Header Bar -->
  <rect width="1000" height="34" rx="12" fill="url(#header-bar)" />
  <rect y="20" width="1000" height="14" fill="url(#header-bar)" />
  <line x1="0" y1="34" x2="1000" y2="34" stroke="#1f293d" stroke-width="1" />

  <!-- Window Traffic Light Buttons -->
  <circle cx="20" cy="17" r="5" fill="#ff5f56" />
  <circle cx="36" cy="17" r="5" fill="#ffbd2e" />
  <circle cx="52" cy="17" r="5" fill="#27c93f" />

  <!-- Header Left Title -->
  <text x="75" y="21" font-family="'Fira Code', monospace" font-size="12" font-weight="600" fill="#00e5ff">
    profile.sh --live
  </text>

  <!-- Header Right LIVE Indicator -->
  <g transform="translate(920, 9)">
    <circle class="live-pulse" cx="10" cy="8" r="4" fill="#ff4081" />
    <text x="22" y="12" font-family="'Fira Code', monospace" font-size="11" font-weight="800" fill="#ff4081">LIVE</text>
  </g>

  <!-- ==================== LEFT PANEL: USER PHOTO PORTRAIT ==================== -->
  <g transform="translate(16, 46)">
    <rect width="280" height="288" rx="8" fill="#090d16" stroke="#1f293d" stroke-width="1" />
    
    <!-- User Real Photo embedded via Base64 -->
    <clipPath id="user-portrait-clip">
      <rect width="270" height="278" rx="6" x="5" y="5" />
    </clipPath>
    
    <!-- Base64 User Image -->
    <image href="${userPhotoDataUri}" x="5" y="5" width="270" height="278" preserveAspectRatio="xMidYMin slice" clip-path="url(#user-portrait-clip)" />
    
    <!-- Cyan Halftone Grid Overlay -->
    <rect x="5" y="5" width="270" height="278" fill="url(#halftone)" clip-path="url(#user-portrait-clip)" opacity="0.45" />
    <rect x="5" y="5" width="270" height="278" fill="#00e5ff" opacity="0.12" style="mix-blend-mode: color-dodge;" clip-path="url(#user-portrait-clip)" />

    <!-- Corner Brackets -->
    <path d="M 12 25 L 12 12 L 25 12" fill="none" stroke="#00e5ff" stroke-width="2.5" />
    <path d="M 268 25 L 268 12 L 255 12" fill="none" stroke="#00e5ff" stroke-width="2.5" />
    <path d="M 12 263 L 12 276 L 25 276" fill="none" stroke="#00e5ff" stroke-width="2.5" />
    <path d="M 268 263 L 268 276 L 255 276" fill="none" stroke="#00e5ff" stroke-width="2.5" />
  </g>

  <!-- ==================== CENTER PANEL: INFO & SLOGAN ==================== -->
  <g transform="translate(312, 46)">
    <!-- Name -->
    <text x="0" y="36" font-family="'Fira Code', sans-serif" font-weight="900" font-size="32" fill="#00e5ff" filter="url(#glow-cyan)" letter-spacing="1">
      DINESHKUMAR M
    </text>
    <text x="0" y="36" font-family="'Fira Code', sans-serif" font-weight="900" font-size="32" fill="#00e5ff" letter-spacing="1">
      DINESHKUMAR M
    </text>

    <!-- Subtitle -->
    <text x="0" y="62" font-family="'Fira Code', monospace" font-weight="700" font-size="15" fill="#b877ff">
      Junior Software Developer
    </text>

    <!-- Command Box -->
    <g transform="translate(0, 82)">
      <rect width="320" height="56" rx="6" fill="#070a11" stroke="#00e5ff" stroke-width="1" stroke-opacity="0.4" />
      <text x="12" y="23" font-family="'Fira Code', monospace" font-size="12" font-weight="600" fill="#22c55e">
        &gt; Building scalable web apps
      </text>
      <text x="12" y="42" font-family="'Fira Code', monospace" font-size="12" font-weight="600" fill="#22c55e">
        &gt; Turning ideas into real products
      </text>
    </g>

    <!-- Tech Icons Line (Inline Vectors for 100% Reliability) -->
    <g transform="translate(0, 155)">
      <!-- React -->
      <g transform="translate(0, 0)">
        <ellipse cx="18" cy="18" rx="14" ry="5.5" fill="none" stroke="#00e5ff" stroke-width="1.6" transform="rotate(30 18 18)"/>
        <ellipse cx="18" cy="18" rx="14" ry="5.5" fill="none" stroke="#00e5ff" stroke-width="1.6" transform="rotate(90 18 18)"/>
        <ellipse cx="18" cy="18" rx="14" ry="5.5" fill="none" stroke="#00e5ff" stroke-width="1.6" transform="rotate(150 18 18)"/>
        <circle cx="18" cy="18" r="3" fill="#00e5ff"/>
      </g>
      <line x1="45" y1="5" x2="45" y2="30" stroke="#1f293d" stroke-width="1"/>

      <!-- Next.js -->
      <g transform="translate(55, 0)">
        <circle cx="18" cy="18" r="14" fill="#090d16" stroke="#f3f4f6" stroke-width="1.5"/>
        <text x="18" y="24" font-family="'Fira Code', monospace" font-size="16" font-weight="900" fill="#f3f4f6" text-anchor="middle">N</text>
      </g>
      <line x1="100" y1="5" x2="100" y2="30" stroke="#1f293d" stroke-width="1"/>

      <!-- Node.js -->
      <g transform="translate(110, 0)">
        <polygon points="18,4 32,11 32,25 18,32 4,25 4,11" fill="none" stroke="#22c55e" stroke-width="1.8"/>
        <text x="18" y="23" font-family="'Fira Code', monospace" font-size="11" font-weight="800" fill="#22c55e" text-anchor="middle">JS</text>
      </g>
      <line x1="155" y1="5" x2="155" y2="30" stroke="#1f293d" stroke-width="1"/>

      <!-- Flutter -->
      <g transform="translate(165, 0)">
        <path d="M 24 4 L 10 18 L 17 25 L 31 11 Z M 17 25 L 10 32 L 24 32 L 24 18 Z" fill="#38bdf8"/>
      </g>
    </g>

    <!-- Slogan -->
    <g transform="translate(0, 222)">
      <text font-family="'Fira Code', monospace" font-weight="800" font-size="16">
        <tspan fill="#00e5ff">Code.</tspan>
        <tspan fill="#b877ff"> Learn.</tspan>
        <tspan fill="#00e676"> Build.</tspan>
        <tspan fill="#ff4081"> Repeat.</tspan>
      </text>
    </g>
  </g>

  <!-- ==================== RIGHT PANEL: SYSTEM.INFO ==================== -->
  <g transform="translate(645, 46)">
    <!-- Header -->
    <text x="0" y="16" font-family="'Fira Code', monospace" font-size="13" font-weight="800" fill="#00e5ff">
      SYSTEM.INFO
    </text>
    <line x1="0" y1="24" x2="340" y2="24" stroke="#1f293d" stroke-width="1"/>

    <!-- Dotted Table -->
    <g transform="translate(0, 42)" font-family="'Fira Code', monospace" font-size="11.5">
      <!-- Status -->
      <text x="0" y="0" fill="#8b949e">STATUS</text>
      <text x="52" y="-1" fill="#1f293d" letter-spacing="3">...............................</text>
      <text x="340" y="0" font-weight="700" fill="#22c55e" text-anchor="end">ONLINE 🟢</text>

      <!-- Company -->
      <text x="0" y="24" fill="#8b949e">COMPANY</text>
      <text x="60" y="23" fill="#1f293d" letter-spacing="3">..............................</text>
      <text x="340" y="24" font-weight="600" fill="#f3f4f6" text-anchor="end">GoMath Technology</text>

      <!-- Role -->
      <text x="0" y="48" fill="#8b949e">ROLE</text>
      <text x="36" y="47" fill="#1f293d" letter-spacing="3">................................</text>
      <text x="340" y="48" font-weight="600" fill="#b877ff" text-anchor="end">Junior Software Developer</text>

      <!-- Location -->
      <text x="0" y="72" fill="#8b949e">LOCATION</text>
      <text x="66" y="71" fill="#1f293d" letter-spacing="3">.............................</text>
      <text x="340" y="72" font-weight="600" fill="#f3f4f6" text-anchor="end">Tamil Nadu, India 🇮🇳</text>

      <!-- Learning -->
      <text x="0" y="96" fill="#8b949e">LEARNING</text>
      <text x="66" y="95" fill="#1f293d" letter-spacing="3">.............................</text>
      <text x="340" y="96" font-weight="600" fill="#38bdf8" text-anchor="end">DSA • Next.js</text>

      <!-- Focus -->
      <text x="0" y="120" fill="#8b949e">FOCUS</text>
      <text x="42" y="119" fill="#1f293d" letter-spacing="3">...............................</text>
      <text x="340" y="120" font-weight="600" fill="#00e5ff" text-anchor="end">Full Stack Development</text>

      <!-- Github -->
      <text x="0" y="144" fill="#8b949e">GITHUB</text>
      <text x="48" y="143" fill="#1f293d" letter-spacing="3">..............................</text>
      <text x="340" y="144" font-weight="600" fill="#ffd600" text-anchor="end">dineshkumar0202</text>
    </g>

    <!-- Bottom Interactive Terminal Box with Blinking Cursor -->
    <g transform="translate(0, 212)">
      <rect width="340" height="34" rx="6" fill="#070a11" stroke="#00e5ff" stroke-width="1" stroke-opacity="0.4" />
      <text x="12" y="21" font-family="'Fira Code', monospace" font-size="12" font-weight="700" fill="#22c55e">
        user@dineshkumar ~ $
      </text>
      <!-- Solid Cyan Blinking Cursor -->
      <rect class="cursor-blink" x="180" y="10" width="8" height="14" fill="#00e5ff" />
    </g>
  </g>
</svg>`;

fs.writeFileSync('assets/banner-dark.svg', bannerDarkSvg);
console.log('✅ assets/banner-dark.svg written with Base64 embedded real photo!');

// 2. DASHBOARD-ROW2.SVG (WITH INLINE VECTOR TECH ICONS FOR ZERO BROKEN IMAGES)
const dashboardRow2Svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 320" width="100%" height="100%">
  <defs>
    <linearGradient id="col-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0d111a" />
      <stop offset="100%" stop-color="#070a11" />
    </linearGradient>
  </defs>

  <!-- COLUMN 1: ABOUT ME -->
  <g transform="translate(0, 0)">
    <rect width="235" height="315" rx="8" fill="url(#col-bg)" stroke="#00e5ff" stroke-width="1" stroke-opacity="0.3" />
    <text x="12" y="24" font-family="'Fira Code', monospace" font-size="12" font-weight="800" fill="#00e5ff">
      👤 ABOUT ME
    </text>
    <line x1="12" y1="32" x2="223" y2="32" stroke="#1f293d" stroke-width="1"/>

    <g transform="translate(12, 48)" font-family="'Fira Code', sans-serif" font-size="10.5">
      <text x="0" y="0" fill="#f3f4f6">🚀 <tspan font-weight="700" fill="#38bdf8">Junior Software Developer</tspan> at</text>
      <text x="16" y="16" fill="#f3f4f6">GoMath Technology</text>

      <text x="0" y="44" fill="#f3f4f6">🌱 Passionate about <tspan font-weight="700" fill="#00e5ff">Full Stack</tspan></text>
      <text x="16" y="60" fill="#f3f4f6">Development</text>

      <text x="0" y="88" fill="#f3f4f6">💻 Love building clean, scalable and</text>
      <text x="16" y="104" fill="#f3f4f6">user-friendly apps</text>

      <text x="0" y="132" fill="#f3f4f6">🎯 Currently learning <tspan font-weight="700" fill="#b877ff">DSA</tspan> and</text>
      <text x="16" y="148" fill="#f3f4f6">Advanced Web Dev</text>

      <text x="0" y="176" fill="#f3f4f6">🎯 <tspan font-weight="700" fill="#22c55e">Goal:</tspan> Build impactful products &amp;</text>
      <text x="16" y="192" fill="#f3f4f6">start my own company</text>

      <text x="0" y="220" fill="#f3f4f6">⚡ <tspan font-weight="700" fill="#ffd600">Fun fact:</tspan> I love automating</text>
      <text x="16" y="236" fill="#f3f4f6">everything!</text>
    </g>
  </g>

  <!-- COLUMN 2: EXPERIENCE -->
  <g transform="translate(255, 0)">
    <rect width="235" height="315" rx="8" fill="url(#col-bg)" stroke="#00e5ff" stroke-width="1" stroke-opacity="0.3" />
    <text x="12" y="24" font-family="'Fira Code', monospace" font-size="12" font-weight="800" fill="#00e5ff">
      💼 EXPERIENCE
    </text>
    <line x1="12" y1="32" x2="223" y2="32" stroke="#1f293d" stroke-width="1"/>

    <g transform="translate(12, 48)">
      <g transform="translate(0, 0)">
        <circle cx="5" cy="5" r="4" fill="#00e5ff" />
        <text x="16" y="8" font-family="'Fira Code', monospace" font-size="11.5" font-weight="800" fill="#00e5ff">GoMath Technology</text>
        <text x="16" y="22" font-family="'Fira Code', monospace" font-size="10.5" fill="#f3f4f6">Junior Software Developer</text>
        <text x="16" y="36" font-family="'Fira Code', monospace" font-size="9.5" fill="#8b949e">May 2024 - Present</text>
      </g>

      <line x1="5" y1="12" x2="5" y2="75" stroke="#1f293d" stroke-width="1.5" stroke-dasharray="2 2" />

      <g transform="translate(0, 75)">
        <circle cx="5" cy="5" r="4" fill="#b877ff" />
        <text x="16" y="8" font-family="'Fira Code', monospace" font-size="11.5" font-weight="800" fill="#b877ff">Internships</text>
      </g>

      <g transform="translate(16, 98)" font-family="'Fira Code', sans-serif" font-size="9.5" fill="#8b949e">
        <text x="0" y="0">• Nexlogic Software Solutions - Web Dev Intern</text>
        <text x="0" y="24">• CubeAI Solutions - MERN Stack Intern</text>
        <text x="0" y="48">• Pinnacle Labs - Web Dev Intern</text>
        <text x="0" y="72">• Zidio Development - Frontend Intern</text>
      </g>
    </g>
  </g>

  <!-- COLUMN 3: FEATURED PROJECTS -->
  <g transform="translate(510, 0)">
    <rect width="235" height="315" rx="8" fill="url(#col-bg)" stroke="#00e5ff" stroke-width="1" stroke-opacity="0.3" />
    <text x="12" y="24" font-family="'Fira Code', monospace" font-size="12" font-weight="800" fill="#00e5ff">
      🚀 FEATURED PROJECTS
    </text>
    <line x1="12" y1="32" x2="223" y2="32" stroke="#1f293d" stroke-width="1"/>

    <g transform="translate(12, 46)">
      <g transform="translate(0, 0)">
        <text x="0" y="10" font-family="'Fira Code', monospace" font-size="11" font-weight="800" fill="#22c55e">🥦 AgriConnect</text>
        <text x="0" y="22" font-family="'Fira Code', monospace" font-size="8.5" fill="#8b949e">MERN • TailwindCSS • i18n</text>
        <text x="110" y="10" font-family="'Fira Code', monospace" font-size="8" fill="#8b949e">A platform connecting farmers</text>
        <text x="110" y="21" font-family="'Fira Code', monospace" font-size="8" fill="#8b949e">with buyers, live location,</text>
        <text x="110" y="32" font-family="'Fira Code', monospace" font-size="8" fill="#8b949e">news &amp; more.</text>
      </g>
      <line x1="0" y1="42" x2="210" y2="42" stroke="#1f293d" stroke-width="0.8"/>

      <g transform="translate(0, 52)">
        <text x="0" y="10" font-family="'Fira Code', monospace" font-size="11" font-weight="800" fill="#b877ff">👥 HRMS</text>
        <text x="0" y="22" font-family="'Fira Code', monospace" font-size="8.5" fill="#8b949e">Laravel • React • MySQL</text>
        <text x="110" y="10" font-family="'Fira Code', monospace" font-size="8" fill="#8b949e">Enterprise HR Management</text>
        <text x="110" y="21" font-family="'Fira Code', monospace" font-size="8" fill="#8b949e">System with role based access</text>
        <text x="110" y="32" font-family="'Fira Code', monospace" font-size="8" fill="#8b949e">and analytics.</text>
      </g>
      <line x1="0" y1="94" x2="210" y2="94" stroke="#1f293d" stroke-width="0.8"/>

      <g transform="translate(0, 104)">
        <text x="0" y="10" font-family="'Fira Code', monospace" font-size="11" font-weight="800" fill="#38bdf8">🚗 Ridoo (Uber Clone)</text>
        <text x="0" y="22" font-family="'Fira Code', monospace" font-size="8.5" fill="#8b949e">Flutter • Laravel • MySQL</text>
        <text x="110" y="10" font-family="'Fira Code', monospace" font-size="8" fill="#8b949e">Ride booking app with real-time</text>
        <text x="110" y="21" font-family="'Fira Code', monospace" font-size="8" fill="#8b949e">tracking and secure</text>
        <text x="110" y="32" font-family="'Fira Code', monospace" font-size="8" fill="#8b949e">payments.</text>
      </g>
      <line x1="0" y1="146" x2="210" y2="146" stroke="#1f293d" stroke-width="0.8"/>

      <g transform="translate(0, 156)">
        <text x="0" y="10" font-family="'Fira Code', monospace" font-size="11" font-weight="800" fill="#ffd600">📅 Event Assistant</text>
        <text x="0" y="22" font-family="'Fira Code', monospace" font-size="8.5" fill="#8b949e">MERN • AI • Perplexity API</text>
        <text x="110" y="10" font-family="'Fira Code', monospace" font-size="8" fill="#8b949e">AI powered event management</text>
        <text x="110" y="21" font-family="'Fira Code', monospace" font-size="8" fill="#8b949e">and automation platform.</text>
      </g>
    </g>
  </g>

  <!-- COLUMN 4: TECH STACK (NATIVE VECTOR BADGES - NO BROKEN IMAGES!) -->
  <g transform="translate(765, 0)">
    <rect width="235" height="315" rx="8" fill="url(#col-bg)" stroke="#00e5ff" stroke-width="1" stroke-opacity="0.3" />
    <text x="12" y="24" font-family="'Fira Code', monospace" font-size="12" font-weight="800" fill="#00e5ff">
      🛠 TECH STACK
    </text>
    <line x1="12" y1="32" x2="223" y2="32" stroke="#1f293d" stroke-width="1"/>

    <g transform="translate(12, 46)" font-family="'Fira Code', monospace" font-size="10">
      <!-- Frontend Badges -->
      <text x="0" y="10" fill="#38bdf8" font-weight="700">Frontend</text>
      <g transform="translate(0, 16)">
        <rect width="32" height="18" rx="4" fill="#090d16" stroke="#00e5ff" stroke-width="1"/>
        <text x="16" y="13" font-size="8" font-weight="800" fill="#00e5ff" text-anchor="middle">React</text>

        <rect x="36" width="32" height="18" rx="4" fill="#090d16" stroke="#f3f4f6" stroke-width="1"/>
        <text x="52" y="13" font-size="8" font-weight="800" fill="#f3f4f6" text-anchor="middle">Next</text>

        <rect x="72" width="32" height="18" rx="4" fill="#090d16" stroke="#38bdf8" stroke-width="1"/>
        <text x="88" y="13" font-size="7.5" font-weight="800" fill="#38bdf8" text-anchor="middle">Tailwind</text>

        <rect x="108" width="28" height="18" rx="4" fill="#090d16" stroke="#e34f26" stroke-width="1"/>
        <text x="122" y="13" font-size="8" font-weight="800" fill="#e34f26" text-anchor="middle">HTML</text>

        <rect x="140" width="28" height="18" rx="4" fill="#090d16" stroke="#1572b6" stroke-width="1"/>
        <text x="154" y="13" font-size="8" font-weight="800" fill="#1572b6" text-anchor="middle">CSS</text>

        <rect x="172" width="24" height="18" rx="4" fill="#090d16" stroke="#f7df1e" stroke-width="1"/>
        <text x="184" y="13" font-size="8" font-weight="800" fill="#f7df1e" text-anchor="middle">JS</text>
      </g>
      <line x1="0" y1="46" x2="210" y2="46" stroke="#1f293d" stroke-width="0.8"/>

      <!-- Backend Badges -->
      <text x="0" y="60" fill="#22c55e" font-weight="700">Backend</text>
      <g transform="translate(0, 66)">
        <rect width="36" height="18" rx="4" fill="#090d16" stroke="#22c55e" stroke-width="1"/>
        <text x="18" y="13" font-size="8" font-weight="800" fill="#22c55e" text-anchor="middle">Node</text>

        <rect x="40" width="44" height="18" rx="4" fill="#090d16" stroke="#8b949e" stroke-width="1"/>
        <text x="62" y="13" font-size="8" font-weight="800" fill="#8b949e" text-anchor="middle">Express</text>

        <rect x="88" width="42" height="18" rx="4" fill="#090d16" stroke="#ff2d20" stroke-width="1"/>
        <text x="109" y="13" font-size="8" font-weight="800" fill="#ff2d20" text-anchor="middle">Laravel</text>
      </g>
      <line x1="0" y1="96" x2="210" y2="96" stroke="#1f293d" stroke-width="0.8"/>

      <!-- Database Badges -->
      <text x="0" y="110" fill="#b877ff" font-weight="700">Database</text>
      <g transform="translate(0, 116)">
        <rect width="48" height="18" rx="4" fill="#090d16" stroke="#47a248" stroke-width="1"/>
        <text x="24" y="13" font-size="8" font-weight="800" fill="#47a248" text-anchor="middle">MongoDB</text>

        <rect x="52" width="38" height="18" rx="4" fill="#090d16" stroke="#00758f" stroke-width="1"/>
        <text x="71" y="13" font-size="8" font-weight="800" fill="#00758f" text-anchor="middle">MySQL</text>

        <rect x="94" width="48" height="18" rx="4" fill="#090d16" stroke="#ffca28" stroke-width="1"/>
        <text x="118" y="13" font-size="8" font-weight="800" fill="#ffca28" text-anchor="middle">Firebase</text>
      </g>
      <line x1="0" y1="146" x2="210" y2="146" stroke="#1f293d" stroke-width="0.8"/>

      <!-- Other Badges -->
      <text x="0" y="160" fill="#ffd600" font-weight="700">Other</text>
      <g transform="translate(0, 166)">
        <rect width="28" height="18" rx="4" fill="#090d16" stroke="#f05032" stroke-width="1"/>
        <text x="14" y="13" font-size="8" font-weight="800" fill="#f05032" text-anchor="middle">Git</text>

        <rect x="32" width="38" height="18" rx="4" fill="#090d16" stroke="#f3f4f6" stroke-width="1"/>
        <text x="51" y="13" font-size="8" font-weight="800" fill="#f3f4f6" text-anchor="middle">GitHub</text>

        <rect x="74" width="44" height="18" rx="4" fill="#090d16" stroke="#ff6c37" stroke-width="1"/>
        <text x="96" y="13" font-size="8" font-weight="800" fill="#ff6c37" text-anchor="middle">Postman</text>

        <rect x="122" width="34" height="18" rx="4" fill="#090d16" stroke="#a259ff" stroke-width="1"/>
        <text x="139" y="13" font-size="8" font-weight="800" fill="#a259ff" text-anchor="middle">Figma</text>

        <rect x="160" width="44" height="18" rx="4" fill="#090d16" stroke="#007acc" stroke-width="1"/>
        <text x="182" y="13" font-size="8" font-weight="800" fill="#007acc" text-anchor="middle">VS Code</text>
      </g>
    </g>
  </g>
</svg>`;

fs.writeFileSync('assets/dashboard-row2.svg', dashboardRow2Svg);
console.log('✅ assets/dashboard-row2.svg written with vector badges!');
