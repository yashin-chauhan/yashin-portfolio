# ⚡ Yashin Chauhan // Dual-Core Production Portfolio

<div align="center">

![Next.js 15](https://img.shields.io/badge/Next.js_15-black?style=for-the-badge&logo=next.js&logoColor=white)
![React 19](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer&logoColor=blue)
![Zustand](https://img.shields.io/badge/Zustand-4338CA?style=for-the-badge&logo=react&logoColor=white)

**A high-performance, interactive portfolio built with Next.js 15 (App Router), engineered to impress both Enterprise Tech Recruiters (10x Staff Engineer) and High-Ticket Clients (Full-Cycle Product Studio).**

[Live Demo](http://localhost:3000) • [Architecture Blueprint](#-system-architecture-blueprint) • [Case Studies](#-featured-production-case-studies) • [Contact](#-connect-with-me)

</div>

---

## 🎯 The "Dual-Core Persona" Architecture

Standard portfolios fail because they only speak to one audience: either a job recruiter or a freelance client. This portfolio solves that dilemma through a dynamic **Persona Mode Engine**:

```
                            ┌─────────────────────────────────────────┐
                            │        DUAL-CORE PERSONA ENGINE         │
                            │   "Senior Engineer & Product Studio"    │
                            └────────────────────┬────────────────────┘
                                                 │
                 ┌───────────────────────────────┴──────────────────────────────┐
                 ▼                                                              ▼
   ┌───────────────────────────┐                                  ┌───────────────────────────┐
   │    RECRUITER / ENG MODE   │                                  │    CLIENT / STUDIO MODE   │
   ├───────────────────────────┤                                  ├───────────────────────────┤
   │ • Clean Architecture ADRs │                                  │ • End-to-end MVP Delivery │
   │ • GitHub Source Code      │                                  │ • Business ROI & Growth   │
   │ • <32ms p99 Latency Specs │                                  │ • Transparent Estimator   │
   │ • Resume (PDF) Download   │                                  │ • Fixed Milestone Pricing │
   │ • Multi-Tenant Isolation  │                                  │ • Testimonials & Trust    │
   └───────────────────────────┘                                  └───────────────────────────┘
```

* **👔 Recruiter / Eng Mode:** Switches headlines to *"Senior Full-Stack Developer // Distributed Systems"*, emphasizes low-latency metrics, database schemas, and 1-click CV download.
* **💼 Client / Studio Mode:** Switches headlines to *"Next-Gen Product Studio // Custom SaaS & Logistics ERPs"*, emphasizes `14-21 Days` MVP turnaround, 100% CSAT, and transparent budget calculator.
* **⚡ Hybrid Synthesis (Default):** Seamlessly balances technical rigor with business outcomes.

---

## 🚀 Key Interactive Innovations

### 1. 📈 Dual-Perspective Case Studies
Every project features an instant tab toggle:
* **[Client / ROI View]:** Highlights measurable business growth, time-to-market, and production deliverables.
* **[Engineering & Code View]:** Details system architecture, database partitioning, Redis caching, and direct GitHub repositories.

### 2. 🧩 5-Layer Interactive System Design Blueprint
An interactive distributed architecture visualizer showcasing real production patterns from **RentKhata** and enterprise ERPs:
1. **Edge Routing & Next.js Layer:** Edge middleware, JWT header decoding, and zero-CLS streaming.
2. **NestJS 11 / Fastify 5 Gateway:** Multi-tenant session context isolation & leaky bucket rate limiters.
3. **Double-Entry Financial Core:** Strict integer paise arithmetic (`₹1.00 = 100 paise`) eliminating floating-point rounding errors.
4. **Async Job Queue & PDF Engine:** Redis BullMQ background workers rendering vector PDFs in `<300ms`.
5. **Relational Data Store:** PostgreSQL 16 (Supabase Row-Level Security) & single-index MySQL UNION resolvers.

### 3. 💰 Transparent Project Scope & Budget Estimator
An interactive client calculator allowing instant estimation of engineering investment and delivery timelines across SaaS MVPs, Logistics ERPs, and REST API suites.

### 4. 💻 Interactive Cyber Terminal / CLI (`~`)
A keyboard-accessible bash console supporting commands:
`help`, `skills`, `projects`, `experience`, `architecture`, `hire`, `github`, `matrix`, `clear`, `whoami`.

### 5. 🔊 Pure Synthesized Web Audio Engine
Micro-haptic auditory feedback generated purely in-browser via the Web Audio API (zero external mp3 assets, instant loading, with mute toggle).

### 6. 📱 Floating Glassmorphic Dock
Apple macOS-inspired bottom navigation pill with active scroll spy and tooltips.

---

## 🛠️ Featured Production Case Studies

| Project | Domain | Architecture & Tech Highlights | Links |
| :--- | :--- | :--- | :--- |
| **RentKhata** | Double-Entry FinTech SaaS | • Integer paise double-entry accounting ledger<br>• Property ➔ Floor ➔ Room ➔ Bed ➔ Stay state machines<br>• Next.js 15, NestJS 11, Fastify 5, Supabase, BullMQ, Expo 52 | [Live SaaS](https://rentkhata.com) • [Showcase](https://github.com/yashin-chauhan/rentkhata) |
| **Compass Transport ERP** | Multi-Branch Logistics Hub | • Multi-branch context isolation (Delhi & Ambala)<br>• `<300ms` vector DomPDF bilty generation<br>• Laravel 8, MySQL 8, DomPDF, Dynamic GST engine | [Live Platform](https://compasstransport.in) • [Showcase](https://github.com/yashin-chauhan/compass-transport-showcase) |
| **Gems Testing India (GTI)** | Gemological Verification | • `<8ms` single-index SQL UNION report engine<br>• Millimeter-exact PVC card PDF generator<br>• Laravel 10, MySQL 8, Yajra DataTables | [Showcase](https://github.com/yashin-chauhan/gems-testing-india-showcase) |
| **Pragya Crop Advisory** | AgriTech / NGO Platform | • 12-stage agronomy lifecycle modeling engine<br>• Bilingual UTF-8 Devanagari REST API contracts<br>• Relational integrated pest management (IPM) joins | [Showcase](https://github.com/yashin-chauhan/pragya-crop-advisory) |

---

## 📂 Project Structure

```
yashin-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout with SEO metadata & fonts
│   │   ├── page.tsx               # Main dual-core landing page
│   │   └── globals.css            # Cyberpunk obsidian tokens & animations
│   ├── components/
│   │   ├── navbar/
│   │   │   └── Header.tsx         # Navbar with live persona mode switcher & SFX
│   │   ├── hero/
│   │   │   ├── HeroSection.tsx    # Dynamic hero headline, status badge & CTAs
│   │   │   └── BentoStats.tsx     # 5+ YOE, 20+ shipped, 99.9% uptime counters
│   │   ├── work/
│   │   │   ├── ProjectCard.tsx    # Dual-perspective toggle (ROI View vs Code View)
│   │   │   └── ProjectsGrid.tsx   # RentKhata, Compass ERP, GTI, Pragya
│   │   ├── architecture/
│   │   │   └── ArchBlueprint.tsx  # Interactive 5-layer system design inspector
│   │   ├── estimator/
│   │   │   └── ProjectEstimator.tsx # Real-time budget & timeline calculator
│   │   ├── skills/
│   │   │   └── TechRadar.tsx      # Full-stack competencies (Frontend, Backend, DB, DevOps)
│   │   ├── experience/
│   │   │   └── CareerTimeline.tsx # Bakuun, GlobalLogic, Digitally Bird, Native Devs
│   │   ├── contact/
│   │   │   └── ContactSection.tsx # Transmission form, direct email & social links
│   │   ├── terminal/
│   │   │   └── CyberTerminal.tsx  # Interactive bash CLI drawer (~ key)
│   │   ├── dock/
│   │   │   └── FloatingDock.tsx   # Apple macOS floating bottom dock
│   │   └── canvas/
│   │       └── ParticleCanvas.tsx # Kinetic constellation canvas background
│   ├── hooks/
│   │   ├── usePersona.ts          # Zustand store for persona switching
│   │   ├── useSoundFX.ts          # Web Audio synthesized sound generator
│   │   └── useTerminal.ts         # CLI drawer state management
│   ├── lib/
│   │   ├── data.ts                # Master profile, case study, and timeline data
│   │   └── utils.ts               # cn (clsx + tailwind-merge) utility
│   └── types/
│       └── index.ts               # Strict TypeScript domain interfaces
├── tailwind.config.ts             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript compiler configuration
└── package.json                   # Project dependencies & scripts
```

---

## ⚡ Getting Started Locally

### 1. Prerequisites
* **Node.js**: `v18.18.0` or higher (Recommended: `v20+` or `v24+`)
* **Package Manager**: `npm` / `pnpm` / `yarn`

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/yashin-chauhan/yashin-portfolio.git

# Navigate into project directory
cd yashin-portfolio

# Install dependencies
npm install
```

### 3. Development Server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser to view the application.

### 4. Production Build
```bash
# Compile and build static pages
npm run build

# Start production server
npm run start
```

---

## 📬 Connect With Me

* **Email:** [yashin123786@gmail.com](mailto:yashin123786@gmail.com)
* **LinkedIn:** [linkedin.com/in/yashin-chauhan](https://www.linkedin.com/in/yashin-chauhan/)
* **GitHub:** [github.com/yashin-chauhan](https://github.com/yashin-chauhan)
* **Location:** Delhi, India (IST / UTC +5:30)

---

<div align="center">
  <sub>Designed & Engineered with precision by <strong>Yashin Chauhan</strong>. © 2026 All Rights Reserved.</sub>
</div>
