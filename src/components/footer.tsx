import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";
import logo from "../../assets/logo.png";
// import footer1 from "../../assets/footer1.jpg";
// import footer2 from "../../assets/footer2.jpg";
import { BiTime } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import logo1 from "../../assets/bc_logo.png";
import logo2 from "../../assets/aisc_logo.png";
import logo3 from "../../assets/mara.jpeg";
import logo4 from "../../assets/iccrc.webp";

import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

import { AiFillCaretRight } from "react-icons/ai";

import { desktopNav } from "../../src/navs/index";
import axios from "axios";

export default function Footer() {
  const [contactInfo, setContactInfo] = useState<any>(null);
  const fetchContactInfo = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/contactInfo`
      );
      setContactInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContactInfo();
  }, []);

  const [ind, setInd] = useState(0);
  const pathname = useLocation().pathname;

  useEffect(() => {
    setInd(0);
  }, [pathname]);

  return (
    <footer className=" w-full flex items-center flex-col border-t bg-black">
      {/* <span className="bg-yellow-600 max-w-[1400px] md:flex hidden w-[80vw] items-center z-10 justify-between h-40 mt-[-65px] bg-cover bg-center rounded-3xl overflow-hidden">
        <img src={footer1} className="h-full w-[270px] object-cover" alt="immigration experts" />
        <span
          className="flex flex-col items-center"
        >
          <h3
            className="text-white font-play font-semibold text-2xl px-4 md:px-0"
          >
            Get Free Online Visa Assessment Today!
          </h3>
          <p
            className="text-white mt-2 font-open te font-medium text-sm px-4 md:px-0"
          >
            Top Rated By Customers & Immigration Firms With 98% Success Rate.
          </p>
        </span>
        <img src={footer2} className="h-full w-[270px] object-cover" alt="family visa" 
          style={{
            objectPosition: "0% 0%"
          }}
        />
      </span> */}
      <div className=" flex max-w-[1700px] flex-col md:flex-row w-full gap-10 md:gap-20 px-4 md:px-20 md:py-20 py-12 xl:px-40">
        <section className=" flex flex-col w-full md:w-1/2">
          <img src={logo} alt="logo" className="mt-[-10px]" width={100} />
          <p className="text-gray-300 mt-5">
            <strong className="text-yellow-600 text-justify">
              Get a Free Consultation:
            </strong>{" "}
            Zeevista Business Advisors is dedicated to being your comprehensive
            partner for all business needs. For over 15 years, our expert team
            has supported more than 15,000 startups and SMEs in achieving their
            growth and expansion goals. We provide customized solutions to guide
            your business from initial setup through to thriving success. Reach
            out to us to start your prosperous business journey in the UAE.
          </p>

          <div className="flex  md:flex-row justify-between md:justify-center items-center gap-2 md:gap-6 md:px-20 px-4 py-10">
            <img src={logo1} alt="British Council" className="md:h-12 h-8" />
            <img src={logo2} alt="OISC" className="md:h-12 h-8" />
            <img
              src={logo3}
              alt="MARA Migration Agents Registration Authority"
              className="md:h-12 h-8"
            />
            <img
              src={logo4}
              alt="ICCRC Immigration Consultants of Canada Regulatory Council"
              className="md:h-12 h-8"
            />
          </div>
          <span className=" flex gap-3 tracking-[10px]">
            <a href={contactInfo?.facebook} target="_blank" rel="noreferrer">
              <FaFacebook className="inline-block text-white  hover:text-yellow-500 text-lg" />
            </a>
            <a href={contactInfo?.instagram} target="_blank" rel="noreferrer">
              <FaInstagram className="inline-block  text-white  hover:text-yellow-500 hover:opacity-100 text-lg" />
            </a>
            <a href={contactInfo?.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin className="inline-block  text-white  hover:text-yellow-500 hover:opacity-100 text-lg" />
            </a>
          </span>
        </section>
        <section className=" flex flex-col w-full md:w-1/4">
          <h3 className=" text-yellow-600 font-semibold font-serif text-2xl whitespace-nowrap">
            Useful Links
          </h3>
          <ul className=" flex mt-6 flex-col gap-3 text-gray-300">
            {desktopNav.map((item, index) => (
              <li
                key={index}
                className=" hover:text-yellow-600 duration-300 cursor-pointer flex  flex-col gap-2 text-white transition-all"
              >
                <div
                  className="flex items-center gap-2"
                  onClick={() => {
                    ind == index ? setInd(-1) : setInd(index);
                  }}
                >
                  <AiFillCaretRight className="text-sm" />
                  <div>{item.title}</div>
                </div>
                {item.children && index == ind && (
                  <ul className="flex flex-col gap-2">
                    {item.children.map((child, index) => (
                      <li
                        key={index}
                        className=" hover:text-yellow-600 flex ml-5 text-sm items-center gap-2 text-gray-300 transition-all"
                      >
                        <AiFillCaretRight className="text-sm" />{" "}
                        <Link to={child.href}>{child.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </section>
        <section className=" flex flex-col w-full md:w-1/4">
          <h3 className=" text-yellow-600 font-serif text-2xl font-semibold">
            About Us
          </h3>

          <div className=" mt-9 text-gray-300 flex gap-3">
            <FaLocationDot className="text-yellow-600 text-3xl md:text-5xl text-justify" />
            <p>{contactInfo?.address}</p>
          </div>
          <div className=" mt-3 text-gray-300 flex gap-3">
            <MdEmail size={20} className="text-yellow-600" />
            <p>{contactInfo?.email}</p>
          </div>
          {contactInfo?.phones.map((phone: any, index: number) => (
            <div className="mt-3 text-gray-300 flex gap-3" key={index}>
              <MdPhone size={20} className="text-yellow-600" />
              <p>{phone}</p>
            </div>
          ))}
          <div className=" mt-3 text-gray-300 flex gap-3">
            <BiTime size={20} className="text-yellow-600" />
            <p>{contactInfo?.timings}</p>
          </div>
        </section>
      </div>

      <p className="h-20 border-t border-gray-300 text-center text-gray-300 md:text-center md:px-0 px-8 md:text-lg text-sm pt-6">
        Copyright © 2023 ZeeVista Advisors. All rights reserved.
      </p>
    </footer>
  );
}
