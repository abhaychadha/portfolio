# Portfolio - Micro-Frontend Architecture

A modern portfolio application built with **Module Federation** using a micro-frontend architecture pattern. This project demonstrates how to build scalable, independently deployable frontend modules that can be composed together at runtime.

## 📋 Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [How It Works](#how-it-works)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

## 🎯 Overview

This repository is organized as a workspace monorepo:

- **Host App (`apps/host`)**: Next.js 15 portfolio shell used in production
- **Remote About (`apps/remote-about`)**: Webpack Module Federation remote for About experiments
- **Remote Projects (`apps/remote-projects`)**: Webpack Module Federation remote for Projects experiments
- **Shared Packages (`packages/*`)**:
  - `@portfolio/ui` for reusable UI (Line, Pill, Button, typography)
  - `@portfolio/content` for centralized content + asset mapping
  - `@portfolio/feature-flags` for app/component feature toggles
  - `@portfolio/types`, `@portfolio/utils` for shared code

Host pages consume shared packages directly via workspace dependencies and `transpilePackages`.

## 🏗️ Architecture

### Micro-Frontend Architecture Pattern

This project uses **Module Federation** (introduced in Webpack 5) to enable a micro-frontend architecture. Key concepts:

1. **Host Application**: The main application that consumes remote modules
2. **Remote Applications**: Independent applications that expose modules to be consumed by the host
3. **Runtime Integration**: Modules are loaded at runtime, not bundled together at build time
4. **Shared Dependencies**: Common dependencies (like React) are shared across applications to avoid duplication

### Architecture Diagram

```
┌─────────────────────────────────────────┐
│          Host Application               │
│         (Next.js 15 - Port 3000)        │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │  Consumes via Module Federation   │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
           │                    │
           │                    │
    ┌──────┴──────┐    ┌────────┴────────┐
    │             │    │                 │
┌───▼──────────┐  │    │  ┌──────────────▼──┐
│ Remote About │  │    │  │ Remote Projects │
│ Port 4001    │  │    │  │ Port 4002       │
│              │  │    │  │                 │
│ Exposes:     │  │    │  │ Exposes:        │
│ ./AboutSection│  │    │  │ ./ProjectsShowcase│
└──────────────┘  │    │  └─────────────────┘
                  │    │
                  └────┘
         Shared: React, React-DOM
```

### Key Benefits

- ✅ **Independent Development**: Each team can work on different micro-frontends independently
- ✅ **Independent Deployment**: Deploy updates to individual remotes without rebuilding the host
- ✅ **Technology Flexibility**: Each remote can use different versions of dependencies (with shared singletons)
- ✅ **Code Splitting**: Only load what's needed, when it's needed
- ✅ **Shared Dependencies**: Avoid duplicate code by sharing common libraries

## 🛠️ Tech Stack

### Host Application
- **Framework**: Next.js 15.1.6 (App Router)
- **React**: 19.0.0
- **Styling**: Tailwind CSS 3.4.1
- **Language**: TypeScript 5.x
- **Build Tool**: Next.js with Turbopack (dev mode)

### Remote Applications
- **Framework**: React 18.3.1
- **Build Tool**: Webpack 5.95.0 with Module Federation Plugin
- **Language**: TypeScript 5.6.2
- **Styling**: CSS Modules (css-loader + style-loader)
- **Dev Server**: Webpack Dev Server 5.1.0

### Shared Technologies
- **TypeScript**: Type-safe development across all apps
- **Module Federation**: Webpack 5's built-in module federation
- **ESLint**: Code linting (Next.js config in host)

## 📁 Project Structure

```
Portfolio/
├── apps/
│   ├── host/
│   │   ├── src/
│   │   │   ├── app/               # App Router + page composition
│   │   │   ├── components/        # Host sections (hero, projects, about, contact)
│   │   │   └── providers/         # Theme + feature flag providers
│   │   ├── public/                # Host-only static assets (e.g. resume)
│   │   ├── next.config.ts         # transpilePackages for workspace packages
│   │   └── package.json
│   ├── remote-about/              # Module Federation remote
│   └── remote-projects/           # Module Federation remote
├── packages/
│   ├── content/                   # Centralized content config + asset map
│   ├── feature-flags/             # App-level and component-level flags
│   ├── ui/                        # Shared UI components + typography primitives
│   ├── types/                     # Shared TypeScript contracts
│   └── utils/                     # Shared utilities
├── scripts/
│   └── capture-project-screenshots.cjs
└── package.json
```

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm**: v9.0.0 or higher (comes with Node.js)
- **Git**: For version control

You can verify your installations:

```bash
node --version
npm --version
git --version
```

## 🚀 Installation

This is a workspace monorepo. Install dependencies once from the repository root.

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd Portfolio
```

### Step 2: Install dependencies

```bash
npm install
```

## 💻 Development

### Running All Applications

#### Quick Start (Recommended)

Start all applications simultaneously from the root directory:

```bash
npm run dev
```

This will start all three applications in parallel with color-coded output:
- 🟢 Remote About on port 4001
- 🔵 Remote Projects on port 4002
- 🟣 Host Application on port 3000

#### Manual Start (Alternative)

If you prefer to run applications separately or need more control, you can start them in separate terminal windows/tabs:

**Terminal 1: Start Remote About (Port 4001)**
```bash
cd apps/remote-about
npm run dev
```

**Terminal 2: Start Remote Projects (Port 4002)**
```bash
cd apps/remote-projects
npm run dev
```

**Terminal 3: Start Host Application (Port 3000)**
```bash
cd apps/host
npm run dev
```

Or use the individual scripts from the root:
```bash
npm run dev:remote-about    # Start remote about only
npm run dev:remote-projects # Start remote projects only
npm run dev:host            # Start host only
```

### Development Workflow

1. **Start all applications** using `npm run dev` from the root
2. **Make changes** to any application
3. **Hot Module Replacement (HMR)** will automatically reload changes
4. **Verify** that changes in remotes are reflected in the host application

### Development URLs

- Host Application: http://localhost:3000
- Remote About: http://localhost:4001
- Remote Projects: http://localhost:4002

### Available Scripts

From the root directory, you can run:

| Script | Description |
|--------|-------------|
| `npm run dev` | Start all applications in parallel |
| `npm run dev:host` | Start only the host application |
| `npm run dev:remote-about` | Start only the remote-about app |
| `npm run dev:remote-projects` | Start only the remote-projects app |
| `npm run build` | Build all applications (remotes + host) |
| `npm run build:host` | Build only the host application |
| `npm run build:remote-about` | Build only the remote-about app |
| `npm run build:remote-projects` | Build only the remote-projects app |
| `npm run build:packages` | Build shared packages with build scripts |
| `npm run lint` | Run lint across workspaces (if present) |
| `npm run test` | Run tests across workspaces (if present) |
| `npm run screenshots:projects` | Capture/update project screenshots |

> **Note**: Host currently consumes shared workspace packages (`@portfolio/content`, `@portfolio/ui`, `@portfolio/feature-flags`, etc.) and is configured with `transpilePackages` in `apps/host/next.config.ts`.

## 🔧 How It Works

### Module Federation Configuration

#### Remote Applications

Each remote application uses `webpack.container.ModuleFederationPlugin` to expose components:

**remote-about/webpack.config.js:**
```javascript
new container.ModuleFederationPlugin({
  name: 'about',                          // Federation name
  filename: 'remoteEntry.js',             // Entry file name
  exposes: {
    './AboutSection': './src/RemoteAbout' // Exposed module path
  },
  shared: {
    react: { singleton: true },           // Shared dependency
    'react-dom': { singleton: true }
  }
})
```

**remote-projects/webpack.config.js:**
```javascript
new container.ModuleFederationPlugin({
  name: 'projects',
  filename: 'remoteEntry.js',
  exposes: {
    './ProjectsShowcase': './src/ProjectsShowcase'
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true }
  }
})
```

### Consuming Remotes in Host

To consume these remotes in the Next.js host application, you would typically:

1. **Configure Next.js Webpack** to use Module Federation
2. **Define remotes** in the host's webpack configuration
3. **Dynamically import** remote components in your pages

Example configuration (to be added to `next.config.ts`):

```typescript
const nextConfig: NextConfig = {
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
            react: { singleton: true },
            'react-dom': { singleton: true },
          },
        })
      );
    }
    return config;
  },
};
```

Then consume in components:

```typescript
const RemoteAbout = dynamic(() => import('about/AboutSection'), {
  ssr: false,
});
```

### Shared Dependencies

Both remotes and host share React and React-DOM as **singletons**. This means:
- Only one instance of React is loaded across all apps
- Prevents version conflicts and reduces bundle size
- Requires compatible React versions (currently 18.x in remotes, 19.x in host - may need alignment)

## 🏭 Building for Production

### Build All Applications

Build all applications at once from the root:

```bash
npm run build
```

This will build remotes first, then the host application.

### Build Individual Applications

#### Build Remote Applications

**Build both remotes:**
```bash
npm run build:remotes
```

**Build Remote About only:**
```bash
npm run build:remote-about
# or
cd apps/remote-about && npm run build
```

Output will be in `apps/remote-about/dist/`

**Build Remote Projects only:**
```bash
npm run build:remote-projects
# or
cd apps/remote-projects && npm run build
```

Output will be in `apps/remote-projects/dist/`

#### Build Host Application

```bash
npm run build:host
# or
cd apps/host && npm run build
```

Output will be in `apps/host/.next/`

### Production Deployment Considerations

1. **Remote Entry Files**: Ensure `remoteEntry.js` files from remotes are accessible
2. **CORS Configuration**: Configure proper CORS headers for remote entry files
3. **CDN/Hosting**: Consider hosting remotes on CDN for better performance
4. **Versioning**: Implement versioning strategy for remote entries
5. **Fallbacks**: Implement fallback mechanisms if remotes fail to load

## 🚢 Deployment

Each application can be deployed independently:

### Remote About Deployment

Deploy the `dist/` folder to a static host or web server. Ensure:
- `remoteEntry.js` is accessible
- CORS headers are configured
- The entry point URL is known by the host

### Remote Projects Deployment

Same as Remote About - deploy `dist/` folder independently.

### Host Application Deployment

Deploy using Next.js deployment options:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Custom Node.js server**

Update remote URLs in production configuration:

```typescript
remotes: {
  about: 'about@https://your-about-cdn.com/remoteEntry.js',
  projects: 'projects@https://your-projects-cdn.com/remoteEntry.js',
}
```

## 🐛 Troubleshooting

### Common Issues

#### Module Not Found Errors

**Problem**: Host can't find remote modules

**Solutions**:
- Ensure remote applications are running
- Verify remote URLs in host configuration
- Check that `remoteEntry.js` files are accessible
- Verify CORS headers allow requests from host origin

#### React Version Mismatch

**Problem**: "Invalid hook call" or React version conflicts

**Solutions**:
- Ensure React versions are compatible
- Verify shared dependencies are configured as singletons
- Consider aligning React versions across all apps

#### CORS Errors

**Problem**: Cross-origin requests blocked

**Solutions**:
- Add CORS headers in webpack dev server config:
  ```javascript
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
  ```
- For production, configure proper CORS headers on server/CDN

#### Hot Module Replacement Not Working

**Problem**: Changes don't reflect automatically

**Solutions**:
- Ensure all dev servers are running
- Clear browser cache
- Restart dev servers
- Check browser console for errors

#### Port Already in Use

**Problem**: Port 3000, 4001, or 4002 is already in use

**Solutions**:
- Change port in respective configuration files
- Kill process using the port:
  ```bash
  # macOS/Linux
  lsof -ti:4001 | xargs kill -9
  
  # Or use different ports
  PORT=4003 npm run dev
  ```

### Debugging Tips

1. **Check Browser Console**: Look for module loading errors
2. **Network Tab**: Verify remoteEntry.js files are loading
3. **Webpack Stats**: Use webpack-bundle-analyzer for bundle analysis
4. **Module Federation Tools**: Use browser extensions to inspect federated modules

## 📚 Additional Resources

- [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Micro-Frontends Guide](https://micro-frontends.org/)
- [Module Federation Examples](https://github.com/module-federation/module-federation-examples)

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test all applications independently
4. Test integration between host and remotes
5. Submit a pull request

## 📄 License

MIT

---

**Built with ❤️ using Module Federation**

