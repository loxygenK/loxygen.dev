import * as React from "react";
import styled from "styled-components";
import { MyIcon } from "./MyIcon";
import * as Colors from "@app/style/Colors";

const GreetingRoot = styled.div`
  text-align: center;
`;

const GreetingMessage = styled.div`
  font-size: 1.25em;
  font-weight: bold;
  color: ${Colors.SubTextColor};
`;

const GreetingMessageList = [
  "Hi! Thank you for visiting here!",
  "Wow, thank you for visiting here!",
  "Oh-wow, I'm glad to see you here!",
  "A visitor? Unbelievable!",
  "Hello, visitor! Take your time if you're free!",
  "Beep-beep, login succeeded, X session started...",
  "[flisan@flisan ~]$ greet visitor --with-thanks",
];

export const Gretting = () => (
  <GreetingRoot>
    <MyIcon />
    <br />
    <GreetingMessage>
      {
        GreetingMessageList[
          Math.floor(Math.random() * GreetingMessageList.length)
        ]
      }
    </GreetingMessage>
  </GreetingRoot>
);
