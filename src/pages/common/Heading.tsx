import * as React from "react";
import styled from "styled-components";
import * as Colors from "@app/style/Colors"

const HeadingRoot = styled.div`
  margin: 0.5em 0;
  margin-left: calc(-0.75em - 3px);
  width: 100%;
  border-left: 3px solid ${Colors.SubTextColor};
  border-bottom: 1px solid ${Colors.SubTextColor};
  padding: 0.2em 0.75em 0.4em;
`;

const AnchorText = styled.div`
  font-size: 0.75em;
  font-family: "Fira Mono", monospace;
  color: ${Colors.SubTextColor};
`;

const HeadingText = styled.h1`
  margin: 0;
  line-height: 120%;
  margin-bottom: -0.03em;
  padding: 0;
`;

export const Heading = (props: {anchor: string, caption: string}) => (
  <HeadingRoot>
    <a id={props.anchor} />
    <HeadingText>{props.caption}</HeadingText>
    <AnchorText>~/{props.anchor}/</AnchorText>
  </HeadingRoot>
)
