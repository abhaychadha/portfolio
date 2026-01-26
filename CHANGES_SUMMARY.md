# Summary of Changes (since initial commit)

## Content & CV updates
- **Portfolio content** updated from `Abhay_Chadha_CV.docx`: personal info, profile, about, projects, contact.
- **@portfolio/content**: navigation (`Abhay Chadha`), hero (tagline, portrait, LinkedIn/GitHub), about, contact (email, resume, copyright, socials), metadata, projects (Walmart Plus & Sam's Club, Sixt, Lowe's).
- **Project images**: Walmart, Sixt, Lowes screenshots via Puppeteer script; portrait and project assets in `apps/host/public/assets/images/`.
- **Resume**: `Abhay_Chadha_CV.docx` added to repo root and `apps/host/public/` for download link.

## Feature flags refactor
- **@portfolio/feature-flags** package with **per-component config** in `config/components/` (Navigation, Line, HeroSection, AboutMeSection, FeaturedProjectsSection, ProjectDetail, ProjectCard, ContactSection) and **app-features** (smoothScroll, sectionSeparators). **All defaults on.**
- **Values only in feature-flags**; aggregated config built in `config/flags.ts`. **Reader API**: `getComponentFlags(app, page?, component)`, `getAppFeatures(app)`.
- **Host app**: `FeatureFlagsProvider` + `useComponentFlags(component)` / `useAppFeatures()`. **Flag reading moved out of components**; components consume flags via hooks, no direct `isEnabled` calls.
- Layout wraps app with `FeatureFlagsProvider`; page uses `useAppFeatures` (smoothScroll, sectionSeparators); sections use `useComponentFlags`.
- Designed for **independent hosting** and **multi-app use** (host, remote-about, remote-projects).

## Host app & tests
- **Page**: `useAppFeatures()` for smooth scroll and section separators (Line); conditional `Line` rendering.
- **Components** refactored to use `useComponentFlags`: Navigation, HeroSection, AboutMeSection, FeaturedProjectsSection, ProjectDetail, ContactSection. Tests updated to wrap with `FeatureFlagsProvider` (and `ThemeProvider` where needed).
- **Vercel**: `apps/host/vercel.json` for monorepo install/build.

## Tooling & docs
- **Puppeteer** script `scripts/capture-project-screenshots.cjs` for project screenshots.
- **Hosting**: `HOSTING_GUIDE.md` (Vercel, Netlify, Cloudflare Pages).
- **GitHub**: `GITHUB_SETUP.md`, `PUSH_INSTRUCTIONS.md` for repo setup and push.

## Config & deps
- **package.json**: `screenshots:projects` script; puppeteer devDependency; workspace deps.
- **apps/host**: `@portfolio/feature-flags` dependency; `transpilePackages`; `tsconfig` path alias.
- Removed obsolete `apps/host/src/config/featureFlags` and per-component `featureFlags.config.ts` files (hero, about, contact).
