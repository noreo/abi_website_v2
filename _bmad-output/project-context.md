---
project_name: Abi_website_v2
user_name: Aurélien
date: 2026-07-22
sections_completed:
  - technology_stack
  - language_rules
  - framework_rules
  - testing_rules
  - quality_rules
  - workflow_rules
  - anti_patterns
status: complete
rule_count: 30
optimized_for_llm: true
---

# Project Context for AI Agents

This file contains critical rules and patterns that AI agents must follow when implementing code in this project. It is intentionally concise and focused on high-impact details that are easy to miss.

---

## Technology Stack & Versions

- Runtime and build:
  - Vite 6.3.5
  - React 18.3.1
  - React DOM 18.3.1
  - React Router 7.13.0
  - Tailwind CSS 4.1.12
  - TypeScript source files used across app
- Key integrations:
  - react-helmet-async for SEO metadata
  - react-snap for static prerender postbuild
  - emailjs browser SDK for contact form sending
  - react-google-recaptcha for anti-spam verification
- Deployment target:
  - Netlify publishes dist and uses SPA fallback redirects

## Critical Implementation Rules

### Language-Specific Rules

- Preserve the existing quote style and formatting conventions in edited files.
- Keep strict null checks in mind for DOM access patterns already used in startup code.
- Do not introduce CommonJS patterns; project is ESM module type.
- Keep imports path-consistent with existing alias usage and relative imports.
- Prefer explicit typed local state and handler signatures in TSX components.
- Do not add broad any types unless there is no safe alternative.

### Framework-Specific Rules

- Router is configured with createBrowserRouter and nested children; add new pages via route tree in src/app/routes.ts.
- Keep Layout as the shared shell for Header, Footer, ScrollRestoration, and route outlet.
- Preserve HelmetProvider wrapping in App so SEO components remain functional.
- Keep form behavior controlled through React state rather than uncontrolled DOM reads.
- Keep recaptcha flow coupled to submit validation before EmailJS send.
- For page-level SEO changes, update page metadata and sitemap/robots consistency together.

### Testing Rules

- No formal test framework config is present; validate behavior with build and manual route checks.
- Minimum verification for UI changes:
  - npm run dev renders target route without console/runtime errors.
  - npm run build completes including react-snap postbuild.
  - Route-level regressions are checked on core pages: /, /approche, /therapie, /contact.
- For contact form changes, verify required-field validation, recaptcha gate, and success/error messaging.

### Code Quality & Style Rules

- Keep file placement consistent:
  - route pages in src/app/pages
  - reusable UI in src/app/components
  - app config in src/app/config
  - hooks in src/app/hooks
- Do not mass-reformat unrelated files.
- Add comments only where logic is non-obvious; avoid noisy comments.
- Keep accessibility attributes for SVG and interactive elements.
- Preserve French user-facing copy unless the change explicitly requires copy updates.
- Keep typography/theme tokens from src/styles rather than inline one-off system defaults.

### Development Workflow Rules

- Primary local workflows:
  - npm install
  - npm run dev
  - npm run build
- Build output and deployment assumptions depend on dist, not build.
- Netlify config expects SPA redirect behavior; do not remove route fallback redirects.
- If adding new public routes, align all of:
  - router config
  - react-snap include list in package.json
  - sitemap entries in public/sitemap.xml

### Critical Don't-Miss Rules

- Do not break figma:asset resolution behavior:
  - vite.config.ts includes a custom plugin that maps figma:asset imports and copies public/images to dist/images.
- Do not remove react-snap postbuild unless replacing with an explicit SEO prerender strategy.
- Avoid production secret exposure changes:
  - keep env-driven keys for EmailJS and reCAPTCHA
  - do not hardcode new secrets in source
- Existing mismatch risk to watch:
  - sitemap currently references /services while router uses /therapie; keep canonical paths aligned on future SEO edits.
- Avoid changing route slugs without checking internal links, sitemap, and prerender include list.
- Keep performance-oriented build chunking and minification settings unless change request requires otherwise.

---

## Usage Guidelines

For AI Agents:
- Read this file before making code changes.
- Follow all listed rules when touching routing, SEO, forms, and build config.
- Prefer minimal, focused edits and preserve existing architecture.

For Humans:
- Update this file when stack versions, routing model, or deployment assumptions change.
- Keep this file concise and remove rules that become obsolete.

Last Updated: 2026-07-22
