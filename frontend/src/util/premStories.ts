import moSalah from "../assets/skysports-klopp-pep-liverpool.jpg";
import tenHag from "../assets/skysports-ten-hag.jpg";
import darwin from "../assets/darwin.jpg";
import plImg from "../assets/premier-league-logo-june-2022.jpg";
import nico from "../assets/nico-williams-athletic-club-2023-24-1701101888-122656.jpg";
import bournemouth from "../assets/Bournemouth.jpg";
import premVar from "../assets/var.jpg";
import premTitleRace from "../assets/prem-title-race.jpg";

interface news {
  link: string;
  title: string;
  image: string;
}

const premTopStoriesRow1: Array<news> = [
  {
    link: "https://www.skysports.com/football/news/11669/13088422/mohamed-salah-liverpool-boss-jurgen-klopp-confirms-egyptian-back-from-injury-ahead-of-man-city-title-clash",
    title: "Mohamed Salah back from injury ahead of Man City title clash",
    image: moSalah,
  },
  {
    link: "https://www.skysports.com/football/news/37134/13087596/erik-ten-hag-will-manchester-united-stick-or-twist-with-manager",
    title: "Will Manchester United stick or twist with manager?",
    image: tenHag,
  },
  {
    link: "https://www.premierleague.com/news/3924688",
    title: "Liverpool put one foot into Europa League quarter-finals",
    image: darwin,
  },
  {
    link: "https://www.premierleague.com/news/3777299",
    title: "Latest Premier League player injuries",
    image: plImg,
  },
];

const premTopStoriesRow2: Array<news> = [
  {
    link: "https://www.espn.com/soccer/story/_/id/39677987/transfer-talk-chelsea-monitoring-athletics-nico-williams",
    title: "Chelsea monitoring Athletic's Nico Williams",
    image: nico,
  },
  {
    link: "https://www.premierleague.com/news/3930809",
    title: "Bournemouth fight back from THREE GOALS DOWN to win",
    image: bournemouth,
  },
  {
    link: "https://www.espn.com/soccer/story/_/id/38196464/how-var-decisions-affect-premier-league-club-2023-24",
    title: "How VAR decisions affect each Premier League club in 2023-24",
    image: premVar,
  },
  {
    link: "https://www.bbc.com/sport/football/68481769",
    title:
      "Premier League title race: Will Arsenal, Liverpool or Manchester City win?",
    image: premTitleRace,
  },
];

export { premTopStoriesRow1, premTopStoriesRow2 };
