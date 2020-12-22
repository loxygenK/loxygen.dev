export type Styles = {
  expand: string;
  flexExpand: string;
  reset: string;
  terminal: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
