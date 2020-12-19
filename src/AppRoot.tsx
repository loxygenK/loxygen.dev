import React from "react";
import styled from "styled-components";
import { Footer } from "@app/pages/common/Footer";
import { Header } from "@app/pages/common/Header";
import * as Colors from "@app/style/Colors";
import Splashscreen from "./pages/splash/SplashScreen";
import { Gretting } from "./pages/elements/greeting/Greeting";
import { Introduction } from "./pages/elements/introduction/Introduction";
import { DataSet, fetchAchievements, fetchFundamentals, fetchTechnical } from "./types/datas/RemoteFetcher";
import {Technical} from "./types/datas/Techinal";
import {Achievement} from "./types/datas/Acheivement";
import {Fundamental} from "./types/datas/Fundamental";

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
  achievement?: Achievement;
  fundamental?: Fundamental;
  technical?: Technical;
  loading: boolean;
};

export class AppRoot extends React.Component<Record<string, unknown>, State> {
  constructor() {
    super({});
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    Promise.all([
      fetchAchievements(),
      fetchFundamentals(),
      fetchTechnical(),
    ]).then(
      ([achive, fundamental, technical]) => {
        this.setState({
          achievement: achive,
          fundamental: fundamental,
          technical: technical,
          loading: false,
        });
      }
    )
  }

  render() {
    return (
      <AppRootWrapper>
        <Header />
        {/*<Splashscreen />*/}
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
    if(this.state.loading) return (
      <Centerize>This is taking unexpectedly long time...</Centerize>
    );
    if(this.state.fundamental == null) return <Centerize>boom</Centerize>;
    return (
      <>
        <Introduction data={this.state.fundamental} />
      </>
    )
  }
}
