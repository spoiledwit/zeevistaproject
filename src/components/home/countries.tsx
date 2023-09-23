import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import portugal from "../../../assets/portugal.webp";
import australia from "../../../assets/aus_im_cover.webp";
import canada from "../../../assets/canada_im_cover.webp";
import newzealand from "../../../assets/newzealandCover.webp";
import React from "react";
import { desktopNav } from "../../navs";

interface Props {
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

const Countries = ({ setColor }: Props) => {
  
  const { ref, inView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      setColor("#faf5ed");
    }
  }, [inView, setColor]);

  

  const countries = [
    {
      name: "Caribbean Passports",
      image: australia,
      href: "/immigration/caribbean/saint-lucia",
    },
    {
      name: "Immigration",
      image: canada,
      href: "/immigration/uk",
    },
    {
      name: "Visit Visas",
      image: newzealand,
      href: "/immigration/visit-visas/uk",
    },
    {
      name: "Student Visas",
      image: portugal,
      href: "/immigration/student-visas/usa",
    },
  ];

  return (
    <div ref={ref} className="mt-10 px-4 md:px-20 xl:px-40">
        <h2
        className="text-3xl md:text-7xl font-play  text-center md:mb-16 mb-10 md:mt-5"
        >
        Our Services
        </h2>
        <div className="w-full relative flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {countries.map((c, i) => (
                    <div 
                        className="relative bg-cover w-[300px] md:w-[530px] h-[500px] bg-center" 
                        style={{ backgroundImage: `url(${c.image})` }} 
                        key={i}
                    >
                        <div 
                            className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center"
                        >
                            <div className="relative w-[490px] flex-col flex items-center justify-center h-[462px] border m-5">
                                <h2 className="text-white text-2xl md:text-4xl mb-14 font-play">
                                    {c.name}
                                </h2>
                                <div
                                className="flex flex-wrap max-w-[400px] mt-5 justify-center items-center"
                                >
                                {desktopNav.map((d) => {
                                  if (d.title === c.name) {
                                    return (
                                      <>
                                      {d.children?.map((c, i) => (
                                        <Link
                                          to={c.href}
                                          className="text-white py-2 md:text-md text-xs px-4 m-1 border rounded-full  glass"
                                          key={i}
                                        >
                                          {c.title}
                                        </Link>
                                      ))}
                                      </>
                                    )
                                  }
                                })}
                                </div>
                                <Link
                                to={c.href}
                                className="text-white mb-[-20px] md:mb-0 md:text-md text-xs font-open font-medium text-center md:w-[130px] w-[100px] md:hover:w-[100px] transition-all duration-300 py-3 px-6 rounded-full border border-opacity-5 absolute bottom-20 glass">
                                  More
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);
                }

export default Countries;