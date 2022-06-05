import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border: none;
  border-radius: 10px;

  padding: 22px;
  margin-bottom: 16px;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  > span {
    display: flex;
  }
  > p {
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    text-align: justify;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
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
