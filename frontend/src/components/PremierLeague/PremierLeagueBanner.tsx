import premBanner from "../../assets/13.jpg";
import { topStories } from "../../util//premStories";

// interface standingsElements {
//   position: number;
//   playedGames: number;
//   points: number;
//   goalDifference: number;
//   crest: string;
//   teamAbv: string;
// }

// interface incomingData {
//   standings: standingsElements[];
// }

const PremierLeagueBanner = () => {
  return (
    <div className="lg:flex px-[2rem] lg:px-[6rem] bg-gradient-to-t from-white to-slate-300 pt-2 pb-10">
      <div className="h-full lg:w-[70%]">
        <img src={premBanner} className="h-full w-full" alt="" />
      </div>
      <div className="lg:w-[30%] lg:pl-5 pt-10 lg:pt-0 text-neutral-800">
        <div className="h-[10%] pb-5 lg:pb-0 ">
          <h1 className="text-center lg:text-left font-bold 2xl:text-4xl lg:text-2xl text-2xl lg:pb-0">
            TOP STORIES
          </h1>
          <div className="h-[8px] bg-blue-800 lg:mt-0 mt-2 w-full"></div>
        </div>

        {topStories.map((element, index) => (
          <a
            key={index}
            href={element.link}
            target="_blank"
            className={
              "flex items-center hover:brightness-[85%] hover:cursor-pointer hover:bg-slate-200 h-[18%] w-full" +
              (index % 2 === 0 ? " bg-slate-300" : " bg-gray-300")
            }
          >
            <div className="w-[40%] mr-4 ">
              <img src={element.image} alt="" className="py-2" />
            </div>
            <div className="font-bold 2xl:text-xl lg:text-[12px] text-xl w-[60%] pr-2 lg:leading-3">
              {element.title}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PremierLeagueBanner;
