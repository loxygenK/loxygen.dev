import * as React from "react";
import styled from "styled-components";

const IconImageFrame = styled.img<{ shake?: boolean }>`
  border: 3px solid #c8ccd0;
  border-radius: 9999em;

  ${(props) =>
    props.shake != null && props.shake
      ? "animation: 3s shake ease-in-out infinite alternate;"
      : ""}

  @keyframes shake {
    from {
      transform: rotate(-2deg);
    }
    to {
      transform: rotate(2deg);
    }
  }
`;

function em2px(em: number): number {
  return parseFloat(getComputedStyle(document.documentElement).fontSize) * em;
}

export const MyIcon = () => (
  <IconImageFrame
    shake
    src={`https://www.gravatar.com/avatar/81b5400c90be309ee83aa9d13a3d8cc5?s=${em2px(
      12.5
    )}`}
  />
);
