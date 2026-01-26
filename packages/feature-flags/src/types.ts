/**
 * Feature flag hierarchy: app → page → component → useCase
 * - App: which application (host, remote-about, remote-projects)
 * - Page: which page/section (home, about, projects, contact)
 * - Component: UI unit (any string; e.g. Navigation, HeroSection)
 * - UseCase: toggleable capability within a component (animation, form, links, etc.)
 */

export const APPS = ['host', 'remote-about', 'remote-projects'] as const;
export type App = (typeof APPS)[number];

export const PAGES = ['home', 'about', 'projects', 'contact'] as const;
export type Page = (typeof PAGES)[number];

/** App-level features (no page); can be overridden per page */
export const APP_FEATURES = [
  'themeToggle',
  'smoothScroll',
  'sectionSeparators',
] as const;

/** Page-specific features (legacy; prefer component/useCase) */
export const PAGE_FEATURES = [
  'heroAnimation',
  'aboutAnimation',
  'projectCardAnimation',
  'contactForm',
  'heroSocialLinks',
  'projectLinks',
] as const;

export type AppFeature = (typeof APP_FEATURES)[number];
export type PageFeature = (typeof PAGE_FEATURES)[number];
export type Feature = AppFeature | PageFeature;

/** Use cases per component (optional reference; config accepts any string) */
export const useCases = {
  Navigation: ['themeToggle', 'links'] as const,
  HeroSection: ['animation', 'socialLinks', 'primaryCta', 'portrait'] as const,
  Line: ['visible'] as const,
  FeaturedProjectsSection: ['headerAnimation', 'projectCardAnimation'] as const,
  ProjectDetail: ['links', 'tag', 'image'] as const,
  ProjectCard: ['tag', 'image'] as const,
  AboutMeSection: ['animation', 'ctaLink'] as const,
  ContactSection: ['form', 'email', 'resume', 'socialLinks'] as const,
} as const;

export type UseCase = (typeof useCases)[keyof typeof useCases][number];

export type PageFlags = Partial<Record<Feature, boolean>>;

/** Use-case flags for a single component */
export type ComponentFlags = Partial<Record<string, boolean>>;

/** Page config: legacy page-level features + component-level flags */
export interface PageConfig {
  /** Legacy: page-level feature overrides */
  features?: PageFlags;
  /** Component → useCase flags for this page */
  components?: Partial<Record<string, ComponentFlags>>;
}

export interface AppFlagsConfig {
  /** App-level features (apply across all pages) */
  features?: Partial<Record<Feature, boolean>>;
  /** Legacy: page-specific feature overrides */
  pages?: Partial<Record<Page, PageConfig>>;
  /** App-level components (e.g. Navigation, Line); used when no page-specific override */
  components?: Partial<Record<string, ComponentFlags>>;
  /** Global default when no override found (default: true) */
  default?: boolean;
}

/** Component config shape: use cases + defaults (all on by default) */
export interface ComponentConfigShape {
  component: string;
  page?: string;
  useCases: readonly string[];
  defaults: Record<string, boolean>;
}

export interface FeatureFlagsConfig {
  [app: string]: AppFlagsConfig;
}
