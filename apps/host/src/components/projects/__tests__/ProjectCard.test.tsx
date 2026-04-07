import { render, screen } from '@testing-library/react';
import { ProjectCard } from '@portfolio/ui';

describe('ProjectCard', () => {
  const defaultProps = {
    title: 'Walmart Plus & Sam\'s Club membership platform',
    description: 'Led modernization of membership platforms.',
    imageSrc: '/assets/images/projects/walmart.png',
    imageAlt: 'Walmart project',
    role: 'Staff Software Engineer',
    company: 'Walmart',
    duration: '2023 - Present',
    location: 'Bengaluru, India',
    achievements: ['Improved conversion', 'Reduced latency'],
    technologies: ['React', 'Next.js'],
  };

  it('renders the project card component', () => {
    render(<ProjectCard {...defaultProps} />);
    expect(screen.getByText('Walmart Plus & Sam\'s Club membership platform')).toBeInTheDocument();
    expect(screen.getAllByText('Walmart').length).toBeGreaterThan(0);
  });

  it('applies custom className', () => {
    const { container } = render(<ProjectCard {...defaultProps} className="custom-class" />);
    const card = container.querySelector('.custom-class');
    expect(card).toBeInTheDocument();
  });

  it('renders achievements and technologies', () => {
    render(<ProjectCard {...defaultProps} />);
    expect(screen.getByText('Improved conversion')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
  });
});
