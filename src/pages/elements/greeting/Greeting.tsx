import * as React from "react";
import { MyIcon } from "./MyIcon";
import style from "@css/greeting.module.scss";

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
  <div className={style.greeting}>
    <MyIcon />
    <br />
    <div className={style.message}>
      {
        GreetingMessageList[
          Math.floor(Math.random() * GreetingMessageList.length)
        ]
      }
    </div>
  </div>
);
