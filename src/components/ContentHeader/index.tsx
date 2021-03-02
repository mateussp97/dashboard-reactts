import React from "react";
import { Container, Wrapper, Title, Controllers } from "./styles";

interface IContentHeaderProps {
  title: string;
  lineColor: string;
  children: React.ReactNode;
}
const ContentHeader: React.FC<IContentHeaderProps> = ({
  title,
  lineColor,
  children,
}) => {
  return (
    <Container>
      <Wrapper>
        <Title lineColor={lineColor}>{title}</Title>
      </Wrapper>
      <Controllers>{children}</Controllers>
    </Container>
  );
};

export default ContentHeader;
