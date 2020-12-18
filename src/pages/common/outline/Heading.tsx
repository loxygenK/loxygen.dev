import * as React from "react";
import styled from "styled-components";
import * as Colors from "@app/style/Colors";

const HeadingRoot = styled.div`
  width: 100%;
  padding: 0.2em 0.75em 0.4em;
  margin: 0.5em 0;
  margin-left: calc(-0.75em - 3px);
  border-bottom: 1px solid ${Colors.SubTextColor};
  border-left: 3px solid ${Colors.SubTextColor};
`;

const AnchorText = styled.div`
  font-family: "Fira Mono", monospace;
  font-size: 0.75em;
  color: ${Colors.SubTextColor};
`;

const HeadingText = styled.h1`
  padding: 0;
  margin: 0;
  margin-bottom: -0.03em;
  line-height: 120%;
`;

export const Heading = (props: { anchor: string; caption: string }) => (
  <HeadingRoot>
    <a id={props.anchor} />
    <HeadingText>{props.caption}</HeadingText>
    <AnchorText>~/{props.anchor}/</AnchorText>
  </HeadingRoot>
);
