import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const preferedTheme = prefersDarkMode ? 1 : 3;
  const storedTheme = localStorage.getItem("theme");
  const initialTheme = storedTheme ? parseInt(storedTheme, 10) : preferedTheme;

  const [theme, setTheme] = useState(initialTheme);

  function handleTheme(themeId) {
    setTheme(themeId);
  }

  useEffect(() => {
    localStorage.setItem("theme", theme.toString());

    document.documentElement.classList.remove("theme-1", "theme-2", "theme-3");
    document.documentElement.classList.add(`theme-${theme}`);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined)
    throw new Error("ThemeContext was used outside of the ThemeProvider");
  return context;
}

export { ThemeProvider, useTheme };
