import img from "../../../assets/bg1.jpeg";
import { GiTechnoHeart } from "react-icons/gi";
import { MdBiotech } from "react-icons/md";
import { FaPassport } from "react-icons/fa6";
import Heading4 from "../heading4";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Bar from "../Bar";

export default function About() {

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
    <div className="w-full md:mb-12 md:pt-0 md:px-0 flex mt-10 flex-col p-10 bg-gray-100">
      {/* why choose us */}
      <span className="mx-auto">
      <h2 className="text-yellow-600 text-3xl mt-4 md:mt-10 font-serif">Why Choose Us</h2>
      <Bar w={"w-[120px]"} />
      </span>
      <div
          ref={ref}  
        className="w-full mt-8 flex flex-col  md:flex-row md:mt-10 relative"
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
          <img className="w-auto md:block hidden h-full md:h-[520px]" src={img} alt="image" />
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
                <p className=" text-gray-700 w-full leading-loose tracking-tight">
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
