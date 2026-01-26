import { render, screen } from '@testing-library/react';
import ProjectDetail from '../ProjectDetail';
import type { ProjectDetailProps } from '../ProjectDetail';
import { FeatureFlagsProvider } from '@/providers/FeatureFlagsProvider';

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

const wrapper = (props: Partial<ProjectDetailProps> = {}) => (
  <FeatureFlagsProvider app="host">
    <ProjectDetail {...mockProps} {...props} />
  </FeatureFlagsProvider>
);

describe('ProjectDetail', () => {
  it('renders the project detail component', () => {
    render(wrapper());
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('This is a test project description')).toBeInTheDocument();
  });

  it('renders project info items', () => {
    render(wrapper());
    expect(screen.getByText('Year')).toBeInTheDocument();
    expect(screen.getByText('2023')).toBeInTheDocument();
    expect(screen.getByText('Role')).toBeInTheDocument();
    expect(screen.getByText('Developer')).toBeInTheDocument();
  });

  it('renders project links', () => {
    render(wrapper());
    const link = screen.getByText('Live Demo');
    expect(link).toBeInTheDocument();
    expect(link.closest('a')).toHaveAttribute('href', '#');
  });

  it('uses ProjectCard when useProjectCard is true', () => {
    render(wrapper({ image: '/test.png', useProjectCard: true }));
    expect(screen.getByAltText('Project')).toBeInTheDocument();
  });

  it('renders custom image when useProjectCard is false', () => {
    render(wrapper({ imageSrc: '/custom.png', imageAlt: 'Custom Image' }));
    const image = screen.getByAltText('Custom Image');
    expect(image).toBeInTheDocument();
  });

  it('renders tag when provided', () => {
    render(wrapper({ tag: 'Challenge' }));
    expect(screen.getByText('Challenge')).toBeInTheDocument();
  });
});
