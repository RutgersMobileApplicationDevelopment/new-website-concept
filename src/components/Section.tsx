import { MainGutters } from "./MainGutters";
import { ReactChildren } from "../types";
import { GameOfLifeBackground } from "./GameOfLifeBackground";

import styled from "@emotion/styled";
import { useColorModeValue } from "@chakra-ui/react";

const WIDTH = "900px";

const Gutters = styled(MainGutters)<{ $backgroundColor: string }>`
  &:before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: calc((100% - ${WIDTH}) / 2);
    ${({ $backgroundColor }) =>
      `background-image: linear-gradient(to right, transparent, ${$backgroundColor});`}
  }

  &:after {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: calc((100% - ${WIDTH}) / 2);
    ${({ $backgroundColor }) =>
      `background-image: linear-gradient(to right, ${$backgroundColor}, transparent);`}
  }
`;

export function Section({
  children,
  dark,
  gameOfLife = false,
}: {
  children: ReactChildren;
  dark?: boolean;
  gameOfLife?: boolean;
}) {
  const sysetmDarkMode = useColorModeValue(false, true);
  const matchSystem = sysetmDarkMode
    ? "var(--chakra-colors-gray-800)"
    : "white";
  const backgroundColor = dark ? "black" : matchSystem;

  return (
    <Gutters
      style={{
        ...(dark
          ? {
              backgroundColor,
              color: "white",
            }
          : {}),
        position: "relative",
        overflow: gameOfLife ? "hidden" : undefined,
      }}
      insideStyle={{
        padding: "80px 0",
        backgroundColor,
      }}
      $backgroundColor={backgroundColor}
    >
      {children}
      {gameOfLife && (
        <GameOfLifeBackground interval={100} dark={sysetmDarkMode} />
      )}
    </Gutters>
  );
}
