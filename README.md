# Moses Fawole — Portfolio

Personal portfolio for AI application development, full-stack products, and interactive web work.

Live: https://mosesfawole.vercel.app

## Development

Use Node.js 24 and npm.

    npm ci
    npm run dev

Verification:

    npx tsc --noEmit
    npm run build

## Content

Project data is in data/Projects.tsx. The homepage selects six projects; /work contains the full archive. New project entries automatically receive a detail page. Optional problem, approach, evidence, scope, and demo fields support substantive project writeups.

Keep prototypes and sandbox integrations clearly labeled. Do not present recorded testnet results as production guarantees, model evaluations, or customer adoption.

## Design

The November 2026 refresh uses Jonas as a visual reference: https://www.framer.com/marketplace/templates/46440/ and https://jonas-template.framer.website/ . The original implementation adapts its spacious introduction, clear typography, project grid, and restrained navigation. No paid template source or assets were used. Manrope headings pair with native Apple/Segoe UI text and selected Playfair Display accents across all pages.

AI and automation projects use responsive, code-rendered workflow overviews, explicitly labeled as overviews rather than live app screenshots. Original captures remain available on project pages at full size and maximum configured image quality. Website previews preserve their original aspect ratio.

Shared route entrances, viewport reveals, hover feedback, and hero motion respect reduced-motion preferences. Work uses project filters; About has a profile, principles, skills, and timeline; Contact has email and copy actions. Light/dark mode persists without a server/client hydration mismatch. A native cursor replaces cursor interception.

## Hosting

The GitHub production branch is master. The existing Vercel project mosesfawole serves the public URL. Another existing Vercel project, newportfolio, also builds this repository; keep the intended public domain in mind when inspecting deployments.

## Font licensing

Manrope and Playfair Display are bundled locally from the official google/fonts repository. Their SIL Open Font License files are included under app/fonts. Native system fonts supply body and UI text; no Apple font files are redistributed.
