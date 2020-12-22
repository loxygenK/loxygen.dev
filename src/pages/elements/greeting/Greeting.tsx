import * as React from "react";
import style from "@css/greeting.module.scss";
import {Nameplate} from "./Nameplate";
import {Abbreviation} from "@app/types/datas/Fundamental";

export const Gretting = (props: {name: Abbreviation}) => (
  <div className={style.greeting}>
    <Nameplate name={props.name}/>
  </div>
);
