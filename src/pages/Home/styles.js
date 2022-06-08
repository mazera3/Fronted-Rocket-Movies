import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 123px auto;
  grid-template-areas:
    "header"
    "content";
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Content = styled.div`
  grid-area: content;
  padding: 0 123px;
  overflow-y: auto;
`;

export const NewNotes = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.SALMON};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 48px;
  width: 207px;
  > svg {
    margin: 8px;
    width: 20px;
    height: 20px;
  }
`;
