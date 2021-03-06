import React from "react";
import styled from "styled-components";

//! Dentro do componente 'Content" irá aparecer as páginas, o restante será estático
const Content: React.FC = ({ children }) => <Container>{children}</Container>;

const Container = styled.div`
  grid-area: CT;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.primary};

  padding: 2rem 1rem;

  //! Deixando fixo a parte de listagem de 'Entradas' e 'Saídas'
  height: calc(100vh - 70px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.secondary};
    border: 0.5rem;
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.tertiary};
  }

  @media screen and (max-width: 1000px) {
    padding: 2rem 1rem 0;
  }
`;
export default Content;
