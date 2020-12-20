export type Styles = {
  anchor: string;
  blink: string;
  caption: string;
  cursor: string;
  footer: string;
  header: string;
  heading: string;
  terminal: string;
  title: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
