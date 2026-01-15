# Portfolio Content Configuration System

## 🎯 Quick Start

### Updating Content

All content is centralized in `packages/content/src/config/`. Simply edit the configuration files:

```typescript
// Change hero section
packages/content/src/config/hero.ts

// Update projects
packages/content/src/config/projects.ts

// Modify contact info
packages/content/src/config/contact.ts
```

### Adding Images

1. Place image in organized folder:
   ```
   apps/host/public/assets/images/[category]/your-image.png
   ```

2. Add path constant:
   ```typescript
   // packages/content/src/assets/images.ts
   export const IMAGES = {
     projects: {
       yourProject: '/assets/images/projects/your-image.png',
     },
   };
   ```

3. Use in config:
   ```typescript
   // packages/content/src/config/projects.ts
   image: IMAGES.projects.yourProject
   ```

## 📦 Package Structure

```
@portfolio/content          # Content configuration package
├── config/                 # All content configs
│   ├── navigation.ts      # Navigation menu
│   ├── hero.ts            # Hero section
│   ├── projects.ts        # Projects data
│   ├── about.ts           # About section
│   ├── contact.ts         # Contact form
│   ├── metadata.ts        # Site metadata
│   └── cms-adapter.ts     # CMS migration layer
├── assets/
│   └── images.ts          # Asset path constants
└── types/
    └── index.ts           # TypeScript types
```

## 🗂️ Asset Organization

```
apps/host/public/assets/
├── images/
│   ├── hero/              # Hero section images
│   ├── projects/          # Project screenshots
│   └── decorative/        # Lines, underlines
└── icons/
    ├── social/            # Social media icons
    ├── ui/                # UI elements
    └── general/           # General icons
```

## 🚀 CMS Migration Ready

When you're ready to connect to a CMS, simply implement the adapter functions:

```typescript
// packages/content/src/config/cms-adapter.ts
export async function getHeroConfig(): Promise<HeroConfig> {
  // Replace with CMS API call
  return await fetch('/api/content/hero').then(r => r.json());
}
```

Then update components to use async data:

```typescript
// Before
import { heroConfig } from '@portfolio/content';

// After  
import { getHeroConfig } from '@portfolio/content';
const heroConfig = await getHeroConfig();
```

## 📚 Documentation

- **[CONTENT_CONFIG_GUIDE.md](./CONTENT_CONFIG_GUIDE.md)** - Complete usage guide
- **[CONTENT_CONFIGURATION_SUMMARY.md](./CONTENT_CONFIGURATION_SUMMARY.md)** - Implementation details
- **[BUNDLING_OPTIMIZATION.md](./BUNDLING_OPTIMIZATION.md)** - Performance optimization guide

## ✨ Benefits

- ✅ **Single Source of Truth** - All content in one place
- ✅ **Type Safe** - Full TypeScript support
- ✅ **CMS Ready** - Easy migration path
- ✅ **Optimized** - Tree-shakeable, code-splittable
- ✅ **Maintainable** - Clear separation of concerns
- ✅ **Reusable** - Share across micro-frontends

## 🎨 Example: Updating Your Portfolio

### 1. Change Your Name
```typescript
// packages/content/src/config/hero.ts
export const heroConfig = {
  name: 'your name.',  // Change this
  // ...
};

// packages/content/src/config/navigation.ts
export const navigationConfig = {
  brandName: 'your name',  // And this
};
```

### 2. Add a Project
```typescript
// packages/content/src/config/projects.ts
projects: [
  // ...existing projects,
  {
    id: 'my-new-project',
    title: 'My Awesome Project',
    description: 'What this project does...',
    image: IMAGES.projects.myNewProject,
    info: [
      { label: 'Year', value: '2024' },
      { label: 'Role', value: 'Full-stack Developer' },
    ],
    links: [
      { label: 'Live Demo', href: 'https://...', icon: ICONS.ui.arrow },
    ],
  },
]
```

### 3. Update Contact Info
```typescript
// packages/content/src/config/contact.ts
export const contactConfig = {
  email: {
    label: 'Say hello at',
    value: 'your.email@example.com',  // Your email
  },
  // ...
};
```

### 4. Change Site Metadata
```typescript
// packages/content/src/config/metadata.ts
export const siteMetadata = {
  title: 'Your Name - Your Title',
  description: 'Your description here',
  author: {
    name: 'Your Name',
    email: 'your.email@example.com',
    location: 'Your Location',
  },
};
```

## 🔧 Development

```bash
# Run dev server
npm run dev

# Content changes auto-reload
# No rebuild needed!
```

## 🌐 CMS Options (Future)

Compatible with popular headless CMS platforms:
- Contentful
- Sanity
- Strapi
- WordPress
- DatoCMS
- Any REST/GraphQL API

## 💡 Tips

1. **Always use constants** for asset paths
2. **Keep configs flat** for easy CMS mapping
3. **Add new content types** in `types/index.ts` first
4. **Document special cases** in config comments
5. **Test locally** before deploying

## 📊 Performance

- **Bundle Size**: ~10KB (minified)
- **Tree-Shakeable**: Only used configs included
- **Zero Runtime Cost**: Types compiled away
- **Optimized Assets**: Lazy loaded by feature

## 🐛 Troubleshooting

### Content not updating?
- Restart dev server: `npm run dev`

### Image not loading?
- Check path in `assets/images.ts`
- Verify file exists in `public/assets/`

### Type errors?
- Ensure types match in `types/index.ts`
- Check all required fields are provided

## 📝 License

Same as main project.
