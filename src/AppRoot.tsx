import React from "react";
import styled from "styled-components";
import { Footer } from "@app/pages/common/Footer";
import { Header } from "@app/pages/common/Header";
import * as Colors from "@app/style/Colors";
import Splashscreen from "./pages/splash/SplashScreen";
import { Gretting } from "./pages/elements/greeting/Greeting";
import { Section } from "./pages/common/outline/Section";
import { Introduction } from "./pages/elements/introduction/Introduction";
import { DataSet, fetchFromDefaultDataSet } from "./types/datas/RemoteFetcher";

const AppRootWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "M PLUS 1p", sans-serif;
  color: ${Colors.MainTextColor};
  background-color: ${Colors.MainBackground};
`;

const Expand = styled.div`
  flex: 1;
`;

const Centerize = styled.div`
  text-align: center;
`;

const AppContentWrapper = styled.div`
  max-width: 45em;
  padding: 1em;
  margin: 0 auto;
  word-wrap: break-word;
`;

type State = {
  data?: Map<DataSet, any | null>;
};

export class AppRoot extends React.Component<Record<string, unknown>, State> {
  constructor({}) {
    super({});
    this.state = {
      data: undefined,
    };
  }

  componentDidMount() {
    Promise.all([
      fetchFromDefaultDataSet("achievements"),
      fetchFromDefaultDataSet("fundamental"),
      fetchFromDefaultDataSet("technical"),
    ]).then((value: [object | null, object | null, object | null]) => {
      console.log("Fetched!");
      this.setState({
        data: new Map([
          ["achievements", value[0]],
          ["fundamental", value[1]],
          ["technical", value[2]],
        ]),
      });
    });
  }

  render() {
    return (
      <AppRootWrapper>
        <Header />
        {<Splashscreen />}
        <Expand>
          <AppContentWrapper>
            <Gretting />
            {this.buildContent()}
          </AppContentWrapper>
        </Expand>
        <Footer />
      </AppRootWrapper>
    );
  }

  buildContent(): React.ReactNode {
    console.log(this.state.data);
    if(this.state.data == null) return (
      <Centerize>This is taking unexpectedly long time...</Centerize>
    );
    console.log(this.state.data.get("fundamental"));
    return (
      <>
        <Introduction data={this.state.data.get("fundamental")} />
      </>
    )
  }
}
