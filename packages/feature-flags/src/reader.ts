import { isEnabled } from './resolve';
import { componentRegistry } from './config/components';
import { appFeatures } from './config/app-features';
import type { App, Page } from './types';

/**
 * Get resolved flags for a component. Reads from feature-flags config only.
 * Use this to drill down flags into components; keep components free of isEnabled calls.
 * When page is omitted, uses the component's configured page from registry.
 */
export function getComponentFlags(
  app: App | string,
  page: Page | string | undefined,
  component: string
): Record<string, boolean> {
  const reg = componentRegistry[component as keyof typeof componentRegistry];
  if (!reg) return {};

  const effectivePage = page ?? reg.page ?? undefined;
  const { useCases } = reg;
  const out: Record<string, boolean> = {};
  for (const uc of useCases) {
    out[uc] = isEnabled(app, effectivePage, component, uc);
  }
  return out;
}

/**
 * Get resolved app-level features (smoothScroll, sectionSeparators).
 * Use for page-level concerns; values come from feature-flags only.
 */
export function getAppFeatures(app: App | string): Record<string, boolean> {
  const out: Record<string, boolean> = {};
  for (const uc of appFeatures.useCases) {
    out[uc] = isEnabled(app, undefined, uc);
  }
  return out;
}
