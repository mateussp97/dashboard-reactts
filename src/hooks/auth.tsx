import React, { createContext, useState, useContext } from "react";

interface IAuthContext {
  logged: boolean;
  signIn(email: string, password: string): void;
  signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const [logged, setLogged] = useState<boolean>(() => {
    //! Isso tudo é só para verificar se o usuário está logado ou não
    const isLogged = localStorage.getItem("@dashboard-reactts:logged");
    //! Retorna esse ternário que verifica se tem conteúdo dentro da const 'isLogged'
    //! Se tem conteúdo retorna true, senão false
    return !!isLogged;
  });

  const signIn = (email: string, password: string) => {
    if (email == "mateus@email.com" && password == "123") {
      localStorage.setItem("@dashboard-reactts:logged", "true");
      setLogged(true);
    } else {
      alert("Senha ou usuário inválidos!");
    }
  };

  const signOut = () => {
    localStorage.removeItem("@dashboard-reactts:logged");
    setLogged(false);
  };

  return (
    <AuthContext.Provider value={{ logged, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
