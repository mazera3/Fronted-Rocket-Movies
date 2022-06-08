import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;

  height: 116px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  /* justify-content: space-between; */
  justify-content: center;
  padding: 0 80px;
  gap: 64px;
  > h2 {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.SALMON};
  }
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  gap: 9px;
  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }
  > div {
    /* width: 198px; */
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    line-height: 24px;
    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  width: 630px;
`;
