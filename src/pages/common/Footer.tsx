import * as React from "react"
import * as Colors from "@app/style/Colors";
import styled from "styled-components";

const FooterRoot = styled.div`
  background-color: ${Colors.AccentBackground};
  padding: 2em;
  text-align: center;
`;

export const Footer = () => (
  <footer>
    <FooterRoot>
      <div><b>(c) 2020 Flisan ／ [visitor@flisan ~]</b></div>
      <div>フライさんのブログです。</div>
    </FooterRoot>
  </footer>
)
