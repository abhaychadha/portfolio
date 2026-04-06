import underline from './decorative/underline.svg';
import underline1 from './decorative/underline1.svg';
import underline2 from './decorative/underline2.svg';
import underline3 from './decorative/underline3.svg';
import underline4 from './decorative/underline4.svg';
import line4 from './decorative/line-4.svg';
import line7 from './decorative/line7.svg';
import linkedin from './icons/social/linkedin.svg';
import linkedinLarge from './icons/social/linkedin-large.svg';
import github from './icons/social/github.svg';
import githubLarge from './icons/social/github-large.svg';
import twitter from './icons/social/group.svg';
import instagram from './icons/social/instagram.svg';
import circle from './icons/ui/circle.svg';
import arrow from './icons/ui/arrow.svg';
import file from './icons/general/file.svg';
import window from './icons/general/window.svg';
import globe from './icons/general/globe.svg';

/**
 * Centralized image asset paths
 * Organized by feature/domain for easy management
 */

export const IMAGES = {
  // Hero section
  hero: {
    portrait: '/assets/images/hero/portrait.jpeg',
  },
  
  // Projects (screenshots: Walmart, Sixt, Lowes)
  projects: {
    walmart: '/assets/images/projects/walmart.png',
    sixt: '/assets/images/projects/sixt.png',
    lowes: '/assets/images/projects/lowes.png',
  },
  
  // Decorative elements
  decorative: {
    underline,
    underline1,
    underline2,
    underline3,
    underline4,
    line4,
    line7,
  },
} as const;

export const ICONS = {
  // Social media
  social: {
    linkedin,
    linkedinLarge,
    github,
    githubLarge,
    twitter,
    instagram,
  },
  
  // UI elements
  ui: {
    circle,
    arrow,
  },
  
  // General
  general: {
    globe,
    file,
    window,
  },
} as const;

// Type helpers for better autocomplete
export type ImagePath = typeof IMAGES;
export type IconPath = typeof ICONS;
