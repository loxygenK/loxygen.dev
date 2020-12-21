import * as React from "react";

import { TerminalInput } from "../miscs/TerminalInput";
import { Command } from "@app/types/Command";

import common from "@css/common.module.scss";

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
      <header className={common.header}>
        <div className={common.title}>
          <TerminalInput
            prompt="[visitor@flisan ~]$ "
            onEnter={(e) => {
              console.log(e);
              console.log(Command.parse(e));
            }}
          />
        </div>
      </header>
    );
  }
}
