import { useEffect, useState } from "react";
import { getChampLeagueData } from "../services/requests/ChampLeague";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

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
      homeTeamAbv: "null",
      awayTeamName: "null",
      awayTeamCrest: "null",
      awayTeamAbv: "null",
      scheduledDate: "null",
      scheduledTime: "null",
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
    getChampLeagueData().then((data) => {
      setChampData(data);
    });
  }, []);

  return (
    <div className="w-full lg:px-[6rem] px-[2rem] bg-neutral-800 text-gray-200 p-10">
      <div className="text-center">
        {champData === start ? (
          <div className="flex px-[36.91px] mx-auto">
            <div className="bg-gray-300 shadow  w-[184.19px] h-[76px] mr-5">
              <div className="animate-pulse flex flex-col items-center">
                <div className="rounded-md w-[165px] h-[10px] bg-gray-900 mt-3 mx-2 opacity-75 m-auto"></div>
                <div className="rounded-md w-[165px] h-[10px] bg-gray-900 mt-3 mx-2 opacity-75 m-auto"></div>
                <div className="rounded-md w-[165px] h-[10px] bg-gray-900 mt-3 mx-2 opacity-75 m-auto"></div>
              </div>
            </div>
            <div className="bg-gray-300 shadow  w-[184.19px] h-[76px] mr-5">
              <div className="animate-pulse flex flex-col items-center">
                <div className="rounded-md w-[165px] h-[10px] bg-gray-900 mt-3 mx-2 opacity-75 m-auto"></div>
                <div className="rounded-md w-[165px] h-[10px] bg-gray-900 mt-3 mx-2 opacity-75 m-auto"></div>
                <div className="rounded-md w-[165px] h-[10px] bg-gray-900 mt-3 mx-2 opacity-75 m-auto"></div>
              </div>
            </div>
            <div className="bg-gray-300 shadow  w-[184.19px] h-[76px] mr-5">
              <div className="animate-pulse flex flex-col items-center">
                <div className="rounded-md w-[165px] h-[10px] bg-gray-900 mt-3 mx-2 opacity-75 m-auto"></div>
                <div className="rounded-md w-[165px] h-[10px] bg-gray-900 mt-3 mx-2 opacity-75 m-auto"></div>
                <div className="rounded-md w-[165px] h-[10px] bg-gray-900 mt-3 mx-2 opacity-75 m-auto"></div>
              </div>
            </div>
            <div className="bg-gray-300 shadow  w-[184.19px] h-[76px] mr-5">
              <div className="animate-pulse flex flex-col items-center">
                <div className="rounded-md w-[165px] h-[10px] bg-gray-900 mt-3 mx-2 opacity-75 m-auto"></div>
                <div className="rounded-md w-[165px] h-[10px] bg-gray-900 mt-3 mx-2 opacity-75 m-auto"></div>
                <div className="rounded-md w-[165px] h-[10px] bg-gray-900 mt-3 mx-2 opacity-75 m-auto"></div>
              </div>
            </div>
            <div className="bg-gray-300 shadow  w-[184.19px] h-[76px] mr-5">
              <div className="animate-pulse flex flex-col items-center">
                <div className="rounded-md w-[165px] h-[10px] bg-gray-900 mt-3 mx-2 opacity-75 m-auto"></div>
                <div className="rounded-md w-[165px] h-[10px] bg-gray-900 mt-3 mx-2 opacity-75 m-auto"></div>
                <div className="rounded-md w-[165px] h-[10px] bg-gray-900 mt-3 mx-2 opacity-75 m-auto"></div>
              </div>
            </div>
            <div className="bg-gray-300 shadow  w-[184.19px] h-[76px] mr-5">
              <div className="animate-pulse flex flex-col items-center">
                <div className="rounded-md w-[165px] h-[10px] bg-gray-900 mt-3 mx-2 opacity-75 m-auto"></div>
                <div className="rounded-md w-[165px] h-[10px] bg-gray-900 mt-3 mx-2 opacity-75 m-auto"></div>
                <div className="rounded-md w-[165px] h-[10px] bg-gray-900 mt-3 mx-2 opacity-75 m-auto"></div>
              </div>
            </div>
          </div>
        ) : (
          <ul className="flex items-center">
            <MdChevronLeft
              size={40}
              onClick={slideLeft}
              className="text-gray-400 cursor-pointer hover:text-gray-200 hover:scale-x-150 hover:scale-y-125 ease-in duration-200 md:block hidden"
            />
            <div
              id="slider"
              className="flex w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth no-scrollbar"
            >
              {champData.matches.map((e, index) => (
                <li
                  key={index}
                  className="bg-gray-300 text-neutral-800 font-bold mr-5"
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
            <MdChevronRight
              size={40}
              onClick={slideRight}
              className="text-gray-400 cursor-pointer hover:text-gray-200 hover:scale-x-150 hover:scale-y-125 ease-in duration-200 md:block hidden"
            />
          </ul>
        )}
      </div>
    </div>
  );
};

export default ChampionsLeagueMatches;
