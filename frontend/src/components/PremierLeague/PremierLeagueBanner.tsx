import premBanner from "../../assets/13.jpg";

interface standingsElements {
  position: number;
  playedGames: number;
  points: number;
  goalDifference: number;
  crest: string;
  teamAbv: string;
}

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

interface incomingData {
  standings: standingsElements[];
}

const PremierLeagueBanner: React.FC<incomingData> = (props: incomingData) => {
  return (
    <div className="xl:flex px-[2rem] lg:px-[6rem] bg-gradient-to-t from-white to-slate-300 pt-2 pb-10">
      <div className="h-full xl:w-[70%]">
        <img src={premBanner} className="rounded h-full w-full" alt="" />
      </div>
      <div className="xl:w-[30%] xl:pl-5 pt-6 xl:pt-0 text-neutral-800">
        <div className="h-[5%]">
          <div className="h-full flex bg-neutral-800 text-white pl-4 pr-6 items-center rounded-t-lg">
            <div className="w-[25%]">Team</div>
            <div className="w-[25%] text-right">GP</div>
            <div className="w-[25%] text-right">GD</div>
            <div className="w-[25%] text-right">Pts</div>
          </div>
        </div>
        {props.standings.toString() !== tempStandingsValue.toString() ? (
          <div
            id="table-scroll"
            className="md:overflow-y-scroll overflow-y-hidden h-[95%] bg-[#a7bed9] rounded-b-lg w-full"
          >
            {props.standings.map((element, index) => (
              <div
                id="table-roboto-mono"
                key={index}
                className="flex h-[8%] items-center w-full pl-4 border-b-2 border-black xl:py-0 py-2 bg-[#a7bed9] hover:bg-neutral-500 hover:text-white"
              >
                <div className="flex items-center w-[25%] font-bold border-r-2 border-black 2xl:text-xl lg:text-md text-sm">
                  <img
                    src={element.crest}
                    alt=""
                    className="w-[1em] h-[1em] lg:w-[1.5em] lg:h-[1.5em] 2xl:w-[1.9em] 2xl:h-[1.9em] mr-2"
                  />
                  <div>{element.teamAbv}</div>
                </div>
                <div className="text-right w-[25%] pr-2 2xl:text-xl lg:text-md text-sm">
                  {element.playedGames}
                </div>
                <div className="text-right w-[25%] pr-3 2xl:text-xl lg:text-md text-sm">
                  {element.goalDifference}
                </div>
                <div className="text-right w-[25%] font-black pr-4 2xl:text-xl lg:text-md text-sm">
                  {element.points}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-[500px] lg:h-[95%] bg-[#a7bed9] rounded-b-lg">
            <div className="loader"></div>
            <div className="loading-text">Loading</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PremierLeagueBanner;
