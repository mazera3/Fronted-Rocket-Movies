import { Link } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
// import {  } from "../../components/";

import { Container, Form, Main, Background } from "./styles";

export function SignIn() {
  return (
    <Container>
      <Main>
        <Form>
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
          <h2>Faça seu login</h2>
          <Input placeholder="E-mail" type="text" icon={FiMail} />
          <Input placeholder="Senha" type="password" icon={FiLock} />
          <Button title="Entrar" />
        </Form>
        <Link to="/register">Criar conta</Link>
      </Main>
      <Background />
    </Container>
  );
}
