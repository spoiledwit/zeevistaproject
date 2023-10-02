import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";
import logo from "../../assets/logo.png"
import footer1 from "../../assets/footer1.jpg";
import footer2 from "../../assets/footer2.jpg";
import {BiTime} from "react-icons/bi";

import logo1 from "../../assets/bc_logo.png";
import logo2 from "../../assets/aisc_logo.png";
import logo3 from "../../assets/mara.jpeg";
import logo4 from "../../assets/iccrc.webp";

export default function Footer() {
  return (
    <footer className=" w-full flex items-center flex-col border-t bg-black">
      <span className="bg-yellow-600 md:flex hidden w-[80vw] items-center z-10 justify-between h-40 mt-[-65px] bg-cover bg-center rounded-3xl overflow-hidden">
        <img src={footer1} className="h-full w-[270px] object-cover" alt="" />
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
        <img src={footer2} className="h-full w-[270px] object-cover" alt=""
          style={{
            objectPosition: "0% 0%"
          }}
        />
      </span>
      <div className=" flex flex-col md:flex-row w-full gap-10 md:gap-20 px-4 md:px-20 md:py-20 py-12 xl:px-40">
        <section className=" flex flex-col w-full md:w-1/2">
          <img src={logo} alt="logo" className="mt-[-10px]" width={80} height={40} />
          <p className="text-gray-300 mt-5">
            <strong className="text-yellow-600">ZeeVista Advisors </strong> specializes in providing hassle-free secondary passports and citizenships, alongside comprehensive immigration services including visit and student visa facilitations.
          </p>
            
      <div className="flex  md:flex-row justify-between md:justify-center items-center gap-2 md:gap-6 md:px-20 px-4 py-10">
        <img src={logo1} alt="logo" className="md:h-12 h-8" />
        <img src={logo2} alt="logo" className="md:h-12 h-8" />
        <img src={logo3} alt="logo" className="md:h-12 h-8" />
        <img src={logo4} alt="logo" className="md:h-12 h-8" />
      </div>
        </section>
        <section className=" flex flex-col w-full md:w-1/4">
          <h3 className=" text-yellow-600 font-semibold font-serif text-2xl whitespace-nowrap">
            Useful Links
          </h3>
          <ul className=" flex mt-6 flex-col gap-3 text-gray-300">
            <li className=" hover:text-yellow-600 text-white transition-all">
              <Link to={"/immigration/caribbean/saint-lucia"}>Caribbean Citizenship</Link>
            </li>
            <li className=" hover:text-yellow-600 text-white transition-all">
              <Link to={"/immigration/uk/uk-innovator-founder"}>Immigration Services</Link>
            </li>
            <li className=" hover:text-yellow-600 text-white transition-all">
              <Link to={"/immigration/student-visas/uk"}>Student Visa</Link>
            </li>
            <li className=" hover:text-yellow-600 text-white transition-all">
              <Link to={"/immigration/visit-visas/uk"}>Visit Visa</Link>
            </li>
          </ul>
        </section>
        <section className=" flex flex-col w-full md:w-1/4">
          <h3 className=" text-yellow-600 font-serif text-2xl font-semibold">About Us</h3>

          <div className=" mt-9 text-gray-300 flex gap-3">
            <FaLocationDot className="text-yellow-600 text-3xl md:text-5xl" />
            <p>Office 1503, 15th Floor, Executive Bay Tower B, Al Amal Street, Business Bay, Dubai, U.A.E</p>
          </div>
          <div className=" mt-3 text-gray-300 flex gap-3">
            <MdEmail size={20} className="text-yellow-600"/>
            <p>
                info@zeevistaadvisors.com
            </p>
          </div>
          <div className=" mt-3 text-gray-300 flex gap-3">
            <MdPhone size={20} className="text-yellow-600" />
            <p>
            +971 4 449 0918
            </p>
          </div>
          <div className=" mt-3 text-gray-300 flex gap-3">
            <MdPhone size={20} className="text-yellow-600" />
            <p>
            +971 58 9240564
            </p>
          </div>
          <div className=" mt-3 text-gray-300 flex gap-3">
            <BiTime size={20} className="text-yellow-600" />
            <p>
            9:00 AM to 6:30 PM <br /> Monday to Saturday
            </p>
          </div>
        </section>
      </div>

      <p className="h-20 border-t border-gray-300 text-gray-300 md:text-center md:px-0 px-8 md:text-lg text-sm pt-6">
        Copyright © 2023 ZeeVista Advisors. All rights reserved.
      </p>  
    </footer>
  );
}
