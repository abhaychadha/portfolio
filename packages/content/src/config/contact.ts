import { ContactConfig } from '../types';
import { ICONS } from '../assets/images';

export const contactConfig: ContactConfig = {
  title: "Let's connect",
  email: {
    label: 'Say hello at',
    value: 'abhay.chadha48@gmail.com',
  },
  resume: {
    label: "For more info, here's my resume",
    href: '/Abhay_Chadha_CV.docx',
  },
  socialLinks: [
    {
      platform: 'linkedin',
      icon: ICONS.social.linkedinLarge,
      href: 'https://www.linkedin.com/in/abhaychadha',
      ariaLabel: 'LinkedIn',
    },
    {
      platform: 'github',
      icon: ICONS.social.githubLarge,
      href: 'https://github.com/abhaychadha',
      ariaLabel: 'GitHub',
    },
    {
      platform: 'twitter',
      icon: ICONS.social.twitter,
      href: '#',
      ariaLabel: 'Twitter/X',
    },
    {
      platform: 'instagram',
      icon: ICONS.social.instagram,
      href: '#',
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
  copyright: '© 2025 Abhay Chadha',
};
