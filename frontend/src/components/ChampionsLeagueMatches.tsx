import { useEffect, useState } from "react";
import { getChampLeagueData } from "../services/requests/ChampLeague";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import MatchesLoader from "./MatchesLoader";

interface matchesItems {
  homeTeamName: string;
  homeTeamCrest: string;
  homeTeamAbv: string;
  awayTeamName: string;
  awayTeamCrest: string;
  awayTeamAbv: string;
  scheduledDate: string;
  scheduledTime: string;
}

interface matchesList {
  matches: matchesItems[];
}

const start: matchesList = {
  matches: [
    {
      homeTeamName: "null",
      homeTeamCrest: "null",
      homeTeamAbv: "NAN",
      awayTeamName: "null",
      awayTeamCrest: "null",
      awayTeamAbv: "NAN",
      scheduledDate: "MM/DD",
      scheduledTime: "00:00 AM",
    },
  ],
};

const ChampionsLeagueMatches = () => {
  const [champData, setChampData] = useState(start);

  const slideLeft = () => {
    const slider: HTMLElement = document.getElementById("slider")!;
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    const slider: HTMLElement = document.getElementById("slider")!;
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    // getChampLeagueData().then((data) => {
    //   setChampData(data);
    // });
  }, []);

  return (
    <div className="bg-slate-300 text-gray-200 py-2">
      <div className="text-center">
        <ul className="flex items-center md:px-[3.6rem] px-[2rem] py-2">
          <MdChevronLeft
            size={40}
            onClick={slideLeft}
            className="text-gray-500 cursor-pointer hover:text-neutral-800 hover:scale-x-125 hover:scale-y-125 ease-in duration-200 md:block hidden"
          />
          <div
            id="slider"
            className="flex w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth no-scrollbar"
          >
            {champData === start ? (
              <div className="flex">
                <MatchesLoader />
                <MatchesLoader />
                <MatchesLoader />
                <MatchesLoader />
                <MatchesLoader />
                <MatchesLoader />
                <MatchesLoader />
                <MatchesLoader />
                <MatchesLoader />
                <MatchesLoader />
                <MatchesLoader />
                <MatchesLoader />
              </div>
            ) : (
              <div className="flex">
                {champData.matches.map((e, index) => (
                  <li
                    key={index}
                    className="bg-neutral-800 text-gray-400 font-bold mr-5 border-gray-500 border-2 rounded"
                  >
                    <div className="flex w-max px-2 py-2 items-center">
                      <div className="flex flex-col">
                        <div className="flex flex-row items-center mb-3">
                          <img
                            src={e.homeTeamCrest}
                            alt=""
                            className="w-[1.5rem]"
                          />
                          <div className="pl-2">{e.homeTeamAbv}</div>
                        </div>
                        <div className="flex flex-row items-center">
                          <img
                            src={e.awayTeamCrest}
                            alt=""
                            className="w-[1.5rem]"
                          />
                          <div className="pl-2">{e.awayTeamAbv}</div>
                        </div>
                      </div>
                      <div className="flex flex-col pl-10 ">
                        <div>{e.scheduledDate}</div>
                        <div>{e.scheduledTime}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </div>
            )}
          </div>
          <MdChevronRight
            size={40}
            onClick={slideRight}
            className="text-gray-500 cursor-pointer hover:text-neutral-800 hover:scale-x-125 hover:scale-y-125 ease-in duration-200 md:block hidden"
          />
        </ul>
      </div>
    </div>
  );
};

export default ChampionsLeagueMatches;
