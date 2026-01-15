# @portfolio/content

Centralized content configuration package for the portfolio application.

## Purpose

This package serves as a single source of truth for all static content, making it:
- Easy to update content without touching component code
- Ready for migration to a CMS or data source
- Maintainable and scalable across the monorepo

## Structure

```
src/
├── config/           # Content configurations by feature
│   ├── navigation.ts
│   ├── hero.ts
│   ├── projects.ts
│   ├── about.ts
│   └── contact.ts
├── assets/           # Asset path constants
│   ├── images.ts
│   └── icons.ts
├── types/            # Content-specific types
│   └── index.ts
└── index.ts          # Main export
```

## Usage

```typescript
import { heroConfig, projectsConfig } from '@portfolio/content';

// Use in components
const HeroSection = () => {
  return (
    <h1>{heroConfig.title}</h1>
  );
};
```

## CMS Migration Path

This structure is designed to be easily replaced with API calls:

```typescript
// Current
import { heroConfig } from '@portfolio/content';

// Future CMS
const heroConfig = await fetchContent('hero');
```
