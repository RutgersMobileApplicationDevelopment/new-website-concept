import styled from "@emotion/styled";
import { CSSProperties } from "react";
import { ReactChildren } from "../types";

const Wrap = styled.div<{ $noPadding: boolean }>`
  border: 1px solid #bbb;
  border-radius: 8px;
  ${({ $noPadding }) => ($noPadding ? "" : "padding: 20px;")}
  overflow: hidden;
`;

export function Card({
  children,
  noPadding = false,
  style,
  className,
}: {
  children: ReactChildren;
  noPadding?: boolean;
  style?: CSSProperties;
  className?: string;
}) {
  return (
    <Wrap $noPadding={noPadding} style={style} className={className}>
      {children}
    </Wrap>
  );
}
