import * as React from "react";
import * as Colors from "@app/style/Colors";
import styled from "styled-components";

const FooterRoot = styled.div`
  padding: 0.5em;
  margin: 0 3em;
  color: ${Colors.SubTextColor};
  text-align: center;
  border-top: 1px dashed ${Colors.SubTextColor};
`;

export const Footer = () => (
  <footer>
    <FooterRoot>(c) 2020 Flisan ／ [visitor@flisan ~]</FooterRoot>
  </footer>
);
