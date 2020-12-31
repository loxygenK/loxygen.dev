import * as React from "react";
import styles from "@css/common.module.scss";
import { SubHeading } from "./SubHeading";

export const SubSection = (props: {
  name: string;
  children?: React.ReactNode;
}) => (
  <section>
    <SubHeading name={props.name} />
    <div className={styles.subsectionContainer}>{props.children}</div>
  </section>
);
