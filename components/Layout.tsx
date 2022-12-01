import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { ReactNode, useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  children?: ReactNode;
};

const Layout: NextPage<Props> = ({ children }) => {
  useEffect(() => {
    localStorage.removeItem("chakra-ui-color-mode");
  }, [])

  return (
    <>
      <Head>
        <title>Real Estate</title>
        <link rel="shortcut icon" href="./favicon.png" type="image/x-icon" />
      </Head>
      <Box maxWidth="1280px" m="auto">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
};

export default Layout;
