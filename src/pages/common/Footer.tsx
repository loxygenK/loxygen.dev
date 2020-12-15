import * as React from "react";
import * as Colors from "@app/style/Colors";
import styled from "styled-components";

const FooterRoot = styled.div`
  padding: 2em;
  text-align: center;
  background-color: ${Colors.AccentBackground};
`;

export const Footer = () => (
  <footer>
    <FooterRoot>
      <div>
        <b>(c) 2020 Flisan ／ [visitor@flisan ~]</b>
      </div>
      <div>フライさんのブログです。</div>
    </FooterRoot>
  </footer>
);
