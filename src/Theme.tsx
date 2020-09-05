import React, { createContext, useContext, useReducer } from "react";

const initialState = { name: "dark", primary: "#1A1A1A", secondary: "#454545" };
const ThemeContext = createContext(initialState);

const reducer = (state, action: string) => {
  switch (action) {
    case "dark":
      return { name: "dark", primary: "#1A1A1A", secondary: "#454545" };
    case "light":
      return { name: "light", primary: "#454545", secondary: "#454545" };
    default:
      return { name: "dark", primary: "#1A1A1A", secondary: "#454545" };
  }
};

// higher order component
export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>;
};

// custom hook in order not to import ThemeContext and useContext in children
export const useTheme = () => useContext(ThemeContext);
