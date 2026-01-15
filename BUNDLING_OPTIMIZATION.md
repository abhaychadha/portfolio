# Bundling Optimization for Monorepo

## Overview

This document outlines the bundling optimization strategy for the portfolio monorepo, designed to maximize performance across the micro-frontend architecture.

## Current Architecture

```
Portfolio Monorepo
├── apps/
│   ├── host (Next.js 15 with Turbopack)
│   ├── remote-about (Webpack 5 + Module Federation)
│   └── remote-projects (Webpack 5 + Module Federation)
└── packages/
    ├── @portfolio/content (Content config)
    ├── @portfolio/ui (Shared components)
    ├── @portfolio/types (TypeScript types)
    └── @portfolio/utils (Utilities)
```

## Optimization Strategies

### 1. Package-Level Optimizations

#### Content Package (@portfolio/content)
```typescript
// Tree-shakeable exports
export { heroConfig } from './config/hero';
export { projectsConfig } from './config/projects';
// Only imported configs are bundled
```

**Benefits:**
- Zero runtime cost for unused configs
- Individual config imports reduce bundle size
- TypeScript types are compiled away

#### UI Package (@portfolio/ui)
```typescript
// Named exports for better tree-shaking
export { Line } from './components/common';
export { ProjectCard } from './components/projects';
```

**Benefits:**
- Import only needed components
- Dead code elimination works effectively
- Each component can be code-split

### 2. Next.js (Host) Optimizations

#### Configuration
```typescript
// next.config.ts
const nextConfig: NextConfig = {
  transpilePackages: [
    '@portfolio/content',
    '@portfolio/ui',
    '@portfolio/types',
    '@portfolio/utils'
  ],
  
  // Future enhancements
  experimental: {
    optimizePackageImports: ['@portfolio/ui', '@portfolio/content'],
  },
};
```

#### Automatic Optimizations
- **Turbopack (Dev)**: Faster builds, better HMR
- **SWC Compiler**: 17x faster than Babel
- **Image Optimization**: Automatic WebP/AVIF, lazy loading
- **Font Optimization**: Self-hosted Google Fonts
- **Code Splitting**: Automatic route-based splitting

#### Asset Organization
```
public/assets/
├── images/
│   ├── hero/       → Loaded on hero section only
│   ├── projects/   → Lazy loaded on scroll
│   └── decorative/ → Split by usage
└── icons/
    ├── social/     → Loaded where needed
    └── ui/         → Small, can be inlined
```

**Benefits:**
- Browser caches assets by folder
- Lazy loading by feature reduces initial load
- Shared assets load once across pages

### 3. Webpack (Remote Apps) Optimizations

#### Module Federation Configuration
```javascript
// webpack.config.js for remotes
new ModuleFederationPlugin({
  name: 'about',
  filename: 'remoteEntry.js',
  exposes: {
    './AboutSection': './src/RemoteAbout'
  },
  shared: {
    react: { 
      singleton: true, 
      eager: false,      // Load when needed
      requiredVersion: deps.react 
    },
    'react-dom': { 
      singleton: true, 
      eager: false 
    },
    '@portfolio/ui': {  // Share UI components
      singleton: true,
      eager: false
    },
  }
});
```

**Benefits:**
- Shared dependencies load once
- Lazy loading of remote modules
- Version alignment across apps

#### Webpack Production Optimizations
```javascript
optimization: {
  splitChunks: {
    chunks: 'all',
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        priority: 10,
      },
      common: {
        minChunks: 2,
        priority: 5,
        reuseExistingChunk: true,
      },
      styles: {
        name: 'styles',
        type: 'css/mini-extract',
        chunks: 'all',
        enforce: true,
      },
    },
  },
  runtimeChunk: 'single', // Runtime in separate file
  minimize: true,
  minimizer: [
    new TerserPlugin({
      terserOptions: {
        compress: {
          drop_console: true, // Remove console.logs
        },
      },
    }),
    new CssMinimizerPlugin(),
  ],
}
```

### 4. Shared Package Optimization

#### TypeScript Configuration
```json
{
  "compilerOptions": {
    "declaration": true,       // Generate .d.ts files
    "declarationMap": true,    // Source maps for types
    "skipLibCheck": true,      // Faster builds
    "importHelpers": true,     // Reuse tslib helpers
    "isolatedModules": true    // Better tree-shaking
  }
}
```

#### Package Structure
```
packages/content/
├── src/              # Source files
│   ├── config/      # Split by feature
│   ├── assets/      # Path constants only
│   └── types/       # Compiled away
└── dist/            # Optional: Pre-compiled output
```

**Best Practices:**
- Keep source in `src/`, reference in `package.json`
- Use `"type": "module"` for better tree-shaking
- Avoid side effects (`"sideEffects": false`)

### 5. Asset Optimization

#### Images
```typescript
// Optimized with Next.js Image
<Image
  src={IMAGES.hero.portrait}
  alt="Portrait"
  width={600}
  height={663}
  priority          // Above fold: load immediately
  sizes="600px"     // Responsive sizing hint
/>

<Image
  src={IMAGES.projects.image}
  alt="Project"
  loading="lazy"    // Below fold: lazy load
  quality={85}      // Balance quality/size
/>
```

**Automatic Next.js Optimizations:**
- WebP/AVIF format conversion
- Responsive image sizes
- Blur placeholders
- CDN-ready URLs

#### SVG Icons
```typescript
// Small icons: Inline as components (for critical icons)
export const ArrowIcon = () => (
  <svg>...</svg>
);

// Large/many icons: Use Image component
<Image src={ICONS.social.github} width={32} height={32} />
```

### 6. Runtime Performance

#### Code Splitting Strategy
```typescript
// Route-based (automatic in Next.js)
app/
├── page.tsx           → Main bundle
├── about/page.tsx     → About chunk
└── contact/page.tsx   → Contact chunk

// Component-based (manual)
const DynamicComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Spinner />,
  ssr: false, // Client-side only if needed
});
```

#### Lazy Loading Content
```typescript
// Load remote modules on interaction
const RemoteProjects = dynamic(
  () => import('projects/ProjectsShowcase'),
  { ssr: false }
);

// Trigger on scroll/intersection
const [showProjects, setShowProjects] = useState(false);
// Use IntersectionObserver to load when visible
```

### 7. Build Optimization Commands

```json
{
  "scripts": {
    // Development - Fast rebuilds
    "dev": "concurrently \"npm:dev:*\"",
    "dev:host": "next dev --turbopack",
    
    // Production - Optimized builds
    "build": "npm run build:packages && npm run build:apps",
    "build:packages": "npm run build -w @portfolio/ui -w @portfolio/content",
    "build:apps": "npm run build -w host -w remote-about -w remote-projects",
    
    // Analysis
    "analyze": "ANALYZE=true npm run build",
    "analyze:host": "cd apps/host && npm run build -- --analyze",
  }
}
```

### 8. Caching Strategy

#### Browser Caching
```
# Static assets (immutable)
/assets/images/  → Cache: 1 year (immutable)
/assets/icons/   → Cache: 1 year (immutable)

# JavaScript bundles (with hash)
/_next/static/   → Cache: 1 year (immutable)

# HTML (dynamic)
/                → Cache: no-cache, revalidate
```

#### Build Caching
```bash
# Turbo repo (future enhancement)
npx turbo run build --cache-dir=.turbo

# Benefits:
# - Cache build outputs
# - Skip unchanged packages
# - Parallel builds
# - Remote caching option
```

### 9. Monitoring & Metrics

#### Bundle Analysis
```bash
# Next.js
npm install @next/bundle-analyzer
ANALYZE=true npm run build

# Webpack
npm install webpack-bundle-analyzer
```

#### Lighthouse Metrics (Goals)
- **Performance**: > 90
- **First Contentful Paint**: < 1.8s
- **Largest Contentful Paint**: < 2.5s
- **Total Blocking Time**: < 200ms
- **Cumulative Layout Shift**: < 0.1

### 10. Future Enhancements

#### Turborepo Integration
```json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "dist/**"]
    },
    "dev": {
      "cache": false
    }
  }
}
```

**Benefits:**
- Incremental builds
- Remote caching
- Parallel execution
- Task orchestration

#### CDN Integration
```typescript
// next.config.ts
{
  images: {
    domains: ['cdn.example.com'],
    loader: 'custom',
  }
}
```

#### Module Federation Enhancements
```javascript
// Host consumes remotes
remotes: {
  about: 'about@https://cdn.example.com/remotes/about/remoteEntry.js',
  projects: 'projects@https://cdn.example.com/remotes/projects/remoteEntry.js',
}
```

## Recommendations

### Immediate (Already Implemented)
- ✅ Centralized content configuration
- ✅ Organized asset structure
- ✅ Tree-shakeable packages
- ✅ Next.js transpilePackages
- ✅ Image optimization

### Short Term (Next Steps)
1. Add bundle analyzer to track sizes
2. Implement lazy loading for images
3. Add compression (gzip/brotli)
4. Set up proper caching headers
5. Add performance monitoring

### Long Term (Future)
1. Migrate to Turborepo
2. Implement CDN for assets
3. Add remote caching
4. Progressive Web App (PWA)
5. Edge rendering for static content

## Performance Checklist

- [ ] Bundle size < 200KB (main)
- [ ] Images optimized (WebP/AVIF)
- [ ] Lazy loading below fold
- [ ] Code splitting by route
- [ ] Shared dependencies deduplicated
- [ ] CSS extracted and minified
- [ ] Dead code eliminated
- [ ] Source maps disabled in production
- [ ] Console logs removed
- [ ] Lighthouse score > 90
