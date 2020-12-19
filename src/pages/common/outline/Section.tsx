import * as React from "react";
import { Heading } from "./Heading";

export const Section = (props: {
  caption: string;
  anchor: string;
  children?: React.ReactNode;
}) => (
  <section>
    <Heading caption={props.caption} anchor={props.anchor} />
    {props.children}
  </section>
);
