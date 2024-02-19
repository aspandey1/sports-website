import NavBar from "./NavBar";
import ChampionsLeagueMatches from "./ChampionsLeagueMatches";
import ChampionsLeagueAbout from "./ChampionsLeagueAbout";
import ChampionsLeagueBanner from "./ChampionsLeagueBanner";

const ChampionsLeague = () => {
  return (
    <>
      <NavBar />
      <ChampionsLeagueMatches />
      <ChampionsLeagueBanner />
      <ChampionsLeagueAbout />
    </>
  );
};

export default ChampionsLeague;
