'use client';

import { useTheme } from './ThemeProvider';

export function FloatingThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  // Render the appropriate icon based on the current theme
  const renderIcon = () => {
    if (theme === 'dark') {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5 text-yellow-300"
        >
          <path
            fillRule="evenodd"
            d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z"
            clipRule="evenodd"
          />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5 text-gray-700"
        >
          <path
            d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zm0 8a5 5 0 110-10 5 5 0 010 10zM2 10a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 012 10zm14 0a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM4.343 4.343a.75.75 0 011.061 0l1.5 1.5a.75.75 0 01-1.06 1.06l-1.5-1.5a.75.75 0 010-1.06zM14.197 14.197a.75.75 0 011.06 0l1.5 1.5a.75.75 0 01-1.06 1.06l-1.5-1.5a.75.75 0 010-1.06zM4.343 15.657a.75.75 0 010-1.06l1.5-1.5a.75.75 0 111.06 1.06l-1.5 1.5a.75.75 0 01-1.06 0zM14.197 5.803a.75.75 0 010-1.06l1.5-1.5a.75.75 0 011.06 1.06l-1.5 1.5a.75.75 0 01-1.06 0z"
          />
        </svg>
      );
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={`fixed bottom-8 right-8 h-12 w-12 rounded-full flex items-center justify-center z-50 transition-colors duration-200 ${
        theme === 'dark'
          ? 'bg-gray-800 hover:bg-gray-700 text-yellow-300 border-gray-700 focus:ring-offset-gray-900'
          : 'bg-white hover:bg-gray-100 text-gray-700 border-gray-200'
      } shadow-lg border focus:outline-none focus:ring-2 focus:ring-blue-500`}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {renderIcon()}
    </button>
  );
}
