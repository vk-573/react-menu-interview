import React, { createContext, useContext, useReducer } from "react";

interface theme {
  name: string;
  primary: string;
  secondary: string;
  text: string;
}

type ThemeContextType = {
  state: theme;
  dispatch: React.Dispatch<string>;
};

const initialState: theme = { name: "dark", primary: "#1A1A1A", secondary: "#454545", text: "white" };
const ThemeContext = createContext<ThemeContextType>({ state: initialState, dispatch: () => "dark" });

// to add more theme colors add new cases here
const reducer = (state: theme, action: string) => {
  switch (action) {
    case "dark":
      return { name: "dark", primary: "#1A1A1A", secondary: "#454545", text: "white" };
    case "light":
      return { name: "light", primary: "#454545", secondary: "white", text: "#454545" };
    default:
      return { name: "dark", primary: "#1A1A1A", secondary: "#454545", text: "white" };
  }
};

// higher order component which links the ThemeContext to its children
export const ThemeProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <ThemeContext.Provider value={{ state, dispatch }}>{children}</ThemeContext.Provider>;
};

// custom hook in order not to import ThemeContext and useContext in children
export const useTheme = () => useContext(ThemeContext);
