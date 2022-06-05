import { Container, Profile, Logout } from "./styles";
import { Section } from "../Section";
import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <Section title="RocketMovies" />
      <Input placeholder="Pesquisar pelo título" />
      <Profile to="/profile">
        <div>
          <strong>Édio Mazera</strong>
          <p>Sair</p>
        </div>
        <img src="https://github.com/mazera3.png" alt="Foto do Usuário" />
      </Profile>
    </Container>
  );
}
