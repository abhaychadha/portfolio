import type { FeatureFlagsConfig } from '../types';
import { componentRegistry } from './components';
import { appFeatures } from './app-features';

/**
 * Build aggregated config from per-component configs.
 * All values on by default. Hierarchy: app → page → component → useCase.
 */
function buildHostConfig(): FeatureFlagsConfig['host'] {
  const features: Record<string, boolean> = { ...appFeatures.defaults };
  const components: Record<string, Record<string, boolean>> = {};
  const pages: Record<string, { features?: Record<string, boolean>; components?: Record<string, Record<string, boolean>> }> = {};

  for (const [_comp, { page, useCases, defaults }] of Object.entries(componentRegistry)) {
    const comp = _comp as string;
    const flags = { ...defaults } as Record<string, boolean>;

    if (page) {
      if (!pages[page]) pages[page] = { components: {} };
      if (!pages[page].components) pages[page].components = {};
      pages[page].components![comp] = flags;
    } else {
      components[comp] = flags;
    }
  }

  return {
    default: true,
    features,
    components,
    pages,
  };
}

export const featureFlagsConfig: FeatureFlagsConfig = {
  host: buildHostConfig(),
  'remote-about': {
    default: true,
    features: {},
    components: {},
    pages: {},
  },
  'remote-projects': {
    default: true,
    features: {},
    components: {},
    pages: {},
  },
};
