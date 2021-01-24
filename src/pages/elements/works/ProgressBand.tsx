import * as React from "react";
import style from "@css/elements/program.module.scss";

export const ProgressBand = (props: { caption: string }) => (
  <div className={style.progressBand}>{props.caption}</div>
);
