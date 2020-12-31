import * as React from "react";

export const EnsureReturnCode = (props: { text: string }) => (
  <>
    {props.text.split("\n").map((str, index) => (
      <React.Fragment key={index}>
        {str}
        <br />
      </React.Fragment>
    ))}
  </>
);
