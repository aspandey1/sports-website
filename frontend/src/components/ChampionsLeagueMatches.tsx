import { useEffect, useState } from "react";
import { getChampLeagueData } from "../services/requests/ChampLeague";

interface matchesItems {
  homeTeamName: String;
  homeTeamCrest: String;
  awayTeamName: String;
  awayTeamCrest: String;
  scheduled: Date;
}

interface matchesList {
  matches: matchesItems[];
}

const start: matchesList = {
  matches: [
    {
      homeTeamName: "null",
      homeTeamCrest: "null",
      awayTeamName: "null",
      awayTeamCrest: "null",
      scheduled: new Date(),
    },
  ],
};

const ChampionsLeagueMatches = () => {
  const [champData, setChampData] = useState(start);

  useEffect(() => {
    // getChampLeagueData().then((data) => {
    //   setChampData(data);
    // });
  }, []);

  return (
    <div className="w-full px-[6rem] bg-neutral-800 text-gray-200">
      <div className="text-center">
        <h1 className="font-bold">Upcoming Matches</h1>
        <ul className="py-10">
          {champData.matches.map((e, index) => (
            <li
              key={index}
              className="bg-stone-400 py-2 my-4 rounded-md text-neutral-800 font-bold"
            >
              {e.awayTeamName + " vs " + e.homeTeamName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChampionsLeagueMatches;
