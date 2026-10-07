/* ==========================================================================
   KYARAEZ — Portfolio Script
   Clean, editable configuration at the top.
   ========================================================================== */

/* --------------------------------------------------------------------------
   CONFIG — EDIT THESE VALUES EASILY
   -------------------------------------------------------------------------- */

const CONFIG = {
  // Contact links
  email: "zkyaa4@gmail.com",
  instagram: "https://instagram.com/zky.a4",
  github: "#", // ← replace with your GitHub URL when ready, e.g. "https://github.com/username"

  // Skills / What I Do
  skills: [
    {
      id: "01",
      title: { en: "WEB DEVELOPMENT", id: "PENGEMBANGAN WEB" },
      desc: {
        en: "Building responsive, thoughtful websites and digital experiences.",
        id: "Membangun website responsif dan pengalaman digital yang dipikirkan dengan matang."
      }
    },
    {
      id: "02",
      title: { en: "UI / WEB DESIGN", id: "UI / DESAIN WEB" },
      desc: {
        en: "Interfaces that balance clarity, aesthetics, and usability.",
        id: "Antarmuka yang menyeimbangkan kejelasan, estetika, dan kegunaan."
      }
    },
    {
      id: "03",
      title: { en: "GRAPHIC DESIGN", id: "DESAIN GRAFIS" },
      desc: {
        en: "Visual systems, identity, and composition-driven work.",
        id: "Sistem visual, identitas, dan karya berbasis komposisi."
      }
    },
    {
      id: "04",
      title: { en: "CONTENT & SOCIAL MEDIA", id: "KONTEN & MEDIA SOSIAL" },
      desc: {
        en: "Storytelling systems for platforms and audiences.",
        id: "Sistem storytelling untuk platform dan audiens."
      }
    },
    {
      id: "05",
      title: { en: "CREATIVE WRITING", id: "PENULISAN KREATIF" },
      desc: {
        en: "Words that carry tone, clarity, and personality.",
        id: "Kata-kata yang membawa nada, kejelasan, dan kepribadian."
      }
    },
    {
      id: "06",
      title: { en: "RESEARCH / SCIENCE", id: "RISET / SAINS" },
      desc: {
        en: "Inquiry, analysis, and translating findings into form.",
        id: "Penyelidikan, analisis, dan menerjemahkan temuan ke dalam bentuk."
      }
    },
    {
      id: "07",
      title: { en: "PRESENTATION DESIGN", id: "DESAIN PRESENTASI" },
      desc: {
        en: "Structured visual narratives for talks and decks.",
        id: "Narasi visual terstruktur untuk presentasi dan deck."
      }
    },
    {
      id: "08",
      title: { en: "AI-ASSISTED CREATIVE WORK", id: "KARYA KREATIF BERBANTUAN AI" },
      desc: {
        en: "Directing AI tools with intention and human judgment.",
        id: "Mengarahkan alat AI dengan niat dan penilaian manusia."
      }
    }
  ],

  // Projects — easy to edit
  // image: leave empty "" to use gradient placeholder, or put path like "assets/project-01.jpg"
  projects: [
    {
      id: "01",
      title: "OUR JOURNAL",
      category: "WEB · UI/UX · CREATIVE TECH",
      filters: ["web", "design", "creative"],
      year: "2026",
      description: {
        en: "A sophisticated digital journal designed as a quiet space for Muslimah to read, remember, and reflect.",
        id: "Jurnal digital yang dirancang sebagai ruang tenang bagi Muslimah untuk membaca, mengingat, dan merefleksikan."
      },
      tools: ["Figma", "HTML/CSS", "JS"],
      image: "",
      url: "#",
      placeholderClass: "ph-1"
    },
    {
      id: "02",
      title: "Almujadin Digital",
      category: "WEB · INTERACTIVE DESIGN",
      filters: ["web", "creative"],
      year: "2026",
      description: {
        en: "A digital mosque display experience combining prayer information, Islamic content, time, and interactive visual elements.",
        id: "Pengalaman tampilan digital masjid yang menggabungkan informasi sholat, konten Islami, waktu, dan elemen visual interaktif."
      },
      tools: ["UI Design", "Interactive"],
      image: "",
      url: "#",
      placeholderClass: "ph-2"
    },
    {
      id: "03",
      title: "LUMORA",
      category: "DESIGN · BRANDING",
      filters: ["design"],
      year: "2025",
      description: {
        en: "A creative identity project focused on visual language, typography, and brand direction.",
        id: "Proyek identitas kreatif yang berfokus pada bahasa visual, tipografi, dan arah merek."
      },
      tools: ["Branding", "Typography"],
      image: "",
      url: "#",
      placeholderClass: "ph-3"
    },
    {
      id: "04",
      title: "VERDE",
      category: "EDITORIAL · VISUAL DESIGN",
      filters: ["design", "creative"],
      year: "2025",
      description: {
        en: "An editorial project exploring composition, typography, imagery, and visual storytelling.",
        id: "Proyek editorial yang mengeksplorasi komposisi, tipografi, citra, dan storytelling visual."
      },
      tools: ["Editorial", "Layout"],
      image: "",
      url: "#",
      placeholderClass: "ph-4"
    },
    {
      id: "05",
      title: "NOVA NOTES",
      category: "UI/UX · DIGITAL PRODUCT",
      filters: ["web", "design"],
      year: "2025",
      description: {
        en: "A conceptual digital product exploring intuitive interfaces and thoughtful user experience.",
        id: "Produk digital konseptual yang mengeksplorasi antarmuka intuitif dan pengalaman pengguna yang dipikirkan."
      },
      tools: ["UI/UX", "Product"],
      image: "",
      url: "#",
      placeholderClass: "ph-5"
    },
    {
      id: "06",
      title: "AERIS",
      category: "CREATIVE · ART DIRECTION",
      filters: ["creative", "design"],
      year: "2025",
      description: {
        en: "A visual exploration combining art direction, typography, imagery, and experimental composition.",
        id: "Eksplorasi visual yang menggabungkan art direction, tipografi, citra, dan komposisi eksperimental."
      },
      tools: ["Art Direction", "Visual"],
      image: "",
      url: "#",
      placeholderClass: "ph-6"
    },
    {
      id: "07",
      title: "THE UNSEEN",
      category: "STORYTELLING · PHOTOGRAPHY",
      filters: ["creative"],
      year: "2024",
      description: {
        en: "An experimental visual storytelling project focused on atmosphere, perspective, and narrative.",
        id: "Proyek storytelling visual eksperimental yang berfokus pada atmosfer, perspektif, dan narasi."
      },
      tools: ["Photography", "Narrative"],
      image: "",
      url: "#",
      placeholderClass: "ph-7"
    },
    {
      id: "08",
      title: "STUDIO 04",
      category: "CONTENT · SOCIAL MEDIA",
      filters: ["content", "creative"],
      year: "2025",
      description: {
        en: "A creative content system exploring social media storytelling, visual consistency, and audience engagement.",
        id: "Sistem konten kreatif yang mengeksplorasi storytelling media sosial, konsistensi visual, dan engagement audiens."
      },
      tools: ["Content", "Social"],
      image: "",
      url: "#",
      placeholderClass: "ph-8"
    },
    {
      id: "09",
      title: "ATLAS",
      category: "RESEARCH · DATA · VISUALIZATION",
      filters: ["research"],
      year: "2025",
      description: {
        en: "A research-based visual project translating information and findings into accessible visual communication.",
        id: "Proyek visual berbasis riset yang menerjemahkan informasi dan temuan menjadi komunikasi visual yang mudah diakses."
      },
      tools: ["Research", "Data Viz"],
      image: "",
      url: "#",
      placeholderClass: "ph-9"
    },
    {
      id: "10",
      title: "AFTER CLASS",
      category: "EDITORIAL · WRITING",
      filters: ["content", "creative"],
      year: "2024",
      description: {
        en: "A personal editorial project combining writing, storytelling, visual direction, and cultural observations.",
        id: "Proyek editorial pribadi yang menggabungkan penulisan, storytelling, arah visual, dan observasi budaya."
      },
      tools: ["Writing", "Editorial"],
      image: "",
      url: "#",
      placeholderClass: "ph-10"
    }
  ],

  // Timeline
  timeline: [
    {
      year: "2024",
      text: {
        en: "Exploring design and creative projects.",
        id: "Mengeksplorasi desain dan proyek kreatif."
      }
    },
    {
      year: "2025",
      text: {
        en: "Expanding into digital products, research, and visual communication.",
        id: "Memperluas ke produk digital, riset, dan komunikasi visual."
      }
    },
    {
      year: "2026",
      text: {
        en: "Building KYARAEZ and experimenting across multiple creative disciplines.",
        id: "Membangun KYARAEZ dan bereksperimen di berbagai disiplin kreatif."
      }
    }
  ]
};

/* --------------------------------------------------------------------------
   TRANSLATIONS
   -------------------------------------------------------------------------- */
const I18N = {
  en: {
    "nav.logo": "KYARAEZ",
    "nav.works": "WORKS",
    "nav.about": "ABOUT",
    "nav.lab": "LAB",
    "nav.journal": "JOURNAL",
    "nav.contact": "CONTACT",
    "hero.label": "PERSONAL CREATIVE IDENTITY",
    "hero.name": "Rezkya Putri Novianti",
    "hero.statement": "A multidisciplinary creative space where design, technology, ideas, and research meet.",
    "hero.cta1": "EXPLORE WORKS ↗",
    "hero.cta2": "ABOUT KYARAEZ",
    "hero.scroll": "SCROLL TO EXPLORE",
    "about.label": "01 — IDENTITY",
    "about.title": "BEHIND KYARAEZ",
    "about.lead": "Hi, I'm Rezkya Putri Novianti, the person behind KYARAEZ.",
    "about.text1": "KYARAEZ is a personal creative identity — a space where design, technology, content, research, writing, and experimentation live side by side.",
    "about.text2": "I build, design, write, and explore. Not to fit into one box, but to keep moving between them with intention and curiosity.",
    "about.philosophy": "“Create with clarity. Experiment without fear. Stay curious.”",
    "about.based": "BASED IN",
    "about.focus": "FOCUS",
    "about.currently": "CURRENTLY",
    "what.label": "02 — CAPABILITIES",
    "what.title": "WHAT I DO",
    "works.label": "03 — PORTFOLIO",
    "works.title": "SELECTED WORKS",
    "works.sub": "A collection of things I've built, designed, explored, and experimented with.",
    "lab.label": "04 — EXPERIMENTS",
    "lab.title": "CREATIVE LAB",
    "lab.sub": "Experiments, ideas, visual studies, and things that don't fit inside a category.",
    "lab.exp1.title": "Typography Studies",
    "lab.exp1.desc": "Exploring weight, scale, and editorial tension through type alone.",
    "lab.exp2.title": "AI Visual Experiments",
    "lab.exp2.desc": "Prompting, refining, and directing visual output with intention.",
    "lab.exp3.title": "Color Systems",
    "lab.exp3.desc": "Building restricted palettes that still feel alive and unexpected.",
    "lab.exp4.title": "Interaction Play",
    "lab.exp4.desc": "Micro-interactions and cursor behaviors that feel considered.",
    "lab.exp5.title": "Prompt Craft",
    "lab.exp5.desc": "Writing better instructions for machines and for humans.",
    "journal.label": "05 — NOTES",
    "journal.title": "JOURNAL",
    "journal.cat1": "THOUGHTS",
    "journal.cat2": "DESIGN",
    "journal.cat3": "PROCESS",
    "journal.entry1.title": "Things I'm learning about creative technology.",
    "journal.entry1.excerpt": "Tools change. The way we think about making things should stay intentional.",
    "journal.entry2.title": "Why good design is more than aesthetics.",
    "journal.entry2.excerpt": "Clarity, hierarchy, and empathy matter more than trends.",
    "journal.entry3.title": "Building things before knowing exactly where they'll go.",
    "journal.entry3.excerpt": "Starting is often the hardest and most important part.",
    "journal.read": "READ →",
    "journey.label": "06 — PATH",
    "journey.title": "THE JOURNEY",
    "contact.title": "LET'S MAKE SOMETHING INTERESTING.",
    "contact.sub": "Have an idea, project, or collaboration in mind?",
    "contact.email": "EMAIL ME ↗",
    "contact.ig": "INSTAGRAM ↗",
    "contact.github": "GITHUB ↗",
    "footer.top": "BACK TO TOP ↑",
    "project.view": "VIEW PROJECT ↗"
  },
  id: {
    "nav.logo": "KYARAEZ",
    "nav.works": "KARYA",
    "nav.about": "TENTANG",
    "nav.lab": "LAB",
    "nav.journal": "JURNAL",
    "nav.contact": "KONTAK",
    "hero.label": "IDENTITAS KREATIF PERSONAL",
    "hero.name": "Rezkya Putri Novianti",
    "hero.statement": "Ruang kreatif multidisiplin di mana desain, teknologi, ide, dan riset bertemu.",
    "hero.cta1": "JELAJAHI KARYA ↗",
    "hero.cta2": "TENTANG KYARAEZ",
    "hero.scroll": "GULIR UNTUK MENJELAJAH",
    "about.label": "01 — IDENTITAS",
    "about.title": "DI BALIK KYARAEZ",
    "about.lead": "Hai, saya Rezkya Putri Novianti, orang di balik KYARAEZ.",
    "about.text1": "KYARAEZ adalah identitas kreatif personal — ruang di mana desain, teknologi, konten, riset, penulisan, dan eksperimen hidup berdampingan.",
    "about.text2": "Saya membangun, mendesain, menulis, dan mengeksplorasi. Bukan untuk masuk ke satu kotak, tapi untuk terus bergerak di antaranya dengan niat dan rasa ingin tahu.",
    "about.philosophy": "“Ciptakan dengan kejelasan. Bereksperimen tanpa takut. Tetap penasaran.”",
    "about.based": "BERBASIS DI",
    "about.focus": "FOKUS",
    "about.currently": "SAAT INI",
    "what.label": "02 — KAPABILITAS",
    "what.title": "APA YANG SAYA LAKUKAN",
    "works.label": "03 — PORTOFOLIO",
    "works.title": "KARYA TERPILIH",
    "works.sub": "Kumpulan hal yang saya bangun, desain, jelajahi, dan eksperimenkan.",
    "lab.label": "04 — EKSPERIMEN",
    "lab.title": "CREATIVE LAB",
    "lab.sub": "Eksperimen, ide, studi visual, dan hal-hal yang tidak masuk dalam kategori.",
    "lab.exp1.title": "Studi Tipografi",
    "lab.exp1.desc": "Mengeksplorasi bobot, skala, dan ketegangan editorial hanya melalui huruf.",
    "lab.exp2.title": "Eksperimen Visual AI",
    "lab.exp2.desc": "Memberi prompt, menyempurnakan, dan mengarahkan output visual dengan niat.",
    "lab.exp3.title": "Sistem Warna",
    "lab.exp3.desc": "Membangun palet terbatas yang tetap terasa hidup dan tak terduga.",
    "lab.exp4.title": "Interaksi",
    "lab.exp4.desc": "Mikro-interaksi dan perilaku kursor yang terasa dipertimbangkan.",
    "lab.exp5.title": "Craft Prompt",
    "lab.exp5.desc": "Menulis instruksi yang lebih baik untuk mesin dan untuk manusia.",
    "journal.label": "05 — CATATAN",
    "journal.title": "JURNAL",
    "journal.cat1": "PEMIKIRAN",
    "journal.cat2": "DESAIN",
    "journal.cat3": "PROSES",
    "journal.entry1.title": "Hal-hal yang saya pelajari tentang teknologi kreatif.",
    "journal.entry1.excerpt": "Alat berubah. Cara kita berpikir tentang membuat sesuatu harus tetap penuh niat.",
    "journal.entry2.title": "Mengapa desain yang baik lebih dari sekadar estetika.",
    "journal.entry2.excerpt": "Kejelasan, hierarki, dan empati lebih penting daripada tren.",
    "journal.entry3.title": "Membangun sesuatu sebelum tahu persis ke mana arahnya.",
    "journal.entry3.excerpt": "Memulai sering kali bagian yang paling sulit dan paling penting.",
    "journal.read": "BACA →",
    "journey.label": "06 — PERJALANAN",
    "journey.title": "THE JOURNEY",
    "contact.title": "MARI BUAT SESUATU YANG MENARIK.",
    "contact.sub": "Punya ide, proyek, atau kolaborasi dalam pikiran?",
    "contact.email": "EMAIL SAYA ↗",
    "contact.ig": "INSTAGRAM ↗",
    "contact.github": "GITHUB ↗",
    "footer.top": "KEMBALI KE ATAS ↑",
    "project.view": "LIHAT PROYEK ↗"
  }
};

/* --------------------------------------------------------------------------
   STATE
   -------------------------------------------------------------------------- */
let currentLang = "en";
let currentTheme = "light";
let currentFilter = "all";

/* --------------------------------------------------------------------------
   INIT
   -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  detectLanguage();
  initTheme();
  initCursor();
  initNav();
  initSkills();
  initProjects();
  initTimeline();
  initFilters();
  initLangSwitchers();
  initThemeToggles();
  initMagneticButtons();
  initScrollReveal();
  initSmoothAnchors();
  updateContactLinks();
  applyTranslations();
});

/* --------------------------------------------------------------------------
   LANGUAGE
   -------------------------------------------------------------------------- */
function detectLanguage() {
  const stored = localStorage.getItem("kyaraez-lang");
  if (stored) {
    currentLang = stored;
  } else {
    const browserLang = (navigator.language || navigator.userLanguage || "en").toLowerCase();
    currentLang = browserLang.startsWith("id") ? "id" : "en";
  }
  document.documentElement.lang = currentLang;
  updateLangButtons();
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("kyaraez-lang", lang);
  document.documentElement.lang = lang;
  updateLangButtons();
  applyTranslations();
  // Re-render dynamic content
  initSkills();
  initProjects();
  initTimeline();
}

function updateLangButtons() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.dataset.lang === currentLang;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", isActive);
  });
}

function applyTranslations() {
  const dict = I18N[currentLang] || I18N.en;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      // Preserve arrow if present in original structure
      el.textContent = dict[key];
    }
  });
}

function initLangSwitchers() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
    });
  });
}

/* --------------------------------------------------------------------------
   THEME
   -------------------------------------------------------------------------- */
function initTheme() {
  const stored = localStorage.getItem("kyaraez-theme");
  if (stored) {
    currentTheme = stored;
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    currentTheme = "dark";
  } else {
    currentTheme = "light";
  }
  applyTheme();
}

function applyTheme() {
  document.documentElement.setAttribute("data-theme", currentTheme);
  localStorage.setItem("kyaraez-theme", currentTheme);
}

function toggleTheme() {
  currentTheme = currentTheme === "light" ? "dark" : "light";
  applyTheme();
}

function initThemeToggles() {
  document.querySelectorAll(".theme-toggle").forEach((btn) => {
    btn.addEventListener("click", toggleTheme);
  });
}

/* --------------------------------------------------------------------------
   CUSTOM CURSOR
   -------------------------------------------------------------------------- */
function initCursor() {
  const cursor = document.getElementById("cursor");
  if (!cursor || window.matchMedia("(hover: none), (pointer: coarse)").matches) {
    return;
  }

  const dot = cursor.querySelector(".cursor-dot");
  const ring = cursor.querySelector(".cursor-ring");
  const label = cursor.querySelector(".cursor-label");

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;
  let rafId;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (dot) {
      dot.style.left = mouseX + "px";
      dot.style.top = mouseY + "px";
    }
    if (label) {
      label.style.left = mouseX + "px";
      label.style.top = mouseY + "px";
    }
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    if (ring) {
      ring.style.left = ringX + "px";
      ring.style.top = ringY + "px";
    }
    rafId = requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hover states
  const viewTargets = "a.project-link, .project-card, .lab-card";
  const hoverTargets = "a, button, .skill-item, .filter-btn, .journal-entry";

  document.addEventListener("mouseover", (e) => {
    const target = e.target.closest(viewTargets);
    if (target) {
      document.body.classList.add("cursor-view");
      return;
    }
    if (e.target.closest(hoverTargets)) {
      document.body.classList.add("cursor-hover");
      if (e.target.closest("a") && !e.target.closest(".project-card")) {
        document.body.classList.add("cursor-link");
      }
    }
  });

  document.addEventListener("mouseout", (e) => {
    const target = e.target.closest(viewTargets);
    if (target) {
      document.body.classList.remove("cursor-view");
    }
    if (e.target.closest(hoverTargets)) {
      document.body.classList.remove("cursor-hover", "cursor-link");
    }
  });
}

/* --------------------------------------------------------------------------
   NAV
   -------------------------------------------------------------------------- */
function initNav() {
  const nav = document.getElementById("nav");
  const burger = document.getElementById("navBurger");
  const mobileMenu = document.getElementById("mobileMenu");

  // Scroll compact
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    if (y > 40) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
    lastScroll = y;
  }, { passive: true });

  // Burger
  if (burger && mobileMenu) {
    burger.addEventListener("click", () => {
      const open = mobileMenu.classList.toggle("open");
      burger.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", open);
      mobileMenu.setAttribute("aria-hidden", !open);
      document.body.style.overflow = open ? "hidden" : "";
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        burger.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
        mobileMenu.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
      });
    });
  }
}

/* --------------------------------------------------------------------------
   SKILLS
   -------------------------------------------------------------------------- */
function initSkills() {
  const container = document.getElementById("skillsList");
  if (!container) return;

  container.innerHTML = CONFIG.skills
    .map(
      (s) => `
    <div class="skill-item" data-skill="${s.id}">
      <span class="skill-num">${s.id}</span>
      <span class="skill-title">${s.title[currentLang] || s.title.en}</span>
      <span class="skill-desc">${s.desc[currentLang] || s.desc.en}</span>
      <span class="skill-arrow" aria-hidden="true">↗</span>
    </div>
  `
    )
    .join("");
}

/* --------------------------------------------------------------------------
   PROJECTS
   -------------------------------------------------------------------------- */
function initProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  const viewLabel = (I18N[currentLang] && I18N[currentLang]["project.view"]) || "VIEW PROJECT ↗";

  grid.innerHTML = CONFIG.projects
    .map((p) => {
      const filtersAttr = p.filters.join(" ");
      const visual = p.image
        ? `<img class="project-img" src="${p.image}" alt="${p.title}" loading="lazy" />`
        : `<div class="project-placeholder ${p.placeholderClass}">${p.title}</div>`;

      return `
      <article class="project-card" data-filters="${filtersAttr}" data-id="${p.id}">
        <div class="project-visual">
          ${visual}
        </div>
        <div class="project-info">
          <div class="project-top">
            <span class="project-num">PROJECT ${p.id}</span>
            <span class="project-year">${p.year}</span>
          </div>
          <h3 class="project-title">${p.title}</h3>
          <span class="project-cat">${p.category}</span>
          <p class="project-desc">${p.description[currentLang] || p.description.en}</p>
          <div class="project-tools">
            ${(p.tools || []).map((t) => `<span class="tool-tag">${t}</span>`).join("")}
          </div>
          <a href="${p.url || "#"}" class="project-link" ${p.url && p.url !== "#" ? 'target="_blank" rel="noopener"' : ""}>
            ${viewLabel}
          </a>
        </div>
      </article>
    `;
    })
    .join("");

  // Re-apply current filter
  filterProjects(currentFilter);
}

function initFilters() {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      currentFilter = btn.dataset.filter;
      filterProjects(currentFilter);
    });
  });
}

function filterProjects(filter) {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach((card) => {
    const filters = (card.dataset.filters || "").split(" ");
    const show = filter === "all" || filters.includes(filter);
    card.classList.toggle("hidden", !show);
  });
}

/* --------------------------------------------------------------------------
   TIMELINE
   -------------------------------------------------------------------------- */
function initTimeline() {
  const container = document.getElementById("timeline");
  if (!container) return;

  container.innerHTML = CONFIG.timeline
    .map(
      (item) => `
    <div class="timeline-item">
      <div class="timeline-year">${item.year}</div>
      <p class="timeline-text">${item.text[currentLang] || item.text.en}</p>
    </div>
  `
    )
    .join("");
}

/* --------------------------------------------------------------------------
   CONTACT LINKS
   -------------------------------------------------------------------------- */
function updateContactLinks() {
  const github = document.getElementById("githubLink");
  if (github && CONFIG.github && CONFIG.github !== "#") {
    github.href = CONFIG.github;
    github.target = "_blank";
    github.rel = "noopener noreferrer";
  }
}

/* --------------------------------------------------------------------------
   MAGNETIC BUTTONS (subtle)
   -------------------------------------------------------------------------- */
function initMagneticButtons() {
  if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

  document.querySelectorAll(".magnetic").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "";
    });
  });
}

/* --------------------------------------------------------------------------
   SCROLL REVEAL
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
    document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  // Auto-add reveal to key sections
  const selectors = [
    ".section-header",
    ".about-grid",
    ".skill-item",
    ".project-card",
    ".lab-card",
    ".journal-entry",
    ".timeline-item",
    ".contact-content"
  ];

  selectors.forEach((sel) => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.setAttribute("data-reveal", "");
      el.style.transitionDelay = `${Math.min(i * 0.06, 0.35)}s`;
      observer.observe(el);
    });
  });
}

/* --------------------------------------------------------------------------
   SMOOTH ANCHOR
   -------------------------------------------------------------------------- */
function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const id = anchor.getAttribute("href");
      if (id === "#") return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--nav-h")) || 72;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });
}
