import React from "react";
import ImageLogo from "../../assets/logo.svg";
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from "react-icons/md";
import { Container, Header, Logo, Title, Menu, Link } from "./styles";

const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo src={ImageLogo} alt="Logo Minha Carteira" />
        <Title>Minha carteira</Title>
      </Header>
      <Menu>
        <Link href="#">
          <MdDashboard />
          Dashboard
        </Link>
        <Link href="#">
          <MdArrowDownward />
          Entradas
        </Link>
        <Link href="#">
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

export default Aside;
