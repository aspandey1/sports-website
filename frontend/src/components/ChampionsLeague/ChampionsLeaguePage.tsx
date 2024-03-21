import { useEffect, useState } from "react";
import { tempGoalValue, tempMatchValue } from "../../util/champTempValues";
import {
  getChampLeagueData,
  getChampGoalData,
} from "../../services/requests/ChampLeague";

import NavBar from "../NavBar";
import Matches from "../Matches";
import ChampionsLeagueAbout from "./ChampionsLeagueAbout";
import ChampionsLeagueBanner from "./ChampionsLeagueBanner";
import PageTitle from "../PageTitle";
import Stats from "../Stats";
import PageNav from "../PageNav";
import Footer from "../Footer";

const ChampionsLeague = () => {
  const [champMatchData, setChampMatchData] = useState(tempMatchValue);
  const [champGoalData, setChampGoalData] = useState(tempGoalValue);

  const links = [
    { name: "stats", linkId: "stats" },
    { name: "about", linkId: "about" },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getChampLeagueData()
      .then((data) => {
        if (data.matches.length === 0) {
          setChampMatchData(tempMatchValue);
        } else {
          setChampMatchData(data.matches);
        }
      })
      .catch(() => {
        setChampMatchData(tempMatchValue);
      });
  }, []);

  useEffect(() => {
    getChampGoalData()
      .then((data) => {
        if (data.scorers.length == 0) {
          setChampGoalData(tempGoalValue);
          console.log(data.scorers);
        } else setChampGoalData(data.scorers);
      })
      .catch(() => {
        setChampGoalData(tempGoalValue);
      });
  }, []);

  return (
    <>
      <NavBar />
      <div id="home">
        <Matches matches={champMatchData} />
        <PageTitle title="CHAMPIONS LEAGUE" />
        <ChampionsLeagueBanner />
      </div>
      <PageNav links={links} />
      <div id="stats">
        <Stats scorers={champGoalData} />
      </div>
      <div id="about">
        <ChampionsLeagueAbout />
      </div>
      <Footer />
    </>
  );
};

export default ChampionsLeague;
