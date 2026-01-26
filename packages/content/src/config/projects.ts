import { ProjectsConfig } from '../types';
import { IMAGES, ICONS } from '../assets/images';

export const projectsConfig: ProjectsConfig = {
  title: 'Featured Projects',
  subtitle: 'Selected initiatives from 15+ years building scalable B2C web applications at enterprise scale.',
  projects: [
    {
      id: 'walmart-plus-sams-club',
      image: IMAGES.projects.walmart,
      tag: 'Enterprise',
      title: "Walmart Plus & Sam's Club membership platform",
      description: "Led modernization of the Walmart Plus platform (CA & MX) and Sam's Club membership funnel using React, Next.js, TypeScript, and GraphQL—achieving 2× subscription growth and 25% responsiveness improvement. Built caching for customer data and authored 10+ technical design specs.",
      info: [
        { label: 'Year', value: '2023 – Present' },
        { label: 'Role', value: 'Staff Software Engineer' },
        { label: 'Client', value: 'Walmart' },
      ],
      links: [
        {
          label: 'Live Demo',
          href: '#',
          icon: ICONS.ui.arrow,
          underline: IMAGES.decorative.underline,
        },
        {
          label: 'See on Github',
          href: '#',
          icon: ICONS.social.github,
          underline: IMAGES.decorative.underline1,
        },
      ],
      useProjectCard: true,
    },
    {
      id: 'sixt-mobile-checkin-microfrontends',
      imageSrc: IMAGES.projects.sixt,
      imageAlt: 'Sixt mobile check-in and micro-frontend platform',
      tag: 'Platform',
      title: 'Sixt mobile check-in & micro-frontend platform',
      description: "Spearheaded documentation and mobile check-in platform; built web check-in from scratch (15% fewer counter pickups). Introduced micro-frontend architecture on sixt.com post-purchase flows. Drove 20% conversion improvement via performance and A/B testing.",
      info: [
        { label: 'Client', value: 'Sixt' },
        { label: 'Year', value: '2021 – 2023' },
        { label: 'Role', value: 'Software Development Engineer III' },
      ],
      links: [
        {
          label: 'View project',
          href: '#',
          icon: ICONS.ui.arrow,
          underline: IMAGES.decorative.underline2,
        },
      ],
      useProjectCard: false,
    },
    {
      id: 'lowes-search-plp',
      imageSrc: IMAGES.projects.lowes,
      imageAlt: "Lowe's search and product listing",
      tag: 'E-commerce',
      title: "Lowe's search & product listing (lowes.com)",
      description: "Led front-end for lowes.com search and product listing. Implemented isomorphic architecture and SSR with Node.js BFF. Improved web vitals and observability, optimizing GCP cloud costs.",
      info: [
        { label: 'Client', value: "Lowe's" },
        { label: 'Year', value: '2020 – 2021' },
        { label: 'Role', value: 'Lead Software Engineer' },
      ],
      links: [
        {
          label: 'Live Demo',
          href: '#',
          icon: ICONS.ui.arrow,
          underline: IMAGES.decorative.underline,
        },
        {
          label: 'See on Github',
          href: '#',
          icon: ICONS.social.github,
          underline: IMAGES.decorative.underline1,
        },
      ],
      useProjectCard: false,
    },
  ],
};
