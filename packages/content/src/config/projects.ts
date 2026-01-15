import { ProjectsConfig } from '../types';
import { IMAGES, ICONS } from '../assets/images';

export const projectsConfig: ProjectsConfig = {
  title: 'Featured Projects',
  subtitle: 'Here are some of the selected projects that showcase my passion for front-end development.',
  projects: [
    {
      id: 'adventure-time-landing',
      image: IMAGES.projects.adventureTime,
      tag: 'Conceptual Work',
      title: 'Promotional landing page for our favorite show',
      description: 'Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures.',
      info: [
        { label: 'Year', value: '2023' },
        { label: 'Role', value: 'Front-end Developer' },
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
      id: 'world-news-blog',
      imageSrc: IMAGES.projects.worldNews,
      imageAlt: 'Blog site for World News',
      title: 'Blog site for World News',
      description: 'Mastered CSS Grid complexities in building an innovative news homepage, navigating intricate design decisions for a seamless user experience. Leveraged the challenge to enhance skills in front-end development.',
      info: [
        { label: 'Client', value: 'World News' },
        { label: 'Year', value: '2022' },
        { label: 'Role', value: 'Front-end Developer' },
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
      id: 'ecommerce-product-page',
      imageSrc: IMAGES.projects.ecommerce,
      imageAlt: 'E-commerce product page',
      tag: 'Challenge',
      title: 'E-commerce product page',
      description: 'Successfully crafted an engaging product page featuring a dynamic lightbox gallery and seamless cart functionality, showcasing proficiency in JavaScript development.',
      info: [
        { label: 'Year', value: '2022' },
        { label: 'Role', value: 'Front-end Developer' },
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
