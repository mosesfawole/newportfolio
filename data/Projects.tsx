import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "near-replay-lab",
    title: "NEAR Replay Lab",
    description:
      "A test harness and dashboard for agent payments. Replays five payment scenarios on NEAR testnet and uses finalized receipts and balance changes to verify who got paid.",
    year: "2026",
    type: "Hackathon Project",
    github: "https://github.com/mosesfawole/near-replay-lab",
    image: {
      src: "/projects/near-replay-lab.jpg",
      alt: "NEAR Replay Lab dashboard comparing two recorded testnet payment outcomes",
    },
    stack: ["TypeScript", "Rust", "Next.js", "NEAR"],
    featured: true,
  },
  {
    id: "releaseroom",
    title: "ReleaseRoom",
    description:
      "A Mattermost workflow where an AI agent prepares a patch, automated checks verify it, and a human approves the exact patch hash before the handoff is exported.",
    year: "2026",
    type: "Hackathon Project",
    github: "https://github.com/mosesfawole/releaseroom",
    stack: ["Switch", "Mattermost", "Codex"],
    featured: false,
  },
  {
    id: "clearcart",
    title: "ClearCart",
    description:
      "An AI-assisted shopping prototype that checks a basket against a budget, asks the buyer to approve checkout, and verifies the resulting PayPal sandbox receipt.",
    year: "2026",
    type: "Hackathon Project",
    github: "https://github.com/mosesfawole/clearcart",
    stack: ["PayPal Sandbox", "AI Workflows"],
    featured: false,
  },
  {
    id: "homeland",
    title: "Homeland",
    description:
      "Trust-first Nigerian property marketplace with verified agents, immersive listing experiences, secure auth flows, booking infrastructure, and production-grade backend hardening for real-world deployment.",
    year: "2026",
    type: "Personal Project",
    live: "https://homeland-rosy.vercel.app/",
    github: "https://github.com/mosesfawole/homeland",
    image: {
      src: "/projects/homeland.png",
      alt: "Homepage screenshot of Homeland",
    },
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
    image: {
      src: "/projects/baroque.png",
      alt: "Homepage screenshot of Baroque Works",
    },
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
    image: {
      src: "/projects/hireboard.png",
      alt: "Homepage screenshot of HireBoard",
    },
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
    image: {
      src: "/projects/pricehunt.png",
      alt: "Search page screenshot of PriceHunt",
    },
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
    image: {
      src: "/projects/kipclean.png",
      alt: "Homepage screenshot of KipClean",
    },
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
