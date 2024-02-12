import picture from "../assets/unsplash.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:px-[6rem] px-[2rem] bg-neutral-800 pb-10 pt-10 lg:pt-2 text-center lg:text-left">
      <div className="flex flex-col lg:w-[30%] w-full text-white pr-6 justify-center">
        <h1 className="text-5xl pb-10">Welcome to Footy!</h1>
        <p className="lg:pb-0 pb-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
          repudiandae, qui illo eius culpa perferendis aliquid enim delectus
          autem cupiditate voluptatibus exercitationem aspernatur suscipit,
          consectetur, tempore nulla illum rem saepe!
        </p>
      </div>
      <img src={picture} alt="" className="lg:w-[70%] w-full rounded-lg" />
    </div>
  );
};

export default Hero;
