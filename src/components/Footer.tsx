import {
  Heading, List,
  ListItem
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { MainGutters } from "./MainGutters";

const StyledList = styled(List)`
  & > * {
    margin: 6px 0;
  }
`

export function Footer() {
  return (
    <MainGutters
      style={{ backgroundColor: "black", color: "white", position: "relative", overflow: 'hidden' }}
      insideStyle={{ padding: "80px 0" }}
    >
      <Heading size="md" style={{ marginBottom: "8px" }}>
        Follow us
      </Heading>
      <StyledList>
        <ListItem>Twitter</ListItem>
        <ListItem>Instagram</ListItem>
        <ListItem>Facebook</ListItem>
        <ListItem>GitHub</ListItem>
      </StyledList>
    </MainGutters>
  );
}
