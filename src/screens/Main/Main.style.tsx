import styled from "styled-components";
import { IMainFrameStyle } from "./Main.type";

export const MainFrame = styled.div<IMainFrameStyle>`
  width: 800px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;

  transition: all 0.5s ease;
  opacity: ${({ clickedGetStarted }) => (clickedGetStarted ? 0 : 1)};
`;
