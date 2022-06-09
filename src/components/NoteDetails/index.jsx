import { Container } from "./styles";
import { Tag } from "../Tag";

export function NoteDetails({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h1>
        {data.title}
        <span>{data.rating}</span>
      </h1>
      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
      <p>{data.description}</p>
    </Container>
  );
}
