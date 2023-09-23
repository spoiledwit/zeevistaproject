import img1 from "../../../assets/img6.jpg";
import img2 from "../../../assets/img7.jpg";

import Carousel from "../../components/carousel/simple";

const data = [
  {
    id: 1,
    image: img1,
    title: "Euro Access",
    subtitle: "Caribbean Passport & Freedom",
    description: "Unlock Europe in 90 days.",
    action: "Explore",
    href: "/euro-access",
  },
  {
    id: 2,
    image: img2,
    title: "Tourist Guide",
    subtitle: "Easy Visit Visa Process",
    description: "Simple application, quick approval.",
    action: "Learn More",
    href: "/visit-visa-info",
  }
];  

export default function Hero() {

  return (
    <div className="w-full h-screen">
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
          <div className="flex mt-20 flex-col items-center justify-center z-10">
          <h2 className="font-play text-white text-3xl ">
            {item.subtitle}
          </h2>
            <h1 className="text-white font-play text-[110px]">
            {item.title}
            </h1> 
            <p
            className="text-white mt-4 font-open text-xl">
            {item.description}
            </p>
        
          </div>
          </div>
      ))}
      </Carousel> 
    </div>
  );
}