import { useEffect, useRef, useState } from "react";
import {
  getChampLeagueData,
  getChampGoalData,
} from "../services/requests/ChampLeague";

import NavBar from "./NavBar";
import Matches from "./Matches";
import ChampionsLeagueAbout from "./ChampionsLeagueAbout";
import ChampionsLeagueBanner from "./ChampionsLeagueBanner";
import PageTitle from "./PageTitle";
import Stats from "./Stats";
import PageNav from "./PageNav";

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
  const bannerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getChampLeagueData()
      .then((data) => {
        setChampMatchData(data.matches);
      })
      .catch((error) => {
        setChampMatchData(error.response.data.matches);
      });
  }, []);

  useEffect(() => {
    getChampGoalData()
      .then((data) => {
        setChampGoalData(data.scorers);
      })
      .catch((error) => {
        setChampGoalData(error.response.data.matches);
      });
  }, []);

  return (
    <>
      <NavBar />

      <PageNav bannerRef={bannerRef} statsRef={statsRef} aboutRef={aboutRef} />
      <Matches matches={champMatchData} />
      <div ref={bannerRef}>
        <PageTitle title="CHAMPIONS LEAGUE" />
        <ChampionsLeagueBanner />
      </div>
      <div ref={statsRef}>
        <Stats scorers={champGoalData} />
      </div>
      <div ref={aboutRef}>
        <ChampionsLeagueAbout />
      </div>
    </>
  );
};

export default ChampionsLeague;
