import React, { useMemo, useState } from "react";
//? Import Array
import emojis from "../../utils/emojis";
//? Import Styled
import styled from "styled-components";
//? Import Components
import Toggle from "./../Toggle/index";
import { useTheme } from "../../hooks/theme";

const MainHeader: React.FC = () => {
  const { toggleTheme, theme } = useTheme();
  //! Um estado para verificar qual theme está sendo usado
  const [darkTheme, setDarkTheme] = useState(() =>
    theme.title === "dark" ? true : false
  );

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  };

  const emoji = useMemo(() => {
    //! A const 'indice' recebe o menos número arredondado entre 0 e o tamanho do Array 'emojis'
    //! É retornado o Array emojis com o índice gerado randomicamente
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []);

  return (
    <Container>
      <Toggle
        labelLeft="Light"
        labelRight="Dark"
        checked={darkTheme}
        onChange={handleChangeTheme}
      />
      <Profile>
        <Welcome>Olá, {emoji} </Welcome>
        <UserName>Mateus de Souza</UserName>
      </Profile>
    </Container>
  );
};

const Container = styled.div`
  grid-area: MH;

  background: ${(props) => props.theme.colors.secondary};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
`;

const Profile = styled.div`
  color: ${(props) => props.theme.colors.white};

  display: flex;
  flex-direction: column;
`;

const Welcome = styled.h3``;

const UserName = styled.span``;

export default MainHeader;
