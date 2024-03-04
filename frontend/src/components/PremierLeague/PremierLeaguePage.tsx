import { useEffect, useState } from "react";
import { getPremMatches } from "../../services/requests/PremLeague";
import NavBar from "../NavBar";
import Matches from "../Matches";
import PremierLeagueBanner from "./PremierLeagueBanner";

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

const PremierLeaguePage = () => {
  const [premMatchesData, setPremMatchesData] = useState(tempMatchValue);
  useEffect(() => {
    // getPremMatches()
    //   .then((data) => {
    //     setPremMatchesData(data.matches);
    //   })
    //   .catch((error) => {
    //     error.response.data.matches;
    //   });
  }, []);
  return (
    <>
      <NavBar />
      <Matches matches={premMatchesData} />
      <PremierLeagueBanner />
    </>
  );
};

export default PremierLeaguePage;
