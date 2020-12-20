import * as React from "react";
import common from "@css/common.module.scss";

export const Heading = (props: { anchor: string; caption: string }) => (
  <div className={common.heading}>
    <a id={props.anchor} />
    <h1 className={common.caption}>
      {props.caption}
    </h1>
    <div className={common.anchor}>
      ~/{props.anchor}/
    </div>
  </div>
);
