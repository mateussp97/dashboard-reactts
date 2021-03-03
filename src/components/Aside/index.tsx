import React from "react";
import styled from "styled-components";
import ImageLogo from "../../assets/logo.svg";
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from "react-icons/md";

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
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
        <Link href="#">
          <MdExitToApp />
          Sair
        </Link>
      </Menu>
    </Container>
  );
};

const Container = styled.div`
  grid-area: AS;

  background: ${(props) => props.theme.colors.secondary};

  padding-top: 1rem;

  border-right: 1px solid ${(props) => props.theme.colors.gray};
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  margin-right: 1rem;
`;

const Title = styled.h3`
  color: ${(props) => props.theme.colors.white};
`;

const Menu = styled.nav`
  margin-top: 5rem;
  margin-left: 2.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

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
