export type Achievement = {
  developed: Program[];
  trace: Trace[];
};

export type Status = "archived" | "completed" | "advancing" | "developing";

export type Program = {
  name: string;
  description: string;
  site?: string;
  status: Status;
  used?: string[];
  related?: string[];
  badges?: string[];
};

export type Trace = {
  achieve?: Achieve;
  event?: TraceEvent;
};

export type Achieve = {
  data: Date;
  name: string;
};

export type TraceEvent =
  | Achieve
  | {
      prize: string;
    };
