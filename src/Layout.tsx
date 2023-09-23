import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/footer';
import MenuPage from './components/MenuPage';
import Button from './components/Button';
import { RiMenu3Fill } from 'react-icons/ri';
import { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MdContactSupport } from 'react-icons/md';
import {RiWhatsappFill} from "react-icons/ri";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const controls = useAnimation();
  const navigate = useNavigate();
  let lastScrollY = useRef(0);
  let ticking = useRef(false);

  const update = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < lastScrollY.current) {
      controls.start({ y: 0 });
    } else {
      controls.start({ y: -100 });
    }

    lastScrollY.current = currentScrollY;
    ticking.current = false;
  };

  const requestTick = () => {
    if (!ticking.current) {
      requestAnimationFrame(update);
    }
    ticking.current = true;
  };

  useEffect(() => {
    window.addEventListener('scroll', requestTick);

    return () => {
      window.removeEventListener('scroll', requestTick);
    };
  }, []);

  return (
    <div className="relative w-screen bg-white">
      <Toaster />
      {isMenuOpen && <MenuPage closeMenu={() => setIsMenuOpen(false)} />}
      <motion.div
        className="fixed left-32 top-5"
        style={{ zIndex: 999 }}
        animate={controls}
      >
        <Button
          text="Menu"
          Icon={RiMenu3Fill}
          onClick={() => {
            setIsMenuOpen(true);
          }}
        />
      </motion.div>
      <motion.div
        className="fixed right-32 top-5"
        style={{ zIndex: 999 }}
        animate={controls}
      >
        <Button
          text="Contact"
          Icon={MdContactSupport}
          onClick={() => {
            navigate('/contact');
          }}
        />
      </motion.div>
      <div className="top-0 left-0 absolute w-full z-50">
        <Header />
      </div>
      <Outlet />
      <Footer />
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        className="fixed right-5 bottom-5 z-50"
      >
        <RiWhatsappFill className="text-5xl animate-bounce text-green-500 bg-white rounded-lg" />
      </a>
    </div>
  );
};

export default Layout;
