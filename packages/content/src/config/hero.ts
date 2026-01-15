import { HeroConfig } from '../types';
import { IMAGES, ICONS } from '../assets/images';

export const heroConfig: HeroConfig = {
  greeting: 'hi, i am',
  name: 'robert garcia.',
  tagline: 'A Sydney based front-end developer passionate about building accessible and user friendly websites.',
  primaryCta: {
    label: 'Contact Me',
    action: '#contact',
  },
  socialLinks: [
    {
      platform: 'linkedin',
      icon: ICONS.social.linkedin,
      href: 'https://linkedin.com',
      ariaLabel: 'LinkedIn',
    },
    {
      platform: 'github',
      icon: ICONS.social.github,
      href: 'https://github.com',
      ariaLabel: 'GitHub',
    },
  ],
  portraitImage: {
    src: IMAGES.hero.portrait,
    alt: 'Robert Garcia',
    width: 600,
    height: 663,
  },
};
