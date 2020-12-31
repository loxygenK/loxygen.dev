import { Section } from "@app/pages/common/outline/Section";
import { Fundamental } from "@app/types/datas/Fundamental";
import * as React from "react";
import {SubSection} from "@app/pages/common/outline/SubSection";

export const Introduction = (props: { data: Fundamental }) => (
  <Section name="introduction">
    <SubSection name={"ls ~/introduction/Belonging.d/"} >
        <b>{props.data.name.long}</b>
    </SubSection>
  </Section>
);
