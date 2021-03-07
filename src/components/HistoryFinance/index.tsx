import React from "react";
import styled, { keyframes } from "styled-components";

interface ITagProps {
  color: string;
}

interface IHistoryFinanceProps {
  tagColor: string;
  title: string;
  subtitle: string;
  amount: string;
}

const HistoryFinance: React.FC<IHistoryFinanceProps> = ({
  tagColor,
  title,
  subtitle,
  amount,
}) => (
  <Container>
    <Tag color={tagColor} />
    <div>
      <span>
        {title}
        <small>{subtitle}</small>
      </span>
    </div>
    <h3>{amount}</h3>
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

const Container = styled.li`
  background: ${(props) => props.theme.colors.tertiary};

  border-radius: 0.5rem;

  margin-bottom: 0.5rem;

  padding: 1rem;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
  transition: all 0.3s;
  animation: ${animate} 0.5s ease-in;

  &:hover {
    opacity: 0.7;
    transform: translateX(0.5rem);
  }

  div {
    span {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      font-weight: 700;
      font-size: 1.25rem;

      small {
        font-weight: 300;
        font-size: 0.875rem;
      }
    }
  }
`;

const Tag = styled.div<ITagProps>`
  position: absolute;
  width: 1rem;
  height: 50%;

  left: -0.5rem;
  border-radius: 0.125rem;
  background: ${(props) => props.color};
`;

export default HistoryFinance;
