import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.SALMON};
    font-weight: 700;
  }
  > h2 {
    font-size: 24px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin: 48px 0;
  }
  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  > a {
    display: flex;
    flex-direction: row;
    gap: 8px;
    justify-content: center;
    align-items: center;
    margin-top: 42px;
    color: ${({ theme }) => theme.COLORS.SALMON};
    svg {
      font-size: 16px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
`;
