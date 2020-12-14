import React, { StrictMode } from "react";
import { render } from "react-dom";

import { AppRoot } from "./AppRoot";

render(
  <StrictMode>
    <AppRoot />
  </StrictMode>,
  document.getElementById("root")
);
