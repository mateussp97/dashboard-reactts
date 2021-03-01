import styled from "styled-components";

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

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.white};

  &::after {
    content: "";
    display: block;
    width: 3rem;
    padding-bottom: 0.5rem;
    border-bottom: 0.5rem solid ${(props) => props.theme.colors.warning};
  }
`;

export const Controllers = styled.div``;
