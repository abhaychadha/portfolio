/**
 * @portfolio/content
 * 
 * Centralized content configuration package
 * All static content, text, and asset paths are defined here
 * 
 * This package is designed to be easily migrated to a CMS or data source
 */

// Export all content configurations
export { navigationConfig } from './config/navigation';
export { heroConfig } from './config/hero';
export { projectsConfig } from './config/projects';
export { aboutConfig } from './config/about';
export { contactConfig } from './config/contact';
export { siteMetadata } from './config/metadata';
export { themeConfig } from './config/theme';

// Export CMS adapters for future migration
export {
  getNavigationConfig,
  getHeroConfig,
  getProjectsConfig,
  getAboutConfig,
  getContactConfig,
  getSiteMetadata,
} from './config/cms-adapter';

// Export asset paths
export { IMAGES, ICONS } from './assets/images';
export type { ImagePath, IconPath } from './assets/images';

// Export types
export type {
  ImageAsset,
  LinkItem,
  SocialLink,
  InfoItem,
  ProjectData,
  NavigationConfig,
  HeroConfig,
  ProjectsConfig,
  AboutConfig,
  ContactConfig,
  SiteMetadata,
  ThemeColors,
  ThemeConfig,
} from './types';
