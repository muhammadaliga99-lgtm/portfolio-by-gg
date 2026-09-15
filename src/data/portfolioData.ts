import type { Project, BackendStage, SkillItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  fullName: "Gafurov Muhammad Ali Nodirovich",
  nickname: "Muhammad Ali",
  age: 13,
  birthDate: "2013-01-15",
  titleUz: "Full-Stack Web & 3D Game Developer",
  titleEn: "Full-Stack Web & 3D Game Developer",
  locationUz: "Toshkent shahri, Mirzo Ulug'bek tumani",
  locationEn: "Tashkent, Mirzo Ulugbek District, Uzbekistan",
  schoolUz: "256-sonli maktab, 8-\"A\" sinf o'quvchisi",
  schoolEn: "School #256, Grade 8-\"A\"",
  itExamScore: "20/20 (100% Maksimal — IT Kursi Imtihoni)",
  marsAcademyUz: "Mars IT Academy — Frontend & Backend 7 ta modul bitiruvchisi",
  marsAcademyEn: "Mars IT Academy — Graduate of 7 Frontend & Backend Modules",
  interNationUz: "Inter Nation English School (Oybek filiali) — IELTS 7.5+ nomzodi",
  interNationEn: "Inter Nation English School (Oybek Branch) — IELTS 7.5+ Candidate",
  email: "ggmuhammadali@gmail.com",
  github: "https://github.com/muhammadaliga99-lgtm",
  githubUser: "muhammadaliga99-lgtm",
  telegram: "https://t.me/ggmuhammadali",
  telegramUser: "@ggmuhammadali",
  steamNick: "m0NESY",
  chessEloTarget: "1000 Elo",
  quoteUz: "Kodni faqat ishlaydigan emas, balki mukammal arxitektura, yuqori xavfsizlik va 60 FPS silliqlikda yaratish tarafdoriman.",
  quoteEn: "I believe code should not just work, but feature pristine architecture, enterprise security, and 60 FPS performance."
};

export const HACKATHON_DATA = {
  nameUz: "Mars Hackathon 2026",
  nameEn: "Mars Hackathon 2026",
  awardUz: "2-o'rin (Vitse-Chempion)",
  awardEn: "2nd Place (Vice-Champion)",
  score: 92.1,
  maxScore: 100,
  projectName: "Maktab AI Arena — Teacher Analytics Core",
  team: "TezCode By Behruz",
  mentor: "Behruz Sotimboyev",
  teammates: ["Muhammad Ali Gafurov (Analytics Core)", "Aziz (Shell & CRUD)", "Javodbek (Student Client)", "Zero (Fastify/Python AI)"],
  specId: "ТЗ-04-MuhammadAli-Admin-B",
  routes: [
    { path: "/dashboard", descUz: "6 ta asosiy KPI kartalari, faollik grafigi va umumiy ko'rsatkichlar", descEn: "6 Primary KPI cards, live activity graph and general metrics" },
    { path: "/analytics/topics", descUz: "O'quvchilar oqsayotgan 'Zaif mavzular' (Weak topics) tahlili", descEn: "Real-time identification of students' weak study topics" },
    { path: "/analytics/students", descUz: "O'quvchilar aniqligi (Accuracy), XP, Streak va duellar statistikasi", descEn: "Student accuracy, XP points, streaks and live duel stats" },
    { path: "/leaderboard & /activity", descUz: "Sinf peshqadamlari va Jonli hodisalar oqimi (LIVE feed)", descEn: "Live class leaderboard and real-time activity stream" },
  ],
  juryFeedbackUz: "13 yoshli Muhammad Alining jamoaviy arxitekturadagi yetakchi roli va SaaS axborot zichligi bo'yicha mustaqil professional yechimi hakamlar hay'ati tomonidan eng yuqori baholandi.",
  juryFeedbackEn: "The judging committee particularly lauded 13-year-old Muhammad Ali's autonomous architectural leadership and high-density SaaS analytics design."
};

export const GAMES_DATA = [
  {
    id: "cs2-clone",
    title: "Counter-Strike 2 Mirage 3D Web",
    engine: "Three.js WebGL + Web Audio API",
    localPath: "C:\\Users\\User\\cs2-clone",
    stats: [
      { labelUz: "Xarita", labelEn: "Map", value: "3D de_mirage (A, B, Mid, Palace)" },
      { labelUz: "AI Botlar", labelEn: "AI Bots", value: "BotManager.js & Bot.js" },
      { labelUz: "Qurollar", labelEn: "Weapons", value: "AK-47, AWP, Knife, Deagle" },
      { labelUz: "Fizika", labelEn: "Physics", value: "Recoil, C4 Plant/Defuse, Decals" }
    ],
    featuresUz: [
      "To'liq 3D de_mirage xaritasi (konnektor, saroy, kvartira, yashirin qutilar)",
      "Avtonom AI botlar: o'yinchini aniqlaydi, qadam tovushlariga qaraydi va otadi",
      "AK-47 xarakterli orqaga tepishi (Spray recoil pattern) va AWP nishoni",
      "C4 bombani o'rnatish (Plant) va 40 soniyalik portlash/zararsizlantirish mexanikasi",
      "2D Taktik Minimap Radar, Scoreboard (Tab) va Qurol xarid menyusi (B)",
      "Web Audio API fazoviy 3D audio (qadamlar va o'q yo'nalishini his qilish)"
    ],
    featuresEn: [
      "Authentic full 3D de_mirage geometry (connector, palace, apartments, cover boxes)",
      "Autonomous AI bots with field-of-view detection, footsteps tracking and shooting",
      "AK-47 authentic recoil spray patterns and sniper AWP scope physics",
      "C4 bomb planting, 40-second beep timer, and defusal mechanics",
      "2D Tactical Minimap Radar, interactive Tab scoreboard, and B-key BuyMenu",
      "Web Audio API spatial 3D audio for pinpoint enemy footsteps localization"
    ]
  },
  {
    id: "minecraft-clone",
    title: "Minecraft 3D Voxel Engine",
    engine: "Three.js + Procedural Terrain + AABB Physics",
    localPath: "C:\\Users\\User\\minecraft-clone",
    stats: [
      { labelUz: "Dvigatel hajmi", labelEn: "Engine Code", value: "1,700 qator original JS" },
      { labelUz: "Blok turlari", labelEn: "Block Types", value: "20+ o'zbekcha bloklar" },
      { labelUz: "Kunda/Tun", labelEn: "Day/Night", value: "180 soniyalik real tsikl" },
      { labelUz: "FPS unumdorlik", labelEn: "Performance", value: "Barqaror 60 FPS WebGL" }
    ],
    featuresUz: [
      "1,700 qatordan iborat maxsus yozilgan sof JavaScript o'yin dvigateli (game.js)",
      "Simplex/Perlin shovqini orqali protsessual 64x64 voksel dunyosi va daraxtlar",
      "20 dan ortiq bloklar: O't, Tosh, Tuproq, Yog'och, Olmos, Oltin, Temir, Suv, TNT, Oyna",
      "AABB to'qnashuv fizikasi, gravitatsiya, to'siqlardan sakrash va uchish rejimi",
      "Raycasting nishoni orqali bloklarni buzish va yangi bloklarni terish",
      "180 soniyalik kunduz va tun almashinuvi, quyosh va oy harakati"
    ],
    featuresEn: [
      "1,700-line bespoke pure JavaScript voxel engine without bloated external engines",
      "Procedural 64x64 terrain and natural procedural trees powered by Simplex noise",
      "20+ custom blocks: Grass, Stone, Dirt, Wood, Diamond Ore, Gold, Water, TNT, Glass",
      "Full AABB box collision physics, realistic gravity, obstacle vaulting, and flying mode",
      "Real-time raycasting cursor for block destruction and construction",
      "180-second dynamic day-and-night ambient lighting cycle with moving sun and moon"
    ]
  }
];

export const PROJECTS_LIST: Project[] = [
  {
    id: "cutzone-crm",
    title: "CutZone — Barbershop CRM & Online Booking",
    shortDescUz: "Monorepo Enterprise tizim: Mijoz portali, Admin/Moliya paneli, Express API va Android mobil ilova.",
    shortDescEn: "Enterprise Monorepo system: Client booking portal, Admin/Finance CRM, Express API and Android APK.",
    fullDescUz: "CutZone — sartaroshxonalar va go'zallik salonlari uchun mo'ljallangan keng ko'lamli tizim. Mijozlar yaqin atrofdagi sartaroshxonalarni interaktiv Leaflet xaritasida ko'rib navbat oladi, adminlar esa xodimlar jadvallari, kunlik kassa va xizmatlar narxlarini boshqaradi.",
    fullDescEn: "CutZone is an enterprise barbershop & salon management ecosystem featuring interactive Leaflet geolocations, real-time barber schedule conflict resolution, BullMQ async notification jobs, and a native Android client.",
    category: "enterprise",
    tags: ["Next.js 15", "TypeScript", "Prisma ORM", "Express", "BullMQ", "Leaflet", "Android APK"],
    status: "production",
    badge: "Enterprise Monorepo",
    stats: [
      { labelUz: "Arxitektura", labelEn: "Architecture", value: "Monorepo (4 platforma)" },
      { labelUz: "Fon vazifalari", labelEn: "Background Jobs", value: "BullMQ & Redis" },
      { labelUz: "Mobil", labelEn: "Mobile Client", value: "Android APK Native" }
    ],
    featuresUz: [
      "Dinamik vaqt slotlari (Availability Engine) — sartarosh bo'sh vaqtlarini avtomatik hisoblash",
      "Leaflet va OpenStreetMap orqali eng yaqin sartaroshxonalarni geolokatsiyada saralash",
      "BullMQ yordamida SMS/Xabar eslatmalari (1 soat oldin) va yarim tungi moliya agregatsiyasi",
      "Next.js 15 App Router va React 19 zamonaviy frontend texnologiyalari",
      "Android operatsion tizimi uchun to'liq yig'ilgan app-debug.apk mobil ilovasi"
    ],
    featuresEn: [
      "Dynamic availability engine resolving barber working shifts and overlapping appointments",
      "Interactive Leaflet & OpenStreetMap geolocation to locate nearest barbershops",
      "BullMQ asynchronous job queue handling SMS reminders and midnight financial reports",
      "Built with Next.js 15 App Router, React 19, and full TypeScript type safety",
      "Production-ready compiled Android APK application"
    ],
    techStack: ["Next.js 15", "React 19", "TypeScript", "Express", "Prisma", "BullMQ", "Leaflet", "Zod", "Tailwind CSS"],
    architecture: "Monorepo: client/ (Next.js 15), admin/ (Next.js 15), server/ (Express/Prisma), apk/ (Android)",
    localPath: "C:\\Users\\User\\OneDrive\\Desktop\\CutZone\\sartarosh-crm",
    iconName: "Scissors",
    accentColor: "#3b82f6"
  },
  {
    id: "instagram-fsd",
    title: "Instagram Fullstack Clone (FSD & PWA)",
    shortDescUz: "Feature-Sliced Design (FSD v2.1) arxitekturasi, Stories mexanikasi, DM audio/video chat va offline PWA.",
    shortDescEn: "Industry-standard Feature-Sliced Design (FSD v2.1) architecture, dynamic Stories, multimedia DMs, and PWA.",
    fullDescUz: "Instagramning to'liq veb va mobil PWA kloni. Sanoat standarti hisoblangan Feature-Sliced Design arxitekturasida yozilgan bo'lib, har bir qatlam (app, pages, widgets, features, entities, shared) qat'iy qoidalarga bo'ysunadi. Real-vaqt Stories progress bari, audio va video xabarlar qo'llab-quvvatlanadi.",
    fullDescEn: "A fullstack Instagram progressive web app built according to strict Feature-Sliced Design specifications. Features full-screen stories with 5-second auto-advancement, voice message audio player, reels stream, and offline caching.",
    category: "frontend",
    tags: ["React 18", "TypeScript", "FSD v2.1", "Vite PWA", "TanStack Query", "Tailwind CSS"],
    status: "production",
    badge: "FSD v2.1 & PWA",
    stats: [
      { labelUz: "Arxitektura", labelEn: "Architecture", value: "Feature-Sliced Design" },
      { labelUz: "Offline rejim", labelEn: "Offline Support", value: "Vite PWA Kesh" },
      { labelUz: "Avtomat sinov", labelEn: "E2E Tests", value: "Maxsus tekshiruv skriptlari" }
    ],
    featuresUz: [
      "Feature-Sliced Design: app -> pages -> widgets -> features -> entities -> shared qatlamlari",
      "Stories mexanikasi: ko'rilmagan gradient hoshiyalar, 5 soniyalik avtomatik progress taymer",
      "Direct Messages: ovozli xabarlar (audio player) va video media biriktirish",
      "Progressive Web App: tarmoq o'chganda ham avvalgi postlarni ko'rish va o'rnatish",
      "Loyiha barqarorligini tekshiruvchi E2E sinov skriptlari (instagram-e2e.mjs)"
    ],
    featuresEn: [
      "Strict Feature-Sliced Design: app -> pages -> widgets -> features -> entities -> shared",
      "Full Stories engine with gradient unviewed rings and 5-second automatic progression",
      "Direct Messages with voice notes, audio waveforms and rich media attachments",
      "Vite PWA service worker with smart caching strategies for offline usage",
      "Comprehensive automated verification scripts (instagram-e2e.mjs)"
    ],
    techStack: ["React 18", "TypeScript", "Vite", "FSD", "TanStack Query", "Vite PWA", "Tailwind CSS"],
    architecture: "FSD v2.1 Layered Architecture",
    localPath: "C:\\Users\\User\\OneDrive\\Desktop\\Instagram\\instagram-front",
    iconName: "Camera",
    accentColor: "#ec4899"
  },
  {
    id: "cs2-3d-web",
    title: "Counter-Strike 2 — 3D Web Mirage Clone",
    shortDescUz: "Three.js WebGL da yaratilgan afsonaviy de_mirage xaritasi, AI botlar, AK-47/AWP fizikasi va C4 bombasi.",
    shortDescEn: "Full 3D WebGL de_mirage map with AI combat bots, AK-47 recoil spray physics, and C4 plant/defuse.",
    fullDescUz: "CS2 o'yinining brauzer uchun yaratilgan Three.js 3D dvigateli. O'yinchi haqiqiy de_mirage xaritasida yuguradi, burchaklardan chiqib keluvchi AI botlar bilan otishadi, B tugmasi orqali qurol sotib oladi va C4 bombani zararsizlantiradi.",
    fullDescEn: "A complete browser-based 3D FPS game engine built from scratch using Three.js and WebGL. Features player physics, AI enemy patrol & combat, spray recoil, C4 bomb timers, and spatial Web Audio.",
    category: "games3d",
    tags: ["Three.js", "WebGL", "Vite", "AI Bot Engine", "Web Audio API", "FPS Physics"],
    status: "completed",
    badge: "3D Game Engine",
    stats: [
      { labelUz: "Xarita", labelEn: "Map Geometry", value: "3D de_mirage" },
      { labelUz: "Sun'iy intellekt", labelEn: "AI Combat", value: "BotManager Engine" },
      { labelUz: "Ovoz tizimi", labelEn: "Audio", value: "Fazoviy 3D Web Audio" }
    ],
    featuresUz: [
      "3D de_mirage xaritasining to'liq me'morchiligi (A, B, Mid, Palace)",
      "BotManager.js orqali dushman botlarining harakati va nishonga olishi",
      "AK-47, AWP va pichoq animatsiyalari, qurollar orqaga siltanishi (Recoil)",
      "2D radar minimap, Tab orqali K/D/A jadvali va C4 bomba o'rnatish tizimi"
    ],
    featuresEn: [
      "Complete 3D de_mirage geometry with cover boxes, palace, apartments and connectors",
      "Autonomous enemy AI navigation, line-of-sight targeting and weapon firing",
      "AK-47 spray recoil patterns, AWP sniper magnification and ViewModel arms",
      "Tactical 2D radar minimap, live scoreboard, and C4 plant/defuse game state"
    ],
    techStack: ["Three.js", "JavaScript (ESNext)", "Vite", "Web Audio API", "HTML5 Canvas"],
    architecture: "Custom Three.js Game Loop with Entity-Component separation",
    localPath: "C:\\Users\\User\\cs2-clone",
    iconName: "Crosshair",
    accentColor: "#f59e0b"
  },
  {
    id: "minecraft-3d-voxel",
    title: "Minecraft 3D Voxel Engine",
    shortDescUz: "1,700 qatorlik sof JavaScript dvigateli: protsessual relyef, 20 ta o'zbekcha bloklar, kun/tun tsikli.",
    shortDescEn: "1,700-line pure JavaScript engine: procedural terrain, 20 customized blocks, and day/night cycle.",
    fullDescUz: "Tashqi o'yin kutubxonalarisiz sof Three.js da yaratilgan voksel dvigateli. 64x64 masshtabdagi cheksiz protsessual relyef, AABB quti to'qnashuv fizikasi, 180 soniyalik quyosh-oy tsikli va 20 xil blok turlari bilan jihozlangan.",
    fullDescEn: "A full-fledged voxel sandbox engine built in 1,700 lines of original JavaScript. Features Simplex noise landscape generation, AABB collision detection, block raycasting, and day/night progression.",
    category: "games3d",
    tags: ["Three.js", "WebGL", "Voxel Engine", "Procedural Generation", "Physics", "Vanilla JS"],
    status: "completed",
    badge: "1,700 Lines Pure JS",
    stats: [
      { labelUz: "Kod hajmi", labelEn: "Codebase", value: "1,700 qator sof JS" },
      { labelUz: "Bloklar", labelEn: "Block Library", value: "20 xil o'zbekcha blok" },
      { labelUz: "Tsikl", labelEn: "Sun Cycle", value: "180s Kunduz / Tun" }
    ],
    featuresUz: [
      "1,700 qatorlik original JavaScript o'yin dvigateli (game.js)",
      "Protsessual tepaliklar, daraxtlar va yer osti ruda konlari generatsiyasi",
      "20 ta blok: O't, Tosh, Olmos, Oltin, Temir, Suv, TNT, Oyna, Kitob javoni",
      "Sichqoncha bilan blok buzish va qo'yish (Raycasting AABB fizikasi)"
    ],
    featuresEn: [
      "1,700 lines of bespoke game engine logic in pure JavaScript",
      "Procedurally generated hills, trees and underground mineral veins",
      "20 custom block materials: Grass, Stone, Diamond Ore, Gold, Water, TNT",
      "Smooth cursor raycasting for block mining and placement"
    ],
    techStack: ["Three.js", "JavaScript ES6+", "WebGL", "Canvas 2D Textures"],
    architecture: "Custom Procedural Chunk Mesh Engine",
    localPath: "C:\\Users\\User\\minecraft-clone",
    iconName: "Box",
    accentColor: "#10b981"
  },
  {
    id: "traffic-jam",
    title: "Traffic Jam — Real-Time Navigator & Dashboard",
    shortDescUz: "Next.js 16 (Canary), React 19, Mapbox GL 3D vektor xarita va shahar tirbandlik tahlili.",
    shortDescEn: "Next.js 16 (Canary), React 19, Mapbox GL 3D vector maps and urban traffic analytics.",
    fullDescUz: "Shahar transport oqimini real vaqtda kuzatuvchi va optimal yo'llarni taklif qiluvchi yuqori texnologiyali platforma. Eng so'nggi Next.js 16.3 va React 19.2 versiyalarida yig'ilgan bo'lib, Mapbox GL orqali 60 FPS silliqlikda 3D binolar va yo'llarni render qiladi.",
    fullDescEn: "An intelligent urban transit dashboard and routing engine built with cutting-edge Next.js 16.3 Canary and React 19. Displays real-time traffic congestion layers and calculates optimal travel routes.",
    category: "frontend",
    tags: ["Next.js 16 (Canary)", "React 19", "Mapbox GL 3.28", "Tailwind CSS v4", "TypeScript 5"],
    status: "active",
    badge: "Next.js 16 & React 19",
    stats: [
      { labelUz: "Xarita dvigateli", labelEn: "Map Engine", value: "Mapbox GL 3.28" },
      { labelUz: "Texnologiya", labelEn: "Tech Stack", value: "Next.js 16 Canary" },
      { labelUz: "Stillar", labelEn: "Styling", value: "Tailwind CSS v4" }
    ],
    featuresUz: [
      "60 FPS tezlikdagi Mapbox GL 3D vektor xaritalari va binolar balandligi",
      "Tirbandlik darajalari: Erkin (yashil), O'rtacha (sariq) va Qizil oqimlar",
      "Boshqaruv dashboardi: o'rtacha tezlik, tirband nuqtalar va muqobil aylanma yo'llar",
      "GPS orqali navigatsiya va A nuqtadan B nuqtagacha yo'l chizish"
    ],
    featuresEn: [
      "60 FPS Mapbox GL WebGL vector rendering with 3D buildings extrusion",
      "Dynamic traffic density layers: Free-flowing, Moderate and Heavy congestion",
      "KPI analytics dashboard: Average speed, delay forecasts, and rerouting",
      "Interactive turn-by-turn navigation route calculation"
    ],
    techStack: ["Next.js 16.3", "React 19.2", "Mapbox GL", "Tailwind CSS v4", "TypeScript 5"],
    architecture: "Next.js App Router with WebGL Vector Tiles",
    localPath: "C:\\Users\\User\\OneDrive\\Desktop\\Traffic Jam\\solution",
    iconName: "Navigation",
    accentColor: "#06b6d4"
  },
  {
    id: "telegram-downloader-bot",
    title: "Telegram Media Downloader Bot",
    shortDescUz: "Node.js, yt-dlp va Docker yordamida YouTube, Instagram, TikTok videolarini yuklovchi yuqori tezlikli bot.",
    shortDescEn: "High-performance Node.js & yt-dlp bot with Docker support for downloading media from YouTube, TikTok, IG.",
    fullDescUz: "Ijtimoiy tarmoqlardan (YouTube, Instagram, TikTok, Pinterest, Twitter) audio va videolarni maksimal sifatda yuklab beruvchi Telegram bot. WinGet orqali yangilangan yt-dlp binar faylini avtomatik topadi, server xotirasini tozalab boradi va 49MB limitni boshqaradi.",
    fullDescEn: "An automated Telegram bot that parses social video URLs and delivers high-definition media files. Features automated local yt-dlp binary resolution, temporary storage cleanup, and Docker deployment.",
    category: "backend",
    tags: ["Node.js", "Telegram Bot API", "yt-dlp", "Docker", "Asynchronous Streaming"],
    status: "completed",
    badge: "Automation & Bot",
    stats: [
      { labelUz: "Tarmoqlar", labelEn: "Platforms", value: "YouTube, TikTok, IG, X" },
      { labelUz: "Deploy", labelEn: "Deployment", value: "Docker Container" },
      { labelUz: "Binar", labelEn: "Binary Engine", value: "yt-dlp Auto-resolver" }
    ],
    featuresUz: [
      "Windows tizimida yt-dlp.exe binar faylini avtomatik aniqlovchi resolver",
      "Har bir jo'natilgan fayldan so'ng disk keshini tozalash mexanizmi",
      "Telegram 49 MB fayl hajmi chegarasini avtomatik monitoring qilish",
      "Docker orqali birgina buyruq bilan istalgan serverga o'rnatish imkoniyati"
    ],
    featuresEn: [
      "Smart Windows & Linux yt-dlp executable path detection algorithm",
      "Zero disk memory leak: immediate cleanup after successful transmission",
      "Telegram 49MB file size limit monitoring and fallback handlers",
      "Full Docker containerization for one-command cloud deployment"
    ],
    techStack: ["Node.js", "node-telegram-bot-api", "yt-dlp", "Docker", "Child Process"],
    architecture: "Event-driven Telegram Polling & Stream Downloader",
    localPath: "C:\\Users\\User\\OneDrive\\Desktop\\Video&Images Downloader BOT",
    iconName: "Bot",
    accentColor: "#8b5cf6"
  },
  {
    id: "rentuz-platform",
    title: "RentUz — Rental Marketplace",
    shortDescUz: "O'zbekiston bo'ylab avtomobil va ko'chmas mulk ijara portali, Sharp orqali siqish va avtomatlashtirish.",
    shortDescEn: "Vehicle and property rental platform across Uzbekistan with Sharp image optimization and Telegram bot.",
    fullDescUz: "Next.js App Routerda qurilgan ijara platformasi. Maxsus Sharp skripti orqali rasmlar hajmi 80% gacha siqilib veb-sahifa tezkor yuklanadi. Yangi e'lon qo'shilganda Telegram kanaliga avtomatik post yuboruvchi bot integratsiyasi mavjud.",
    fullDescEn: "A high-speed property and automotive rental aggregator. Integrates an automated Sharp image optimization pipeline reducing asset size by 80%, alongside a Telegram posting runner.",
    category: "frontend",
    tags: ["Next.js", "React", "Sharp", "Tailwind CSS", "Telegram Integration"],
    status: "active",
    badge: "Marketplace",
    stats: [
      { labelUz: "Katalog", labelEn: "Catalog", value: "Avtomobillar & Uylar" },
      { labelUz: "Optimizatsiya", labelEn: "Optimization", value: "Sharp (80% siqish)" },
      { labelUz: "Integratsiya", labelEn: "Bot Runner", value: "Telegram Kanal" }
    ],
    featuresUz: [
      "Sharp skripti orqali rasmlarni sifatini yo'qotmasdan WebP/AVIF formatiga siqish",
      "Avtomobillar va ko'chmas mulk uchun ko'p parametrli filtrlash tizimi",
      "bot-runner.mjs orqali yangi e'lonlarni Telegram kanaliga avtomatik yuborish"
    ],
    featuresEn: [
      "Sharp automated image pipeline compressing uploads by 80% to modern WebP formats",
      "Multi-attribute filter engine (pricing, location, vehicle model, duration)",
      "Automated bot runner announcing listings directly into Telegram broadcast channels"
    ],
    techStack: ["Next.js", "React", "Sharp", "Tailwind CSS", "Node.js"],
    architecture: "Next.js App Router with Image Optimization Pipeline",
    localPath: "C:\\Users\\User\\OneDrive\\Desktop\\Next.js\\RentUz\\rent",
    iconName: "Home",
    accentColor: "#f97316"
  },
  {
    id: "petuy-adoption",
    title: "PetUy — Uy Hayvonlari E'lonlar Taxtasi",
    shortDescUz: "Qog'oz e'lonlar taxtasi (Flyer Board) konsepsiyasidagi bepul hayvonlarni asrab olish platformasi.",
    shortDescEn: "Paper bulletin flyer board concept for community animal adoption and pet rescue.",
    fullDescUz: "Uy hayvonlarini yangi mehrli oilalarga topshirishga mo'ljallangan platforma. Foydalanuvchini og'ir login/parol bilan charchatmaslik uchun LocalStorage x-owner-token mexanizmi orqali himoyalangan.",
    fullDescEn: "A community pet adoption platform designed around a retro flyer-board aesthetic. Features Multer photo uploads and a lightweight client token authentication model.",
    category: "frontend",
    tags: ["Express", "Node.js", "Multer", "Vanilla JS", "Flyer Board UI"],
    status: "completed",
    badge: "Flyer Board UI",
    stats: [
      { labelUz: "Konsepsiya", labelEn: "Concept", value: "Devoriy E'lonlar Taxtasi" },
      { labelUz: "Fayl yuklash", labelEn: "Uploads", value: "Multer 5MB" },
      { labelUz: "Himoya", labelEn: "Security", value: "x-owner-token" }
    ],
    featuresUz: [
      "Noodatiy vizual uslub: devorga yopishtirilgan rangli qog'oz e'lonlar ko'rinishi",
      "Multer orqali rasmlarni yuklash va data/pets.json da xavfsiz saqlash",
      "Maxfiy egaliq tokeni (x-owner-token) orqali e'lonni o'chirish yoki topshirildi deb belgilash"
    ],
    featuresEn: [
      "Unique cork-board paper flyer UI aesthetic for pet adoption cards",
      "Multer file processing with JSON-backed persistent data storage",
      "Anonymous ownership tokens allowing creators to manage their listing without passwords"
    ],
    techStack: ["Express", "Node.js", "Multer", "Vanilla JS", "CSS3"],
    architecture: "Lightweight Express MVC with File Database",
    localPath: "C:\\Users\\User\\OneDrive\\Desktop\\petuy\\petuy",
    iconName: "HeartHandshake",
    accentColor: "#14b8a6"
  },
  {
    id: "advanced-react-suite",
    title: "Advanced React Suite (Redux Toolkit & 8x i18n)",
    shortDescUz: "Redux Toolkit holat boshqaruvi, Firebase Google/GitHub OAuth va 8 ta tildagi xalqaro til tizimi.",
    shortDescEn: "Redux Toolkit state management, Firebase Google/GitHub OAuth, and 8-language localization.",
    fullDescUz: "Murakkab React arxitekturalarini amalda sinovdan o'tkazish uchun yaratilgan loyihalar jamlanmasi. Unda Redux Toolkit yordamida valyuta konvertori, Firebase OAuth (Google & GitHub) autentifikatsiyasi va 8 ta jahon tiliga o'giruvchi i18n moduli mavjud.",
    fullDescEn: "A specialized project demonstrating high-level React engineering: Redux Toolkit state slices, Firebase multi-provider OAuth (Google + GitHub), and comprehensive 8-language i18n.",
    category: "frontend",
    tags: ["React", "Redux Toolkit", "Firebase Auth", "i18n (8 languages)", "Framer Motion"],
    status: "completed",
    badge: "Redux & OAuth",
    stats: [
      { labelUz: "Tillar", labelEn: "Languages", value: "8 ta jahon tili" },
      { labelUz: "Holat", labelEn: "State", value: "Redux Toolkit Slices" },
      { labelUz: "Auth", labelEn: "Providers", value: "Google + GitHub OAuth" }
    ],
    featuresUz: [
      "Ultimate Currency Pro: Redux Toolkit orqali valyutalar hisob-kitobi va keshlash",
      "Firebase Google va GitHub provayderlari orqali himoyalangan kirish tizimi",
      "8 ta xalqaro tilda interfeysni bir zumda almashtiruvchi lug'at arxitekturasi"
    ],
    featuresEn: [
      "Real-time currency converter driven by Redux Toolkit global slices and caching",
      "Dual Firebase OAuth integration for instant Google and GitHub user authentication",
      "Seamless client-side translation engine across 8 world languages"
    ],
    techStack: ["React", "Redux Toolkit", "Firebase", "i18n", "Tailwind CSS"],
    architecture: "State Slice Architecture with Firebase Auth Provider",
    localPath: "C:\\Users\\User\\OneDrive\\Desktop\\React after Instagram",
    iconName: "Layers",
    accentColor: "#6366f1"
  },
  {
    id: "telegram-web-client",
    title: "Telegram Web Client (Animated Monkey Login)",
    shortDescUz: "Telegram Web ning autentifikatsiyasi: ko'zini yumuvchi maymun animatsiyasi, QR kod va SMS 2FA.",
    shortDescEn: "Telegram Web client replication featuring the iconic animated monkey login, QR code, and SMS 2FA.",
    fullDescUz: "Telegram rasmiy veb mijozining mukammal ko'chirmasi. Parol kiritilayotganda ko'zlarini qo'llari bilan yopib oluvchi afsonaviy interaktiv maymun animatsiyasi, QR kod orqali kirish va SMS tasdiqlash bosqichlari mavjud.",
    fullDescEn: "Faithful recreation of Telegram Web's authentication flow including the delightful animated monkey that hides its eyes during password entry, QR scanner login, and multi-step SMS verification.",
    category: "frontend",
    tags: ["React", "TypeScript", "Context API", "SVG Animation", "Multi-Step Auth"],
    status: "completed",
    badge: "Interactive UI",
    stats: [
      { labelUz: "Animatsiya", labelEn: "Animation", value: "Interaktiv Maymun" },
      { labelUz: "Auth turlari", labelEn: "Auth Methods", value: "QR, Telefon, SMS 2FA" },
      { labelUz: "Tiplar", labelEn: "Type Safety", value: "100% TypeScript" }
    ],
    featuresUz: [
      "Telegramning mashhur animatsiyali maymun qahramoni: parol yozilganda ko'zlarini berkitadi",
      "Ko'p bosqichli autentifikatsiya (Telefon raqam -> SMS kod -> Ikki bosqichli parol)",
      "To'liq responsiv zamonaviy Telegram Dark UI dizayni"
    ],
    featuresEn: [
      "Iconic Telegram interactive monkey mascot reacting dynamically to focus and password fields",
      "Multi-step verification workflow with phone number, SMS OTP, and 2FA password prompt",
      "Pixel-perfect Telegram Web Dark theme styling"
    ],
    techStack: ["React", "TypeScript", "CSS3 Animations", "Context API"],
    architecture: "Multi-Step State Machine with SVG Animations",
    localPath: "C:\\Users\\User\\OneDrive\\Desktop\\Telegram-gg\\Telegram",
    iconName: "Send",
    accentColor: "#0284c7"
  }
];

export const BACKEND_STAGES: BackendStage[] = [
  {
    stageNumber: 1,
    port: 3000,
    titleUz: "1-Bosqich: Native Node.js HTTP Server",
    titleEn: "Stage 1: Native Node.js HTTP Server",
    subtitleUz: "Hech qanday freymvorklarsiz sof Node.js poydevori",
    subtitleEn: "Pure Node.js foundation without any third-party frameworks",
    tech: "Node.js core http, Stream chunks, URL parser",
    featuresUz: [
      "http.createServer orqali past darajali server ishga tushirish",
      "req.on('data') va req.on('end') stream oqimlari orqali ma'lumotlarni yig'ish",
      "URL segmentlarini qo'lda ajratish (/api/users, /api/users/:id)",
      "HTTP 200, 201, 400, 404 status kodlarini qo'lda boshqarish",
      "Postman test to'plamlari orqali to'liq sinovdan o'tkazish"
    ],
    featuresEn: [
      "Low-level server instantiation via native http.createServer",
      "Direct binary stream chunk accumulation using req.on('data') & 'end'",
      "Manual URL path parsing and routing logic",
      "Granular HTTP status code management (200, 201, 400, 404)",
      "Verified against strict Postman integration suites"
    ],
    authTypeUz: "Autentifikatsiya yo'q (Ochiq API)",
    authTypeEn: "No Auth (Public Prototype)",
    securityUz: "Boshlang'ich kiritish tekshiruvlari",
    securityEn: "Basic input validation",
    folder: "Backend/1-lesson",
    status: "Completed"
  },
  {
    stageNumber: 2,
    port: 7000,
    titleUz: "2-Bosqich: Express.js Core & Dynamic CRUD",
    titleEn: "Stage 2: Express.js Core & Dynamic CRUD",
    subtitleUz: "Express v5 ga o'tish va avtomatik routing",
    subtitleEn: "Transition to Express v5 and automatic routing",
    tech: "Express 5.2.1, express.json() middleware, Dynamic routes",
    featuresUz: [
      "Express 5.2.1 freymvorkiga o'tish va kod hajmini 60% ga qisqartirish",
      "express.json() orqali kiruvchi JSON ma'lumotlarni avtomatik qabul qilish",
      "Muhammad Ali boshchiligidagi 10 ta foydalanuvchidan iborat baza",
      "Yosh bo'yicha filtrlash (GET /data/:age) va email bo'yicha yangilash (PUT /data/:email)",
      "POST, PUT, DELETE to'liq CRUD amallari"
    ],
    featuresEn: [
      "Upgraded to modern Express 5.2.1, reducing boilerplate by 60%",
      "Automatic JSON payload parsing via express.json() middleware",
      "10-record mock user database headed by Muhammad Ali",
      "Dynamic filtering by age (GET /data/:age) and update by email (PUT /data/:email)",
      "Complete CRUD operation implementation"
    ],
    authTypeUz: "Statik kirish",
    authTypeEn: "Open API with parameter guards",
    securityUz: "Email va yosh tiplarini tekshirish",
    securityEn: "Email formatting and type checks",
    folder: "Backend/Express",
    status: "Completed"
  },
  {
    stageNumber: 3,
    port: 4949,
    titleUz: "3-Bosqich: Token Middleware & Route Protection",
    titleEn: "Stage 3: Token Middleware & Route Protection",
    subtitleUz: "Oraliq ishlovchi (Middleware) va Bearer Token himoyasi",
    subtitleEn: "Middleware guards and Bearer Token protection",
    tech: "Express 5.2.1, Custom Middleware, Bearer Header",
    featuresUz: [
      "Dasturiy ta'minotda oraliq ishlovchilar (Middleware) arxitekturasini qurish",
      "Authorization: Bearer <token> sarlavhasini tahlil qilish va tekshirish",
      "Token yo'q yoki noto'g'ri bo'lsa darhol 403 Forbidden qaytarish",
      "Himoyalangan resurslar (Protected endpoints) xavfsizligini ta'minlash",
      "Keyingi biznes logika uchun so'rovlarni filtrlash"
    ],
    featuresEn: [
      "Built custom interceptor middleware pipeline",
      "HTTP Authorization: Bearer <token> header extraction and verification",
      "Immediate rejection of unauthorized requests with 403 Forbidden",
      "Guaranteed protection of sensitive data routes",
      "Clean separation of authentication concerns from business logic"
    ],
    authTypeUz: "Bearer Token Guard",
    authTypeEn: "Bearer Token Guard",
    securityUz: "403 Forbidden himoya tizimi",
    securityEn: "403 Forbidden protection system",
    folder: "Backend/Tokens",
    status: "Completed"
  },
  {
    stageNumber: 4,
    port: 9990,
    titleUz: "4-Bosqich: Enterprise JWT + Swagger UI (OpenAPI)",
    titleEn: "Stage 4: Enterprise JWT + Swagger UI (OpenAPI)",
    subtitleUz: "Sanoat standarti: Bcrypt, Token Rotation va Interaktiv Hujjat",
    subtitleEn: "Industry standard: Bcrypt, Token Rotation and Interactive Docs",
    tech: "jsonwebtoken, bcryptjs, swagger-ui-express, swagger-jsdoc, dotenv",
    featuresUz: [
      "Bcrypt orqali parollarni 10 ta salt bosqichida bir tomonlama heshlash",
      "Dinamik JWT: Qisqa muddatli Access Token (5 min) va Refresh Token (7 kun)",
      "Token Rotation xavfsizligi: Refresh token ishlatilgach eskisi o'chiriladi",
      "/me shaxsiy profil marshruti va foydalanuvchi ma'lumotlarini himoyalash",
      "/api-docs manzilida to'liq interaktiv Swagger UI (OpenAPI 3.0.3) hujjatlashtirish",
      ".env orqali barcha maxfiy kalitlarni tizimdan ajratish"
    ],
    featuresEn: [
      "One-way salted password hashing via Bcrypt (10 salt rounds)",
      "Dual JWT strategy: Short-lived Access Token (5m) & Long-lived Refresh Token (7d)",
      "Token Rotation security: Revoking old refresh tokens via active set whitelist",
      "Dedicated /me authenticated profile route returning authenticated user context",
      "Complete interactive OpenAPI 3.0.3 documentation hosted at /api-docs with Swagger UI",
      "Environment isolation for secret keys via dotenv"
    ],
    authTypeUz: "JWT Access (5m) + Refresh (7d) Rotation",
    authTypeEn: "JWT Dual Tokens (Access 5m + Refresh 7d) with Rotation",
    securityUz: "Bcrypt (10 salt), Token Rotation, OpenAPI 3.0.3",
    securityEn: "Bcrypt (10 salt rounds), Whitelist Token Rotation, OpenAPI 3.0.3",
    folder: "Backend/me+swagger",
    status: "Completed"
  }
];

export const SKILLS_LIST: SkillItem[] = [
  // Frontend
  { name: "React 19 & 18", level: 98, category: "frontend", badge: "Expert" },
  { name: "Next.js 16 & 15 (App Router)", level: 95, category: "frontend", badge: "Advanced" },
  { name: "TypeScript", level: 94, category: "frontend", badge: "Advanced" },
  { name: "Feature-Sliced Design (FSD)", level: 92, category: "frontend", badge: "Architecture" },
  { name: "Tailwind CSS v4", level: 96, category: "frontend" },
  { name: "Redux Toolkit & TanStack Query", level: 90, category: "frontend" },
  { name: "Vite & PWA Offline", level: 92, category: "frontend" },

  // 3D & Games
  { name: "Three.js (WebGL)", level: 92, category: "gamedev3d", badge: "Game Dev" },
  { name: "3D Voxel Engine Math", level: 88, category: "gamedev3d" },
  { name: "Procedural Terrain (Simplex/Perlin)", level: 86, category: "gamedev3d" },
  { name: "AABB Collision Physics", level: 90, category: "gamedev3d" },
  { name: "Web Audio API Spatial Sound", level: 85, category: "gamedev3d" },
  { name: "Bot AI Navigation & Recoil", level: 88, category: "gamedev3d" },

  // Backend
  { name: "Node.js (Core & Streams)", level: 92, category: "backend" },
  { name: "Express.js v5", level: 95, category: "backend" },
  { name: "JWT Auth & Token Rotation", level: 94, category: "backend", badge: "Security" },
  { name: "Prisma ORM", level: 88, category: "backend" },
  { name: "BullMQ & Redis Queues", level: 84, category: "backend" },
  { name: "Swagger / OpenAPI 3.0.3", level: 90, category: "backend" },
  { name: "Telegram Bot API & yt-dlp", level: 92, category: "backend" },
  { name: "Docker Containerization", level: 82, category: "backend" },

  // Tools
  { name: "Git & GitHub", level: 92, category: "tools" },
  { name: "Postman API Testing", level: 90, category: "tools" },
  { name: "Mapbox GL & Leaflet", level: 91, category: "tools" },
  { name: "Obsidian Second Brain", level: 96, category: "tools", badge: "PARA Method" },

  // Languages
  { name: "O'zbek tili (Native)", level: 100, category: "languages" },
  { name: "Ingliz tili (IELTS 7.5+ Target)", level: 88, category: "languages", badge: "Inter Nation" },
  { name: "Rus tili (Fluent)", level: 85, category: "languages" }
];

export const EDUCATION_DATA = [
  {
    institutionUz: "256-sonli Umumta'lim Maktabi",
    institutionEn: "Public Comprehensive School #256",
    roleUz: "8-\"A\" sinf o'quvchisi (Mirzo Ulug'bek tumani, Toshkent)",
    roleEn: "Grade 8-\"A\" Student (Mirzo Ulugbek District, Tashkent)",
    period: "2020 – Hozirgacha",
    badgeUz: "2020 – Hozirgacha (A'lochi)",
    badgeEn: "2020 – Present (Honor Student)",
    descUz: "Maktabda matematika va informatika fanlariga chuqurlashtirilgan qiziqish bilan tahsil oladi. Barcha choraklarda yuqori akademik ko'rsatkichlar sohibi.",
    descEn: "Grade 8-\"A\" student excelling in Mathematics, Computer Science, and Foreign Languages with strong academic dedication."
  },
  {
    institutionUz: "Mars IT Academy",
    institutionEn: "Mars IT Academy",
    roleUz: "Frontend & Backend Professional Dasturlash Ta'limi",
    roleEn: "Frontend & Backend Professional Software Engineering Track",
    period: "2024 – 2026",
    badgeUz: "IT Imtihon: 20/20 | Hackathon 2-o'rin",
    badgeEn: "IT Exam: 20/20 | Hackathon 2nd Place",
    descUz: "7 ta to'liq frontend va backend modullarini muvaffaqiyatli tamomlagan. IT kursidagi maxsus yakuniy imtihonda 20/20 (100% maksimal) ball to'plagan hamda Mars Hackathon 2026 da 'TezCode By Behruz' jamoasi tarkibida 92.1 ball bilan 2-o'rinni (vitse-chempionlikni) qo'lga kiritgan.",
    descEn: "Completed all 7 intensive software modules across modern Frontend and Backend engineering. Scored a flawless 20/20 (100% max score) in the specialized IT course examination, and won 2nd place (Vice-Champion) at the Mars Hackathon 2026 with a 92.1 score."
  },
  {
    institutionUz: "Inter Nation English School (Oybek)",
    institutionEn: "Inter Nation English School (Oybek Branch)",
    roleUz: "Akademik Ingliz Tili & IELTS Intensiv kursi",
    roleEn: "Academic English & IELTS Intensive Preparation",
    period: "2025 – Hozirgacha",
    badgeUz: "IELTS Band 7.5+ Maqsadi",
    badgeEn: "IELTS Band 7.5+ Target",
    descUz: "4 ta asosiy ko'nikma (Listening, Reading, Writing, Speaking) bo'yicha intensiv shug'ullanadi. Xalqaro dasturlash hamjamiyatlarida erkin fikr almashish va global ta'lim uchun tayyorgarlik.",
    descEn: "Mastering the 4 IELTS skills: Listening (Cambridge 14-19), Academic Reading, Data Writing & Essays, and fluent Tech Speaking targeting Band 7.5+."
  }
];

export const SCHOOL_SCHEDULE = [
  { dayUz: "Dushanba", dayEn: "Monday", school: "08:00 – 13:00", extraUz: "💻 IT / Dasturlash (14:00 – 15:00)", extraEn: "💻 IT / Coding (14:00 – 15:00)" },
  { dayUz: "Seshanba", dayEn: "Tuesday", school: "08:00 – 12:10", extraUz: "📐 Matematika (13:00 – 14:00)", extraEn: "📐 Mathematics (13:00 – 14:00)" },
  { dayUz: "Chorshanba", dayEn: "Wednesday", school: "08:00 – 12:10", extraUz: "💻 IT / Dasturlash (14:00 – 15:00)", extraEn: "💻 IT / Coding (14:00 – 15:00)" },
  { dayUz: "Payshanba", dayEn: "Thursday", school: "08:00 – 13:00", extraUz: "📐 Matematika (13:00 – 14:00)", extraEn: "📐 Mathematics (13:00 – 14:00)" },
  { dayUz: "Juma", dayEn: "Friday", school: "08:00 – 13:00", extraUz: "💻 IT / Dasturlash (14:00 – 15:00)", extraEn: "💻 IT / Coding (14:00 – 15:00)" },
  { dayUz: "Shanba", dayEn: "Saturday", school: "08:00 – 13:00", extraUz: "📐 Matematika (13:00 – 14:00)", extraEn: "📐 Mathematics (13:00 – 14:00)" },
  { dayUz: "Yakshanba", dayEn: "Sunday", school: "Dam olish kuni 🎮", extraUz: "♟️ Shaxmat & CS2 Mashg'ulotlari", extraEn: "♟️ Chess & CS2 Practice" },
];

export const GAMING_CHESS_DATA = {
  cs2: {
    steamNick: "m0NESY",
    roleUz: "Sniper / Rifler (Tezkor reaksiya va taktik pozitsiyalash)",
    roleEn: "Sniper / Rifler (Lightning flick reactions and crosshair placement)",
    headset: "Havit H2002d (53mm fazoviy drayverlar, footsteps aniqlash)",
    mouse: "VXE R1 SE PLUS (Ultra-yengil ergonomik optik sensor)",
    favoriteMaps: ["de_mirage", "de_inferno", "de_dust2"],
    tacticsUz: [
      "Har kuni matchmaking oldidan 15 daqiqa Aim Botz va Deathmatchda qizdirish",
      "Crosshair Placement — doimo bosh balandligida nishon saqlash",
      "Smoke, Flashbang va Molotov taktikalari bilan jamoadoshlarga yordam berish"
    ],
    tacticsEn: [
      "15-minute daily pre-match warmup on Aim Botz and Deathmatch",
      "Headshot-level crosshair placement around corners",
      "Strategic utility coordination with teammates"
    ]
  },
  chess: {
    platform: "Chess.com",
    favoriteOpening: "London System (Oqlar bilan London Tizimi)",
    targetElo: "1000 Elo",
    formats: "Rapid (10 min) & Blitz (3 min)",
    moves: ["1. d4", "2. Bf4", "3. e3", "4. c3", "5. Nf3", "6. Bd3", "7. Nbd2"],
    strategyUz: "London tizimi oqlar uchun mustahkam poydevor, xavfsiz shoh va markazni erta egallash imkonini beradi. Har qanday qoralar javobiga qarshi barqaror.",
    strategyEn: "The London System creates an unshakeable central pyramid, safe kingside castling, and rapid minor piece harmony against any black defense."
  }
};
