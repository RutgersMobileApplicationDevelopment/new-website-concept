import { MainGutters } from "./MainGutters";
import styled from "@emotion/styled";
import { FaAndroid } from "react-icons/fa";

const Logo = styled.span`
  font-weight: 900;
  font-size: 1.6rem;
`;

const Wrap = styled(MainGutters)`
  position: sticky;
  top: 0;
  width: 100%;
  backdrop-filter: blur(10px);
  padding: 15px 0;
  background: rgba(255, 255, 255, 0.95);
  z-index: 1000;
  border-bottom: 1px solid #eee;
`;

const Link = styled.a<{ $active?: boolean }>`
font-weight: 500;
  margin-left: 20px;
  text-decoration: none;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;

  ${({ $active }) =>
    $active
      ? `
    border-bottom-color: #cc0033;
  `
      : ""}
`;

export function Navbar() {
  return (
    <Wrap
      insideStyle={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <FaAndroid
        size={35}
        style={{ marginTop: 4, marginRight: "0.2ch" }}
        color="#cc0033"
      />
      <Logo>RUMAD</Logo>

      <div style={{ flex: 1 }} />

      <Link $active>Home</Link>

      <Link>Blog</Link>
    </Wrap>
  );
}
