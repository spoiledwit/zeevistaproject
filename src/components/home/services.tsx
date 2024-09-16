import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import React from "react";
import { businessSetup } from "@/constants";
import Bar from "../Bar";

interface Props {
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

const Services = ({ setColor }: Props) => {
  const { ref, inView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      setColor("#faf5ed");
    }
  }, [inView, setColor]);

  return (
    <div ref={ref} className="mt-10 items-center md:px-24 md:justify-between">
      <h2 className="text-xl md:text-3xl text-center md:mr-5 white font-play font-medium text-yellow-600 mb-10">
        ZeeVista Business Setup Services
        <Bar w={"w-[150px] md:w-[300px]"} />
      </h2>
      <div className="w-full relative flex justify-center items-center">
        <div className="grid md:grid-cols-4 max-w-[1500px] grid-cols-1 w-full gap-4">
          {businessSetup.slice(1).map((c, i) => (
            <Link
              to={`/business-setup/${c.id}`}
              key={i}
              className="relative mx-auto bg-cover w-[310px] md:w-[280px] h-[500px] bg-center"
              style={{ backgroundImage: `url(${c.imageURL})` }}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                <div className="relative w-[490px] flex-col flex items-center justify-center h-[462px] border m-5">
                  <h2 className="text-white mx-2 text-center text-2xl md:text-2xl mb-14 font-play">
                    {c.title}
                  </h2>
                  <p className="text-white text-center mx-2 text-sm">
                    {c.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
