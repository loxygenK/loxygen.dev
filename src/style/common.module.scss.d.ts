export type Styles = {
  anchor: string;
  blink: string;
  caption: string;
  cursor: string;
  expand: string;
  flexExpand: string;
  footer: string;
  heading: string;
  reset: string;
  terminal: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
