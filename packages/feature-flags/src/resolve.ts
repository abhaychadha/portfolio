import { featureFlagsConfig } from './config/flags';
import type { App, Page, Feature } from './types';

/**
 * Resolve a feature flag (app → page → feature).
 * Use for app-level or page-level features.
 */
function resolveFeature(
  app: App | string,
  page: Page | string | undefined,
  feature: Feature | string
): boolean {
  const appConfig = featureFlagsConfig[app];
  if (!appConfig) return false;
  const fallback = appConfig.default ?? true;

  if (page && appConfig.pages?.[page as Page]) {
    const pageConfig = appConfig.pages[page as Page];
    const v = pageConfig?.features?.[feature as Feature];
    if (typeof v === 'boolean') return v;
  }

  const appFeature = appConfig.features?.[feature as Feature];
  if (typeof appFeature === 'boolean') return appFeature;
  return fallback;
}

/**
 * Resolve a component use-case flag (app → page → component → useCase).
 * Use for component-level control within a page.
 */
function resolveComponentUseCase(
  app: App | string,
  page: Page | string | undefined,
  component: string,
  useCase: string
): boolean {
  const appConfig = featureFlagsConfig[app];
  if (!appConfig) return false;
  const fallback = appConfig.default ?? true;

  if (page && appConfig.pages?.[page as Page]) {
    const comps = appConfig.pages[page as Page]?.components;
    const pageComp = comps?.[component];
    const v = pageComp?.[useCase];
    if (typeof v === 'boolean') return v;
  }

  const appComp = appConfig.components?.[component];
  const v = appComp?.[useCase];
  if (typeof v === 'boolean') return v;
  return fallback;
}

/**
 * Check if a feature is enabled.
 * - isEnabled(app, page?, feature): app/page-level feature
 * - isEnabled(app, page, component, useCase): component-level use case
 */
export function isEnabled(
  app: App | string,
  pageOrFeature: Page | string | undefined,
  featureOrComponent?: Feature | string,
  useCase?: string
): boolean {
  if (useCase !== undefined && featureOrComponent !== undefined) {
    return resolveComponentUseCase(
      app,
      pageOrFeature as Page | string,
      featureOrComponent as string,
      useCase
    );
  }
  return resolveFeature(
    app,
    pageOrFeature as Page | string | undefined,
    (featureOrComponent ?? pageOrFeature) as Feature | string
  );
}

/**
 * Get raw feature flag value (no fallback to default).
 */
export function getFlag(
  app: App | string,
  page: Page | string | undefined,
  feature: Feature | string
): boolean | undefined {
  const appConfig = featureFlagsConfig[app];
  if (!appConfig) return undefined;

  if (page && appConfig.pages?.[page as Page]) {
    const v = appConfig.pages[page as Page]?.features?.[feature as Feature];
    if (typeof v === 'boolean') return v;
  }
  return appConfig.features?.[feature as Feature];
}

/**
 * Get raw component use-case flag (no fallback to default).
 */
export function getComponentFlag(
  app: App | string,
  page: Page | string | undefined,
  component: string,
  useCase: string
): boolean | undefined {
  const appConfig = featureFlagsConfig[app];
  if (!appConfig) return undefined;

  if (page && appConfig.pages?.[page as Page]) {
    const comp = appConfig.pages[page as Page]?.components?.[component];
    const v = comp?.[useCase];
    if (typeof v === 'boolean') return v;
  }
  const appComp = appConfig.components?.[component];
  return appComp?.[useCase];
}
