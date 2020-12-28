import * as React from "react";
import style from "@css/greeting.module.scss";
import { Fundamental } from "@app/types/datas/Fundamental";

export const Nameplate = (props: { info: Fundamental }) => (
  <div className={style.nameplate}>
    <span className={style.nameContainer}>
      <div>
        <div className={style.title}>
          {props.info.belong.school.name.long}
          <br />
          {props.info.belong.school.class.long}
        </div>
        <div className={style.mainName}>{props.info.name.short}</div>
        <div className={style.subName}>
          <span className={style.prefix}>a.k.a. </span>
          {props.info.name.long}
        </div>
      </div>
    </span>
  </div>
);
