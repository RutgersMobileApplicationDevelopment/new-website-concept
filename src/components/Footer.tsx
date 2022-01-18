import { Heading } from "@chakra-ui/react";
import { MainGutters } from "./MainGutters";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

export function Footer() {
  return (
    <MainGutters
      style={{ backgroundColor: "black", color: "white", position: "relative", overflow: 'hidden' }}
      insideStyle={{ padding: "80px 0" }}
    >
      <Heading size="md" style={{ marginBottom: "8px" }}>
        Follow us
      </Heading>
      <List>
        <ListItem>Twitter</ListItem>
        <ListItem>Instagram</ListItem>
        <ListItem>Facebook</ListItem>
        <ListItem>GitHub</ListItem>
      </List>
    </MainGutters>
  );
}
