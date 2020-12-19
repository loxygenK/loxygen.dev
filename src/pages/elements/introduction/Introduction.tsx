import { Section } from "@app/pages/common/outline/Section";
import { Fundamental } from "@app/types/datas/Fundamental";
import * as React from "react";

export const Introduction = (props: { data: Fundamental }) => (
  <Section caption="自己紹介" anchor="introduction">
    {props.data.name.long}
  </Section>
);
