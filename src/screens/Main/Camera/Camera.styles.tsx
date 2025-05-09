import styled from "styled-components";

export const CameraSelector = styled.select`
  padding: 10px;
  font-size: 14px;
  margin: 10px;
  border: none;
  color: inherit;
  cursor: pointer;
`;

export const CameraSelectorContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const CameraContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  filter: grayscale(100%);
`;
