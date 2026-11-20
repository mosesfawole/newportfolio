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

The November 2026 refresh uses Jonas as a visual reference: https://www.framer.com/marketplace/templates/46440/ and https://jonas-template.framer.website/ . The original implementation adapts its spacious introduction, clear typography, project grid, and restrained navigation. No paid template source or assets were used. Inter and Playfair Display retain the existing font pairing.

The project screenshots come from the corresponding public project repositories. The refresh preserves light/dark mode, uses a native cursor, and removes rotating role text and the global music widget from the page layout.

## Hosting

The GitHub production branch is master. The existing Vercel project mosesfawole serves the public URL. Another existing Vercel project, newportfolio, also builds this repository; keep the intended public domain in mind when inspecting deployments.
