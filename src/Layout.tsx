import { useEffect, useRef } from 'react';
import {  useAnimation } from 'framer-motion';
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
import SocialIcons from './components/SocialIcons';
import whatsappimg from "../assets/whatsappimg.webp";

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
      <div className="fixed right-5 bottom-[40%] z-50 md:hidden">
        <SocialIcons />
      </div>
      <Toaster />
      {isMenuOpen && <MenuPage closeMenu={() => setIsMenuOpen(false)} />}
      <div
        className="fixed left-4 md:left-10 top-5"
        style={{ zIndex: 999 }}
       >
        <Button
          text="Menu"
          Icon={RiMenu3Fill}
          onClick={() => {
            setIsMenuOpen(true);
          }}
        />
      </div>
      <div
        className="fixed md:right-10 right-4 top-5"
        style={{ zIndex: 999 }}
      >
        <Button
          text="Contact"
          Icon={MdContactSupport}
          onClick={() => {
            navigate('/contact');
          }}
        />
      </div>
      <div className="top-0 left-0 md:block hidden absolute w-full z-50">
        <Header />
      </div>
      <Outlet />
      <Footer />
      <a
        href="https://wa.me/+971589240564"
        target="_blank"
        className="fixed right-5 bottom-5 z-50"
      >
        <img src={whatsappimg} alt='Whatsapp ZeeVista Advisors' className="w-14 md:animate-bounce" />
      </a>
    </div>
  );
};

export default Layout;
