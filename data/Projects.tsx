import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "homeland",
    title: "Homeland",
    description:
      "Verified Nigerian real estate marketplace with agent profiles, property listings, secure authentication, tour booking, and production-ready Supabase-backed infrastructure.",
    year: "2026",
    type: "Personal Project",
    live: "https://homeland-rosy.vercel.app/",
    github: "https://github.com/mosesfawole/homeland",
    stack: ["Next.js", "TypeScript", "Supabase", "NextAuth", "Tailwind CSS"],
    featured: true,
  },
  {
    id: "baroque",
    title: "Baroque Works",
    description:
      "Cinematic One Piece fan site with interactive 3D character models, Apple-style scroll storytelling and Framer Motion page transitions.",
    year: "2026",
    type: "Personal Project",
    live: "https://baroque-theta.vercel.app/",
    github: "https://github.com/mosesfawole/baroque",
    stack: ["Next.js", "React Three Fiber", "Framer Motion"],
    featured: true,
  },

  {
    id: "hireboard",
    title: "HireBoard",
    description:
      "Full-stack job board with role-based auth, company dashboards, admin approval workflow and server-side rendered job listings.",
    year: "2026",
    type: "Personal Project",
    stack: ["Next.js", "Supabase", "NextAuth", "Zustand", "TypeScript"],
    live: "https://hireboard-steel.vercel.app/",
    github: "https://github.com/mosesfawole/hireboard",
    featured: true,
  },
  {
    id: "pricehunt",
    title: "PriceHunt",
    description:
      "Product price aggregator that queries Google Shopping and sorts results by lowest price with server-side caching.",
    year: "2026",
    type: "Personal Project",
    stack: ["Next.js", "SerpAPI", "TypeScript"],
    live: "https://price-hunt-sand.vercel.app/search",
    github: "https://github.com/mosesfawole/price-hunt",
    featured: false,
  },
  {
    id: "kipclean",
    title: "KipClean",
    description:
      "Freelance landing page for a professional cleaning services company. Mobile-first, smooth animations, deployed on Vercel.",
    year: "2024",
    type: "Freelance",
    stack: ["React", "Vite", "Tailwind CSS"],
    live: "https://kipclean-v1.vercel.app/",
    github: "https://github.com/mosesfawole/kipclean-v1",
    featured: false,
  },
  {
    id: "cryptoview",
    title: "CryptoView",
    description:
      "Real-time cryptocurrency dashboard with live WebSocket price feeds, an interactive 3D globe showing global exchange activity, and a persistent watchlist.",
    year: "2026",
    type: "Personal Project",
    stack: ["Next.js", "Three.js", "Zustand", "Binance API"],
    live: "https://crypto-dashboard-ten-beta.vercel.app/dashboard",
    github: "https://github.com/mosesfawole/crypto-dashboard",
    featured: false,
  },
  {
    id: "mousa",
    title: "Mousa",
    description:
      "AI-powered Twitter content dashboard - generate post ideas, expand them into full tweets, and analyze performance with Claude AI.",
    year: "2026",
    type: "Personal Project",
    stack: ["Next.js", "Claude API", "Supabase"],
    github: "https://github.com/mosesfawole/mousa",
    featured: false,
  },
];
