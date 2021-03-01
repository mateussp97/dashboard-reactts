import styled from "styled-components";

export const Container = styled.div`
  grid-area: MH;

  background: ${(props) => props.theme.colors.secondary};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
`;

export const Profile = styled.div`
  color: ${(props) => props.theme.colors.white};

  display: flex;
  flex-direction: column;
`;

export const Welcome = styled.h3``;

export const UserName = styled.span``;
