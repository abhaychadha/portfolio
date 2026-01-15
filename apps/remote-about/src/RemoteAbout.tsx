import type { FC } from 'react';
import './about.css';

export type RemoteAboutProps = {
  id?: string;
  preview?: boolean;
};

const RemoteAbout: FC<RemoteAboutProps> = ({ id = 'about', preview = false }) => (
  <section
    id={id}
    aria-labelledby={`${id}-title`}
    className={`about-section ${preview ? 'about-section--preview' : ''}`}
  >
    <div className="about-section__glow" aria-hidden />
    <div className="about-card" role="article" aria-describedby={`${id}-body`}>
      <p className="eyebrow" aria-label="Greeting">Crafting joyful digital stories</p>
      <h2 id={`${id}-title`}>Hi, I am Avery — a creative frontend engineer.</h2>
      <p id={`${id}-body`}>
        I turn ambitious ideas into immersive, accessible experiences. I love
        blending motion, tactile details, and thoughtful code to deliver
        moments that feel alive.
      </p>
      <ul className="about-tags" aria-label="Focus areas">
        <li>Creative development</li>
        <li>3D & motion</li>
        <li>Inclusive design</li>
      </ul>
      <div className="cta-row">
        <button className="primary-cta" aria-label="View recent work button">
          View recent work
        </button>
        <button className="ghost-cta" aria-label="Download resume button">
          Download résumé
        </button>
      </div>
    </div>
  </section>
);

export default RemoteAbout;
