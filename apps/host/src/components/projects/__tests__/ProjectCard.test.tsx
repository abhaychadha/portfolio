import { render, screen } from '@testing-library/react';
import ProjectCard from '../ProjectCard';

describe('ProjectCard', () => {
  const defaultProps = {
    role: 'Staff Software Engineer',
    company: 'Walmart',
    duration: '2023 - Present',
    location: 'Bengaluru, India',
    summary: 'Built scalable membership platform',
    achievements: ['Improved conversion', 'Reduced latency'],
    technologies: ['React', 'Next.js'],
  };

  it('renders the project card component', () => {
    render(<ProjectCard {...defaultProps} />);
    expect(screen.getByText('Staff Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Walmart')).toBeInTheDocument();
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
