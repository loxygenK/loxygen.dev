import * as React from "react"

import * as Colors from "@app/style/Colors"
import styled from "styled-components"
import TerminalStyle from "./TerminalStyle";

const HeaderRoot = styled.div`
  background-color: ${Colors.AccentBackground};
  padding: 2em;
  text-align: center;
`;

const HeaderTitle = styled.div`
  font-size: 1.75em;
  font-weight: 900;
`;

export const Header = () => (
  <header>
    <HeaderRoot>
      <HeaderTitle>
        <TerminalStyle text="[visitor@flisan ~]" blinking />
      </HeaderTitle>
      Inspect what Flisan looks like
    </HeaderRoot>
  </header>
)
