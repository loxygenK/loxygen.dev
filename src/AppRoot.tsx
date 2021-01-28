import React from "react";
import style from "@css/app.module.scss";
import general from "@css/general.module.scss";
import { Footer } from "@app/pages/footer/Footer";
import { Header } from "@app/pages/header/Header";
import { Introduction } from "./pages/elements/introduction/Introduction";
import {
  fetchAchievements,
  fetchFundamentals,
  fetchTechnical,
} from "./types/datas/RemoteFetcher";
import { Technical } from "./types/datas/Techinal";
import { Achievement } from "./types/datas/Acheivement";
import { Fundamental } from "./types/datas/Fundamental";
import Splashscreen from "./pages/splash/SplashScreen";
import { Works } from "@app/pages/elements/works/Works";

type State = {
  achievement?: Achievement;
  fundamental?: Fundamental;
  technical?: Technical;
  loading: boolean;
  splashFinished: boolean;
};

export class AppRoot extends React.Component<Record<string, unknown>, State> {
  constructor() {
    super({});
    this.state = {
      loading: true,
      splashFinished: false,
    };
  }

  componentDidMount() {
    Promise.all([
      fetchAchievements(),
      fetchFundamentals(),
      fetchTechnical(),
    ]).then(([achive, fundamental, technical]) => {
      this.setState({
        achievement: achive,
        fundamental: fundamental,
        technical: technical,
        loading: false,
      });
    });
  }

  handleSplashFinish() {
    this.setState({
      splashFinished: true,
    });
  }

  render() {
    return (
      <div className={style.appRoot}>
        <Splashscreen onFinished={() => this.handleSplashFinish()} />
        {this.state.splashFinished ? this.buildLazyContents() : <></>}
      </div>
    );
  }

  buildLazyContents() {
    if (this.state.loading)
      return <div>This is taking unexpectedly long time...</div>;
    if (this.state.fundamental == null)
      return <div>Failed to fetch the data.</div>;
    if (this.state.achievement == null)
      return <div>Failed to fetch the data.</div>;
    return (
      <>
        <Header info={this.state.fundamental} />
        <div className={general.flexExpand}>
          <div className={style.appContent}>
            <Introduction data={this.state.fundamental} />
            <Works works={this.state.achievement.developed} />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
