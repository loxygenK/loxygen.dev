import * as React from "react";
import common from "@css/common.module.scss";

export const SubHeading = (props: { name: string }) => (
  <div>
    <div className={common.subheading}>
        {props.name}
    </div>
  </div>
);
