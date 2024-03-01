import { useState } from "react";
import { GiSoccerBall } from "react-icons/gi";
import { IoMenuSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import "../index.css";

interface NavInterface {
  name: string;
  link: string;
}

const NavLinks: Array<NavInterface> = [
  { name: "Champions League", link: "/championsleague" },
  { name: "Premier League", link: "/premierleague" },
  { name: "Bundesliga", link: "/teams" },
];

const NavBar = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const [navAnimation, setNavAnimation] = useState<string>(
    "translate-y-[-100%] opacity-0"
  );

  const toggleNav = () => {
    setNavOpen(!navOpen);
    if (navOpen == true) {
      setNavAnimation("translate-y-[-100%] ease-out duration-300 opacity-0");
    } else {
      setNavAnimation("translate-y-[196px] ease-in duration-300 opacity-100");
    }
  };

  return (
    <header className="bg-neutral-800 items-center py-2">
      <nav className="flex justify-between items-center md:px-[6rem] px-[2rem]">
        <NavLink to={"/"} className="z-50 bg-neutral-800 py-4">
          <GiSoccerBall color="lightgrey" className="w-16 h-16" />
        </NavLink>
        <div
          className={`md:static absolute bg-neutral-800 w-full md:min-h-fit min-h-[60vh] md:w-auto left-0 flex 
          md:justify-between items-center md:translate-y-[0%] md:px-0 px-10 ${navAnimation} 
           text-gray-200 md:opacity-100`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vh] gap-[6vh]">
            {NavLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.link}
                  id="sidebar"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "#7393B3" : "",
                    };
                  }}
                  className="uppercase whitespace-nowrap font-bold text-lg text-gray-300"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden block z-50">
          {navOpen ? (
            <IoCloseSharp
              size={50}
              color="lightgrey"
              className="cursor-pointer"
              onClick={toggleNav}
            />
          ) : (
            <IoMenuSharp
              size={50}
              color="lightgrey"
              className="cursor-pointer"
              onClick={toggleNav}
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
