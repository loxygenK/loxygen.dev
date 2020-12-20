import * as React from "react";
import style from "@css/splash.module.scss";
import TerminalStyle from "../common/TerminalStyle";

const message = "ssh visitor@flisan startx";
const charDelay = 0.05;

const Splashscreen = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((index) => index + 1);
    }, charDelay * 1000);
    return () => clearInterval(timer);
  }, [setIndex]);

  const shouldBeSliding = (index > (message.length + 7));
  return (
    <div className={`${style.splash} ${shouldBeSliding ? style.slidingout : ""}`}>
      <TerminalStyle blinking>{message.substring(0, index)}</TerminalStyle>
    </div>
  );
};

export default Splashscreen;
