import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

function ThemeToggle() {
  const { isDark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900 text-purple-900 dark:text-purple-100 hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}

export default ThemeToggle;