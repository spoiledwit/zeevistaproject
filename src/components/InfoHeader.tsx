import logo from "../../assets/logowhite.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { GrMail } from "react-icons/gr";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { PiWhatsappLogoFill } from "react-icons/pi";
import { useEffect, useState } from "react";
import axios from "axios";

const InfoHeader = () => {
  const [contactInfo, setContactInfo] = useState<any>(null);
  const fetchContactInfo = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/contactInfo`
      );
      console.log(res.data);
      setContactInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContactInfo();
  }, []);

  return (
    <div className="flex items-center justify-center h-[100px] glass ">
      <div className="flex gap-10 items-center justify-center mr-32">
        <div className="ml-auto flex items-center gap-4">
          <a className="flex items-center gap-2" href="tel:+97144490918">
            <TbDeviceLandlinePhone className="text-white text-xl" />
            <p className="text-white text-sm">
              <strong>24/7: </strong>
              {contactInfo?.phones[0]}
            </p>
          </a>

          <div
            className="flex items-center hover:cursor-pointer gap-2"
            onClick={() => {
              window.open(
                `https://wa.me/${contactInfo?.phones[1].split(" ").join("")}`,
                "_blank"
              );
            }}
          >
            <PiWhatsappLogoFill className="text-white text-xl" />
            <p className="text-white text-sm">
              <strong>24/7: </strong>
              {contactInfo?.phones[1]}
            </p>
          </div>
        </div>
        <Link to={"/"}>
          <img
            src={logo}
            alt="ZeeVista Advisors"
            className="h-[100px] w-[100px] object-contain"
          />
        </Link>
        <div className="flex gap-4 items-center justify-center">
          <span className=" flex gap-3 tracking-[10px]">
            <a href={contactInfo?.facebook} target="_blank" rel="noreferrer">
              <FaFacebook className="inline-block text-white opacity-70 hover:opacity-100 text-lg" />
            </a>
            <a href={contactInfo?.instagram} target="_blank" rel="noreferrer">
              <FaInstagram className="inline-block  text-white opacity-70 hover:opacity-100 text-lg" />
            </a>
            <a href={contactInfo?.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin className="inline-block  text-white opacity-70 hover:opacity-100 text-lg" />
            </a>
          </span>
          <div>
            <a
              href={`mailto:${contactInfo?.email}`}
              className="flex items-center gap-2"
            >
              <GrMail className="text-white text-xl" />
              <p className="text-white text-sm">{contactInfo?.email}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoHeader;
