
import logo from "../../assets/logowhite.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { PiWhatsappLogoFill } from "react-icons/pi";

const InfoHeader = () => {
  return (
    <div className="flex items-center justify-center h-[100px] glass ">
      <div className="flex gap-10 items-center justify-center mr-32">
        <div className="ml-auto flex items-center gap-4">
          <a className="flex items-center gap-2"
            href="tel:+97144490918"
          >
            <TbDeviceLandlinePhone className="text-white text-xl" />
            <p className="text-white text-sm">
              <strong>24/7: </strong>
              +971 4449 0918</p>
          </a>

          <div className="flex items-center hover:cursor-pointer gap-2"
          onClick={() => {
            window.open("https://wa.me/+971589240564", "_blank")
          }
          }
          >
            <PiWhatsappLogoFill className="text-white text-xl" />
            <p className="text-white text-sm">
              <strong>24/7: </strong>
              +971 589240564</p>
          </div>
        </div>
        <Link
          to={"/"}
        >

          <img
            src={logo}
            alt="ZeeVista Advisors"
            className="h-[100px] w-[100px] object-contain"
          />
        </Link>
        <div className="flex gap-4 items-center justify-center">
          <span className=" flex gap-3 tracking-[10px]">
            <a
              href="https://www.facebook.com/zeevistaadvisors"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="inline-block text-white opacity-70 hover:opacity-100 text-lg" />
            </a>
            <a
              href="https://www.instagram.com/zeevista/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="inline-block  text-white opacity-70 hover:opacity-100 text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/company/zeevista-immigration-advisors/?viewAsMember=true"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="inline-block  text-white opacity-70 hover:opacity-100 text-lg" />
            </a>
          </span>
          <div>
            <a 
            href="mailto:info@zeevistaadvisors.com"
            className="flex items-center gap-2">
              <GrMail className="text-white text-xl" />
              <p className="text-white text-sm">
                info@zeevistaadvisors.com
              </p>
            </a>

          </div>
        </div>

      </div>
    </div>
  );
};

export default InfoHeader;
