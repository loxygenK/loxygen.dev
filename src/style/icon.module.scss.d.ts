export type Styles = {
  icon: string;
  shake: string;
  shaking: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
