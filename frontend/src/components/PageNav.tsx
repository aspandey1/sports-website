import { useState, useEffect } from "react";

function useIsVisible(ref: any) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

interface incomingProps {
  bannerRef: any;
  statsRef: any;
  aboutRef: any;
}

const visibleTextColor: string = "text-blue-200 py-1 px-3";
const notVisibleTextColor: string = "text-gray-300 py-1 px-3";

const PageNav: React.FC<incomingProps> = (props: incomingProps) => {
  const bannerVisible = useIsVisible(props.bannerRef);
  const statsVisible = useIsVisible(props.statsRef);
  const aboutVisible = useIsVisible(props.aboutRef);

  console.log(bannerVisible);

  return (
    <div className="flex sticky top-0 px-[2rem] lg:px-[6rem] justify-center gap-10 text-lg font-bold text-gray-300 py-4 bg-neutral-700 z-40">
      <div className={bannerVisible ? visibleTextColor : notVisibleTextColor}>
        HOME
      </div>
      <div className={statsVisible ? visibleTextColor : notVisibleTextColor}>
        STATS
      </div>
      <div className={aboutVisible ? visibleTextColor : notVisibleTextColor}>
        ABOUT
      </div>
    </div>
  );
};

export default PageNav;
