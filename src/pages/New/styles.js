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
  .tags {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 40px;
    gap: 24px;
    padding: 16px;
    div:first-child {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
      width: 10%;
    }
    div:nth-child(2) {
      width: 17%;
    }
  }
`;

export const Form = styled.form`
  max-width: 1113px;
  margin: 38px auto;
  > header {
    display: flex;
    align-items: flex-start;
    flex-direction: column-reverse;
    margin-bottom: 40px;
    > h1 {
      margin-top: 24px;
    }
    > a {
      display: flex;
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.SALMON};
      gap: 8px;
    }
  }
  .titulo {
    display: flex;
    gap: 56px;
    margin-bottom: 40px;
  }
  .button {
    display: flex;
    gap: 40px;
    > button:first-child {
      color: ${({ theme }) => theme.COLORS.SALMON};
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
  }
`;
