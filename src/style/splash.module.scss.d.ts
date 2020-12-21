export type Styles = {
  slideout: string;
  slidingout: string;
  splash: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
