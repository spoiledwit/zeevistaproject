import canada from "../../../assets/canada_im_cover.webp";
import australia from "../../../assets/aus_im_cover.webp";
import europe from "../../../assets/europe_im_cover.webp";
import uk from "../../../assets/europe_im_cover.webp";
import poland from "../../../assets/poland.webp";
import newzealand from "../../../assets/newzealand.webp";
import usa from "../../../assets/usaCover.webp";
import portugal from "../../../assets/poland.webp";
import { useLocation } from "react-router-dom";
import Motion from "../Motion";
import AnimateToView from "../AnimateToView";
import { Link } from "react-router-dom";

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
  let { pathname } = useLocation();
  const planname = pathname.substring(pathname.lastIndexOf("/") + 1);

  function getImageSource() {
    switch (planname) {
      case "canada":
        return canada;
      case "australia":
        return australia;
      case "uk":
        return uk;
      case "europe":
        return europe;
      case "poland":
        return poland;
      case "usa":
        return usa;
      case "new-zealand":
        return newzealand;
      case "portugal":
        return portugal;
      default:
        return europe;
    }
  }

  return (
    <div className="flex w-full h-[calc(100vh)] justify-center items-center">
      <div className="absolute w-full h-[100vh] bg-black opacity-30"></div>
      <div className=" w-full h-screen object-cover relative bg-green-300">
        <img
          src={getImageSource()}
          alt="travel country wallpaper"
          className=" w-full h-full object-cover"
        />
      </div>
      <div className="absolute w-full h-screen flex px-4 md:px-20 xl:px-40">
        <div className="flex flex-col mt-20 justify-center items-start">
          <AnimateToView>
            <Motion
              className="text-white capitalize text-3xl md:text-5xl mb-4 leading-snug"
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{ type: "spring", stiffness: 120 }}
            >
              {title}
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
          <Link to={"/contact"} className=" button-86">
            Book Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
