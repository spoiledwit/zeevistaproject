import React from "react";
import img from "../../assets/globe.jpg";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/logo.png";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";
import { desktopNav } from "../navs";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import axios from "axios";
import { useEffect, useState } from "react";

interface Props {
  closeMenu: () => void;
}

const MenuPage: React.FC<Props> = ({ closeMenu }) => {
  const location = useLocation();
  const path = location.pathname;
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

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-full bg-white flex fixed h-screen"
        style={{
          zIndex: 99999,
        }}
      >
        <button
          className="absolute top-8 md:top-10 border p-3 transition-all duration-300 hover:scale-110 rounded-full left-8 md:left-32 z-10"
          onClick={closeMenu}
        >
          <AiOutlineClose className="text-lg text-white" />
        </button>

        <div
          className="md:w-[67%] w-full relative bg-cover h-screen"
          style={{
            backgroundImage: `url(${img})`,
          }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
            style={{
              zIndex: 1,
            }}
          />
          <div
            className="
            flex flex-col absolute top-40 left-8 md:left-32 z-10 gap-8
            "
          >
            {desktopNav.map((item, index) => {
              const isActive = path === item.href;

              return (
                <Link
                  className={`md:text-4xl text-2xl font-play text-white font-medium hover:text-opacity-100 transition duration-200 ${
                    isActive ? " text-opacity-100" : "text-opacity-60"
                  }`}
                  to={item.href}
                  onClick={closeMenu}
                  key={index}
                >
                  {index + 1}. &nbsp; {item.title}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="md:flex hidden w-[33%] flex-col h-screen bg-white items-center">
          <img
            src={logo}
            alt="ZeeVista Advisors"
            className="w-[100px] h-[93px] mt-16"
          />
          <h2 className=" font-medium text-center mt-10 text-2xl font-play">
            ZeeVista Business <br /> Advisors
          </h2>

          <p className=" text-center font-open mt-4 max-w-[300px]">
            {contactInfo?.address}
          </p>

          <span className=" flex gap-1 items-center flex-col mt-6">
            <a
              className="text-xl font-open tracking-wider"
              href={`tel:${contactInfo?.phones[0]}`}
            >
              {contactInfo?.phones[0]}
            </a>
            <a
              className="text-xl font-open tracking-wider"
              href="mailto:info@zeevistaadvisors.com"
            >
              {contactInfo?.email}
            </a>
            <Link
              className="text-xl hover:text-yellow-600 font-open tracking-wider"
              to={"/contact"}
              onClick={closeMenu}
            >
              contact
              <MdArrowRightAlt className="inline-block text-xl" />
            </Link>
          </span>

          <span className="flex text-yellow-600 gap-10 text-2xl mb-5  mt-auto">
            <a href={contactInfo?.facebook} target="_blank">
              <FaFacebook className="opacity-80 hover:opacity-100" />
            </a>
            <a href={contactInfo?.linkedin} target="_blank">
              <FaLinkedin className="opacity-80 hover:opacity-100" />
            </a>
            <a href={contactInfo?.instagram} target="_blank">
              <FaInstagram className="opacity-80 hover:opacity-100" />
            </a>
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MenuPage;
