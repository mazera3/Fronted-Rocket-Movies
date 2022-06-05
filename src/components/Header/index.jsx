import { Container, Profile, Form } from "./styles";
import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <h2>RocketMovies</h2>
      <Form>
        <Input placeholder="Pesquisar pelo título" />
      </Form>
      <Profile to="/profile">
        <div>
          <strong>Édio Mazera</strong>
          <span>sair</span>
        </div>
        <img src="https://github.com/mazera3.png" alt="Foto do Usuário" />
      </Profile>
    </Container>
  );
}
