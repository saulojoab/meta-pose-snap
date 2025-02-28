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

export const CameraContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  filter: grayscale(100%);
`;

export const ButtonContainer = styled.div`
  padding: 20px;
`;

export const CameraSelectorContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const CameraSelector = styled.select`
  padding: 10px;
  font-size: 14px;
  margin: 10px;
  border: none;
  color: inherit;
  cursor: pointer;
`;
