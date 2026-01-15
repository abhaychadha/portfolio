import { render, screen } from '@testing-library/react';
import ProjectCard from '../ProjectCard';

describe('ProjectCard', () => {
  const defaultProps = {
    image: '/test-image.png',
  };

  it('renders the project card component', () => {
    render(<ProjectCard {...defaultProps} />);
    expect(screen.getByAltText('Project')).toBeInTheDocument();
  });

  it('renders with optional tag', () => {
    render(<ProjectCard {...defaultProps} tag="Test Tag" />);
    expect(screen.getByText('Test Tag')).toBeInTheDocument();
  });

  it('does not render tag when not provided', () => {
    render(<ProjectCard {...defaultProps} />);
    expect(screen.queryByText('Test Tag')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<ProjectCard {...defaultProps} className="custom-class" />);
    const card = container.querySelector('.custom-class');
    expect(card).toBeInTheDocument();
  });

  it('has correct image source', () => {
    render(<ProjectCard {...defaultProps} />);
    const image = screen.getByAltText('Project');
    expect(image).toHaveAttribute('src', expect.stringContaining('test-image.png'));
  });
});
