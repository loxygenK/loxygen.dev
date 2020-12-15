import * as React from "react";
import styled from "styled-components";

const TerminalStyleRoot = styled.div`
  font-family: "Fira Mono", monospace;
`;

const Cursor = styled.span`
  animation: 1s step-start infinite blink;
  margin-left: 0.5em;
  border-left: 2px solid #777;

  @keyframes blink {
    0% { opacity: 100% }
    50% { opacity: 0% }
  };
`;

export default (

  props: {text: string, blinking?: boolean}
) => (
  <TerminalStyleRoot>
    {props.text}
    {props.blinking ? <Cursor /> : <></>}
  </TerminalStyleRoot>
)
