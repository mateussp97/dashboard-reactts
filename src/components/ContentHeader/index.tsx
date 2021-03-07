import React from "react";
import styled from "styled-components";

interface ITitleProps {
  lineColor: string;
}

interface IContentHeaderProps {
  title: string;
  lineColor: string;
  children: React.ReactNode;
}

const ContentHeader: React.FC<IContentHeaderProps> = ({
  title,
  lineColor,
  children,
}) => (
  <Container>
    <Wrapper>
      <Title lineColor={lineColor}>{title}</Title>
    </Wrapper>
    <Controllers>{children}</Controllers>
  </Container>
);

const Container = styled.div`
  grid-area: CT;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.primary};

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 2rem;

  @media screen and (max-width: 424px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Wrapper = styled.div``;

const Title = styled.h1<ITitleProps>`
  line-height: 1.8;
  color: ${(props) => props.theme.colors.white};

  &::after {
    content: "";
    display: block;
    width: 4rem;
    border-radius: 0.25rem;
    border-bottom: 1rem solid ${(props) => props.lineColor};
  }
`;

const Controllers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 424px) {
    margin-top: 2rem;
  }
`;

export default ContentHeader;
