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
  //! O estado 'theme' que inicia com o valor salvo anteriormente no localStorage, caso não encontre o 'theme', será utilizado como padrão o theme dark
  const [theme, setTheme] = useState<ITheme>(() => {
    //! É criado uma const que recebe o valor do item pego no localStorage de acordo com a 'key' que foi atribuída anteriormente
    const themeSaved = localStorage.getItem("@dashboard-reactts:theme");
    //! Se esse 'themeSaved' for verdadeiro, transforma o 'themeSaved' de texto para objeto JSON e o retorna
    if (themeSaved) {
      //! Transforma de texto para objeto JSON
      return JSON.parse(themeSaved);
    } else {
      //! Caso 'themeSaved' for falso, retorna o 'theme' dark como padrão
      return dark;
    }
  });

  //! A função que fará a troca do tema
  const toggleTheme = () => {
    if (theme.title === "dark") {
      setTheme(light);
      //! Salvando o theme selecionado no localStorage, o setItem serve para inserir os dados e o que você quer salvar
      //! Ele recebe como primeiro parâmetro uma 'key' que você escolhe o nome
      //! E de segundo parâmetro, o que vai ser salvo. Nesse caso estamos convertendo para texto, para que possa ser salvo
      localStorage.setItem("@dashboard-reactts:theme", JSON.stringify(light));
    } else {
      setTheme(dark);
      localStorage.setItem("@dashboard-reactts:theme", JSON.stringify(dark));
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
