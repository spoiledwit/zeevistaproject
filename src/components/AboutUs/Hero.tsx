import london from "../../../assets/consultancy.jpeg"
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
      <span className="absolute w-full mt-12 h-full flex px-4 md:px-20 xl:px-40 z-20">
        <span className="flex flex-col mt-20 justify-center items-start">
          <span className="text-white text-3xl md:text-5xl mb-4 leading-snug font-play">
            About Us
          </span>
          <span className="text-white text-lg md:text-xl max-w-[1000px] mb-12">
        <strong className="text-yellow-500"> ZeeVista Advisors </strong> is a global, immigration-focused law firm that helps clients Matters relating to Citizenship by investment, immigration, Visit Visa and Student Visa and procure the necessary visas to move destination. We have helped hundreds of families move to their desire Destination, including the ST Kitts & Nevis, St Lucia, Dominica, Grenada, United Kingdom, Portugal, Canada and Australia. <br /> <br /> We aim to offer only professional advice in the areas of our expertise and we ensure that our advice is tailored towards the personal needs of our clients.
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
