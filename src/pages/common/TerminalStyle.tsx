import * as React from "react";
import * as Colors from "@app/style/Colors";
import styled from "styled-components";

const TerminalStyleRoot = styled.div`
  font-family: "Fira Mono", monospace;
`;

const UserKindCharacter = styled.span`
  color: ${Colors.SubTextColor};
`;

const Cursor = styled.span`
  margin-left: 0.1em;
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

const TerminalStyle = (props: {
  children?: React.ReactNode;
  blinking?: boolean;
}) => {
  return (
    <TerminalStyleRoot>
      {props.children}
      {props.blinking ? <Cursor /> : <></>}
    </TerminalStyleRoot>
  );
};
export default TerminalStyle;
