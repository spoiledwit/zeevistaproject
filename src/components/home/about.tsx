import img from "../../../assets/bg1.jpg";
import { GiTechnoHeart } from "react-icons/gi";
import { MdBiotech } from "react-icons/md";
import { FaPassport } from "react-icons/fa6";
import Heading4 from "../heading4";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Bar from "../Bar";
import { BsGlobe } from "react-icons/bs";

export default function About() {
  const reasons = [
    {
      title: "Expertise",
      description:
        "Our team, experts in global immigration laws, ensures your application's success. Stay updated with us for the best chance. Trust our Canada migration agency in Dubai for personalized guidance on immigration or citizenship tailored to your goals.",
      icon: <GiTechnoHeart className="text-yellow-600" size={32} />,
    },
    {
      title: "Personalized Guidance",
      description:
        "We believe in one-on-one guidance. Trust our Canada consultancy in Dubai for personalized advice on suitable immigration or citizenship options, tailored to your goals.",
      icon: <FaPassport size={32} className="text-yellow-600" />,
    },
    {
      title: "Integrity",
      description:
        "At ZeeVista Advisors, we uphold the highest standards of integrity. For transparent advice, confidentiality, and ethical services, choose our Canada work visa consultants in Dubai.",
      icon: <MdBiotech size={42} className="text-yellow-600" />,
    },
    {
      title: "Global Network",
      description:
        "Our global network offers comprehensive services. Explore a wide range of countries and citizenship-by-investment programs with our expert Canada work permit consultants in Dubai.",
      icon: <BsGlobe size={32} className="text-yellow-600" />,
    },
  ];

  const controlsImage = useAnimation();
  const controlsText = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  if (inView) {
    controlsImage.start("visible");
    controlsText.start("visible");
  }

  return (
    <div className="w-full md:mb-12 md:pt-0 items-center md:px-0 flex mt-10 flex-col p-10 bg-gray-100">
      {/* why choose us */}
      <span className="mx-auto">
        <h2 className="text-yellow-600 text-xl md:text-3xl mt-4 md:mt-10 font-serif">
          Why Choose Us
        </h2>
        <Bar w={"w-[120px]"} />
      </span>
      <div
        ref={ref}
        className="w-full mt-8 flex max-w-[1500px] flex-col  md:flex-row md:mt-10 relative"
      >
        <motion.div
          animate={controlsImage}
          initial="hidden"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -100 },
          }}
          transition={{ duration: 1 }}
          className="grid place-items-center w-full min-h-full"
        >
          <img
            className="w-auto md:block hidden h-full md:h-[620px]"
            src={img}
            alt="visa consultancy"
          />
        </motion.div>

        <motion.div
          animate={controlsText}
          initial="hidden"
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 100 },
          }}
          transition={{ duration: 1 }}
          className="w-full flex flex-col md:pr-10"
        >
          <div className="flex flex-col md:w-auto w-full gap-6  mr-32">
            {reasons.map((r) => (
              <div key={r.title} className=" flex font-play flex-col gap-3">
                <div className=" flex items-center gap-6">
                  <div className=" w-12 h-12 md:w-8 md:h-8">{r.icon}</div>
                  <Heading4 className=" text-gray-900">{r.title}</Heading4>
                </div>
                <p className=" text-gray-700 text-justify w-full leading-loose tracking-tight">
                  {r.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
