
import logo from "../../assets/logowhite.png";
import { AiOutlineStar } from "react-icons/ai"
import Button from "./Button";
import { RiMenu3Fill } from "react-icons/ri"
import { Link } from "react-router-dom";

const InfoHeader = () => {
  return (
    <div className="flex items-center justify-center h-[100px] glass ">
      <div className="flex gap-10 items-center justify-center">
        <h2 className=" text-white opacity-70 tracking-[10px]">
          2023
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

        <h2 className=" text-white opacity-70 hover:opacity-100  tracking-[10px]">
          <AiOutlineStar className="inline-block text-white text-2xl" />
          <AiOutlineStar className="inline-block text-white text-2xl" />
          <AiOutlineStar className="inline-block text-white text-2xl" />
        </h2>
      </div>
    </div>
  );
};

export default InfoHeader;
