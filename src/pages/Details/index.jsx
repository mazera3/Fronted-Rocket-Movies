import { Container, Links, Content } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";

import { Tag } from "../../components/Tag";

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir nota" />
          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam luctus
            dui sed lectus varius, ac euismod ipsum tempus. Etiam vitae risus
            ultricies, aliquam nunc eget, rutrum diam. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Vestibulum auctor mauris eget
            libero sollicitudin sodales. Fusce nisi diam, pellentesque ut ligula
            id, dapibus malesuada odio. Orci varius natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus. Nulla elit tortor,
            varius in nisl quis, vulputate sollicitudin lacus. Etiam tempus dui
            cursus orci ullamcorper, luctus facilisis augue scelerisque.
          </p>
          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">https://www.rocketseat.com.br</a>
              </li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
