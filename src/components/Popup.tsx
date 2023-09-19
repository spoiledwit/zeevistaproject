"use client"

import logo from "@/assets/logo.png";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineClose } from "react-icons/ai"
import speaker from "@/assets/marketing.png"

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the popup has already been closed during the current session
    if (sessionStorage.getItem('popupClosed') !== 'true') {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    // Set a flag in session storage to remember that the popup has been closed
    sessionStorage.setItem('popupClosed', 'true');
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className='w-full min-h-screen flex bg-transparent fixed z-50 items-center justify-center'>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="z-50 mx-10 md:mx-0 md:w-[450px] md:h-[400px] overflow-hidden"
          style={{
            position: 'fixed',
            backgroundColor: 'white',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0,0,0,0.5)',
          }}
        >
          <div className="w-full">
            <img src={logo} alt="ZeeVista" className="w-16 ml-8 my-4 md:m-8 h-16" />
            <AiOutlineClose size={35} className="text-gray-400 hover:text-black absolute top-8 right-8 text-2xl p-1 rounded-full cursor-pointer" onClick={handleClose} />
          </div>
          <img src={speaker} alt="ZeeVista" className="md:block hidden w-20 absolute top-[100px] right-10 ml-8 my-4 md:m-8 h-20" />
          <div className="ml-8">
            <h2 className="text-xs mb-2 text-gray-500">Stay Safe Stay Secure</h2>
            <h3 className="font-serif text-yellow-600 text-3xl">Don&apos;t be a victim</h3>
            <h3 className="text-xl font-medium text-gray-600">Online Payment Only</h3>
          </div>
          <h4 className="text-white mt-2 bg-black w-fit pl-8 pr-2 rounded-r-full">
            For your safety
          </h4>
          <h5 className="pl-8 mt-2">
           Our consultants strictly prohibit the acceptance of cash transactions. It is mandatory that all remittances are conducted via bank wire or checks issued in the name of our firm.

          </h5>
          <div className="bg-yellow-600 mt-4 px-8 py-1 text-white w-full">
            ZeeVista - Immigration & Visa Consultants
          </div>
        </motion.div>
      </div>
    )
  );
};

export default Popup;