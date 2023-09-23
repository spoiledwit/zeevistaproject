import london from "../../../assets/img6.jpg";

const Hero = () => {
  return (
    <div className="flex w-full h-[100vh] justify-center items-center">
      <div className="absolute w-full h-[100vh] bg-black opacity-40"></div>
      <div className=" w-full h-full relative">
        <img
          src={london}
          alt="london wallpaper"
          className="object-cover w-full h-full"
        />
      </div>

      <span className="absolute w-full h-full flex px-4 md:px-20 xl:px-40">
        <span
          className="flex flex-col mt-20 justify-center items-start"
        >
          <span
            className="text-white text-3xl md:text-5xl mb-4 leading-snug"
          >
            About Us
          </span>

          <span
            className="text-white text-lg md:text-xl mb-12"
          >
            We are trusted immigration consultants who can handle <br /> your
            case and Our professional registered agents will assist you <br />{" "}
            with your visa application.
          </span>

          <span
          >
          </span>
        </span>
      </span>
    </div>
  );
};

export default Hero;
