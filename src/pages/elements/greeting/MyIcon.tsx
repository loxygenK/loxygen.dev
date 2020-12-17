import * as React from "react";
import styled from "styled-components";

const IconImageFrame = styled.img`
  border: 3px solid #c8ccd0;
  border-radius: 9999em;
`;

function em2px(em: number): number {
  return parseFloat(getComputedStyle(document.documentElement).fontSize) * em;
}

export const MyIcon = () => (
  <IconImageFrame
    src={`https://www.gravatar.com/avatar/81b5400c90be309ee83aa9d13a3d8cc5?s=${em2px(
      12.5
    )}`}
  />
);
