/**
 * @portfolio/feature-flags
 *
 * Centralized feature flags with hierarchy: app → page → component → useCase.
 * - App: host, remote-about, remote-projects
 * - Page: home, about, projects, contact
 * - Component: any string (e.g. Navigation, HeroSection)
 * - UseCase: animation, form, links, etc. (per component)
 */

export { isEnabled, getFlag, getComponentFlag } from './resolve';
export { getComponentFlags, getAppFeatures } from './reader';
export { featureFlagsConfig } from './config/flags';
export { componentRegistry } from './config/components';
export { appFeatures } from './config/app-features';
export type {
  App,
  Page,
  Feature,
  AppFeature,
  PageFeature,
  UseCase,
  FeatureFlagsConfig,
  AppFlagsConfig,
  PageConfig,
  PageFlags,
  ComponentFlags,
} from './types';
export { APPS, PAGES, APP_FEATURES, PAGE_FEATURES, useCases } from './types';
