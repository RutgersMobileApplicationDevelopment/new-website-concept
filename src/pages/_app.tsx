import type { AppProps } from "next/app";
import {
  extendTheme,
  ChakraProvider,
  ChakraTheme,
  Flex,
} from "@chakra-ui/react";
import { Footer, Navbar } from "../components";
import { use100vh } from "react-div-100vh";

// 2. Extend the theme to include custom colors, fonts, etc
const themeConfig: Partial<ChakraTheme> = {
  fonts: {
    // heading: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif`,
    // body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif`,
  },
  colors: {
    brand: {
      900: "#1a365d",
      800: "#cc0033",
      700: "#2a69ac",
    },
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
};

const theme = extendTheme(themeConfig);

function MyApp({ Component, pageProps }: AppProps) {
  const pageHeight = use100vh() ?? 0;

  return (
    <ChakraProvider theme={theme}>
      <style jsx global>
        {`
          p {
            font-size: 1.3rem;
          }
        `}
      </style>
      <div
        style={{
          minHeight: pageHeight,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default MyApp;
