import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import ThemeToggle from '../ThemeToggle';
import { ThemeProvider } from '@/providers/ThemeProvider';

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    length: 0,
    key: jest.fn(),
  };
})();

global.localStorage = localStorageMock as Storage;

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(() => ({
    matches: false,
    media: '',
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('ThemeToggle', () => {
  beforeEach(() => {
    localStorageMock.clear();
  });

  it('renders theme toggle button', async () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    // Wait for component to mount
    await waitFor(() => {
      const button = screen.getByRole('button', { name: /mode/i });
      expect(button).toBeInTheDocument();
    });
  });

  it('toggles between light and dark themes', async () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    // Wait for mount
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 100));
    });

    const button = screen.getByRole('button', { name: /mode/i });
    expect(button).toBeInTheDocument();

    // Get initial theme
    const initialContent = button.textContent;

    // Click to toggle
    fireEvent.click(button);

    // Theme should have changed
    await waitFor(() => {
      expect(button.textContent).not.toBe(initialContent);
    });
  });

  it('persists theme preference to localStorage', async () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    // Wait for mount
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 100));
    });

    const button = screen.getByRole('button', { name: /mode/i });

    // Click to toggle
    fireEvent.click(button);

    // Should save to localStorage
    await waitFor(() => {
      const savedTheme = localStorage.getItem('theme');
      expect(savedTheme).toBeTruthy();
      expect(['light', 'dark']).toContain(savedTheme);
    });
  });
});
