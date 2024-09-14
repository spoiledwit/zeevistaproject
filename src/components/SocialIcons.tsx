import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import axios from "axios";
import { useEffect, useState } from "react";

const SocialIcons = () => {
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
    <div className="flex flex-col gap-5 glass px-2 py-3 rounded-2xl">
      <a
        href={contactInfo?.facebook}
        target="_blank"
        rel="noreferrer"
        className="text-white text-xl"
      >
        <BsFacebook />
      </a>
      <a
        href={contactInfo?.instagram}
        target="_blank"
        rel="noreferrer"
        className="text-white text-xl"
      >
        <BsInstagram />
      </a>
      <a
        href={contactInfo?.linkedin}
        target="_blank"
        rel="noreferrer"
        className="text-white text-xl"
      >
        <BsLinkedin />
      </a>
    </div>
  );
};

export default SocialIcons;
