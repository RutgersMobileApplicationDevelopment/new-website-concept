import styled from "@emotion/styled";
import { CSSProperties } from "react";
import { ReactChildren } from "../types";

const WIDTH = '900px'

const Gutters = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Inside = styled.div`
  width: 100%;
  margin: 0 15px;
  width: 100%;
  max-width: ${WIDTH};
`;

export function MainGutters({
  style,
  insideStyle,
  children,
  className,
}: {
  style?: CSSProperties;
  insideStyle?: CSSProperties;
  children: ReactChildren;
  className?: string;
}) {
  return (
    <Gutters className={className} style={style}>
      <Inside style={insideStyle}>{children}</Inside>
    </Gutters>
  );
}
