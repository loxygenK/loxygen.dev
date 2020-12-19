export type Level =
  | "advanced"
  | "available"
  | "intermediate"
  | "practicing"
  | "interested";

export type Technical = {
  framworks: Map<string, Framework>;
};

export type Framework = {
  name: string;
  techs: Map<string, Techniques>;
};

export type Techniques = {
  name: string;
  level: Level;
};
