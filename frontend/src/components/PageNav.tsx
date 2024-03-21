import { useEffect, useState } from "react";

interface linkElements {
  name: string;
  linkId: string;
}

interface incomingProps {
  links: linkElements[];
}

const PageNav: React.FC<incomingProps> = (props: incomingProps) => {
  const [activeLink, setActiveLink] = useState(props.links[0].name);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const marginTop = 68;
      const scrollToY =
        element.getBoundingClientRect().top + window.scrollY - marginTop;
      window.scrollTo({ top: scrollToY, behavior: "smooth" });
    }
  };

  const activeSection = () => {
    for (let i = props.links.length - 1; i >= 0; i--) {
      const section = document.getElementById(props.links[i].linkId);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActiveLink(props.links[i].linkId);
          break;
        }
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      activeSection();
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="flex sticky top-0 px-[2rem] lg:px-[6rem] justify-center text-lg font-bold text-gray-300 py-4 bg-neutral-700 z-[10]">
      <ul className="flex gap-2">
        {props.links.map((element) => (
          <li
            key={element.name}
            className={
              activeLink === element.name
                ? "text-black bg-gray-300 rounded uppercase py-1 px-3 hover:cursor-pointer"
                : "text-gray-300 uppercase py-1 px-3 hover:cursor-pointer hover:bg-neutral-500 rounded"
            }
            onClick={() => scrollToSection(element.linkId)}
          >
            {element.name}
          </li>
        ))}
      </ul>
      {isScrolled ? <></> : <></>}
    </nav>
  );
};

export default PageNav;
