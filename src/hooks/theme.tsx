import React, { createContext, useState, useContext } from "react";
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

//? Interface do Tema, que possui a função toggle que irá fazer a troca do tema, e o objeto 'theme'
interface IThemeContext {
  toggleTheme(): void;
  theme: ITheme;
}

//? Interface do objeto 'theme', que possui um 'title' sendo dark ou light e as respectivas cores
interface ITheme {
  title: string;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;

    white: string;
    black: string;
    gray: string;

    success: string;
    info: string;
    warning: string;
  };
}

//? Criação do contexto
const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

//? Criação do provider
const ThemeProvider: React.FC = ({ children }) => {
  //! O estado 'theme' que inicia com o tema dark
  const [theme, setTheme] = useState<ITheme>(dark);

  //! A função que fará a troca do tema
  const toggleTheme = () => {
    if (theme.title === "dark") {
      setTheme(light);
    } else {
      setTheme(dark);
    }
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);

  return context;
}

export { ThemeProvider, useTheme };
