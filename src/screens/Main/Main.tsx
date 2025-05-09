import { MainFrame } from "./Main.style";
import { useMainService } from "./Main.service";
import { PageContainer } from "@/components/PageContainer/PageContainer.style";
import Camera from "./Camera/Camera";
import Shutter from "./Shutter/Shutter";
import ImagePreview from "./ImagePreview/ImagePreview";

export default function MainPage() {
  const { image, takePhoto, loading, loadingMessage, cameraRef } =
    useMainService();

  return (
    <PageContainer>
      <MainFrame>
        {image ? (
          <ImagePreview image={image} />
        ) : (
          <Camera cameraRef={cameraRef} />
        )}

        <Shutter
          takePhoto={takePhoto}
          loading={loading}
          loadingMessage={loadingMessage}
        />
      </MainFrame>
    </PageContainer>
  );
}
