export type Styles = {
  anchor: string;
  caption: string;
  footer: string;
  header: string;
  heading: string;
  title: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
