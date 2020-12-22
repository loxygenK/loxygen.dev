import * as React from "react";
import style from "@css/greeting.module.scss";
import {MyIcon} from "./MyIcon";
import {Abbreviation} from "@app/types/datas/Fundamental";

export const Nameplate = (props: {name: Abbreviation}) => (
  <div className={style.nameplate}>
    <MyIcon />
    <span className={style.nameContainer}>
      <div className={style.name}>
        <div className={style.mainName}>{props.name.short}</div>
        <div className={style.subName}>{props.name.long}</div>
      </div>
    </span>
  </div>
)
