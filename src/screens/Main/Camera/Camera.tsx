import { useCameraService } from "./Camera.service";
import {
  CameraContainer,
  CameraSelector,
  CameraSelectorContainer,
} from "./Camera.styles";
import { Camera as CameraComponent } from "react-camera-pro";
import { ICamera } from "./Camera.type";

export default function Camera({ cameraRef }: ICamera) {
  const {
    availableCameras,
    selectedCamera,
    handleSelectCamera,
    errorMessages,
  } = useCameraService();

  return (
    <CameraContainer>
      <CameraComponent
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
  );
}
