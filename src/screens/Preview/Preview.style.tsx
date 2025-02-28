import styled from "styled-components";

export const PreviewFrame = styled.div`
  width: 800px;
  height: min-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid black;

  transition: all 0.5s ease;
`;

export const PreviewFileText = styled.div`
  padding: 10px;
  font-size: 12px;
  white-space: pre-wrap;
  text-align: left;
  display: flex;
  flex-direction: column;

  counter-reset: line;

  span {
    counter-increment: line;
    &::before {
      content: counter(line) ". ";
      display: inline-block;
      width: 20px;
      margin-right: 10px;
      text-align: left;
    }

    &:nth-last-child(-n + 2)::before {
      content: "";
    }
  }
`;

export const BoxContainer = styled.div`
  border: 1px solid black;
  width: 800px;
  height: min-content;
  display: flex;
`;

export const BoxContent = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const DisclaimerText = styled.span`
  font-size: 12px;
  color: gray;
  text-align: center;
  margin-top: 10px;
`;
