import { GiSoccerBall } from "react-icons/gi";

interface links {
  name: string;
  link: string;
}
const navLinks: Array<links> = [
  { name: "Home", link: "/home" },
  { name: "England", link: "/england" },
  { name: "Germany", link: "/germany" },
  { name: "France", link: "/france" },
];

const NavBar = () => {
  return (
    <div className="bg-neutral-800 flex justify-between py-5 px-[6rem]">
      <div className="flex items-center">
        <GiSoccerBall size={50} color="lightgrey" />
        <span className="text-3xl text-gray-300 ml-2 pb-1">SOCCER</span>
      </div>
      <nav className="flex items-center">
        <ul className="flex flex-row">
          {navLinks.map((element) => {
            return (
              <li className="ml-8">
                <span className="text-gray-300">
                  <a href={element.link}>{element.name}</a>
                </span>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
