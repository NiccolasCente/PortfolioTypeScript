import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from './ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div onClick={toggleTheme} className="theme-toggle" style={{ cursor: 'pointer', marginRight: '5px' }}>
      <FontAwesomeIcon icon={theme === 'dark' ? faMoon : faSun} size="lg" />
    </div>
  );
};

export default ThemeToggle;
