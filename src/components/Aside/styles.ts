import styled from "styled-components";

export const Container = styled.div`
  grid-area: AS;

  background: ${(props) => props.theme.colors.secondary};

  padding-top: 1rem;

  border-right: 1px solid ${(props) => props.theme.colors.gray};
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  margin-right: 1rem;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.white};
`;

export const Menu = styled.nav`
  margin-top: 5rem;
  margin-left: 2.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Link = styled.a`
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
