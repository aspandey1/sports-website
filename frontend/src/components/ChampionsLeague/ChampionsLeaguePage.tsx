import { useEffect, useRef, useState } from "react";
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

const tempMatchValue = [
  {
    homeTeamName: "null",
    homeTeamCrest: "null",
    homeTeamAbv: "null",
    awayTeamName: "null",
    awayTeamCrest: "null",
    awayTeamAbv: "null",
    scheduledDate: "MM/DD",
    scheduledTime: "00:00 AM",
  },
];

const tempGoalValue = [
  {
    name: "null null",
    teamCrest: "null",
    gamesPlayed: 0,
    goals: 0,
    assists: 0,
  },
];

const ChampionsLeague = () => {
  const [champMatchData, setChampMatchData] = useState(tempMatchValue);
  const [champGoalData, setChampGoalData] = useState(tempGoalValue);
  const homeRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const links = [
    { name: "stats", ref: statsRef },
    { name: "about", ref: aboutRef },
  ];

  useEffect(() => {
    // getChampLeagueData()
    //   .then((data) => {
    //     setChampMatchData(data.matches);
    //   })
    //   .catch((error) => {
    //     setChampMatchData(error.response.data.matches);
    //   });
  }, []);

  useEffect(() => {
    // getChampGoalData()
    //   .then((data) => {
    //     setChampGoalData(data.scorers);
    //   })
    //   .catch((error) => {
    //     setChampGoalData(error.response.data.matches);
    //   });
  }, []);

  return (
    <>
      <NavBar />
      <div ref={homeRef} id="home">
        <Matches matches={champMatchData} />
        <PageTitle title="CHAMPIONS LEAGUE" />
        <ChampionsLeagueBanner />
      </div>
      <PageNav links={links} />
      <div ref={statsRef} id="stats">
        <Stats scorers={champGoalData} />
      </div>
      <div ref={aboutRef} id="about">
        <ChampionsLeagueAbout />
      </div>
      <Footer />
    </>
  );
};

export default ChampionsLeague;
