import { HeroConfig } from '../types';
import { IMAGES, ICONS } from '../assets/images';

export const heroConfig: HeroConfig = {
  greeting: 'hi, i am',
  name: 'Abhay Chadha.',
  tagline: 'Staff Software Engineer in Bengaluru. 15+ years building scalable B2C web apps with modern JavaScript, micro-frontends, and cloud-native platforms. Leads teams and mentors engineers.',
  primaryCta: {
    label: 'Contact Me',
    action: '#contact',
  },
  socialLinks: [
    {
      platform: 'linkedin',
      icon: ICONS.social.linkedin,
      href: 'https://www.linkedin.com/in/abhaychadha',
      ariaLabel: 'LinkedIn',
    },
    {
      platform: 'github',
      icon: ICONS.social.github,
      href: 'https://github.com/abhaychadha',
      ariaLabel: 'GitHub',
    },
  ],
  portraitImage: {
    src: IMAGES.hero.portrait,
    alt: 'Abhay Chadha',
    width: 600,
    height: 663,
  },
};
