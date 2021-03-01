import React from "react";
import { Container } from "./styles";

//! Dentro do componente 'Content" irá aparecer as páginas, o restante será estático
const Content: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Content;
