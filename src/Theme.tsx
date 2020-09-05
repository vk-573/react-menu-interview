import React, { createContext, useContext, useReducer } from "react";

const ThemeContext = createContext();
const initialState = { name: "dark", primary: "#1A1A1A", secondary: "#454545" };

const reducer = (state, action: string) => {
  switch (action) {
    case "dark":
      return { name: "dark", primary: "#1A1A1A", secondary: "#454545" };
    case "light":
      return { name: "light", primary: "#1A1A1A", secondary: "#454545" };
    default:
      return { name: "dark", primary: "#1A1A1A", secondary: "#454545" };
  }
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeContext.Provider value={{state, dispatch}}>
      {children}
    </ThemeContext.Provider>
  );
}

// custom hook
export const useTheme = () => useContext(ThemeContext);
