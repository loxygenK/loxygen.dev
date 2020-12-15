import React from "react";
import styled from "styled-components";
import {Footer} from "./pages/common/Footer";
import {Header} from "./pages/common/Header";
import * as Colors from "./style/Colors";

const AppRootWrapper = styled.div`
  min-height: 100vh;
  font-family: "M PLUS Rounded 1c", sans-serif;
  color: ${Colors.MainTextColor};
  background-color: ${Colors.MainBackground};
`;

const AppContentWrapper = styled.div`
  padding: 1em;
`;

export const AppRoot = () => (
  <AppRootWrapper>
    <Header />
    <AppContentWrapper>
      <h1>It works!</h1>
    </AppContentWrapper>
    <Footer />
  </AppRootWrapper>
);
