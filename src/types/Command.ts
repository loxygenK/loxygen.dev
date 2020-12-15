export type CommandArgumentType = string[] | string | boolean;

export class Command {
  readonly name: string;
  readonly args: Map<string, CommandArgumentType>;

  constructor(name: string, args: Map<string, CommandArgumentType>) {
    this.name = name;
    this.args = args;
  }

  static parse(text: string): Command | null {
    // Check this is command or not
    const elements = text.match(/"[^"]*"|[^\s]+/g);
    if (elements == null) {
      return null;
    }

    // Prepare variables
    const name = elements[0];
    const args = new Map<string, CommandArgumentType>();
    let expectArgValue = "";
    // Parse!
    for (let i = 1; i < elements.length; i++) {
      // Try two pattern: "-a" and "--hoge"
      const isOneCharMatch = /^-[^-].*$/g.test(elements[i]);
      const isMultiMatch = /^--.+(=.+$)?/g.test(elements[i]);
      // If the value is expected, but the flag came;
      if (expectArgValue !== "" && (isOneCharMatch || isMultiMatch)) {
        // set the value as "true"
        args.set(expectArgValue, true);
        expectArgValue = "";
      }
      // If this seems to be "--hoge" style
      if (isMultiMatch) {
        // Gather the argument name
        const match = elements[i].match(/--|[^=]*|.*?/g);
        if (match == null) continue;

        const argName = match[1];
        if (match.length == 3)
          // Expect the value of argument in the next element
          expectArgValue = argName;
        // If the argument has "=", use the value
        else args.set(argName, match[3]);
        continue;
      }
      // If this seems to be "-a" style
      if (isOneCharMatch) {
        // Separate the argument in charaters, and add it to the arugment list
        elements[i]
          .substring(1)
          .split("")
          .forEach((char) => args.set(char, true));
        continue;
      }
      // If this seems NOT to be argument
      // And the value of the argument is expected,
      if (expectArgValue !== "") {
        // Use this as the value of argument
        args.set(expectArgValue, elements[i]);
        expectArgValue = "";
        continue;
      }
      // If not expected, then left is positional argument
      const leftArgs = elements.slice(i);
      const nextArgIndex = leftArgs.findIndex((cmd) => cmd.startsWith("-"));
      if (nextArgIndex == -1) {
        args.set("", leftArgs);
        break;
      } else {
        args.set("", leftArgs.slice(0, nextArgIndex));
        i = nextArgIndex;
        continue;
      }
    }
    if (expectArgValue !== "") {
      args.set(expectArgValue, true);
    }
    return new Command(name, args);
  }
}
