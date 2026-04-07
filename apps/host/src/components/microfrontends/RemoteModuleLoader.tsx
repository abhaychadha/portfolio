'use client';

import { ComponentType, FC, useEffect, useState } from "react";

type RemoteContainer = {
  init?: (shareScope: unknown) => Promise<void>;
  get: (module: string) => Promise<() => { default: ComponentType<Record<string, unknown>> }>;
};

export type RemoteModuleLoaderProps = {
  remoteName: string;
  remoteUrl: string;
  exposedModule: string;
  moduleProps?: Record<string, unknown>;
  loadingFallback?: React.ReactNode;
  errorFallback?: React.ReactNode;
  onLoadError?: (error: unknown) => void;
};

const RemoteModuleLoader: FC<RemoteModuleLoaderProps> = ({
  remoteName,
  remoteUrl,
  exposedModule,
  moduleProps,
  loadingFallback,
  errorFallback,
  onLoadError,
}) => {
  const [RemoteComponent, setRemoteComponent] = useState<ComponentType<Record<string, unknown>> | null>(null);
  const [loadError, setLoadError] = useState(false);
  const [retryKey, setRetryKey] = useState(0);

  useEffect(() => {
    let mounted = true;

    const loadRemoteModule = async () => {
      if (mounted) {
        setLoadError(false);
      }

      const remoteEntryUrl = `${remoteUrl.replace(/\/$/, "")}/remoteEntry.js`;
      const scriptId = `mf-${remoteName}`;
      let script = document.getElementById(scriptId) as HTMLScriptElement | null;

      if (!script) {
        script = document.createElement("script");
        script.id = scriptId;
        script.src = remoteEntryUrl;
        script.type = "text/javascript";
        script.async = true;
        document.head.appendChild(script);
      }

      await new Promise<void>((resolve, reject) => {
        if (script?.dataset.loaded === "true") {
          resolve();
          return;
        }
        script!.onload = () => {
          if (script) script.dataset.loaded = "true";
          resolve();
        };
        script!.onerror = () => reject(new Error(`Failed to load ${remoteName} remoteEntry`));
      });

      const remoteContainer = (window as unknown as Record<string, unknown>)[remoteName] as RemoteContainer | undefined;
      if (!remoteContainer) {
        throw new Error(`Remote container ${remoteName} unavailable`);
      }

      // Some Next/Webpack runtime combinations don't expose share runtime globals consistently.
      // Gracefully initialize sharing when available and fall back to an empty scope otherwise.
      const initSharing = window.__webpack_init_sharing__;
      const shareScopes = window.__webpack_share_scopes__;
      const defaultShareScope = shareScopes?.default ?? {};

      if (initSharing) {
        await initSharing("default");
      }

      if (remoteContainer.init) {
        try {
          await remoteContainer.init(defaultShareScope);
        } catch (error) {
          // Ignore duplicate init calls from HMR/re-renders.
          const message = error instanceof Error ? error.message : String(error);
          if (!message.toLowerCase().includes("already been initialized")) {
            throw error;
          }
        }
      }

      const factory = await remoteContainer.get(exposedModule);
      const Module = factory();

      if (mounted) {
        setRemoteComponent(() => Module.default);
        setLoadError(false);
      }
    };

    loadRemoteModule().catch((error) => {
      if (mounted) {
        setLoadError(true);
        setRemoteComponent(null);
      }
      // Basic telemetry hook point for remote module failures.
      onLoadError?.(error);
      if (!onLoadError) {
        // eslint-disable-next-line no-console
        console.error(`[RemoteModuleLoader] Failed loading ${remoteName}:${exposedModule}`, error);
      }
    });

    return () => {
      mounted = false;
    };
  }, [remoteName, remoteUrl, exposedModule, retryKey, onLoadError]);

  if (RemoteComponent) {
    return <RemoteComponent {...(moduleProps ?? {})} />;
  }

  if (loadError) {
    return (
      <div className="rounded-[12px] border border-neutral-dark-gray bg-neutral-gray/30 p-6 flex flex-col gap-4">
        {errorFallback ?? (
          <p className="font-manrope text-neutral-offwhite">Failed to load remote module.</p>
        )}
        <button
          type="button"
          onClick={() => {
            setLoadError(false);
            setRetryKey((prev) => prev + 1);
          }}
          className="bg-primary text-neutral-black font-manrope font-bold uppercase text-sm px-4 py-2 rounded-[100px] w-fit"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <>
      {loadingFallback ?? (
        <div className="rounded-[12px] border border-neutral-dark-gray bg-neutral-gray/30 p-6">
          <p className="font-manrope text-neutral-offwhite">Loading remote module...</p>
        </div>
      )}
    </>
  );
};

export default RemoteModuleLoader;
