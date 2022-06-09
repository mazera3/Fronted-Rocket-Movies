import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  border: none;
  border-radius: 10px;

  padding: 22px;
  margin-bottom: 16px;
  /* overflow-y: auto; */
  > h1 {
    display: flex;
    gap: 10px;
    align-items: center;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};

    svg {
      width: 17px;
      height: 17px;
    }
  }
  > p {
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    text-align: justify;
  }
  svg {
    margin: 15px 3px;
    width: 12px;
    height: 12px;
    color: ${({ theme }) => theme.COLORS.SALMON};
    fill: ${({ theme }) => theme.COLORS.SALMON};
  }
  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }
`;
