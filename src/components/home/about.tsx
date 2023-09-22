import { Link } from "react-router-dom";
import img from "../../../assets/bg1.jpeg";
import { BsArrowRightShort } from "react-icons/bs";
import { GiTechnoHeart } from "react-icons/gi";
import { MdBiotech } from "react-icons/md";
import { FaFile, FaPassport, FaUserClock } from "react-icons/fa6";
import Heading4 from "../heading4";

export default function About() {
  const whatWeDos = [
    {
      title: "Visa Consultation",
      description:
        "Navigate the complex world of visas with ease. Our experts are here to guide you through the visa application process, ensuring you have the best chances for success.",
      icon: <FaPassport size={64} />,
      href: "/visa-consultation",
    },
    {
      title: "Customized Plans",
      description:
        "Tailored solutions for your unique journey. We create personalized immigration plans that suit your specific needs and aspirations.",
      icon: <FaUserClock size={64} />,
      href: "/customized-plans",
    },
    {
      title: "Document Assistance",
      description:
        "Say goodbye to paperwork hassles. We provide thorough assistance in gathering and organizing all the necessary documents for your visa application.",
      icon: <FaFile size={64} />,
      href: "/document-assistance",
    },
  ];

  const reasons = [
    {
      title: "Expert Visa Consultants",
      description:
        "Our team of experienced visa consultants are dedicated to providing you with the best advice and guidance, ensuring a smooth and successful visa application process.",
      icon: <GiTechnoHeart className="text-yellow-600" size={32} />,
    },
    {
      title: "Proven Success Record",
      description:
        "With over a decade of experience, we have helped thousands of individuals secure visas for their dream destinations, maintaining an impressive success rate throughout the years.",
      icon: <FaPassport size={32} className="text-yellow-600" />,
    },
    {
      title: "Comprehensive Services",
      description:
        "We represent a wide range of foreign institutes in Pakistan, offering free consultancy for admissions, scholarships, interview preparation, and visa-related matters across Australia, Canada, UK, USA, Europe, and more.",
      icon: <MdBiotech size={42} className="text-yellow-600" />,
    },
  ];

  return (
    <div className="w-full">
      {/* why choose us */}
      <div className=" w-full flex flex-col md:flex-row  items-center md:mt-10 relative">
        <div className=" grid place-items-center w-full min-h-full">
          <img className="w-auto md:block hidden h-full md:h-[600px]" src={img} alt="image" />
        </div>

        <div className=" py-20 w-full flex flex-col pr-10">
          <h2 className="text-yellow-600 text-3xl font-serif">Why Choose Us</h2>
          <h3 className=" text-gray-900 mt-6 text-3xl md:text-4xl font-medium">
            Reasons For trusting{" "}
            <span className="italic font-serif text-white bg-yellow-600">
              {" "}
              ZeeVista{" "}
            </span>
          </h3>

          <div className="md:mt-14 mt-10 flex flex-col gap-6">
            {reasons.map((r) => (
              <div key={r.title} className=" flex flex-col gap-3">
                <div className=" flex items-center gap-6">
                  <div className=" w-12 h-12 md:w-8 md:h-8">{r.icon}</div>
                  <Heading4 className=" text-gray-900">{r.title}</Heading4>
                </div>
                <p className=" text-gray-700 leading-loose tracking-tight">
                  {r.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* what we do */}
      <div className=" w-full">
        {/* <section className=" flex flex-col items-center">
          <h3 className=" text-yellow-600 text-3xl md:text-4xl font-serif">What We Do</h3>
          <h3 className=" text-gray-900 font-medium md:text-center md:px-0 px-8 text-2xl md:text-4xl mt-5">
            Empowering Your Journey:{" "}
            <span className=" text-white bg-yellow-600 font-serif italic">
              Our Comprehensive Services{" "}
            </span>
          </h3>
        </section> */}

        {/* TODO: carousel */}
        {/* <div className=" flex flex-col md:flex-row gap-6 mt-6 md:mt-20 px-4 md:px-[20%]">
          {whatWeDos.map((e) => (
            <div
              key={e.title}
              className=" rounded-xl items-center  transition-all bg-white shadow-2xl flex flex-col w-full py-8 px-4"
            >
              <div className=" rounded-full border-2 border-yellow-600 text-yellow-600  p-6 w-max h-max">
                {e.icon}
              </div>

              <section className=" mt-6 flex flex-col gap-3 items-center">
                <h4 className=" text-yellow-600 text-xl font-serif text-center">
                  {e.title}
                </h4>
                <p className=" text-gray-400 mb-6 text-center leading-loose tracking-tight">
                  {e.description}
                </p>
              </section>

              <Link
                to={e.href}
                className="link flex flex-col gap-1 text-yellow-600 p-2 rounded-xl mt-auto"
              >
                <div className=" items-center flex gap-3">
                  Read more
                  <BsArrowRightShort size={24} />
                </div>
                <div className=" ele bg-yellow-600 h-[2px] w-0 transition-all" />
              </Link>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
