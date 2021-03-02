import styled from "styled-components";

interface ITitleProps {
  lineColor: string;
}

export const Container = styled.div`
  grid-area: CT;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.primary};

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 2rem;
`;

export const Wrapper = styled.div``;

export const Title = styled.h1<ITitleProps>`
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

export const Controllers = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
