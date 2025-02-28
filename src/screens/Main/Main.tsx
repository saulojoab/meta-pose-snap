import {
  ButtonContainer,
  CameraContainer,
  CameraSelector,
  CameraSelectorContainer,
  MainFrame,
} from "./Main.style";
import { Camera } from "react-camera-pro";
import Button from "@/components/Button/Button";
import { useMainService } from "./Main.service";
import { PageContainer } from "@/components/PageContainer/PageContainer.style";

export default function MainPage() {
  const {
    cameraRef,
    errorMessages,
    takePhoto,
    loading,
    loadingMessage,
    availableCameras,
    handleSelectCamera,
    selectedCamera,
  } = useMainService();

  return (
    <PageContainer>
      <MainFrame>
        <CameraContainer>
          <Camera
            videoSourceDeviceId={selectedCamera}
            errorMessages={errorMessages}
            ref={cameraRef}
          />
          <CameraSelectorContainer>
            <CameraSelector onChange={handleSelectCamera}>
              {availableCameras?.map((camera) => (
                <option key={camera.deviceId} value={camera.deviceId}>
                  {camera.label}
                </option>
              ))}
            </CameraSelector>
          </CameraSelectorContainer>
        </CameraContainer>
        <ButtonContainer>
          {loading ? (
            <>LOADING: {loadingMessage}</>
          ) : (
            <>
              <Button onClick={takePhoto}>Take photo</Button> Or press the
              SPACEBAR key.
            </>
          )}
        </ButtonContainer>
      </MainFrame>
    </PageContainer>
  );
}
