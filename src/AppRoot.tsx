import React from "react";
import styled from "styled-components";
import { Footer } from "@app/pages/common/Footer";
import { Header } from "@app/pages/common/Header";
import * as Colors from "@app/style/Colors";
import Splashscreen from "./pages/splash/SplashScreen";

const AppRootWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "M PLUS Rounded 1c", sans-serif;
  color: ${Colors.MainTextColor};
  background-color: ${Colors.MainBackground};
`;

const Expand = styled.div`
  flex: 1;
`;

const AppContentWrapper = styled.div`
  padding: 1em;
  max-width: 45em;
  margin: 0 auto;
  word-wrap: break-word;
`;

export const AppRoot = () => (
  <AppRootWrapper>
    <Header />
    <Expand>
      <AppContentWrapper>
        <h1>It works!</h1>
      </AppContentWrapper>
    </Expand>
    <Footer />
  </AppRootWrapper>
);
