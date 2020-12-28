export type Styles = {
  blink: string;
  cursor: string;
  decorator: string;
  expand: string;
  flexExpand: string;
  footer: string;
  heading: string;
  reset: string;
  sectionContainer: string;
  terminal: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
