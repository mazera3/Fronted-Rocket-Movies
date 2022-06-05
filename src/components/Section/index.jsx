import { Container } from "./styles";

export function Section({ title, button, children }) {
  return (
    <Container>
      <div>
        <p>{title}</p>
        <span>{button}</span>
      </div>
      {children}
    </Container>
  );
}
