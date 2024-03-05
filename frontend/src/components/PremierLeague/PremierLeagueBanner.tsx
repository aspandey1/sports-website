import { link } from "fs";
import premBanner from "../../assets/premBanner.jpg";

interface standingsElements {
  position: number;
  playedGames: number;
  points: number;
  goalDifference: number;
  crest: string;
  teamAbv: string;
}

interface incomingData {
  standings: standingsElements[];
}

const PremierLeagueBanner: React.FC<incomingData> = (props: incomingData) => {
  return (
    <div className="lg:flex px-[2rem] lg:px-[6rem] bg-gradient-to-t from-white to-slate-300 pt-2 pb-10">
      <div className="h-full lg:w-[70%]">
        <img src={premBanner} className="h-full w-full" alt="" />
      </div>
      <div className="lg:w-[30%] h-full lg:pl-5 pt-10 lg:pt-0 text-neutral-800">
        <div className="flex w-full h-full">Prem Table</div>
        <ul className="flex w-full h-full">
          <div
            id="slider"
            className="flex w-full h-full overflow-y-scroll scroll whitespace-nowrap scroll-smooth"
          >
            <div className="flex flex-col h-[300px] md:h-[500px] lg:h-[700px]">
              {props.standings.map((element) => (
                <li className="py-3">{element.teamAbv}</li>
              ))}
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default PremierLeagueBanner;
