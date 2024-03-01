import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between py-8 px-[2rem] lg:px-[6rem] bg-neutral-800 text-gray-200">
      <div className="flex flex-col align-center md:text-left text-center">
        <p>Developed by Ashing Pandey</p>
        <p>
          Using{" "}
          <a
            href="https://www.football-data.org"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 visited:text-purple-400 underline"
          >
            football-data.org
          </a>{" "}
          API
        </p>
      </div>
      <div className="flex items-center gap-10 justify-center md:pt-0 pt-8">
        <a
          href="https://github.com/aspandey1/sports-website"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub size={60} />
        </a>
        <a
          href="https://www.linkedin.com/in/ashishpandey-"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin size={60} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
