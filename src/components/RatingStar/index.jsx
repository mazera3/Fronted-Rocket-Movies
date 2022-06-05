import { Container, Container2 } from "./styles";
import { FiStar } from "react-icons/fi";

export function RatingStar({ ...rest }) {
  return (
    <>
      <Container {...rest}>
        <FiStar />
        <FiStar />
        <FiStar />
        <FiStar />
      </Container>
      <Container2>
        <FiStar />
      </Container2>
    </>
  );
}
