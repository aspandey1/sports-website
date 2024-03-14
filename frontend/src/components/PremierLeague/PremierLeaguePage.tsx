import { useEffect, useState } from "react";
import {
  getPremMatches,
  getPremStandings,
} from "../../services/requests/PremLeague";
import NavBar from "../NavBar";
import Matches from "../Matches";
import PremierLeagueBanner from "./PremierLeagueBanner";
import PageTitle from "../PageTitle";
import PremierLeagueAbout from "./PremierLeagueAbout";
import PremierLeagueNews from "./PremierLeagueNews";
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

const tempStandingsValue = [
  {
    position: -1,
    playedGames: -1,
    points: -1,
    goalDifference: -1,
    crest: "NAN",
    teamAbv: "NAN",
  },
];

const PremierLeaguePage = () => {
  const [premMatchesData, setPremMatchesData] = useState(tempMatchValue);

  const [premStandingsData, setPremStandingsData] =
    useState(tempStandingsValue);

  useEffect(() => {
    // getPremMatches()
    //   .then((data) => {
    //     setPremMatchesData(data.matches);
    //   })
    //   .catch((error) => {
    //     error.response.data.matches;
    //   });
  }, []);

  useEffect(() => {
    // getPremStandings()
    //   .then((data) => {
    //     setPremStandingsData(data.standings);
    //   })
    //   .catch((error) => {
    //     error.response.data.standings;
    //   });
  }, []);

  return (
    <>
      <NavBar />
      <Matches matches={premMatchesData} />
      <PageTitle title="Premier League" />
      <PremierLeagueBanner standings={premStandingsData} />
      <PremierLeagueNews />
      <PremierLeagueAbout />
      <Footer />
    </>
  );
};

export default PremierLeaguePage;
