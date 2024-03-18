const Features = () => {
  return (
    <div className="lg:px-[6rem] px-[2rem] bg-gradient-to-t from-white to-slate-300 py-10">
      <div className="lg:w-fit w-full">
        <h1 className="font-bold text-4xl 2xl:text-5xl pb-2 lg:text-left text-center">
          Features
        </h1>
        <div className="h-[8px] bg-blue-800 w-full"></div>
      </div>
      <div className="lg:flex justify-between pt-8">
        <div className="relative flex justify-center lg:w-[30%] bg-gray-400 lg:py-[22vh] py-[15vh] px-[2vh] text-3xl border-neutral-800 border-4 rounded-lg mb-10">
          <div className="uppercase text-center font-semibold text-neutral-800 lg:text-3xl text-[20px]">
            View Champions League Stats
          </div>
          <div className="absolute bottom-[-30px] center rounded-[50%] border-4 border-neutral-800 text-center px-5 py-3 bg-neutral-800 text-gray-300 font-bold lg:text-3xl text-[20px]">
            1
          </div>
        </div>
        <div className="relative flex justify-center lg:w-[30%] bg-gray-400 lg:py-[22vh] py-[15vh] px-[2vh] text-3xl border-neutral-800 border-4 rounded-lg mb-10">
          <div className="uppercase text-center font-semibold text-neutral-800 lg:text-3xl text-[20px]">
            View Premier League Table
          </div>
          <div className="absolute bottom-[-30px] center rounded-[50%] border-4 border-neutral-800 text-center px-5 py-3 bg-neutral-800 text-gray-300 font-bold lg:text-3xl text-[20px]">
            2
          </div>
        </div>
        <div className="relative flex justify-center lg:w-[30%] bg-gray-400 lg:py-[22vh] py-[15vh] px-[2vh] text-3xl border-neutral-800 border-4 rounded-lg mb-10">
          <div className="uppercase text-center font-semibold text-neutral-800 lg:text-3xl text-[20px]">
            View Latest Soccer News
          </div>
          <div className="absolute bottom-[-30px] center rounded-[50%] border-4 border-neutral-800 text-center px-5 py-3 bg-neutral-800 text-gray-300 font-bold lg:text-3xl text-[20px]">
            3
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
