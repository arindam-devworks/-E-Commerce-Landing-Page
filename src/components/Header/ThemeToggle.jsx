// src/components/Header/ThemeToggle.jsx
import { useTheme } from "../../contexts/ThemeContext";

const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button className="theme-toggle" onClick={toggleDarkMode}>
      {isDarkMode ? <span>☀️ Light Mode</span> : <span>🌙 Dark Mode</span>}
    </button>
  );
};

export default ThemeToggle;
