import React from "react";
import img from "../../assets/img2.jpg";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/logowhite.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";

interface Props {
    closeMenu: () => void;
}

const MenuPage: React.FC<Props> = ({
    closeMenu
}) => {
    return (
        <div
            className="w-full bg-white flex fixed h-screen"
            style={{
                zIndex: 99999,
            }}
        >
            <button className="absolute top-10 border p-2 transition-all duration-300 hover:scale-110 rounded-full left-32 z-10"
                onClick={closeMenu}
            >
                <AiOutlineClose className="text-2xl text-white" />
            </button>
            
            <div
                className="w-[67%] relative bg-cover h-screen"
                style={{
                    backgroundImage: `url(${img})`,
                }}
            >
                <div
                    className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
                />
            </div> 
          
            <div className="w-[33%] flex-col h-screen flex bg-yellow-600 items-center">
                <img src={logo} alt=""  className="w-[100px] h-[93px] mt-16"/>
                <h2
                className="text-white font-medium text-center mt-10 text-2xl font-play"
                >
                    ZeeVista Immigration <br /> Advisors
                </h2>

                <p className="text-white text-center font-open mt-4">
                    H3 Business Bay, <br /> Dubai, UAE
                </p>
                
                <span className="text-white flex gap-1 items-center flex-col mt-6">
                <Link
                className="text-xl font-open tracking-wider"
                    to={"/about"}
                >
                +421 45 530 00 00
                </Link>
                <Link
                    className="text-xl font-open tracking-wider"
                    to={"/contact"}
                >
                    info@zeevista.com
                </Link>
                <Link
                    className="text-xl font-open tracking-wider"
                    to={"/contact"}
                >
                contact    
                <MdArrowRightAlt className="inline-block text-xl" />
                </Link>
                </span>
                
            <span 
            className="flex text-white gap-10 text-2xl mb-5  mt-auto"
            >
                <a href="/">
                    <FaFacebook className="opacity-80 hover:opacity-100"/>
                </a>
                <a href="/">
                    <FaTwitter className="opacity-80 hover:opacity-100"/>
                </a>
                <a href="/">
                    <FaInstagram className="opacity-80 hover:opacity-100"/>
                </a>
            </span>
            </div>
        </div>
    )
}

export default MenuPage