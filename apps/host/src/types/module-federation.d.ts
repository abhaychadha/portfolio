declare global {
  interface Window {
    skills?: {
      init: (shareScope: unknown) => Promise<void>;
      get: (module: string) => Promise<() => { default: React.ComponentType<{ id?: string; preview?: boolean }> }>;
    };
    __webpack_init_sharing__?: (scope: string) => Promise<void>;
    __webpack_share_scopes__?: Record<string, unknown>;
  }
}

export {};
