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

export { topStories };
