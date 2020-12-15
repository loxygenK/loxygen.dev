import * as React from "react";
import styled from "styled-components";

const TerminalStyleRoot = styled.div`
  font-family: "Fira Mono", monospace;
`;

const Cursor = styled.span`
  margin-left: 0.5em;
  border-left: 2px solid #777;
  animation: 1s step-start infinite blink;

  @keyframes blink {
    0% {
      opacity: 100%;
    }
    50% {
      opacity: 0%;
    }
  }
`;

const TerminalStyle = (props: { text: string; blinking?: boolean }) => (
  <TerminalStyleRoot>
    {props.text}
    {props.blinking ? <Cursor /> : <></>}
  </TerminalStyleRoot>
);
export default TerminalStyle;
