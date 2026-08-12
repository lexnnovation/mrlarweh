import { useLocalStorage } from "react-use";
import { useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = ({ className = "" }) => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggle = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <button
      type='button'
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className={`flex items-center justify-center w-9 h-9 rounded-lg border border-border text-text hover:border-accent-amber hover:text-accent-amber transition-colors ${className}`}
    >
      {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
    </button>
  );
};

export default ThemeToggle;
