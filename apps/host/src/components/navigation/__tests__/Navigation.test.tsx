import { render, screen, waitFor } from '@testing-library/react';
import Navigation from '../Navigation';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { FeatureFlagsProvider } from '@/providers/FeatureFlagsProvider';

const wrapper = (
  <ThemeProvider>
    <FeatureFlagsProvider app="host">
      <Navigation />
    </FeatureFlagsProvider>
  </ThemeProvider>
);

describe('Navigation', () => {
  it('renders the navigation component', () => {
    render(wrapper);
    expect(screen.getByText('Abhay Chadha')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(wrapper);
    expect(screen.getByText('Work')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders theme toggle button', async () => {
    render(wrapper);
    
    // Wait for component to mount and button to appear
    await waitFor(() => {
      const toggleButton = screen.getByRole('button', { name: /mode/i });
      expect(toggleButton).toBeInTheDocument();
    });
  });
});
