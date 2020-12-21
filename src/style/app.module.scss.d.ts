export type Styles = {
  appContent: string;
  appRoot: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
