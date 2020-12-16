import * as React from "react";
import * as Colors from "@app/style/Colors";
import styled from "styled-components";

const FooterRoot = styled.div`
  margin: 0 3em;
  padding: 0.5em;
  text-align: center;
  border-top: 1px dashed ${Colors.SubTextColor};
  color: ${Colors.SubTextColor};
`;

export const Footer = () => (
  <footer>
    <FooterRoot>
      (c) 2020 Flisan ／ [visitor@flisan ~]
    </FooterRoot>
  </footer>
);
