import { MainGutters } from "./MainGutters";
// @ts-ignore
import { GameOfLifeBackground } from "react-game-of-life-background";
import { ReactChildren } from "../types";

import styled from "@emotion/styled";

const WIDTH = '900px'

const Gutters = styled(MainGutters)`
  &:before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: calc((100vw - ${WIDTH}) / 2);
    background-image: linear-gradient(to right, transparent, white);
  }

  &:after {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: calc((100vw - ${WIDTH}) / 2);
    background-image: linear-gradient(to right, white, transparent);
  }
`;

export function Section({
  children,
  dark,
}: {
  children: ReactChildren;
  dark?: boolean;
}) {
  return (
    <Gutters
      style={{
        ...(dark
          ? {
              backgroundColor: "black",
              color: "white",
            }
          : {}),
        position: "relative",
        overflow: "hidden",
      }}
      insideStyle={{
        padding: "80px 0",
        backgroundColor: 'white'
      }}
    >
      {children}
      <GameOfLifeBackground interval={100} color="#eee" />
    </Gutters>
  );
}
