import canada from "../../../assets/canada_im_cover.webp";
import australia from "../../../assets/aus_im_cover.webp";
import europe from "../../../assets/img7.jpg";
import uk from "../../../assets/london.webp";
import poland from "../../../assets/poland.webp";
import newzealand from "../../../assets/newzealand.webp";
import usa from "../../../assets/usaCover.webp";
import portugal from "../../../assets/poland.webp";
import { useLocation } from "react-router-dom";
import Motion from "../Motion";
import AnimateToView from "../AnimateToView";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const textVariants = {
  hidden: { opacity: 0, y: -100 },
  show: { opacity: 1, y: 0 },
};

const Hero = ({
  title,
  description,
}: {
  title: string;
  description: string;
  imageURL: string;
}) => {

  const navigate = useNavigate();
  let { pathname } = useLocation();
  const planname = pathname.substring(pathname.lastIndexOf("/") + 1);
  console.log(planname);

  function getImageSource() {
      if (planname.includes("uk")) {
          return uk;
      }
      else if (planname.includes("portugal")) {
        return portugal;
      }
      else if (planname.includes("canada")) {
        return canada;
      }
      else if (planname.includes("australia")) {
        return australia;
      }
      else if (planname.includes("portugal")) {
        return portugal;
      }
      else if (planname.includes("new-zealand")) {
        return newzealand;
      }
      return usa;
  }

  return (
    <div className="flex w-full h-[calc(100vh)] justify-center items-center relative">
    <img
      src={getImageSource()}
      alt="travel country wallpaper"
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
              {title}
              <br />
            </Motion>
          </AnimateToView>
          <AnimateToView>
            <Motion
              className="text-white text-xl mb-12"
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
