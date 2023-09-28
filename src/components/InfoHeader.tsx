
import logo from "../../assets/logowhite.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa6";

const InfoHeader = () => {
  return (
    <div className="flex items-center justify-center h-[100px] glass ">
      <div className="flex gap-10 items-center justify-center mr-32">
        <h2 className=" text-white opacity-70 tracking-[10px]">
         since 2008
        </h2>
        <Link
          to={"/"}
        >

          <img
            src={logo}
            alt="logo"
            className="h-[100px] w-[100px] object-contain"
          />
        </Link>

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
      </div>
    </div>
  );
};

export default InfoHeader;
