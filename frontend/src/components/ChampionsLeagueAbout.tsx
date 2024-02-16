import CLPhoto from "../assets/champions-league-preview-banner.jpg";

const ChampionsLeagueAbout = () => {
  return (
    <div className="lg:flex lg:px-[6rem] px-[2rem] bg-gradient-to-t from-white to-slate-300 py-10 block lg:items-center ">
      <div className="flex flex-col lg:w-[40%]">
        <div className="lg:w-min w-full text-center pb-6 lg:pb-0">
          <h1 className="font-bold text-4xl 2xl:text-6xl pb-2">About</h1>
          <div className="h-[8px] bg-blue-800"></div>
        </div>
        <div className="2xl:text-3xl 2xl:leading-10 text-lg leading-8 tracking-wider w-full lg:pr-10 lg:mt-[15%] lg:text-left text-center lg:pb-0 pb-5">
          The{" "}
          <a className="2xl:text-6xl font-bold text-2xl">Champions League</a> is
          an annual club association football competition organised by UEFA. It
          is contested by top-division European clubs, deciding the competition
          winners through a round robin group stage to qualify for a
          double-legged knockout format, and a single leg final.
        </div>
      </div>
      <div className="lg:w-[60%] h-full">
        <img src={CLPhoto} alt="" className="rounded" />
      </div>
    </div>
  );
};

export default ChampionsLeagueAbout;
