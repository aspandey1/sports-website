import { useEffect, useState } from "react";
import { tempMatchValue, tempStandingsValue } from "../../util/premTempValues";
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
import PageNav from "../PageNav";
import PremierLeagueHistoricalData from "./PremierLeagueHistoricalData";

const links = [
  { name: "news", linkId: "news" },
  { name: "data", linkId: "data" },
  { name: "about", linkId: "about" },
];

const PremierLeaguePage = () => {
  const [premMatchesData, setPremMatchesData] = useState(tempMatchValue);

  const [premStandingsData, setPremStandingsData] =
    useState(tempStandingsValue);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getPremMatches()
      .then((data) => {
        if (data.matches.length == 0) {
          setPremMatchesData(tempMatchValue);
        } else setPremMatchesData(data.matches);
      })
      .catch(() => {
        setPremMatchesData(tempMatchValue);
      });
  }, []);

  useEffect(() => {
    getPremStandings()
      .then((data) => {
        if (data.standings.length === 0) {
          setPremStandingsData(tempStandingsValue);
        } else setPremStandingsData(data.standings);
      })
      .catch(() => {
        setPremStandingsData(tempStandingsValue);
      });
  }, []);

  return (
    <>
      <NavBar />
      <Matches matches={premMatchesData} />
      <PageTitle title="Premier League" />
      <PremierLeagueBanner standings={premStandingsData} />
      <PageNav links={links} />
      <PremierLeagueNews />
      <PremierLeagueHistoricalData />
      <PremierLeagueAbout />
      <Footer />
    </>
  );
};

export default PremierLeaguePage;
