import React from "react";
import { Container, Wrapper, Title, Controllers } from "./styles";

const ContentHeader: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Título</Title>
      </Wrapper>
      <Controllers>
        <button>Botão</button>
        <button>Botão</button>
      </Controllers>
    </Container>
  );
};

export default ContentHeader;
