import type { AppProps } from "next/app";
import { extendTheme, ChakraProvider, ChakraTheme } from "@chakra-ui/react";
import { Footer, Navbar } from "../components";

// 2. Extend the theme to include custom colors, fonts, etc
const themeConfig: Partial<ChakraTheme> = {
  fonts: {
    // heading: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif`,
    // body: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif`,
  },
  colors: {
    // brand: {
    //   900: "#1a365d",
    //   800: "#153e75",
    //   700: "#2a69ac",
    // },
  }
};

const theme = extendTheme(themeConfig);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <style jsx global>
        {`
          p {
            font-size: 1.3rem;
          }
        `}
      </style>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </ChakraProvider>
  );
}

export default MyApp;
