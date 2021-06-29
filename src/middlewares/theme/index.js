import themeContext from "../../contexts/theme";
import { useLocalStorage } from "../../library/hooks";

export default function ThemeProvider({ children }) {
  const [value, setValue] = useLocalStorage("darkMode", false);

  const context = {
    value,
    setValue: (value) => setValue(value),
  };

  return (
    <themeContext.Provider value={context}>{children}</themeContext.Provider>
  );
}
