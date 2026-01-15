import { render, screen } from '@testing-library/react';
import ProjectDetail from '../ProjectDetail';
import type { ProjectDetailProps } from '../ProjectDetail';

describe('ProjectDetail', () => {
  const mockProps: ProjectDetailProps = {
    title: 'Test Project',
    description: 'This is a test project description',
    info: [
      { label: 'Year', value: '2023' },
      { label: 'Role', value: 'Developer' },
    ],
    links: [
      { label: 'Live Demo', href: '#', icon: '/arrow.svg' },
    ],
  };

  it('renders the project detail component', () => {
    render(<ProjectDetail {...mockProps} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('This is a test project description')).toBeInTheDocument();
  });

  it('renders project info items', () => {
    render(<ProjectDetail {...mockProps} />);
    expect(screen.getByText('Year')).toBeInTheDocument();
    expect(screen.getByText('2023')).toBeInTheDocument();
    expect(screen.getByText('Role')).toBeInTheDocument();
    expect(screen.getByText('Developer')).toBeInTheDocument();
  });

  it('renders project links', () => {
    render(<ProjectDetail {...mockProps} />);
    const link = screen.getByText('Live Demo');
    expect(link).toBeInTheDocument();
    expect(link.closest('a')).toHaveAttribute('href', '#');
  });

  it('uses ProjectCard when useProjectCard is true', () => {
    render(<ProjectDetail {...mockProps} image="/test.png" useProjectCard={true} />);
    expect(screen.getByAltText('Project')).toBeInTheDocument();
  });

  it('renders custom image when useProjectCard is false', () => {
    render(<ProjectDetail {...mockProps} imageSrc="/custom.png" imageAlt="Custom Image" />);
    const image = screen.getByAltText('Custom Image');
    expect(image).toBeInTheDocument();
  });

  it('renders tag when provided', () => {
    render(<ProjectDetail {...mockProps} tag="Challenge" />);
    expect(screen.getByText('Challenge')).toBeInTheDocument();
  });
});
