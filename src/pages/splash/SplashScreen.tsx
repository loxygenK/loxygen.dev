import * as React from "react";
import styled from "styled-components";
import * as Colors from "@app/style/Colors";
import TerminalStyle from "../common/TerminalStyle";

const message = "ssh visitor@flisan startx".replace(/ /g, "\u00a0");
const charDelay = 0.05;

const SplashscreenRoot = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  color: ${Colors.WhiteTextColor};
  background-color: ${Colors.BlackBackground};

  font-size: 2.3em;
  font-weight: 700;

  justify-content: center;
  align-items: center;

  animation: 0.35s slideout ${charDelay * (message.length) + 0.5}s forwards;

  @keyframes slideout {
    from {top: 0}
    to {top: -100vh; display: none;}
  }
`;

const Splashscreen = () => {
  
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex(index => index + 1);
    }, charDelay * 1000)
    return () => clearInterval(timer)
  }, [setIndex])

  return (
    <SplashscreenRoot>
      <TerminalStyle blinking>
        {message.substring(0, index)}
      </TerminalStyle>
    </SplashscreenRoot>
  )
}

export default Splashscreen;
