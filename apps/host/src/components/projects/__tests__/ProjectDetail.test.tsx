import { render, screen } from '@testing-library/react';
import ProjectDetail from '../ProjectDetail';
import type { ProjectDetailProps } from '../ProjectDetail';
import { FeatureFlagsProvider } from '@/providers/FeatureFlagsProvider';
import { ICONS } from '@portfolio/content';

const mockProps: ProjectDetailProps = {
  title: 'Test Project',
  description: 'This is a test project description',
  info: [
    { label: 'Year', value: '2023' },
    { label: 'Role', value: 'Developer' },
  ],
  links: [
    { label: 'Live Demo', href: '#', icon: ICONS.ui.arrow },
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

  it('renders ProjectCard when image is provided', () => {
    render(wrapper({ image: '/test.png' }));
    expect(screen.getByAltText('Project')).toBeInTheDocument();
  });

  it('renders ProjectCard with imageSrc and imageAlt', () => {
    render(wrapper({ imageSrc: '/custom.png', imageAlt: 'Custom Image' }));
    expect(screen.getByAltText('Custom Image')).toBeInTheDocument();
  });

  it('renders tag when provided', () => {
    render(wrapper({ image: '/test.png', tag: 'Challenge' }));
    expect(screen.getByText('Challenge')).toBeInTheDocument();
  });
});
