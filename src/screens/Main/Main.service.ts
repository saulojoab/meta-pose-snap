import { SYSTEM_PROMPT } from "@/services/systemPrompt";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { CameraType } from "react-camera-pro";
import { useRouter } from "next/router";

export const useMainService = () => {
  const cameraRef = useRef(null);
  const [, setImage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingMessage, setLoadingMessage] = useState<string>("");
  const [availableCameras, setAvailableCameras] = useState<MediaDeviceInfo[]>(
    []
  );
  const [selectedCamera, setSelectedCamera] = useState<string>("");

  const router = useRouter();

  const errorMessages = {
    noCameraAccessible:
      "No camera device accessible. Please connect your camera or try a different browser.",
    permissionDenied:
      "Permission denied. Please refresh and give camera permission.",
    switchCamera:
      "It is not possible to switch camera to different one because there is only one video device accessible.",
    canvas: "Canvas is not supported.",
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        takePhoto();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function takePhoto() {
    const camera = cameraRef?.current as unknown as CameraType;
    if (!camera) return;

    const imageBase64 = camera
      .takePhoto("base64url")
      .toString()
      .replace("data:image/jpeg;base64,", "");
    setImage(imageBase64);
    sendToAITest(imageBase64);
  }

  async function sendToAITest(image: string) {
    setLoading(true);
    const response = await axios.post("http://localhost:11434/api/generate", {
      model: "llama3.2-vision:11b",
      images: [image],
      stream: false,
      prompt: `Generate the file based on this picture.`,
      system: SYSTEM_PROMPT,
      options: {
        temperature: 0,
      },
    });

    setLoading(false);
    router.push({
      pathname: "/preview",
      query: { data: JSON.stringify(response.data) },
    });
  }

  useEffect(() => {
    const loadingMessages = [
      "Please wait, we are processing your image...",
      "This may take a few seconds, depending on the computer or API speed.",
      "Please be patient, we are almost there...",
      "Did you know that LIBRAS is the Brazilian Sign Language?",
      "The Brazilian Sign Language is the sign language used by deaf communities in urban Brazil.",
    ];

    const interval = setInterval(() => {
      setLoadingMessage(
        loadingMessages[Math.floor(Math.random() * loadingMessages.length)]
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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

  return {
    cameraRef,
    errorMessages,
    takePhoto,
    loading,
    loadingMessage,
    availableCameras,
    handleSelectCamera,
    selectedCamera,
  };
};
