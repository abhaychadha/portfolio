/**
 * Centralized image asset paths
 * Organized by feature/domain for easy management
 */

export const IMAGES = {
  // Hero section
  hero: {
    portrait: '/assets/images/hero/portrait.png',
  },
  
  // Projects
  projects: {
    adventureTime: '/assets/images/projects/work.png',
    worldNews: '/assets/images/projects/image10.png',
    ecommerce: '/assets/images/projects/image9.png',
  },
  
  // Decorative elements
  decorative: {
    underline: '/assets/images/decorative/underline.svg',
    underline1: '/assets/images/decorative/underline1.svg',
    underline2: '/assets/images/decorative/underline2.svg',
    underline3: '/assets/images/decorative/underline3.svg',
    underline4: '/assets/images/decorative/underline4.svg',
    line4: '/assets/images/decorative/line-4.svg',
    line7: '/assets/images/decorative/line7.svg',
  },
} as const;

export const ICONS = {
  // Social media
  social: {
    linkedin: '/assets/icons/social/linkedin.svg',
    linkedinLarge: '/assets/icons/social/linkedin-large.svg',
    github: '/assets/icons/social/github.svg',
    githubLarge: '/assets/icons/social/github-large.svg',
    twitter: '/assets/icons/social/group.svg',
    instagram: '/assets/icons/social/instagram.svg',
  },
  
  // UI elements
  ui: {
    circle: '/assets/icons/ui/circle.svg',
    arrow: '/assets/icons/ui/arrow.svg',
  },
  
  // General
  general: {
    globe: '/assets/icons/general/globe.svg',
    file: '/assets/icons/general/file.svg',
    window: '/assets/icons/general/window.svg',
  },
} as const;

// Type helpers for better autocomplete
export type ImagePath = typeof IMAGES;
export type IconPath = typeof ICONS;
