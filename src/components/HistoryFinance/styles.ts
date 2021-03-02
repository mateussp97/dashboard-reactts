import styled from "styled-components";

interface ITagProps {
  color: string;
}

export const Container = styled.li`
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

export const Tag = styled.div<ITagProps>`
  position: absolute;
  width: 1rem;
  height: 50%;

  left: -0.5rem;
  border-radius: 0.125rem;
  background: ${(props) => props.color};
`;
