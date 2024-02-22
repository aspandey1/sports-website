import { useEffect, useState } from "react";
import { getChampLeagueData } from "../services/requests/ChampLeague";

import NavBar from "./NavBar";
import Matches from "./Matches";
import ChampionsLeagueAbout from "./ChampionsLeagueAbout";
import ChampionsLeagueBanner from "./ChampionsLeagueBanner";
import PageTitle from "./PageTitle";

let tempValue = [
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

const ChampionsLeague = () => {
  const [champData, setChampData] = useState(tempValue);

  useEffect(() => {
    getChampLeagueData()
      .then((data) => {
        setChampData(data.matches);
      })
      .catch((error) => {
        setChampData(error.response.data.matches);
      });
  }, []);

  return (
    <>
      <NavBar />
      <Matches matches={champData} />
      <PageTitle title="CHAMPIONS LEAGUE" />
      <ChampionsLeagueBanner />
      <ChampionsLeagueAbout />
    </>
  );
};

export default ChampionsLeague;
