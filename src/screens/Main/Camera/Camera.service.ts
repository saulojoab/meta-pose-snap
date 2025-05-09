import { useEffect, useState } from "react";

export const useCameraService = () => {
  const [availableCameras, setAvailableCameras] = useState<MediaDeviceInfo[]>(
    []
  );
  const [selectedCamera, setSelectedCamera] = useState<string>("");

  useEffect(() => {
    async function getCameras() {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();

        const videoDevices = devices.filter(
          (device) => device.kind === "videoinput"
        );

        setAvailableCameras(videoDevices);
      } catch (error) {
        console.error("Error fetching cameras: ", error);
      }
    }

    getCameras();
  }, []);

  function handleSelectCamera(event: React.ChangeEvent<HTMLSelectElement>) {
    console.log("Selected camera: ", event.target.value);
    setSelectedCamera(event.target.value);
  }

  const errorMessages = {
    noCameraAccessible:
      "No camera device accessible. Please connect your camera or try a different browser.",
    permissionDenied:
      "Permission denied. Please refresh and give camera permission.",
    switchCamera:
      "It is not possible to switch camera to different one because there is only one video device accessible.",
    canvas: "Canvas is not supported.",
  };

  return {
    handleSelectCamera,
    availableCameras,
    selectedCamera,
    setSelectedCamera,
    errorMessages,
  };
};
