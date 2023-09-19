import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import Heading2 from "../heading2";

import portugal from "../../../assets/portugal.webp";
import australia from "../../../assets/aus_im_cover.webp";
import canada from "../../../assets/canada_im_cover.webp";
import newzealand from "../../../assets/newzealandCover.webp";

export default function Countries() {
  const countries = [
    {
      name: "Caribbean Passports",
      image: australia,
      href: "/immigration/caribbean/saint-lucia",
    },
    {
      name: "Immigration Programs",
      image: canada,
      href: "/immigration/uk",
    },
    {
      name: "Visit Visa",
      image: newzealand,
      href: "/immigration/visit-visas/uk",
    },
    {
      name: "Student Visa",
      image: portugal,
      href: "/immigration/student-visas/usa",
    },
  ];

  return (
    <div className="  bg-transparent mt-10 md:mt-20 px-4 md:px-20 xl:px-40">
      <section className=" flex flex-col md:pr-20">
        <Heading2 className="text-yellow-600">Countries</Heading2>
        <div className=" flex mt-4 md:mt-8 flex-col md:flex-row justify-between w-full">
          <h3 className="text-3xl md:text-4xl font-medium text-black leading-[37px] md:leading-[45px]">
            Embark on a journey of endless possibilities as you prepare to
            migrate to your{" "}
            <span className=" italic  font-serif bg-yellow-600 text-white">
              dream destination!
            </span>
          </h3>
          <p className="md:mt-0 mt-5 md:ml-20 text-gray-500 leading-snug">
            When it comes to studying abroad, there are several countries giving
            international student great opportunities of higher education and
            becoming part of their international community. See which country
            suits you best.
          </p>
        </div>
      </section>

<div className="w-full flex items-center justify-center">

<div className=" grid grid-cols-1 md:grid-cols-4 gap-4 mr-8 mt-10 md:mt-20">
        {countries.map((c) => (
          <div
            key={c.name}
            className="w-full div-div-img flex flex-col  p-4 aspect-square bg-white shadow-2xl shadow-black/[0.05] hover:shadow-black/[0.15] transition-all "
          >
            <div className=" bg-gray-100 w-full aspect-square overflow-hidden rounded-lg ">
              <img
                src={c.image}
                alt={c.name}
                className=" rounded-lg w-full h-full object-cover transition-all"
              />
            </div>

            <Link
              to={c.href}
              className=" mt-6 md:px-6 h-12 w-full md:w-auto rounded-full border-2 border-yellow-600 text-gray-500 hover:bg-yellow-600 hover:text-white transition duration-200 grid place-items-center"
            >
              <div className=" flex items-center text-xs md:text-base gap-3">
                {c.name}
                <BsArrowRightShort size={24} />
              </div>
            </Link>
          </div>
        ))}
      </div>
</div>
    </div>
  );
}
