import logo from "../../../assets/logowhite.png";
import caribbean from "../../../assets/map-passport.webp";
import img3 from "../../../assets/consultancy.jpeg";
import {BsChevronDown} from "react-icons/bs";
import Carousel from "../../components/carousel/simple";

const data = [
  {
    id: 1,
    image: caribbean,
    title: <span>Second <span className="text-yellow-600">Citizenship</span></span>,
    subtitle: "Caribbean Passport & Freedom",
    description: "Get a Second Passport with Ease.",
    action: "Learn More",
    href: "/second-citizenship-infos",
  },
  {
    id: 2,
    image: img3,
    title: <span> <span className="text-yellow-600">Immigration</span> Services</span>,
    subtitle: "Streamlined Visa Application Process",
    description: "Effortless Application with Rapid Approval.",
    action: "Learn More",
    href: "/visit-visa-info",
  }
];  

export default function Hero() {

  return (
    <div className="w-full relative h-screen">
      <div className="text-white absolute bottom-10 md:hidden animate-bounce left-[45%] z-10">
      <BsChevronDown className="text-white text-5xl" />    
      </div>
      <Carousel options={{ loop: true }}>
      {data.map((item) => (
        <div 
        className="w-full flex-col items-center justify-center flex h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${item.image})`,
        }}
        >

          <div
          className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
          />
          <img src={logo} className="w-32 md:mt-0 mt-[-120px] md:mb-[-30px] md:hidden block z-10" />
          <div className="flex mt-20 flex-col items-center justify-center z-10">
          <h2 className="font-play text-white text-2xl text-center md:text-3xl ">
            {item.subtitle}
          </h2>
            <h1 className="text-white font-play text-[34px] md:text-[110px]">
            {item.title}
            </h1> 
            <p
            className="text-white mt-2 md:mt-4 font-open tet md:text-xl">
            {item.description}
            </p>
              </div>
             
          </div>
      ))}
      </Carousel> 

    </div>
  );
}