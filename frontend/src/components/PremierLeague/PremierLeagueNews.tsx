import { premTopStoriesRow1, premTopStoriesRow2 } from "../../util/premStories";

const PremierLeagueNews = () => {
  return (
    <div className="px-[2rem] lg:px-[6rem] bg-gradient-to-t from-white to-slate-300 pt-6 pb-10">
      <div className="lg:w-fit w-full">
        <h1 className="font-bold text-4xl 2xl:text-5xl pb-2 lg:text-left text-center">
          News
        </h1>
        <div className="h-[8px] bg-blue-800 w-full"></div>
      </div>
      <div className="flex flex-col md:flex-row w-full text-center gap-4 pt-8">
        {premTopStoriesRow1.map((element) => (
          <div
            key={element.title}
            className="w-full md:w-[25%] bg-[#a7bed9] ease-in duration-200 hover:scale-105 hover:cursor-pointer hover:underline rounded-b-lg"
          >
            <img src={element.image} className="w-full rounded-t-lg" alt="" />
            <div className="w-full p-4 text-sm md:text-lg">{element.title}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row w-full text-center gap-4 pt-8">
        {premTopStoriesRow2.map((element) => (
          <div
            key={element.title}
            className="w-full md:w-[25%] bg-[#a7bed9] ease-in duration-200 hover:scale-105 hover:cursor-pointer hover:underline rounded-b-lg"
          >
            <img src={element.image} className="w-full rounded-t-lg" alt="" />
            <div className="w-full p-4 text-sm md:text-lg">{element.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremierLeagueNews;
