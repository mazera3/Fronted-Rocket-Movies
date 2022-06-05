import { FiPlus } from "react-icons/fi";
import { Container, Content, NewNotes } from "./styles";

import { Note } from "../../components/Note";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <Section title="Meus filmes">
          <Note
            data={{
              title: "React Modal",
              tags: [
                { id: "1", name: "react" },
                { id: "2", name: "nodejs" },
                { id: "3", name: "rocketseat" },
              ],
            }}
          />
        </Section>
        <NewNotes to="/new">
          <FiPlus />
          Adicionar filme
        </NewNotes>
      </Content>
    </Container>
  );
}
