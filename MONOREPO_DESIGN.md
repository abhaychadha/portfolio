# Monorepo Design for Portfolio Micro-Frontend Architecture

## 🏗️ Architecture Overview

This document outlines the monorepo structure for a scalable micro-frontend portfolio application using Webpack Module Federation.

## 📁 Proposed Monorepo Structure

```
portfolio-monorepo/
├── package.json                    # Root workspace config
├── pnpm-workspace.yaml            # Workspace configuration (if using pnpm)
├── turbo.json                      # Turborepo config (optional, recommended)
├── .gitignore
├── README.md
│
├── apps/                           # Applications (runnable apps)
│   ├── host/                       # Main container/host application
│   │   ├── package.json
│   │   ├── next.config.ts
│   │   ├── webpack.config.js       # Module Federation config
│   │   └── src/
│   │       └── app/
│   │
│   ├── remote-about/               # About section micro-frontend
│   │   ├── package.json
│   │   ├── webpack.config.js
│   │   └── src/
│   │
│   ├── remote-projects/            # Projects showcase micro-frontend
│   │   ├── package.json
│   │   ├── webpack.config.js
│   │   └── src/
│   │
│   └── remote-contact/             # Contact form micro-frontend (future)
│       ├── package.json
│       ├── webpack.config.js
│       └── src/
│
├── packages/                       # Shared packages (libraries)
│   ├── ui/                         # Shared UI component library
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── vite.config.ts          # or rollup for building library
│   │   └── src/
│   │       ├── components/
│   │       │   ├── Button/
│   │       │   ├── Card/
│   │       │   ├── Input/
│   │       │   └── index.ts        # Public API exports
│   │       ├── hooks/
│   │       ├── utils/
│   │       └── index.ts
│   │
│   ├── config/                     # Shared configuration
│   │   ├── package.json
│   │   ├── eslint-config/
│   │   ├── typescript-config/
│   │   └── tailwind-config/
│   │
│   ├── types/                      # Shared TypeScript types
│   │   ├── package.json
│   │   └── src/
│   │       └── index.ts
│   │
│   └── utils/                      # Shared utilities
│       ├── package.json
│       └── src/
│
└── tools/                          # Build tools and scripts (optional)
    ├── build-scripts/
    └── deployment/
```

## 🎯 Package Responsibilities

### Apps (Applications)

#### `apps/host`
- **Type**: Container/Host Application (Next.js)
- **Purpose**: Main application shell
- **Responsibilities**:
  - Application routing
  - Layout and navigation
  - Consuming remote micro-frontends
  - SEO and meta tags
  - Global state management (if needed)

#### `apps/remote-about`
- **Type**: Remote Micro-Frontend
- **Purpose**: About section
- **Exposes**: `./AboutSection`
- **Dependencies**: `@portfolio/ui`, `@portfolio/types`

#### `apps/remote-projects`
- **Type**: Remote Micro-Frontend
- **Purpose**: Projects showcase
- **Exposes**: `./ProjectsShowcase`
- **Dependencies**: `@portfolio/ui`, `@portfolio/types`

### Packages (Libraries)

#### `packages/ui`
- **Type**: Shared Component Library
- **Purpose**: Reusable UI components
- **Build**: Vite/Rollup (for optimal tree-shaking)
- **Format**: ES Modules + TypeScript
- **Exports**: Individual components + barrel exports

#### `packages/types`
- **Type**: Shared Type Definitions
- **Purpose**: TypeScript interfaces and types
- **Usage**: Imported by all apps and packages

#### `packages/config`
- **Type**: Configuration packages
- **Purpose**: Shared ESLint, TypeScript, Tailwind configs
- **Usage**: Extended by all apps

#### `packages/utils`
- **Type**: Utility functions
- **Purpose**: Shared helper functions
- **Usage**: Used across apps and packages

## 🔧 Package Manager Recommendations

### Option 1: pnpm (Recommended)
**Why pnpm?**
- ✅ Fast installs (hard links, content-addressable storage)
- ✅ Disk space efficient
- ✅ Strict dependency resolution
- ✅ Workspace support built-in
- ✅ Good for monorepos

**Setup:**
```yaml
# pnpm-workspace.yaml
packages:
  - 'apps/*'
  - 'packages/*'
```

### Option 2: npm workspaces
**Why npm?**
- ✅ Built into npm (no extra tool needed)
- ✅ Good for smaller teams
- ✅ Simpler setup

**Setup:**
```json
{
  "workspaces": [
    "apps/*",
    "packages/*"
  ]
}
```

### Option 3: Yarn workspaces
**Why Yarn?**
- ✅ Mature workspace support
- ✅ Good plugin ecosystem
- ✅ Works well with Turborepo

## 🚀 Build Tool Recommendation: Turborepo

**Why Turborepo?**
- ✅ Incremental builds (only rebuild what changed)
- ✅ Parallel task execution
- ✅ Caching for faster builds
- ✅ Works with any package manager
- ✅ Pipeline configuration

**Example `turbo.json`:**
```json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "dist/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {
      "dependsOn": ["^build"]
    },
    "test": {
      "dependsOn": ["^build"],
      "outputs": ["coverage/**"]
    }
  }
}
```

## 📦 Package Naming Convention

Use scoped packages for clarity:

```
@portfolio/ui          # Component library
@portfolio/types       # Shared types
@portfolio/utils       # Utilities
@portfolio/config-eslint
@portfolio/config-typescript
@portfolio/config-tailwind
```

## 🔗 Module Federation Setup

### Host App Configuration

```javascript
// apps/host/webpack.config.js or next.config.ts
const ModuleFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.plugins.push(
        new ModuleFederationPlugin({
          name: 'host',
          remotes: {
            about: 'about@http://localhost:4001/remoteEntry.js',
            projects: 'projects@http://localhost:4002/remoteEntry.js',
          },
          shared: {
            react: { singleton: true, requiredVersion: '^19.0.0' },
            'react-dom': { singleton: true, requiredVersion: '^19.0.0' },
            '@portfolio/ui': { singleton: true },
          },
        })
      );
    }
    return config;
  },
};
```

### Remote App Configuration

```javascript
// apps/remote-about/webpack.config.js
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'about',
      filename: 'remoteEntry.js',
      exposes: {
        './AboutSection': './src/RemoteAbout',
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
        '@portfolio/ui': { singleton: true },
      },
    }),
  ],
};
```

## 📝 Package.json Structure

### Root package.json

```json
{
  "name": "portfolio-monorepo",
  "private": true,
  "workspaces": [
    "apps/*",
    "packages/*"
  ],
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "lint": "turbo run lint",
    "test": "turbo run test",
    "clean": "turbo run clean",
    "dev:host": "turbo run dev --filter=host",
    "dev:about": "turbo run dev --filter=remote-about",
    "dev:projects": "turbo run dev --filter=remote-projects"
  },
  "devDependencies": {
    "turbo": "latest",
    "typescript": "^5.0.0"
  }
}
```

### Package.json for Shared Library

```json
{
  "name": "@portfolio/ui",
  "version": "1.0.0",
  "main": "./dist/index.js",
  "module": "./dist/index.esm.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.esm.js",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./styles": "./dist/styles.css"
  },
  "scripts": {
    "build": "vite build",
    "dev": "vite build --watch"
  },
  "peerDependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  }
}
```

## 🔄 Development Workflow

### 1. Initial Setup
```bash
# Install dependencies for all workspaces
npm install  # or pnpm install

# Build shared packages first
npm run build --workspace=@portfolio/ui
npm run build --workspace=@portfolio/types
```

### 2. Development
```bash
# Start all apps in parallel
npm run dev

# Start specific apps
npm run dev:host
npm run dev:about
npm run dev:projects

# Build all
npm run build
```

### 3. Adding a New Package
```bash
# Create new package directory
mkdir -p packages/new-package

# Initialize package.json
cd packages/new-package
npm init -y

# Install in root to link workspace
cd ../..
npm install
```

## 🎨 Component Library Structure

```
packages/ui/
├── package.json
├── tsconfig.json
├── vite.config.ts
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.test.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   └── index.ts
│   │   ├── Card/
│   │   ├── Input/
│   │   └── index.ts              # Barrel export
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   └── index.ts
│   ├── utils/
│   │   └── index.ts
│   ├── styles/
│   │   └── globals.css
│   └── index.ts                  # Main export
├── dist/                         # Build output
└── README.md
```

## 🔐 Dependency Management Strategy

### Shared Dependencies (singletons)
- `react`
- `react-dom`
- `@portfolio/ui`

### App-Specific Dependencies
- Framework-specific (Next.js, Vue, etc.)
- Routing libraries
- State management

### Package Dependencies
- Development tools (Vite, TypeScript)
- Testing libraries
- Build tools

## 🧪 Testing Strategy

### Component Library Tests
- Unit tests for each component
- Visual regression tests (optional)
- Storybook for development

### App Tests
- Integration tests
- E2E tests (Playwright/Cypress)
- Module Federation integration tests

## 📊 Build & Deployment

### Build Order
1. Shared packages (`@portfolio/types`, `@portfolio/utils`)
2. Component library (`@portfolio/ui`)
3. Remote micro-frontends
4. Host application

### Deployment Strategy

**Option 1: Independent Deployment**
- Each remote deployed separately
- Host references remote URLs
- ✅ Independent releases
- ❌ URL management complexity

**Option 2: Coordinated Deployment**
- All apps deployed together
- ✅ Version consistency
- ❌ Tighter coupling

**Option 3: Hybrid**
- Critical packages: coordinated
- Remotes: independent
- ✅ Balance of flexibility and stability

## 🔍 Benefits of This Structure

1. **Code Reusability**: Shared components and utilities
2. **Independent Development**: Teams can work on separate remotes
3. **Type Safety**: Shared types across all apps
4. **Consistent Styling**: Shared design system via `@portfolio/ui`
5. **Faster Builds**: Incremental builds with Turborepo
6. **Better DX**: Single repo, unified tooling
7. **Scalability**: Easy to add new remotes or packages

## 🚦 Migration Strategy

### Phase 1: Setup Monorepo Structure
1. Reorganize existing apps into `apps/` directory
2. Set up workspace configuration
3. Configure package manager

### Phase 2: Extract Shared Code
1. Create `@portfolio/types` package
2. Create `@portfolio/ui` component library
3. Extract common utilities to `@portfolio/utils`

### Phase 3: Configure Module Federation
1. Set up webpack configs for Module Federation
2. Update imports to use shared packages
3. Test remote loading

### Phase 4: Optimize
1. Set up Turborepo for faster builds
2. Configure caching
3. Optimize bundle sizes

## 📚 Additional Considerations

### TypeScript Path Mapping
Use path aliases in each app's `tsconfig.json`:
```json
{
  "compilerOptions": {
    "paths": {
      "@portfolio/ui": ["../../packages/ui/src"],
      "@portfolio/types": ["../../packages/types/src"]
    }
  }
}
```

### Storybook (Optional)
Set up Storybook for component library:
```
packages/ui/
└── .storybook/
    └── main.ts
```

### CI/CD Pipeline
- Build all packages
- Test all packages
- Deploy remotes independently
- Deploy host (which references remotes)

## 🎯 Next Steps

1. Choose package manager (pnpm recommended)
2. Set up workspace configuration
3. Reorganize existing code into new structure
4. Extract shared components to `@portfolio/ui`
5. Configure Module Federation
6. Set up Turborepo (optional but recommended)
7. Update CI/CD pipelines
