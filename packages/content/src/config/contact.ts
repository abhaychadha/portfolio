import { ContactConfig } from '../types';
import { ICONS } from '../assets/images';

export const contactConfig: ContactConfig = {
  title: "Let's connect",
  email: {
    label: 'Say hello at',
    value: 'robertgarcia@gmail.com',
  },
  resume: {
    label: "For more info, here's my resume",
    href: '#resume',
  },
  socialLinks: [
    {
      platform: 'linkedin',
      icon: ICONS.social.linkedinLarge,
      href: 'https://linkedin.com',
      ariaLabel: 'LinkedIn',
    },
    {
      platform: 'github',
      icon: ICONS.social.githubLarge,
      href: 'https://github.com',
      ariaLabel: 'GitHub',
    },
    {
      platform: 'twitter',
      icon: ICONS.social.twitter,
      href: 'https://twitter.com',
      ariaLabel: 'Twitter/X',
    },
    {
      platform: 'instagram',
      icon: ICONS.social.instagram,
      href: 'https://instagram.com',
      ariaLabel: 'Instagram',
    },
  ],
  form: {
    fields: [
      {
        name: 'name',
        label: 'Name',
        type: 'text',
        placeholder: 'John Doe',
      },
      {
        name: 'email',
        label: 'Email',
        type: 'email',
      },
      {
        name: 'subject',
        label: 'Subject',
        type: 'text',
      },
      {
        name: 'message',
        label: 'Message',
        type: 'textarea',
        rows: 4,
      },
    ],
    submitLabel: 'Submit',
  },
  copyright: '© 2023 Robert Garcia',
};
