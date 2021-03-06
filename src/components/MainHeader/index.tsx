import React, { useMemo } from "react";
//? Import Array
import emojis from "../../utils/emojis";
//? Import Styled
import styled from "styled-components";
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

export const Container = styled.div`
  grid-area: MH;

  background: ${(props) => props.theme.colors.secondary};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
`;

export const Profile = styled.div`
  color: ${(props) => props.theme.colors.white};

  display: flex;
  flex-direction: column;
`;

export const Welcome = styled.h3``;

export const UserName = styled.span``;

export default MainHeader;
