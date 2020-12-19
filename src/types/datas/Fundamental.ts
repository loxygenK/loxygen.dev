export type Fundamental = {
  name: Abbreviation;
  belong: Belonging;
  description: string;
};

export type Belonging = {
  school: { name: Abbreviation; class: Abbreviation };
};

export type Abbreviation = {
  short: string;
  long: string;
};
