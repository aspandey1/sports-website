import p1 from "../../assets/champ.jpg";
import p2 from "../../assets/prem.jpg";
import p3 from "../../assets/bund.jpg";
import { Link } from "react-router-dom";

const Leagues = () => {
  return (
    <div className="lg:px-[6rem] px-[2rem] bg-gradient-to-t from-white to-slate-300 py-10">
      <div className="lg:w-fit w-full">
        <h1 className="font-bold text-4xl 2xl:text-5xl pb-2 lg:text-left text-center">
          Leagues
        </h1>
        <div className="h-[8px] bg-blue-800 w-full"></div>
      </div>

      <div className="flex flex-col md:flex-row w-full h-full gap-2 pt-8">
        <div className="flex flex-col w-full md:w-[33%]">
          <img src={p1} alt="" className="w-full rounded-t" />
          <div className="w-full bg-neutral-800 text-center px-4 py-6">
            <div className="font-bold lg:text-2xl text-lg uppercase mb-4 text-white">
              Champions League
            </div>
            <Link
              to={"/championsleague"}
              className="bg-[#a7bed9] text-neutral-800 font-semibold uppercase rounded-full px-4 py-1 lg:text-lg text-md"
            >
              View
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-[33%]">
          <img src={p2} alt="" className="w-full rounded-t" />
          <div className="w-full bg-neutral-800 text-center px-4 py-6">
            <div className="font-bold lg:text-2xl text-lg uppercase mb-4 text-white">
              Premier League
            </div>
            <Link
              to={"/premierleague"}
              className="bg-[#a7bed9] text-neutral-800 font-semibold uppercase rounded-full px-4 py-1 lg:text-lg text-md"
            >
              View
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-[33%]">
          <img src={p3} alt="" className="w-full rounded-t" />
          <div className="w-full bg-neutral-800 text-center px-4 py-6 ">
            <div className="font-bold lg:text-2xl text-lg uppercase mb-4 text-white">
              Bundesliga
            </div>
            <Link
              to={""}
              className="bg-[#a7bed9] text-neutral-800 font-semibold uppercase rounded-full px-4 py-1 lg:text-lg text-md cursor-not-allowed"
            >
              Coming soon
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leagues;
