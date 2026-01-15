# Content Configuration Guide

## Overview

This portfolio application uses a centralized content configuration system that makes all static text and images easily manageable and ready for CMS migration.

## Architecture

```
packages/
└── content/                    # @portfolio/content package
    ├── src/
    │   ├── config/            # Content configurations
    │   │   ├── navigation.ts  # Navigation menu
    │   │   ├── hero.ts        # Hero section
    │   │   ├── projects.ts    # Projects showcase
    │   │   ├── about.ts       # About section
    │   │   ├── contact.ts     # Contact form
    │   │   ├── metadata.ts    # Site metadata
    │   │   └── cms-adapter.ts # CMS migration helpers
    │   ├── assets/
    │   │   └── images.ts      # Asset path constants
    │   └── types/
    │       └── index.ts       # Type definitions
    └── README.md

apps/host/public/assets/        # Organized static assets
├── images/
│   ├── hero/                  # Hero section images
│   ├── projects/              # Project images
│   └── decorative/            # Decorative elements
└── icons/
    ├── social/                # Social media icons
    ├── ui/                    # UI icons
    └── general/               # General purpose icons
```

## Benefits

### 1. **Single Source of Truth**
All content is defined in one place (`@portfolio/content`), making updates easy and consistent.

### 2. **Type Safety**
Full TypeScript support with strongly-typed configurations ensures compile-time safety.

### 3. **CMS-Ready**
Designed with flat, serializable structures that map directly to CMS content models.

### 4. **Organized Assets**
Assets are organized by domain/feature, making them easy to find and manage.

### 5. **Reusable Across Apps**
Content config can be used by host, remote-about, and remote-projects apps.

## Usage Examples

### Updating Content

**Before (hardcoded in component):**
```tsx
const HeroSection = () => (
  <h1>hi, i am robert garcia.</h1>
);
```

**After (using config):**
```tsx
import { heroConfig } from '@portfolio/content';

const HeroSection = () => (
  <h1>{heroConfig.greeting} {heroConfig.name}</h1>
);
```

### Updating Navigation

Edit `packages/content/src/config/navigation.ts`:
```typescript
export const navigationConfig: NavigationConfig = {
  brandName: 'robert garcia',
  links: [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
};
```

### Adding a Project

Edit `packages/content/src/config/projects.ts`:
```typescript
{
  id: 'new-project',
  title: 'My New Project',
  description: 'Project description here...',
  image: IMAGES.projects.newProject,
  // ... rest of project data
}
```

### Changing Images

1. Add new image to appropriate folder:
   ```
   apps/host/public/assets/images/projects/new-project.png
   ```

2. Update asset paths in `packages/content/src/assets/images.ts`:
   ```typescript
   export const IMAGES = {
     projects: {
       newProject: '/assets/images/projects/new-project.png',
     },
   };
   ```

3. Use in config:
   ```typescript
   image: IMAGES.projects.newProject
   ```

## CMS Migration Path

The architecture is designed for easy CMS migration. Here's how:

### Current (Static Config)
```typescript
import { heroConfig } from '@portfolio/content';

export default function HeroSection() {
  return <h1>{heroConfig.title}</h1>;
}
```

### Future (CMS)
```typescript
import { getHeroConfig } from '@portfolio/content';

export default async function HeroSection() {
  const heroConfig = await getHeroConfig(); // Fetches from CMS
  return <h1>{heroConfig.title}</h1>;
}
```

### CMS Adapter Implementation

The `cms-adapter.ts` file provides placeholder functions ready for CMS integration:

```typescript
// Current implementation (returns static config)
export async function getHeroConfig(): Promise<HeroConfig> {
  return Promise.resolve(heroConfig);
}

// Future CMS implementation
export async function getHeroConfig(): Promise<HeroConfig> {
  return await cmsClient.getEntry('hero');
}
```

## Recommended CMS Options

1. **Contentful** - Enterprise-grade, great GraphQL API
2. **Sanity** - Highly customizable, real-time editing
3. **Strapi** - Open-source, self-hosted
4. **DatoCMS** - Developer-friendly, good asset management
5. **WordPress (Headless)** - Familiar CMS with REST/GraphQL API

## Content Structure

### Navigation
- Brand name
- Menu links (label, href)

### Hero
- Greeting and name
- Tagline
- Primary CTA (label, action)
- Social links
- Portrait image

### Projects
- Section title and subtitle
- Project list:
  - Title, description
  - Image
  - Tags
  - Info items (Year, Role, Client)
  - Links (Live Demo, GitHub)

### About
- Title
- Headline
- Full description
- CTA link

### Contact
- Section title
- Email address
- Resume link
- Social links
- Form fields configuration
- Copyright text

### Site Metadata
- Page title
- Meta description
- Author information

## Optimization

### Asset Organization
Assets are organized by feature for better code splitting:
```
/assets/images/hero/       → Loaded on hero section
/assets/images/projects/   → Loaded on projects section
/assets/icons/social/      → Loaded where social links appear
```

### Next.js Image Optimization
All images use Next.js `Image` component for automatic optimization:
- Automatic WebP/AVIF conversion
- Responsive sizing
- Lazy loading (except hero with `priority`)
- Blur placeholder support

### Bundle Optimization
- Content config is tree-shakeable
- Only imported configs are bundled
- Types are compiled away (zero runtime cost)

## Maintenance

### Adding New Content Sections

1. Create type in `packages/content/src/types/index.ts`
2. Create config in `packages/content/src/config/[section].ts`
3. Export from `packages/content/src/index.ts`
4. Add CMS adapter function in `cms-adapter.ts`
5. Use in components

### Updating Assets

1. Add/replace files in appropriate folder
2. Update paths in `assets/images.ts`
3. No component changes needed if using constants

### Testing Content Changes

```bash
# From root
npm run dev

# App will hot-reload with content changes
```

## Best Practices

1. **Always use asset constants** - Never hardcode paths
2. **Keep configs flat** - Makes CMS mapping easier
3. **Use semantic naming** - Clear, descriptive property names
4. **Document special cases** - Add comments for complex logic
5. **Version control assets** - Keep images in git for now
6. **Test CMS migration early** - Try connecting to a test CMS

## Future Enhancements

- [ ] Add content validation schema (Zod)
- [ ] Implement preview mode for CMS
- [ ] Add content versioning
- [ ] Multi-language support
- [ ] Asset CDN integration
- [ ] Content search functionality
