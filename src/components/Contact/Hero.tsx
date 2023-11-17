import { BsChevronCompactDown } from "react-icons/bs";
import pic from "../../../assets/contact.jpg";
import AnimateToView from "../AnimateToView";


const Hero = () => {
  return (
    <div className="flex relative w-full h-[60vh] overflow-hidden md:rounded-b-none rounded-b-[40px] md:h-screen justify-center items-center">
      <div className="absolute w-full h-[65vh] md:h-screen bg-black opacity-50"></div>
      <img
        src={pic}
        alt="immigration consultants"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute w-full h-screen flex items-center justify-center px-4 md:px-20 xl:px-40">
        <AnimateToView scale={1.2} y={-12} opacity={1} duration={0.15}>
          <div className="flex flex-col mt-20 justify-center items-center">
            <h1 className="text-white font-play text-4xl font-bask font-semibold md:text-5xl mb-4 leading-snug">
              Contact Us
            </h1>
            <p className="text-white text-xl text-center mb-12 font-bask">
              Get your queries answered by our experienced consultants!
            </p>
          </div>
        </AnimateToView>
      </div>
      <div className="absolute bottom-10 w-full flex animate-bounce justify-center items-center">
        <BsChevronCompactDown className="text-white text-4xl" />
      </div>
    </div>
  );
};

export default Hero;
