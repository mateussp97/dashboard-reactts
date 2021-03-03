import React from "react";
import styled from "styled-components";

interface IMessageBoxProps {
  title: string;
  description: string;
  footerText: string;
  icon: string;
}

const MessageBox: React.FC<IMessageBoxProps> = ({
  title,
  description,
  footerText,
  icon,
}) => {
  return (
    <Container>
      <header>
        <h1>
          {title} <img src={icon} alt="Ícone" />
        </h1>
        <h2>{description}</h2>
      </header>
      <footer>
        <span>{footerText}</span>
      </footer>
    </Container>
  );
};

const Container = styled.div`
  width: 48%;
  height: 280px;

  background: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};

  padding: 1rem 2rem;
  margin: 2rem 0;

  border-radius: 0.25rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  > header img {
    width: 3rem;
  }
`;

export default MessageBox;
