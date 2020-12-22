import * as React from "react";
import style from "@css/general.module.scss";
import TerminalStyle from "../common/Terminal";

type TerminalInputProps = {
  prompt?: string;
  onEnter: (command: string) => void;
};

type TerminalInputState = {
  typedChar: string;
};

export class TerminalInput extends React.Component<
  TerminalInputProps,
  TerminalInputState
> {
  readonly prompt: string;

  constructor(props: TerminalInputProps) {
    super(props);
    this.prompt = props.prompt == null ? "" : props.prompt;
    this.state = { typedChar: "" };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleChange(e: any) {
    const newValue: string = e.target.value;

    if (!newValue.startsWith(this.prompt)) {
      return;
    }
    const filteredValue = newValue.substring(this.prompt.length);
    this.setState({ typedChar: filteredValue });
  }

  handleSubmit(e: React.KeyboardEvent) {
    if (e.key == "Enter") {
      this.props.onEnter(this.state.typedChar);
      this.setState({ typedChar: "" });
    } else if (e.key == "Escape") {
      this.setState({ typedChar: "" });
    }
  }

  render() {
    return (
      <TerminalStyle>
        <input
          className={style.expand + " " + style.reset}
          value={this.prompt + this.state.typedChar}
          onChange={(e) => this.handleChange(e)}
          onKeyDown={(e) => this.handleSubmit(e)}
        />
      </TerminalStyle>
    );
  }
}
