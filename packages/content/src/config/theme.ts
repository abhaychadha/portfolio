import { ThemeConfig } from '../types';

export const themeConfig: ThemeConfig = {
  light: {
    colors: {
      background: '#ffffff',
      foreground: '#0a0a0a',
      primary: '#6b9c3f',
      neutralOffwhite: '#666666', // Darker for better contrast on white
      neutralDarkGray: '#333333', // Much darker for better contrast
      neutralBlack: '#0a0a0a', // Same as foreground for consistency
      neutralGray: '#f5f5f5', // Light gray for backgrounds
    },
  },
  dark: {
    colors: {
      background: '#0a0a0a',
      foreground: '#ffffff',
      primary: '#d3e97a',
      neutralOffwhite: '#c7c7c7',
      neutralDarkGray: '#484848',
      neutralBlack: '#0a0a0a',
      neutralGray: '#1a1a1a',
    },
  },
};
