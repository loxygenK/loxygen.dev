import * as React from "react";

import * as Colors from "@app/style/Colors";
import styled from "styled-components";
import { TerminalInput } from "../miscs/TerminalInput";
import { Command } from "@app/types/Command";

const HeaderRoot = styled.div`
  padding: 1em;
  margin-bottom: 1.5em;
  width: 100vw;
  box-sizing: border-box;
  color: ${Colors.WhiteTextColor};
  text-align: center;
  background-color: ${Colors.AccentBackground};
`;

const HeaderTitle = styled.div`
  font-size: 1.5em;
  font-weight: 700;
`;

type HeaderState = {
  typedChar: string;
};

export class Header extends React.Component<
  Record<string, never>,
  HeaderState
> {
  readonly promptHeader = "[visitor@flisan ~]$ ";

  constructor() {
    super({});
    this.state = { typedChar: "" };
  }

  render() {
    return (
      <header>
        <HeaderRoot>
          <HeaderTitle>
            <TerminalInput
              prompt="[visitor@flisan ~]$ "
              onEnter={(e) => {
                console.log(e);
                console.log(Command.parse(e));
              }}
            />
          </HeaderTitle>
        </HeaderRoot>
      </header>
    );
  }
}
