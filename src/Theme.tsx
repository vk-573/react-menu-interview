import React, { createContext, useContext, useReducer } from "react";

export interface ITheme {
  name: string;
  primary: string;
  secondary: string;
  text: string;
}

interface ThemeContextType {
  state: ITheme;
  dispatch: React.Dispatch<string>;
}

const initialState: ITheme = { name: "dark", primary: "#1A1A1A", secondary: "#454545", text: "white" };
const ThemeContext = createContext<ThemeContextType>({ state: initialState, dispatch: () => "dark" });

// to add more theme colors add new cases here
const reducer = (state: ITheme, action: string) => {
  switch (action) {
    case "dark":
      return { name: "dark", primary: "#1A1A1A", secondary: "#454545", text: "white" };
    case "light":
      return { name: "light", primary: "#454545", secondary: "white", text: "#2D2D2D" };
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
