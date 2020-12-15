import React from "react";
import styled from "styled-components";
import {Footer} from "@app/pages/common/Footer";
import {Header} from "@app/pages/common/Header";
import * as Colors from "@app/style/Colors";

const AppRootWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "M PLUS Rounded 1c", sans-serif;
  color: ${Colors.MainTextColor};
  background-color: ${Colors.MainBackground};
`;

const AppContentWrapper = styled.div`
  padding: 1em;
  flex: 1;
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
