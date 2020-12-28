import * as React from "react";

import common from "@css/common.module.scss";
import { MyIcon } from "@app/pages/common/MyIcon";
import { Nameplate } from "@app/pages/elements/greeting/Nameplate";
import { Fundamental } from "@app/types/datas/Fundamental";

type HeaderProps = {
  info: Fundamental;
};

type HeaderState = {
  typedChar: string;
};

export class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = { typedChar: "" };
  }

  render() {
    return (
      <header className={common.header}>
        <MyIcon size_em={12} />
        <Nameplate info={this.props.info} />
      </header>
    );
  }
}
