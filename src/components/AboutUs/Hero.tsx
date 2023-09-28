import london from "../../../assets/bg.jpg"
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const Hero = () => {

  const nav = useNavigate();

  return (
    <div className="flex w-full h-[100vh] justify-center items-center relative">
      <img
        src={london}
        alt="london wallpaper"
        className="object-cover w-full h-full absolute z-0"
      />
      <div className="absolute w-full h-full bg-black opacity-50 z-10"></div>
      <span className="absolute w-full h-full flex px-4 md:px-20 xl:px-40 z-20">
        <span className="flex flex-col mt-20 justify-center items-start">
          <span className="text-white text-3xl md:text-5xl mb-4 leading-snug">
            About Us
          </span>
          <span className="text-white text-lg md:text-xl mb-12">
            We are trusted immigration consultants who can handle <br /> your
            case and Our professional registered agents will assist you <br />{" "}
            with your visa application.
          </span>
          <span>
            <Button
            text="Contact Us"
            onClick={()=>{
              nav("/contact")
            }}
            />
          </span>
        </span>
      </span>
    </div>
  );
};

export default Hero;
