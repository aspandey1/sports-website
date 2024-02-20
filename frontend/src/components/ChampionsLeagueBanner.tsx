import clImage1 from "../assets/ucl-ball.jpg";
import interImage from "../assets/atletico-inter.jpg";
import newCL from "../assets/newCL.jpg";
import bayern from "../assets/bayern.jpg";
import round16 from "../assets/round-16.jpg";
import playersToWatch from "../assets/player-to-watch.jpg";

interface news {
  link: string;
  title: string;
  image: string;
}

const topStories: Array<news> = [
  {
    link: "https://www.cbssports.com/soccer/news/uefa-champions-league-round-of-16-picks-predictions-schedule-arsenal-barcelona-the-favorites-in-first-legs/",
    title: "Round of 16 Picks",
    image: round16,
  },
  {
    link: "https://www.cbssports.com/soccer/news/champions-league-players-to-watch-arsenals-gabriel-barcelonas-lamine-yamal-marcus-thuram-and-more/",
    title: "Champions League Players to Watch",
    image: playersToWatch,
  },
  {
    link: "https://www.uefa.com/uefachampionsleague/news/028a-1a1ffc6869fa-d62654692b9c-1000--inter-vs-atletico-de-madrid-champions-league-round-of-16/",
    title: "Inter vs Atlético de Madrid Preview",
    image: interImage,
  },
  {
    link: "https://www.uefa.com/uefachampionsleague/news/028a-1a386150ed4b-322dff667686-1000--2024-25-european-performance-spots/",
    title: "2024/25 Champions League Format",
    image: newCL,
  },
  {
    link: "https://www.cbssports.com/soccer/news/bayern-look-hopeless-in-champions-league-but-thomas-muller-remains-calm-they-have-to-come-to-munich/",
    title: "Bayern Munich in Trouble of Round of 16 Exit",
    image: bayern,
  },
];

const ChampionsLeagueBanner = () => {
  return (
    <div className="flex px-[2rem] md:px-[6rem] bg-gradient-to-t from-white to-slate-300 pt-2 pb-10">
      <div className="h-full w-[70%]">
        <img src={clImage1} alt="" />
      </div>
      <div className="w-[30%] pl-5 text-neutral-800">
        <div className="h-[9%]">
          <h1 className="font-bold 2xl:text-4xl text-2xl">TOP STORIES</h1>
        </div>
        <div className="h-[1%]">
          <div className="2xl:h-[6px] h-[3px] w-full bg-neutral-800"></div>
        </div>

        {topStories.map((element) => (
          <a
            href={element.link}
            target="_blank"
            className="flex items-center border-b-2 border-black hover:brightness-[85%] hover:cursor-pointer hover:bg-slate-200 h-[18%] w-full"
          >
            <div className="h-inherit w-[40%] mr-4">
              <img src={element.image} alt="" className="" />
            </div>
            <div className="font-bold 2xl:text-xl text-[12px] w-[60%]">
              {element.title}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ChampionsLeagueBanner;
