import p1 from "../../assets/champ.jpg";
import p2 from "../../assets/prem.jpg";

const Leagues = () => {
  return (
    <div className="lg:px-[6rem] px-[2rem] bg-gradient-to-t from-white to-slate-300 py-10">
      <div className="lg:w-fit w-full">
        <h1 className="font-bold text-4xl 2xl:text-5xl pb-2 lg:text-left text-center">
          Leagues
        </h1>
        <div className="h-[8px] bg-blue-800 w-full"></div>
      </div>

      <div className="flex w-full h-full gap-2 text-white overflow-x-scroll">
        <div className="relative flex">
          <img src={p1} alt="" className="w-full" />
          <div className="absolute right-0 bottom-0">View</div>
        </div>
        <div className="relative flex">
          <img src={p2} alt="" className="w-full h-full" />
          <div className="absolute right-0 bottom-0">View</div>
        </div>
      </div>
    </div>
  );
};

export default Leagues;
