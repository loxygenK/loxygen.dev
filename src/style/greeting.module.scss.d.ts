export type Styles = {
  greeting: string;
  mainName: string;
  message: string;
  name: string;
  nameContainer: string;
  nameplate: string;
  subName: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
