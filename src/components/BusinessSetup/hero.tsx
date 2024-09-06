import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Motion from "../Motion";
import AnimateToView from "../AnimateToView";
const textVariants = {
  hidden: { opacity: 0, y: -100 },
  show: { opacity: 1, y: 0 },
};

const Hero = ({
  title,
  description,
  imageURL,
}: {
  title: string;
  description: string;
  imageURL: string;
}) => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full h-[calc(100vh)] justify-center items-center relative">
      <img
        src={imageURL}
        alt={title}
        className="absolute w-full h-full object-cover z-0"
      />
      <div className="absolute w-full h-full bg-black opacity-50 z-10"></div>
      <div className="absolute w-full h-screen flex px-4 md:px-20 xl:px-40">
        <div className="flex z-10 flex-col mt-20 justify-center items-start">
          <AnimateToView>
            <Motion
              className="text-white font-play capitalize text-3xl md:text-5xl mb-4 leading-snug"
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ type: "spring", stiffness: 120 }}
            >
              <h1>{title}</h1>
              <br />
            </Motion>
          </AnimateToView>
          <AnimateToView>
            <Motion
              className="text-white text-justify text-xl mb-12"
              variants={textVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
            >
              {description}
            </Motion>
          </AnimateToView>
          <Button
            onClick={() => {
              navigate("/contact");
            }}
            text="Get Free Assessment"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
