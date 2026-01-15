import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ThemeProvider, useTheme } from '../ThemeProvider';

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

// Test component that uses the hook
function TestComponent() {
  const { theme, toggleTheme, mounted } = useTheme();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <span data-testid="mounted">{mounted ? 'true' : 'false'}</span>
      <button onClick={toggleTheme} data-testid="toggle">
        Toggle
      </button>
    </div>
  );
}

describe('ThemeProvider', () => {
  beforeEach(() => {
    localStorageMock.clear();
    document.documentElement.removeAttribute('data-theme');
  });

  it('renders children correctly', () => {
    render(
      <ThemeProvider>
        <div data-testid="child">Test Child</div>
      </ThemeProvider>
    );

    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('initializes with a theme', async () => {
    const { container } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    await waitFor(() => {
      const themeElement = container.querySelector('[data-testid="theme"]');
      expect(themeElement?.textContent).toMatch(/^(light|dark)$/);
    });
  });

  it('toggles theme correctly', async () => {
    const { container } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const themeElement = container.querySelector('[data-testid="theme"]');
    const toggleButton = container.querySelector('[data-testid="toggle"]') as HTMLElement;

    const initialTheme = themeElement?.textContent;

    fireEvent.click(toggleButton);

    await waitFor(() => {
      const newTheme = themeElement?.textContent;
      expect(newTheme).not.toBe(initialTheme);
      expect(newTheme).toMatch(/^(light|dark)$/);
    });
  });

  it('sets data-theme attribute on document', async () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    await waitFor(() => {
      const dataTheme = document.documentElement.getAttribute('data-theme');
      expect(dataTheme).toMatch(/^(light|dark)$/);
    });
  });

  it('throws error when useTheme is used outside ThemeProvider', () => {
    // Suppress console.error for this test
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

    expect(() => {
      render(<TestComponent />);
    }).toThrow('useTheme must be used within a ThemeProvider');

    consoleSpy.mockRestore();
  });
});
