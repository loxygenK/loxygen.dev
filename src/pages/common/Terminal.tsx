import * as React from "react";
import common from "@css/common.module.scss";

const Terminal = (props: {
  children?: React.ReactNode;
  blinking?: boolean;
}) => {
  return (
    <div className={common.terminal}>
      {props.children}
      <div className={props.blinking ? common.cursor : ""} />
    </div>
  );
};
export default Terminal;
