import premBanner from "../../assets/premBanner.jpg";

const PremierLeagueBanner = () => {
  return (
    <div className="lg:flex px-[2rem] lg:px-[6rem] bg-gradient-to-t from-white to-slate-300 pt-2 pb-10">
      <div className="h-full lg:w-[70%]">
        <img src={premBanner} alt="" />
      </div>
      <div className="lg:w-[30%] lg:pl-5 pt-10 lg:pt-0 text-neutral-800 bg-red-100">
        PREM TABLE
      </div>
    </div>
  );
};

export default PremierLeagueBanner;
