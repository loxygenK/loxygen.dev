import { Section } from "@app/pages/common/outline/Section";
import { Fundamental } from "@app/types/datas/Fundamental";
import * as React from "react";
import { SubSection } from "@app/pages/common/outline/SubSection";
import styles from "@css/elements/introductions.module.scss";
import { EnsureReturnCode } from "@app/pages/miscs/EnsureReturnCode";

export const Introduction = (props: { data: Fundamental }) => (
  <Section name="introduction">
    <SubSection name={"ls ~/introduction/Belonging.d/"}>
      <span className={styles.schoolName}>
        {props.data.belong.school.name.long}
      </span>
      <EnsureReturnCode text={props.data.belong.school.class.long} />
    </SubSection>
    <SubSection name={"cat ~/introduction/README"}>
      <EnsureReturnCode text={props.data.description} />
    </SubSection>
  </Section>
);
