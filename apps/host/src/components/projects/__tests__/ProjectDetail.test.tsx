import { render, screen } from '@testing-library/react';
import ProjectDetail from '../ProjectDetail';
import type { ProjectDetailProps } from '../ProjectDetail';
import { FeatureFlagsProvider } from '@/providers/FeatureFlagsProvider';

const mockProps: ProjectDetailProps = {
  role: 'Lead Software Architect',
  company: 'Tech Innovations Inc.',
  duration: '2022 - Present',
  location: 'San Francisco, CA',
  summary: 'Leading architecture design for cloud-native applications.',
  achievements: ['Built microservices platform', 'Reduced cloud cost by 40%'],
  technologies: ['Kubernetes', 'AWS', 'React'],
  initials: 'TI',
};

const wrapper = (props: Partial<ProjectDetailProps> = {}) => (
  <FeatureFlagsProvider app="host">
    <ProjectDetail {...mockProps} {...props} />
  </FeatureFlagsProvider>
);

describe('ProjectDetail', () => {
  it('renders the project detail component', () => {
    render(wrapper());
    expect(screen.getByText('Lead Software Architect')).toBeInTheDocument();
    expect(screen.getByText('Tech Innovations Inc.')).toBeInTheDocument();
  });

  it('renders summary and meta', () => {
    render(wrapper());
    expect(screen.getByText('Leading architecture design for cloud-native applications.')).toBeInTheDocument();
    expect(screen.getByText('2022 - Present')).toBeInTheDocument();
    expect(screen.getByText('San Francisco, CA')).toBeInTheDocument();
  });

  it('renders achievements and technologies', () => {
    render(wrapper());
    expect(screen.getByText('Built microservices platform')).toBeInTheDocument();
    expect(screen.getByText('Kubernetes')).toBeInTheDocument();
  });
});
