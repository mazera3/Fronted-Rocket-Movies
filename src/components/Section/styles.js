import styled from "styled-components";

export const Container = styled.section`
  margin: 28px 0;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 40px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    p {
      font-size: 32px;
      font-weight: 400;
      line-height: 42px;
    }
    span {
      font-size: 16px;
      font-weight: 400;
      padding: 13px;
    }
  }
`;
