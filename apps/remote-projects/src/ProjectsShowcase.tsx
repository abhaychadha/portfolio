import type { FC } from 'react';
import './projects.css';

export type ProjectsShowcaseProps = {
  id?: string;
  preview?: boolean;
};

const featuredProjects = [
  {
    title: 'Aurora Research Lab',
    description: 'A storytelling experience for climate discoveries with data-driven 3D scenes.',
    stack: ['Three.js', 'React', 'Postprocessing'],
    url: '#'
  },
  {
    title: 'Atelier Tools',
    description: 'Design system playground for rapid experiments with creative coders.',
    stack: ['Next.js', 'Radix', 'Motion One'],
    url: '#'
  },
  {
    title: 'Soundwave',
    description: 'Audio-reactive journey that syncs visuals to curated playlists.',
    stack: ['Web Audio', 'Canvas', 'Tailwind'],
    url: '#'
  }
];

const ProjectsShowcase: FC<ProjectsShowcaseProps> = ({ id = 'projects', preview = false }) => (
  <section
    id={id}
    aria-labelledby={`${id}-title`}
    className={`projects-section ${preview ? 'projects-section--preview' : ''}`}
  >
    <div className="projects-heading">
      <p className="eyebrow">Selected projects</p>
      <h2 id={`${id}-title`}>Impactful collaborations</h2>
      <p>
        Interfaces created with artists, labs, and ambitious founders. Each build pairs
        delightful motion with resilient architecture.
      </p>
    </div>
    <div role="list" className="projects-grid">
      {featuredProjects.map((project) => (
        <article role="listitem" key={project.title} className="project-card">
          <div className="project-card__body">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="stack" aria-label="Tech stack">
              {project.stack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
          <a className="project-card__link" href={project.url} aria-label={`Open ${project.title}`}>
            Dive in →
          </a>
        </article>
      ))}
    </div>
  </section>
);

export default ProjectsShowcase;
