import { MainGutters } from "./MainGutters";
import styled from "@emotion/styled";
import { FaAndroid } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

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
  background-color: black;
  color: white;
  border: 1px solid var(--chakra-colors-gray-700);
`;

const NavbarItem = styled.a<{ $active?: boolean }>`
  font-weight: 500;
  margin-left: 20px;
  text-decoration: none;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;

  ${({ $active }) =>
    $active
      ? `
    border-bottom-color: var(--chakra-colors-brand-800);
  `
      : ""}
`;

export function Navbar() {
  const asPath = useRouter().asPath
  
  return (
    <Wrap
      insideStyle={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Link href="/">
        <a style={{ display: "flex", flexDirection: "row" }}>
          <FaAndroid
            size={35}
            style={{ marginTop: 4, marginRight: "0.2ch" }}
            color="#cc0033"
          />
          <Logo>RUMAD</Logo>
        </a>
      </Link>

      <div style={{ flex: 1 }} />

      <Link href="/" passHref>
        <NavbarItem $active={asPath === '/'}>Home</NavbarItem>
      </Link>

      <Link href="/blog" passHref>
        <NavbarItem $active={asPath === '/blog'}>Blog</NavbarItem>
      </Link>
    </Wrap>
  );
}
