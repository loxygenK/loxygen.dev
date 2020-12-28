import * as React from "react";
import common from "@css/common.module.scss";

export const Heading = (props: { name: string }) => (
  <div>
    <div className={common.heading}>
      <a id={props.name} />
      <span className={common.decorator}>~/</span>
      {props.name}
      <span className={common.decorator}>/</span>
    </div>
  </div>
);
