'use client';

import { FC } from 'react';
import { useTheme } from '@/providers/ThemeProvider';

const ThemeToggle: FC = () => {
  const { theme, toggleTheme, mounted } = useTheme();

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="w-14 h-7 bg-neutral-gray rounded-full opacity-50" aria-hidden="true" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 bg-neutral-gray rounded-full p-1 transition-colors duration-300 hover:bg-neutral-dark-gray flex items-center"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div
        className={`w-5 h-5 bg-primary rounded-full transition-transform duration-300 flex items-center justify-center text-xs ${
          theme === 'dark' ? 'translate-x-7' : 'translate-x-0'
        }`}
      >
        <span>{theme === 'dark' ? '🌙' : '☀️'}</span>
      </div>
    </button>
  );
};

export default ThemeToggle;
