# 🚀 Production Tech Stack & Architecture Blueprint for Yashin Chauhan's Portfolio

> **Project Name:** Yashin Chauhan // Dual-Core Production Portfolio  
> **Goal:** High-performance, production-grade web application built to impress **Silicon Valley / Enterprise Tech Recruiters (10x Staff Engineer)** and **High-Ticket Clients (Full-Cycle Product Studio)**.

---

## 🛠️ 1. Recommended Production Tech Stack (The Industry Gold Standard)

Aapke portfolio ke liye hum **Next.js 15 (App Router)** ecosystem choose karenge. Yaha reason hai ki yeh stack best kyu hai:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          PRODUCTION TECH STACK                              │
├───────────────────┬─────────────────────────────────────────────────────────┤
│ Core Framework    │ Next.js 15+ (App Router, React 19, Server Components)   │
│ Language          │ TypeScript (Strict Type Safety & Clean Contracts)       │
│ Styling           │ Tailwind CSS v4 / v3.4 + Custom Glassmorphism Tokens    │
│ UI & Components   │ Shadcn UI + Radix UI Primitives + Lucide React Icons    │
│ Smooth Animations │ Framer Motion + Lenis Smooth Scroll                     │
│ Audio Engine      │ Web Audio API (Synthesized SFX Hook - 0 external files) │
│ State Management  │ Zustand / React Context (for Persona Mode Switcher)     │
│ SEO & Socials     │ Next.js Metadata API (Dynamic OpenGraph Recruiter Cards)│
│ Deployment & Edge │ Vercel / Cloudflare Edge (Global CDN, sub-second TTFB)  │
└───────────────────┴─────────────────────────────────────────────────────────┘
```

### 💡 Why this Stack?

1. **Next.js 15 App Router & Server Components (RSC):**
   - Static case studies aur SEO content zero client JavaScript bundle ke sath instant load hote hain (Lighthouse score 99-100).
   - Server Actions ke through secure contact form handle hota hai bina kisi extra backend server ke.
2. **Framer Motion + Lenis Smooth Scroll:**
   - Dennis Snellenberg aur Apple jaisa silky smooth scroll experience deta hai.
   - Persona switch hone par smooth morphing layout transitions deta hai.
3. **Shadcn UI & Tailwind CSS:**
   - Pre-built accessible components (Dialogs, Tooltips, Accordions, Tabs, Sliders) jinka full source code hamare paas hota hai (zero heavy third-party lock-in).
4. **Interactive System Architecture Visualizer & CLI:**
   - Yashin's real **RentKhata** double-entry engine aur **Compass Transport ERP** ki system design ko interactive node-graph me showcase karta hai.

---

## 📁 2. Recommended Next.js Project Architecture

```
yashin-portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout with fonts, metadata & sound provider
│   │   ├── page.tsx               # Main hybrid landing page (Hero, Case Studies, Blueprint)
│   │   ├── globals.css            # Custom cyberpunk glow tokens & scrollbar styles
│   │   ├── projects/
│   │   │   ├── rentkhata/page.tsx # Dedicated deep-dive architectural case study
│   │   │   └── compass/page.tsx   # Dedicated logistics ERP architectural case study
│   │   └── api/
│   │       └── contact/route.ts   # Serverless contact form submission handler
│   │
│   ├── components/
│   │   ├── navbar/
│   │   │   ├── Header.tsx         # Navbar with live persona switch pill & sound button
│   │   │   └── PersonaSwitch.tsx  # Recruiter <-> Hybrid <-> Agency switcher
│   │   ├── hero/
│   │   │   ├── HeroSection.tsx    # Dynamic hero headlines, status badge & dual CTAs
│   │   │   └── BentoStats.tsx     # 5+ YOE, 20+ shipped, 99.9% uptime counters
│   │   ├── work/
│   │   │   ├── ProjectCard.tsx    # Dual-perspective toggle (ROI View vs Code View)
│   │   │   └── ProjectsGrid.tsx   # RentKhata, Compass ERP, GTI Portal, Pragya
│   │   ├── architecture/
│   │   │   ├── ArchGraph.tsx      # Interactive 5-layer system design visualizer
│   │   │   └── NodeInspector.tsx  # ADRs, p99 latency benchmarks & fault-tolerance
│   │   ├── estimator/
│   │   │   └── ProjectEstimator.tsx # Real-time budget & delivery time calculator
│   │   ├── stack/
│   │   │   └── TechRadar.tsx      # Next.js 15, NestJS, Fastify, Laravel, PostgreSQL, Expo
│   │   ├── career/
│   │   │   └── CareerTimeline.tsx # Bakuun, GlobalLogic, Digitally Bird, Native Devs
│   │   ├── terminal/
│   │   │   └── CyberTerminal.tsx  # Interactive bash shell (~ key / dock button)
│   │   ├── dock/
│   │   │   └── FloatingDock.tsx   # Apple macOS style floating bottom dock
│   │   └── canvas/
│   │       └── ParticleField.tsx  # Interactive kinetic constellation background
│   │
│   ├── hooks/
│   │   ├── usePersona.ts          # Zustand store for mode switching
│   │   └── useSoundFX.ts          # Web Audio synthesized sound generator
│   │
│   ├── lib/
│   │   ├── projects-data.ts       # Structured case studies & architecture data
│   │   └── utils.ts               # cn (clsx + tailwind-merge) helper
│   │
│   └── types/
│       └── index.ts               # TypeScript interfaces & domain models
│
├── public/
│   ├── resume.pdf                 # Yashin Chauhan's downloadable CV
│   └── mockups/                   # Clean project screenshots & icons
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## ⚡ 3. Step-by-Step Execution Plan

1. **Step 1: Next.js 15 Base Setup**
   - Initialize Next.js 15 (App Router) with TypeScript & Tailwind CSS in `yashin-portfolio/`.
   - Install `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`, `canvas-confetti`.

2. **Step 2: Core Components & Persona Engine Integration**
   - Build Zustand persona store (`hybrid`, `recruiter`, `agency`).
   - Implement synthesized Web Audio engine hook (`useSoundFX`).

3. **Step 3: RentKhata & Real Case Studies Integration**
   - Build dual-tab project cards for **RentKhata**, **Compass Transport ERP**, **Gems Testing India**, and **Pragya AgriTech**.
   - Build the interactive **System Design Visualizer** (Next.js Edge ➔ NestJS/Fastify Gateway ➔ Double-Entry Ledger Core ➔ Redis BullMQ ➔ PostgreSQL Supabase).

4. **Step 4: Client Estimator & Hacker Terminal CLI**
   - Build the instant price & timeline estimator.
   - Build the interactive keyboard shortcut CLI (`~`).

5. **Step 5: Testing & Deployment**
   - Verify 100% responsiveness, zero console warnings, perfect Lighthouse performance.
