import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: auto;
  }
`;

export const Content = styled.div`
  max-width: 1137px;
  margin: 0 auto;
  padding: 0px;

  display: flex;
  flex-direction: column;
  section {
    > a {
      display: flex;
      align-items: center;
      gap: 10px;
      color: ${({ theme }) => theme.COLORS.SALMON};
      margin: 0 24px auto;
    }
  }
  .user {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: left;
    gap: 10px;
    margin: 0 24px auto;

    > img {
      border-radius: 50%;
      width: 16px;
      height: 16px;
    }
    > span {
      display: flex;
      gap: 10px;
      align-items: center;
      svg {
        color: ${({ theme }) => theme.COLORS.SALMON};
      }
    }
  }
`;
