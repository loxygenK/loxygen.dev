import * as React from "react";
import style from "@css/misc.module.scss";

export const Anchor = (props: React.PropsWithChildren<{ to: string }>) => (
  <div className={style.anchor}>
    {props.children}
    <a href={props.to} target={"_blank"} rel={"noopener noreferrer"} />
  </div>
);
