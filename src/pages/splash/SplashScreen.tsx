import * as React from "react";
import style from "@css/splash.module.scss";
import TerminalStyle from "../common/Terminal";
import Timeout = NodeJS.Timeout;

const message = "ssh visitor@flisan startx";
const charDelay = 0.05;

type SplashScreenProps = {
  onFinished: () => void;
}

type SplashScreenState = {
  timer?: Timeout;
  charIndex: number;
  notified: boolean;
}

class Splashscreen extends React.Component<SplashScreenProps, SplashScreenState> {

  constructor(props: SplashScreenProps) {
    super(props);
    this.state = {
      charIndex: 0,
      notified: false
    }
  }

  isTypingAnimationFinished = () => this.state.charIndex > message.length + 7;

  handleAnimationStep() {
    if(this.state.timer == null) return;
    if (this.isTypingAnimationFinished() && !this.state.notified) {
      this.props.onFinished();
      this.setState({ notified: true });
      clearInterval(this.state.timer);
    }
    this.setState({
      charIndex: this.state.charIndex + 1
    });
  }

  componentDidMount() {
    const timer = setInterval(() => this.handleAnimationStep(), charDelay * 1000);
    this.setState({
      timer: timer
    });
  }

  componentWillUnmount() {
    if(this.state.timer != null) {
      clearInterval(this.state.timer);
    }
  }

  render() {
    return (
        <div
            className={`${style.splash} ${this.isTypingAnimationFinished() ? style.slidingout : ""}`}
        >
          <TerminalStyle blinking>{message.substring(0, this.state.charIndex)}</TerminalStyle>
        </div>
    );
  }
}

export default Splashscreen;
