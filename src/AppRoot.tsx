import React from "react";
import style from "@css/app.module.scss";
import general from "@css/general.module.scss";
import { Footer } from "@app/pages/common/Footer";
import { Header } from "@app/pages/common/Header";
import { Gretting } from "./pages/elements/greeting/Greeting";
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
      loading: true,
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

  render() {
    return (
      <div className={style.appRoot}>
        <Header />
        {/*<Splashscreen />*/}
        <div className={general.flexExpand}>{this.buildContent()}</div>
        <Footer />
      </div>
    );
  }

  buildContent(): React.ReactNode {
    if (this.state.loading)
      return <div>This is taking unexpectedly long time...</div>;
    if (this.state.fundamental == null) return <div>boom</div>;
    return (
      <>
        <Gretting name={this.state.fundamental.name} />
        <div className={style.appContent}>
          <Introduction data={this.state.fundamental} />
        </div>
      </>
    );
  }
}
