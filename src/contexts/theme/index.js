import { createContext, useContext } from "react";

export const themeContext = createContext();

export function useTheme() {
  return useContext(themeContext).value;
}

export function useSetTheme() {
  return useContext(themeContext).setValue;
}

export default themeContext;
