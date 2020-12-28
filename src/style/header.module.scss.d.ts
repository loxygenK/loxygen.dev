export type Styles = {
  header: string;
  mainName: string;
  nameContainer: string;
  nameplate: string;
  prefix: string;
  subName: string;
  title: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
