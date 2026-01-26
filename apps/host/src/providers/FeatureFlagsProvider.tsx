'use client';

import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from 'react';
import { getComponentFlags, getAppFeatures } from '@portfolio/feature-flags';

type App = string;

interface FeatureFlagsContextValue {
  app: App;
  getComponentFlags: (component: string) => Record<string, boolean>;
  getAppFeatures: () => Record<string, boolean>;
}

const FeatureFlagsContext = createContext<FeatureFlagsContextValue | null>(null);

export interface FeatureFlagsProviderProps {
  app?: App;
  children: ReactNode;
}

export function FeatureFlagsProvider({
  app = 'host',
  children,
}: FeatureFlagsProviderProps) {
  const value = useMemo<FeatureFlagsContextValue>(() => ({
    app,
    getComponentFlags: (component: string) =>
      getComponentFlags(app, undefined, component),
    getAppFeatures: () => getAppFeatures(app),
  }), [app]);

  return (
    <FeatureFlagsContext.Provider value={value}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}

export function useFeatureFlagsContext(): FeatureFlagsContextValue {
  const ctx = useContext(FeatureFlagsContext);
  if (!ctx) {
    throw new Error('useFeatureFlagsContext must be used within FeatureFlagsProvider');
  }
  return ctx;
}

/** Resolved flags for a component. Reads from feature-flags package only. */
export function useComponentFlags(component: string): Record<string, boolean> {
  const { getComponentFlags } = useFeatureFlagsContext();
  return getComponentFlags(component);
}

/** Resolved app-level features (smoothScroll, sectionSeparators). */
export function useAppFeatures(): Record<string, boolean> {
  const { getAppFeatures } = useFeatureFlagsContext();
  return getAppFeatures();
}
