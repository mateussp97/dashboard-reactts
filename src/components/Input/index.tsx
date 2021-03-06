import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
//! Criando uma interface que vai receber as elementos de um input(HTMLInputElement) do tipo InputHTMLAttributes
//! Aproveitando uma tipagem que já existe basicamente
type IInputProp = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<IInputProp> = ({ ...rest }) => {
  return <Container {...rest} />;
};

const Container = styled.input`
  width: 100%;
  margin: 0.5rem 0;
  padding: 0.5rem;

  border-radius: 0.5rem;
`;

export default Input;
