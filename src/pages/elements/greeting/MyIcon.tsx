import * as React from "react";
import style from "@css/icon.module.scss";

function em2px(em: number): number {
  return parseFloat(getComputedStyle(document.documentElement).fontSize) * em;
}

export const MyIcon = () => (
  <img
    className={style.icon + " " + style.shaking}
    src={`https://www.gravatar.com/avatar/81b5400c90be309ee83aa9d13a3d8cc5?s=${em2px(
      12.5
    )}`}
  />
);
