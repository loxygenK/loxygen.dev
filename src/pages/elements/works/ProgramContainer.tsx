import { Program } from "@app/types/datas/Acheivement";
import * as React from "react";

import style from "@css/elements/program.module.scss";
import { ProgressBand } from "@app/pages/elements/works/ProgressBand";
import {Anchor} from "@app/pages/miscs/Anchor";

export const ProgramContainer = (props: { name: string; program: Program }) => {
  const usedTechnics =
    props.program.used != null ? (
      <div className={style.usedTech}>{props.program.used.join(",")}</div>
    ) : (
      <></>
    );

  const relatedTo =
    props.program.related != null ? (
      <div className={style.for}>
        Developed For {props.program.related.join(",")}
      </div>
    ) : (
      <></>
    );

  const badges =
    props.program.badges != null ? (
      <div className={style.badge}>
        {props.program.badges.map((value, index) => (
          <img src={value} alt={props.name} key={index}/>
        ))}
      </div>
    ) : (
      <></>
    );

  const card = (
    <>
      <div className={style.program}>
        <div className={style.title}>
          <div className={style.name}>{props.program.name}</div>
          {usedTechnics}
        </div>
        <div className={style.url}>
          {props.program.site || "No link available."}
        </div>
        <p className={style.description}>{props.program.description}</p>
        {relatedTo}
        {badges}
      </div>
      <ProgressBand caption={props.program.status} />
    </>
  );

  if(props.program.site != null){
    return (
      <div className={style.programContainer}>
        <Anchor to={props.program.site} >
          {card}
        </Anchor>
      </div>
    );
  }
  return (
      <div className={style.programContainer}>
          {card}
      </div>
  );
};
