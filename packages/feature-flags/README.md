# @portfolio/feature-flags

Centralized feature flags with **hierarchy: app → page → component → useCase**.  
**Values live only in this package.** Components consume flags via a reader layer (e.g. `getComponentFlags`, `getAppFeatures`) and never call `isEnabled` directly.

Designed to be **hosted independently** and reused across **multiple applications** (host, remote-about, remote-projects, etc.).

## Hierarchy

| Level | Description | Examples |
|-------|-------------|----------|
| **App** | Which application | `host`, `remote-about`, `remote-projects` |
| **Page** | Which page/section | `home`, `about`, `projects`, `contact` |
| **Component** | UI unit (any string) | `Navigation`, `HeroSection`, `ContactSection`, `ProjectDetail` |
| **UseCase** | Toggle within a component | `animation`, `form`, `links`, `tag`, `portrait` |

**Resolution (component/useCase):** `page.components[component][useCase]` → `app.components[component][useCase]` → `app.default` (default: **true**).

## Config: per-component modules

Each component has a **dedicated config** in `src/config/components/`:

- `navigation.ts`, `line.ts`, `hero-section.ts`, `about-me-section.ts`, `featured-projects-section.ts`, `project-detail.ts`, `project-card.ts`, `contact-section.ts`

Each exports `{ component, page?, useCases, defaults }`. **All defaults are on (`true`).**  
App-level features (e.g. `smoothScroll`, `sectionSeparators`) live in `config/app-features.ts`.

Aggregated config is built in `config/flags.ts` from these modules. **Values are set only here.**

## Reader API (drill down to components)

Use these instead of calling `isEnabled` inside components:

```ts
import { getComponentFlags, getAppFeatures } from '@portfolio/feature-flags';

// Resolved flags for a component (page from registry when omitted)
const flags = getComponentFlags('host', undefined, 'Navigation');
// → { themeToggle: true, links: true }

// App-level features (smoothScroll, sectionSeparators)
const app = getAppFeatures('host');
// → { smoothScroll: true, sectionSeparators: true }
```

Apps should wrap the tree in a `FeatureFlagsProvider` (or equivalent) and expose `useComponentFlags(component)` / `useAppFeatures()` that call these. **Component-specific logic reads from feature-flags and drills down**; no `isEnabled` in component files.

## Low-level API

```ts
import { isEnabled, getFlag, getComponentFlag } from '@portfolio/feature-flags';

isEnabled('host', undefined, 'smoothScroll');
isEnabled('host', 'home', 'HeroSection', 'animation');
getFlag('host', 'home', 'heroAnimation');
getComponentFlag('host', 'home', 'HeroSection', 'socialLinks');
```

## Types & exports

- `APPS`, `PAGES`, `APP_FEATURES`, `PAGE_FEATURES`, `useCases`
- `App`, `Page`, `Feature`, `UseCase`, `FeatureFlagsConfig`, `AppFlagsConfig`, `PageConfig`, `ComponentFlags`
- `componentRegistry`, `appFeatures`, `featureFlagsConfig`

## Hosted independently

The package is app-agnostic. Config is keyed by app (`host`, `remote-about`, `remote-projects`).  
To host remotely later (e.g. HTTP API), swap the config source in `config/flags.ts` or behind `getComponentFlags` / `getAppFeatures`; consumers keep using the same reader API.
