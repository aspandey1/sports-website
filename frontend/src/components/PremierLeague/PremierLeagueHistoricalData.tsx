import { useEffect, useRef, useState } from "react";
import {
  BarChart,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
  Rectangle,
} from "recharts";

const seasons: Array<string> = [
  "2008/2009",
  "2009/2010",
  "2010/2011",
  "2011/2012",
  "2012/2013",
  "2013/2014",
  "2014/2015",
  "2015/2016",
];

import {
  twoThousandEightSeason,
  twoThousandNineSeason,
  twoThousandTenSeason,
  twoThousandEleven,
  twoThousandTwelve,
  twoThousandThirteen,
  twoThousandFourteen,
  twoThousandFifteen,
} from "../../util/premHistoricalData";

const PremierLeagueHistoricalData = () => {
  const barWidthRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState(twoThousandEightSeason);
  const [width, setWidth] = useState(0);
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  useEffect(() => {
    setWidth(barWidthRef.current!.offsetWidth);

    const updateWidth = () => {
      setWidth(barWidthRef.current!.offsetWidth);
    };
    window.addEventListener("resize", updateWidth);
    return window.removeEventListener("resize", updateWidth);
  }, []);

  const updateSeason = (index: number) => {
    switch (index) {
      case 0:
        setData(twoThousandEightSeason);
        setActiveButtonIndex(0);
        break;
      case 1:
        setData(twoThousandNineSeason);
        setActiveButtonIndex(1);
        break;
      case 2:
        setData(twoThousandTenSeason);
        setActiveButtonIndex(2);
        break;
      case 3:
        setData(twoThousandEleven);
        setActiveButtonIndex(3);
        break;
      case 4:
        setData(twoThousandTwelve);
        setActiveButtonIndex(4);
        break;
      case 5:
        setData(twoThousandThirteen);
        setActiveButtonIndex(5);
        break;
      case 6:
        setData(twoThousandFourteen);
        setActiveButtonIndex(6);
        break;
      case 7:
        setData(twoThousandFifteen);
        setActiveButtonIndex(7);
        break;
    }
  };

  return (
    <div
      id="data"
      className="px-[2rem] lg:px-[6rem] bg-gradient-to-t from-white to-slate-300 pt-6 pb-10 "
    >
      <div className="lg:w-fit w-full">
        <h1 className="font-bold text-4xl 2xl:text-5xl pb-2 lg:text-left text-center">
          Data
        </h1>
        <div className="h-[8px] bg-blue-800 w-full"></div>
      </div>

      <div className="flex flex-col text-xl text-center uppercase">
        <div className="font-bold md:py-0 py-5">
          Total Goals Scored by Premier League Teams
        </div>
        <div className="flex md:justify-center pt-2 overflow-auto">
          {seasons.map((element, index) => (
            <button
              key={index}
              onClick={() => updateSeason(index)}
              className={
                "mx-1 px-2 text-sm py-1 rounded-full border-neutral-700 border-2 " +
                (activeButtonIndex == index
                  ? "bg-neutral-700 text-gray-300"
                  : "bg-gray-400 hover:bg-gray-300")
              }
            >
              {element}
            </button>
          ))}
        </div>
      </div>

      <div ref={barWidthRef} className="w-full h-full overflow-auto">
        <BarChart
          width={width < 1088 ? 1088 : width}
          height={500}
          data={data}
          title="Total Goals"
          margin={{
            top: 5,
            right: 0,
            left: -28,
            bottom: 5,
          }}
        >
          <XAxis dataKey="team_short_name" />
          <YAxis dataKey="total_goals" />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="total_goals"
            name="Goals"
            fill="steelblue"
            activeBar={<Rectangle fill="royalblue" stroke="black" />}
          />
        </BarChart>
      </div>
    </div>
  );
};

export default PremierLeagueHistoricalData;
