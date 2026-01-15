import { render, screen, waitFor } from '@testing-library/react';
import Navigation from '../Navigation';
import { ThemeProvider } from '@/providers/ThemeProvider';

describe('Navigation', () => {
  it('renders the navigation component', () => {
    render(
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    );
    expect(screen.getByText('robert garcia')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    );
    expect(screen.getByText('Work')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders theme toggle button', async () => {
    render(
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    );
    
    // Wait for component to mount and button to appear
    await waitFor(() => {
      const toggleButton = screen.getByRole('button', { name: /mode/i });
      expect(toggleButton).toBeInTheDocument();
    });
  });
});
