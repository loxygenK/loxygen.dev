import * as React from "react";
import { Heading } from "./Heading";
import styles from "@css/common.module.scss";

export const Section = (props: {
  name: string;
  children?: React.ReactNode;
}) => (
  <section>
    <Heading name={props.name} />
    <div className={styles.sectionContainer}>{props.children}</div>
  </section>
);
