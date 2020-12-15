import * as React from "react";

import * as Colors from "@app/style/Colors";
import styled from "styled-components";
import TerminalStyle from "./TerminalStyle";

const HeaderRoot = styled.div`
  padding: 1em;
  text-align: center;
  background-color: ${Colors.AccentBackground};
`;

const HeaderTitle = styled.div`
  font-size: 1.5em;
  font-weight: 700;
`;

export const Header = () => (
  <header>
    <HeaderRoot>
      <HeaderTitle>
        <TerminalStyle text="[visitor@flisan ~] $" blinking />
      </HeaderTitle>
    </HeaderRoot>
  </header>
);
