import plImage from "../../assets/Premier-League.jpg";
const PremierLeagueAbout = () => {
  return (
    <div className="lg:flex px-[2rem] lg:px-[6rem] bg-gradient-to-t from-white to-slate-300 py-10 block lg:items-center ">
      <div className="flex flex-col lg:w-[40%]">
        <div className="lg:w-min w-full text-center pb-6 lg:pb-0">
          <h1 className="font-bold text-4xl 2xl:text-5xl pb-2">About</h1>
          <div className="h-[8px] bg-blue-800"></div>
        </div>
        <div className="2xl:text-3xl 2xl:leading-10 text-lg leading-8 tracking-wider w-full lg:pr-10 lg:mt-[10%] lg:text-left text-center lg:pb-0 pb-5">
          The <a className="2xl:text-4xl font-bold text-2xl">Premier League</a>{" "}
          is the highest level of the English football league system. Contested
          by 20 clubs, it operates on a system of promotion and relegation with
          the English Football League (EFL). Seasons typically run from August
          to May, with each team playing 38 matches against all other teams,
          both home and away.
        </div>
      </div>
      <div className="lg:w-[60%] h-full">
        <img src={plImage} alt="" className="rounded" />
      </div>
    </div>
  );
};

export default PremierLeagueAbout;
