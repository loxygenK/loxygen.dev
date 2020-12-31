import * as React from "react";
import { SubHeading } from "./SubHeading";

export const SubSection = (props: {
  name: string;
  children?: React.ReactNode;
}) => (
  <section>
    <SubHeading name={props.name} />
    {props.children}
  </section>
);
