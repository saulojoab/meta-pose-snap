import Button from "@/components/Button/Button";
import { ButtonContainer } from "./Shutter.style";
import { IShutter } from "./Shutter.type";

export default function Shutter({
  loading,
  takePhoto,
  loadingMessage,
}: IShutter) {
  if (loading) {
    return <ButtonContainer>LOADING: {loadingMessage}</ButtonContainer>;
  }

  return (
    <ButtonContainer>
      <Button onClick={takePhoto}>Take photo</Button> Or press the SPACEBAR key.
    </ButtonContainer>
  );
}
