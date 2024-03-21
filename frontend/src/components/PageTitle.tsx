import React from "react";

interface data {
  title: string;
}

const PageTitle: React.FC<data> = (props: data) => {
  return (
    <div className="flex lg:block bg-slate-300 px-[2rem] lg:px-[6rem] pb-2 w-full lg:justify-left justify-center">
      <h1 className="md:text-5xl text-3xl font-extrabold uppercase md:text-nowrap text-center md:text-left w-min">
        {props.title}
      </h1>
    </div>
  );
};

export default PageTitle;
