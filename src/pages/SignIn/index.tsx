import React, { useState } from "react";
import logoImage from "../../assets/logo.svg";
import styled from "styled-components";
import Input from "./../../components/Input/index";
import { useAuth } from "../../hooks/auth";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { signIn } = useAuth();

  return (
    <Container>
      <Logo>
        <img src={logoImage} alt="Logo minha carteira" />
        <h1>Minha Carteira</h1>
      </Logo>

      <Form onSubmit={() => signIn(email, password)}>
        <FormTitle>Entrar</FormTitle>
        <Input
          type="email"
          placeholder="Insira um e-mail"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Acessar</button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.colors.primary};
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 2rem;

  img {
    width: 3rem;
    margin-right: 1rem;
  }

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.white};
  }
`;

const Form = styled.form`
  width: 300px;
  height: 300px;

  padding: 2rem;

  border-radius: 0.5rem;

  background: ${(props) => props.theme.colors.tertiary};

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;

  button {
    font-size: 1rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.white};

    border-radius: 0.5rem;
    width: 100%;
    background: ${(props) => props.theme.colors.warning};
    margin: 1rem 0;
    padding: 1rem;
    transition: all 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

const FormTitle = styled.h1`
  color: ${(props) => props.theme.colors.white};

  &::after {
    content: "";
    display: block;
    border-radius: 0.25rem;
    width: 4rem;

    border-bottom: 1rem solid ${(props) => props.theme.colors.warning};
  }

  margin-bottom: 1rem;
`;

export default SignIn;
