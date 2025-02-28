import { PageContainer } from "@/components/PageContainer/PageContainer.style";
import { usePreviewService } from "./Preview.service";
import {
  BoxContainer,
  BoxContent,
  DisclaimerText,
  PreviewFileText,
  PreviewFrame,
} from "./Preview.style";
import Button from "@/components/Button/Button";

export default function PreviewPage() {
  const { lines, navigateToMain } = usePreviewService();

  return (
    <PageContainer>
      <BoxContainer>
        <BoxContent>
          <b>Pose Name:</b>{" "}
          {lines?.length && lines[0].replace("_shapeName:", "").trim()}
        </BoxContent>
      </BoxContainer>
      <PreviewFrame>
        <PreviewFileText>
          {lines?.map((line: string, index: number) => (
            <span key={line + index.toString()}>{line}</span>
          ))}
        </PreviewFileText>
      </PreviewFrame>
      <BoxContainer>
        <BoxContent>
          <Button onClick={navigateToMain}>Create Another Pose</Button>
        </BoxContent>
      </BoxContainer>
      <DisclaimerText>
        *Please note that this may not be accurate, and LLMs are known to
        hallucinate values. <br />
        Do not blindly trust this result.
      </DisclaimerText>
    </PageContainer>
  );
}
