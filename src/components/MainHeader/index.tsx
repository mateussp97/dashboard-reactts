import React, { useMemo } from "react";
//? Import Array
import emojis from "../../utils/emojis";
//? Import Styled
import { Container, Profile, Welcome, UserName } from "./styles";
//? Import Components
import Toggle from "./../Toggle/index";

const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    //! A const 'indice' recebe o menos número arredondado entre 0 e o tamanho do Array 'emojis'
    //! É retornado o Array emojis com o índice gerado randomicamente
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []);

  return (
    <Container>
      <Toggle />
      <Profile>
        <Welcome>Olá, {emoji} </Welcome>
        <UserName>Mateus de Souza</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
