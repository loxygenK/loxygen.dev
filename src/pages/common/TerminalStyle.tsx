import * as React from "react";
import * as Colors from "@app/style/Colors";
import styled from "styled-components";

const TerminalStyleRoot = styled.div`
  font-family: "Fira Mono", monospace;
`;

const UserKindCharacter = styled.span`
  color: ${Colors.SubTextColor}
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

const TerminalStyle = (props: { text: string; blinking?: boolean }) => { 
  const separated = props.text.split("$", 2);
  const textComponent = (
    separated.length > 1
      ? (<>{separated[0]}<UserKindCharacter>$</UserKindCharacter>{separated[1]}</>)
      : (<>{separated[0]}</>)
  )
  return (
    <TerminalStyleRoot>
      {textComponent}
      {props.blinking ? <Cursor /> : <></>}
    </TerminalStyleRoot>
  )
};
export default TerminalStyle;
