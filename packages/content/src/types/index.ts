/**
 * Content configuration types
 * Designed to be CMS-compatible with flat, serializable structures
 */

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface LinkItem {
  label: string;
  href: string;
  icon?: string;
  underline?: string;
}

export interface SocialLink {
  platform: string;
  icon: string;
  href: string;
  ariaLabel: string;
}

export interface InfoItem {
  label: string;
  value: string;
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  image?: string;
  imageSrc?: string;
  imageAlt?: string;
  tag?: string;
  info: InfoItem[];
  links: LinkItem[];
}

export interface NavigationConfig {
  brandName: string;
  links: Array<{
    label: string;
    href: string;
  }>;
}

export interface HeroConfig {
  greeting: string;
  name: string;
  tagline: string;
  primaryCta: {
    label: string;
    action: string;
  };
  socialLinks: SocialLink[];
  portraitImage: ImageAsset;
}

export interface ProjectsConfig {
  title: string;
  subtitle: string;
  projects: ProjectData[];
}

export interface AboutConfig {
  title: string;
  headline: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface ContactConfig {
  title: string;
  email: {
    label: string;
    value: string;
  };
  resume: {
    label: string;
    href: string;
  };
  socialLinks: SocialLink[];
  form: {
    fields: Array<{
      name: string;
      label: string;
      type: 'text' | 'email' | 'textarea';
      placeholder?: string;
      rows?: number;
    }>;
    submitLabel: string;
  };
  copyright: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  author: {
    name: string;
    email: string;
    location: string;
  };
}

export interface ThemeColors {
  background: string;
  foreground: string;
  primary: string;
  neutralOffwhite: string;
  neutralDarkGray: string;
  neutralBlack: string;
  neutralGray: string;
}

export interface ThemeConfig {
  light: {
    colors: ThemeColors;
  };
  dark: {
    colors: ThemeColors;
  };
}
