import { Program } from "@app/types/datas/Acheivement";
import * as React from "react";
import { Section } from "@app/pages/common/outline/Section";
import { ProgramContainer } from "@app/pages/elements/works/ProgramContainer";

import style from "@css/elements/program.module.scss";

export const Works = (props: { works: Program[] }) => {
  return (
    <Section name="works">
      <div className={style.programList}>
        {Object.entries(props.works).map(([name, value], index) => (
          <ProgramContainer name={name} program={value} key={index} />
        ))}
      </div>
    </Section>
  );
};
