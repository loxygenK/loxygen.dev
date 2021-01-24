export type Styles = {
  badge: string;
  description: string;
  for: string;
  name: string;
  program: string;
  programContainer: string;
  programList: string;
  progressBand: string;
  title: string;
  url: string;
  usedTech: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
