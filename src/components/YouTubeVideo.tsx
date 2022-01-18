import styled from "@emotion/styled";
import YouTube from "react-youtube";
import { Card } from "./Card";

const StyledCard = styled(Card)`
  & > * {
    height: 100%;
  }
`;

export function YouTubeVideo({ videoId }: { videoId: string }) {
  return (
    <StyledCard noPadding={true} style={{ aspectRatio: "16 / 9", border: 'none' }}>
      <YouTube videoId={videoId} opts={{ width: "100%", height: "100%" }} />
    </StyledCard>
  );
}
