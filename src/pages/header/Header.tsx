import * as React from "react";

import style from "@css/header.module.scss";
import { MyIcon } from "@app/pages/header/MyIcon";
import { Nameplate } from "@app/pages/header/Nameplate";
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
      <header className={style.header}>
        <MyIcon size_em={12} />
        <Nameplate info={this.props.info} />
      </header>
    );
  }
}
