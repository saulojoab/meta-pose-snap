import { SyncLoader } from "react-spinners";
import { Container, LoadingContainer, StyledImage } from "./ImagePreview.style";
import { IImagePreview } from "./ImagePreview.type";

export default function ImagePreview({ image }: IImagePreview) {
  return (
    <Container>
      <StyledImage
        alt="Your image"
        src={{ src: image, width: 500, height: 500 }}
        style={{ width: "100%" }}
      />
      <LoadingContainer>
        <SyncLoader loading color="#ffffff" size={20} margin={0} />
      </LoadingContainer>
    </Container>
  );
}
