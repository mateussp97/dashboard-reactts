import React, { useState } from "react";
import styled, { css } from "styled-components";
import ImageLogo from "../../assets/logo.svg";
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
  MdClose,
  MdMenu,
} from "react-icons/md";
import { useAuth } from "../../hooks/auth";

interface IContainerProps {
  menuIsOpen: boolean;
}

const Aside: React.FC = () => {
  //! Pegamos a função do hook criado 'useAuth' para colocar no botão para sair da aplicação
  const { signOut } = useAuth();
  const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenuIsOpened(!toggleMenuIsOpened);
  };

  return (
    <Container menuIsOpen={toggleMenuIsOpened}>
      <Header>
        <ToggleMenu onClick={handleToggleMenu}>
          {toggleMenuIsOpened ? <MdClose /> : <MdMenu />}
        </ToggleMenu>
        <Logo src={ImageLogo} alt="Logo Minha Carteira" />
        <Title>Minha carteira</Title>
      </Header>
      <Menu>
        <Link href="/dashboard">
          <MdDashboard />
          Dashboard
        </Link>
        <Link href="/list/entry-balance">
          <MdArrowDownward />
          Entradas
        </Link>
        <Link href="/list/exit-balance">
          <MdArrowUpward />
          Saídas
        </Link>
        <Link onClick={signOut}>
          <MdExitToApp />
          Sair
        </Link>
      </Menu>
    </Container>
  );
};

const Container = styled.div<IContainerProps>`
  grid-area: AS;

  background: ${(props) => props.theme.colors.secondary};

  padding-top: 1rem;

  border-right: 1px solid ${(props) => props.theme.colors.gray};

  position: relative;

  @media screen and (max-width: 676px) {
    width: 175px;
    position: fixed;
    z-index: 2;
    height: ${(props) => (props.menuIsOpen ? "100vh" : "70px")};
    overflow: hidden;

    ${(props) =>
      !props.menuIsOpen
        ? css`
            border: none;
            border-bottom: 1px solid ${(props) => props.theme.colors.gray};
            height: 70px;
          `
        : css`
            height: 100vh;
          `}
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ToggleMenu = styled.div`
  height: 2rem;
  width: 2rem;

  background: ${(props) => props.theme.colors.warning};

  border-radius: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  display: none;

  position: absolute;
  top: 1rem;
  left: 1rem;

  @media screen and (max-width: 767px) {
    display: inherit;
  }
`;

const Logo = styled.img`
  margin-right: 1rem;

  @media screen and (max-width: 676px) {
    display: none;
  }
`;

const Title = styled.h3`
  color: ${(props) => props.theme.colors.white};

  @media screen and (max-width: 676px) {
    display: none;
  }
`;

const Menu = styled.nav`
  margin-top: 5rem;
  margin-left: 2.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media screen and (max-width: 676px) {
    margin-left: 1rem;
  }
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition: all 0.3s;

  font-size: 1.25rem;
  font-weight: 300;

  > svg {
    margin-right: 0.5rem;
    font-size: 1rem;
  }

  color: ${(props) => props.theme.colors.info};

  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    opacity: 0.7;
  }
`;

export default Aside;
