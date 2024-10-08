import logo from "../../../assets/logo.png";
import caribbean from "../../../assets/second.webp";
import img3 from "../../../assets/immigration.jpg";
import img1 from "../../../assets/hero1.jpg";
import { BsChevronDown } from "react-icons/bs";
import Carousel from "../../components/carousel/simple";
import CostCalculator from "../CostCalculator";
import { useState } from "react";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    image: img1,
    title: (
      <span>
        <span className="text-yellow-600">Business</span> Setup
      </span>
    ),
    subtitle: "Start Your Business in Dubai",
    description: "Get Your Business License in simple steps.",
    action: "Learn More",
    href: "/business-setup",
  },
  {
    id: 2,
    image: img3,
    title: (
      <span>
        {" "}
        <span className="text-yellow-600">Immigration</span> Services
      </span>
    ),
    subtitle: "Streamlined Visa Application Process",
    description: "Effortless Application with Rapid Approval.",
    action: "Learn More",
    href: "/visit-visa-info",
  },
  {
    id: 3,
    image: caribbean,
    title: (
      <span>
        Second <span className="text-yellow-600">Citizenship</span>
      </span>
    ),
    subtitle: "Caribbean Passport & Freedom",
    description: "Get a Second Passport with Ease.",
    action: "Learn More",
    href: "/second-citizenship-infos",
  },
];

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full relative h-screen md:h-screen">
      <div className="text-white absolute bottom-5 md:hidden animate-bounce left-[45%] z-10">
        <BsChevronDown className="text-white text-5xl" />
      </div>
      <h1 className="sr-only">ZeeVista Immigration and Citizenship Services</h1>{" "}
      {/* sr-only class hides it visually but keeps it accessible to screen readers and SEO */}
      <h2 className="sr-only">
        Explore ZeeVista Business Advisors' Services for Global Citizenship and
        Residency
      </h2>
      <Carousel options={{ loop: true }}>
        {data.map((item) => (
          <div
            className="w-full flex-col items-center justify-center flex h-screen md:h-screen bg-cover bg-center"
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />
            <img
              src={logo}
              alt="immigration and second passport services"
              className="w-32 md:mt-0 md:mb-[-30px] md:hidden block z-10"
            />
            <div className="flex mt-8 md:mt-20 flex-col items-center justify-center z-10">
              <p className="font-play text-white text-xl text-center md:text-3xl ">
                {item.subtitle}
              </p>
              <p className="text-white font-play text-[34px] md:text-[110px]">
                {item.title}
              </p>
              <p className="text-white mt-2 md:mt-4 font-open tet md:text-xl">
                {item.description}
              </p>
            </div>
            {item.id === 1 ? (
              <button
                id=""
                onClick={() => setIsOpen(true)}
                className="text-sm md:text-base bg-yellow-600 text-white py-3 md:py-4 rounded-full px-6 md:px-8 font-medium mt-5 md:mt-10 z-10 font-play"
              >
                Cost Calculator
              </button>
            ) : (
              <Link
                to="/contact"
                className="text-sm md:text-base bg-yellow-600 text-white py-3 md:py-4 rounded-full px-6 md:px-8 font-medium mt-5 md:mt-10 z-10 font-play"
              >
                Get Free Assessment
              </Link>
            )}
          </div>
        ))}
      </Carousel>
      <CostCalculator
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      />
    </div>
  );
}
