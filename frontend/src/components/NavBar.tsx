import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
  interface Links {
    name: string;
  }

  const navLinks: Links[] = [
    { name: "Home" },
    { name: "About" },
    { name: "Portfolio" },
  ];

  const [navOpen, setNavOpen] = useState<Boolean>(false);

  return (
    <>
      <div className="shadow-md bg-zinc-800 w-full z-50 text-gray-200">
        <div className="md:flex justify-between py-4 md:px-[5rem] px-7">
          <div className="font-bold text-2xl flex items-center">
            Ashish Pandey
            {navOpen ? (
              <IoClose
                onClick={() => {
                  setNavOpen(!navOpen);
                }}
                className="md:hidden absolute right-8 cursor-pointer"
              />
            ) : (
              <IoMenu
                onClick={() => {
                  setNavOpen(!navOpen);
                }}
                className="md:hidden absolute right-8 cursor-pointer"
              />
            )}
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 bg-zinc-800 pb-2 absolute md:static md:z-auto right-0 w-full md:w-auto md:pl-0 pl-7 ${
              navOpen
                ? "opacity-100 z-30 transition-all duration-300 ease-in"
                : " md:opacity-100 opacity-0 z-[-1] transition-all duration-200 ease-out"
            }`}
          >
            {navLinks.map((link) => (
              <li key={link.name} className="md:ml-8 md:my-0 my-7 text-lg">
                <a
                  className="text-gray-200 hover:text-blue-400 hover:cursor-pointer duration-500"
                  onClick={() => {
                    setNavOpen(false);
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
