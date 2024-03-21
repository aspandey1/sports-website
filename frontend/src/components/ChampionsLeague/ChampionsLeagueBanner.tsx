import clImage1 from "../../assets/ucl-ball.jpg";
import { topStories } from "../../util/champStories";

const ChampionsLeagueBanner = () => {
  return (
    <div className="lg:flex px-[2rem] lg:px-[6rem] bg-gradient-to-t from-white to-slate-300 pt-2 pb-10">
      <div className="h-full lg:w-[70%]">
        <img src={clImage1} alt="" />
      </div>
      <div className="lg:w-[30%] lg:pl-5 pt-10 lg:pt-0 text-neutral-800">
        {topStories.map((element, index) => (
          <a
            key={index}
            href={element.link}
            target="_blank"
            className={
              "flex items-center hover:cursor-pointer hover:underline hover:brightness-[80%] h-[20%] w-full rounded-sm" +
              (index % 2 === 0 ? " bg-slate-400" : " bg-[#a7bed9]")
            }
          >
            <div className="h-inherit w-[40%] ml-2 mr-4 ">
              <img src={element.image} alt="" className="py-2" />
            </div>
            <div className="md:font-bold md:text-lg 2xl:text-xl lg:text-[12px] text-md w-[60%] pr-2 lg:leading-3">
              {element.title}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ChampionsLeagueBanner;
