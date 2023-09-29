import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import australia from "../../../assets/passport2.png";
import immigration from "../../../assets/globe.jpg";
import canada from "../../../assets/happy.png";
import newzealand from "../../../assets/visa2.jpg";
import React from "react";
import { desktopNav } from "../../navs";
import Bar from "../Bar";

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
      image: immigration,
      href: "/immigration/uk/uk-innovator-founder",
    },
    {
      name: "Visit Visas",
      image: newzealand,
      href: "/immigration/visit-visas/uk",
    },
    {
      name: "Student Visas",
      image: canada,
      href: "/immigration/student-visas/usa",
    },
  ];

  return (
    <div ref={ref} className="mt-10 md:px-24 md:justify-between">
        <h2
        className="text-3xl text-center md:mr-5 white font-play font-medium text-yellow-600 mb-10 "
        >
        What we offer
        <Bar w={"w-[130px]"} />
        </h2>
        <div className="w-full relative flex  items-center">
            <div className="grid md:grid-cols-4 grid-cols-1 w-full gap-4">
                {countries.map((c, i) => (
                    <div 
                        className="relative mx-auto bg-cover w-[310px] md:w-[280px] h-[500px] bg-center" 
                        style={{ backgroundImage: `url(${c.image})` }} 
                        key={i}
                    >
                        <div 
                            className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-center justify-center"
                        >
                            <div className="relative w-[490px] flex-col flex items-center justify-center h-[462px] border m-5">
                                <h2 className="text-white mx-2 text-center text-2xl md:text-2xl mb-14 font-play">
                                    {c.name ===  "Immigration" ? "Immigration Services" : c.name}
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
                                          className="text-white transition-all duration-200 hover:border-yellow-500 py-2 md:text-md text-xs px-4 m-1 border rounded-full glass"
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
                                className="text-white hover:border-yellow-500 mb-[-30px] md:mb-0 md:text-md text-xs font-open font-medium text-center md:w-[130px] w-[100px] md:hover:w-[100px] transition-all duration-300 py-3 px-6 rounded-full border border-opacity-5 absolute bottom-10 glass">
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