'use client';

import { useEffect } from 'react';

// This ensures that the theme is set before the page is rendered
// and prevents flash of incorrect theme
const ThemeScript = () => {
  const setThemeMode = `
    (function() {
      // Get stored theme or use system preference
      const storedTheme = localStorage.getItem('theme');
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme = storedTheme || (systemDark ? 'dark' : 'light');
      
      // Apply theme to document
      if (initialTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      // Set data-theme attribute for other scripts
      document.documentElement.setAttribute('data-theme', initialTheme);
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: setThemeMode }} />;
};

export default ThemeScript;
