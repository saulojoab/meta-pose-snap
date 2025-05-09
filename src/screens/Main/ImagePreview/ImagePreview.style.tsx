import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const StyledImage = styled(Image)`
  width: 100%;
  filter: grayscale(100%) blur(0);
  animation: blurAnimation 2s ease forwards;
  animation-delay: 1s;

  @keyframes blurAnimation {
    to {
      filter: grayscale(100%) blur(10px);
    }
  }
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;
