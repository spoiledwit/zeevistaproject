import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";
import logo from "../../assets/logo.png"

export default function Footer() {
  return (
    <footer className=" w-full flex flex-col  bg-black">
      <div className=" flex flex-col md:flex-row w-full gap-10 md:gap-20 px-4 md:px-20 md:py-20 py-12 xl:px-40">
        <section className=" flex flex-col w-full md:w-1/2">
          <img src={logo} alt="logo" className="mt-[-10px]" width={80} height={40} />
          <p className=" text-gray-300 mt-5">
            With over a decade of expertise, <strong className="text-yellow-600">ZEE VISTA</strong>  has carved a niche in facilitating seamless processes for obtaining secondary passports and citizenships, devoid of any hassles. Our unfaltering dedication to ensuring customer satisfaction has not only been our hallmark but also the fuel propelling us to expand and flourish in this industry. At Zee Vista, we consider our paramount asset to be the gratification and trust of our clients, and we endeavor continuously to foster genuine relationships with them. Our journey is characterized by an indefatigable pursuit of excellence, aiming to redefine the standards of service in the documents clearing sector.
          </p>
        </section>
        <section className=" flex flex-col w-full md:w-1/4">
          <h3 className=" text-yellow-600 font-semibold font-serif text-2xl whitespace-nowrap">
            Useful Links
          </h3>
          <ul className=" flex mt-6 flex-col gap-3 text-gray-300">
            <li className=" hover:text-yellow-600 text-white transition-all">
              <Link to={"/"}>Caribbean Citizenship</Link>
            </li>
            <li className=" hover:text-yellow-600 text-white transition-all">
              <Link to={"/"}>Immigration Services</Link>
            </li>
            <li className=" hover:text-yellow-600 text-white transition-all">
              <Link to={"/"}>Student Visa</Link>
            </li>
            <li className=" hover:text-yellow-600 text-white transition-all">
              <Link to={"/"}>Visit Visa</Link>
            </li>
          </ul>
        </section>
        <section className=" flex flex-col w-full md:w-1/4">
          <h3 className=" text-yellow-600 font-serif text-2xl font-semibold">About Us</h3>

          <div className=" mt-9 text-gray-300 flex gap-3">
            <FaLocationDot size={20} />
            <p>See Location</p>
          </div>
          <div className=" mt-3 text-gray-300 flex gap-3">
            <MdEmail size={20} />
            <p>example@domain.com</p>
          </div>
          <div className=" mt-3 text-gray-300 flex gap-3">
            <MdPhone size={20} />
            <p>+(11) 333 4567890</p>
          </div>
        </section>
      </div>

      <p className="h-20 border-t border-gray-300 text-gray-300 md:text-center md:px-0 px-8 md:text-lg text-sm pt-6">
        Copyright © 2023 Zee Vista Consultant. All rights reserved.
      </p>
    </footer>
  );
}
