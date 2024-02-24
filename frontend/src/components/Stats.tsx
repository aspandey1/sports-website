interface playerInfo {
  name: string;
  teamCrest: string;
  gamesPlayed: number;
  goals: number;
  assists: number;
}

interface data {
  scorers: playerInfo[];
}

const titles: Array<string> = [
  "team",
  "players",
  "matches played",
  "assists",
  "goals",
];

const darkBg: string = "bg-gray-400 flex h-max";
const lightBg: string = "bg-slate-300 flex h-max";

const Stats: React.FC<data> = (props: data) => {
  return (
    <div className="px-[2rem] lg:px-[6rem] bg-gradient-to-t from-white to-slate-300 pt-6 pb-10">
      <div className="w-min">
        <h1 className="font-bold text-4xl 2xl:text-5xl pb-2">Stats</h1>
        <div className="h-[8px] bg-blue-800"></div>
      </div>

      {props.scorers.length == 10 ? (
        <div className="mt-6 text-gray-300 overflow-x-auto">
          <div className="flex flex-col min-w-[1000px] overflow-x-auto scroll whitespace-nowrap scroll-smooth">
            <div className="flex py-5 text-lg md:text-xl 2xl:text-3xl lg:text-2xl font-bold bg-neutral-800">
              {titles.map((element) => (
                <div key={element} className="w-[20%] text-center uppercase">
                  {element}
                </div>
              ))}
            </div>
            <div className="flex flex-col bg-slate-300 text-neutral-800 text-sm md:text-lg lg:text-xl 2xl:text-text-2xl font-bold border-b border-black">
              {props.scorers.map((element, index) => (
                <div key={index} className={index % 2 == 0 ? darkBg : lightBg}>
                  <div className="flex justify-center w-[20%] border-l border-black py-2">
                    <img
                      src={element.teamCrest}
                      alt=""
                      className="lg:w-[25%] w-[20%]"
                    />
                  </div>
                  <div className="flex items-center justify-center w-[20%] border-l border-black py-2">
                    {element.name}
                  </div>
                  <div className="flex items-center justify-center w-[20%] border-l border-black py-2">
                    {element.gamesPlayed}
                  </div>
                  <div className="flex items-center justify-center w-[20%] border-l border-black py-2">
                    {element.assists}
                  </div>
                  <div className="flex items-center justify-center w-[20%] border-l border-r border-black py-2">
                    {element.goals}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>No data</div>
      )}
    </div>
  );
};

export default Stats;
