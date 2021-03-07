import React from "react";
import styled, { keyframes } from "styled-components";

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
}) => (
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

const animate = keyframes`
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
`;

const Container = styled.div`
  width: 48%;
  height: 280px;

  background: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};

  padding: 1rem;
  margin: 2rem 0;

  border-radius: 0.25rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  animation: ${animate} 0.5s;

  > header img {
    width: 3rem;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export default MessageBox;
