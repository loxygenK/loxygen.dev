import * as React from "react";
import styled from "styled-components";
import * as Colors from "@app/style/Colors";
import TerminalStyle from "../common/TerminalStyle";

const message = "ssh visitor@flisan startx";
const charDelay = 0.05;

const SplashscreenRoot = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  box-sizing: border-box;
  display: flex;
  align-items: center;

  justify-content: center;

  width: 100vw;
  height: 100vh;

  padding: 0.2em;

  font-size: 2.3em;
  font-weight: 700;
  color: ${Colors.WhiteTextColor};
  text-align: center;

  overflow-wrap: anywhere;
  background-color: ${Colors.BlackBackground};

  animation: 0.5s cubic-bezier(0.14, 0.59, 0.4, 0.83) slideout
    ${charDelay * message.length + 0.5}s forwards;

  @keyframes slideout {
    from {
      top: 0;
    }
    to {
      top: -100vh;
      display: none;
    }
  }
`;

const Splashscreen = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((index) => index + 1);
    }, charDelay * 1000);
    return () => clearInterval(timer);
  }, [setIndex]);

  return (
    <SplashscreenRoot>
      <TerminalStyle blinking>{message.substring(0, index)}</TerminalStyle>
    </SplashscreenRoot>
  );
};

export default Splashscreen;
