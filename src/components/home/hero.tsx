import img1 from "../../../assets/img5.jpg";
import img2 from "../../../assets/img2.jpg";

import Carousel from "../../components/carousel/simple";

const data = [
    {
      id:1,
      image: img1,
      title: "Europe",
      subtitle: "Caribbean Passports for",
      description: "Your second passport in 3 months",
      href: "/",
    },
    {
      id:2,
      image: img2,
      title: "title",
      subtitle: "subtitle",
      description: "description",
      href: "/",
    }
]

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
          <h2 className="font-play text-white text-3xl mb-[-10px]">
            {item.subtitle}
          </h2>
            <h1 className="text-white font-play text-[120px]">
            {item.title}
            </h1> 
            <p
            className="text-white font-open text-xl">
            {item.description}
            </p>
        
          </div>
          </div>
      ))}
      </Carousel> 
    </div>
  );
}
