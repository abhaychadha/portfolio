import type { FC } from 'react';
import './skills.css';

type SkillsProps = {
  id?: string;
  preview?: boolean;
};

type Skill = { name: string; level: number };
type SkillCategory = {
  title: string;
  accentClass: string;
  skills: Skill[];
};

const categories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    accentClass: 'skills-card--cyan',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'Next.js', level: 90 },
      { name: 'JavaScript (ES6+)', level: 94 },
      { name: 'Redux', level: 88 },
      { name: 'Tailwind CSS', level: 86 },
    ],
  },
  {
    title: 'Backend Development',
    accentClass: 'skills-card--green',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'GraphQL', level: 85 },
      { name: 'REST APIs', level: 90 },
      { name: 'Java', level: 78 },
      { name: 'Spring', level: 72 },
      { name: 'BFF Architecture', level: 87 },
    ],
  },
  {
    title: 'Database & Storage',
    accentClass: 'skills-card--purple',
    skills: [
      { name: 'MySQL', level: 80 },
      { name: 'PostgreSQL', level: 76 },
      { name: 'Caching Strategies', level: 89 },
      { name: 'Observability', level: 84 },
      { name: 'Cloud Cost Optimization', level: 86 },
      { name: 'Scalability Patterns', level: 90 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    accentClass: 'skills-card--teal',
    skills: [
      { name: 'Google Cloud Platform', level: 88 },
      { name: 'Docker', level: 84 },
      { name: 'Kubernetes', level: 82 },
      { name: 'CI/CD Pipelines', level: 90 },
      { name: 'Jenkins', level: 80 },
      { name: 'GitHub Actions', level: 85 },
    ],
  },
  {
    title: 'Architecture & Design',
    accentClass: 'skills-card--amber',
    skills: [
      { name: 'System Design', level: 91 },
      { name: 'Micro-frontends', level: 93 },
      { name: 'SSR / Isomorphic Apps', level: 89 },
      { name: 'Performance Optimization', level: 92 },
      { name: 'Tech Leadership', level: 90 },
      { name: 'Cross-functional Collaboration', level: 92 },
    ],
  },
  {
    title: 'Tools & Practices',
    accentClass: 'skills-card--rose',
    skills: [
      { name: 'Git & GitHub', level: 93 },
      { name: 'Webpack', level: 85 },
      { name: 'Jest', level: 87 },
      { name: 'A/B Testing', level: 86 },
      { name: 'Accessibility (WCAG)', level: 82 },
      { name: 'AI-assisted Development', level: 88 },
    ],
  },
];

const RemoteSkills: FC<SkillsProps> = ({ id = 'skills', preview = false }) => (
  <section id={id} className={`skills-section ${preview ? 'skills-section--preview' : ''}`}>
    <div className="skills-shell">
      <div className="skills-grid" role="list" aria-label="Technical skill categories">
        {categories.map((category) => (
          <article key={category.title} className={`skills-card ${category.accentClass}`} role="listitem">
            <h3>{category.title}</h3>
            <ul>
              {category.skills.map((skill) => (
                <li key={skill.name}>
                  <div className="skills-row">
                    <span>{skill.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default RemoteSkills;
