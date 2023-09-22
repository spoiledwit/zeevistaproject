import { Outlet } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/footer";
import MenuPage from "./components/MenuPage";
import Button from "./components/Button";
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from "react";

const Layout = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative w-screen bg-white ">
      {isMenuOpen && (<MenuPage closeMenu={() => setIsMenuOpen(false)} />)}
      <div className="fixed left-32 top-5"
      style={{
        zIndex:999
      }}
      >
        <Button
          text="Menu"
          Icon={RiMenu3Fill}
          onClick={() => {
            setIsMenuOpen(true);
          }}
        />
      </div>
      <div className="fixed right-32 top-5"
      style={{
        zIndex:999
      }}
      >
        <Button
          text="Contact"
          Icon={RiMenu3Fill}
          onClick={() => {
            // toggleMenu();
          }}
        />
      </div>
      <div className="top-0 left-0 absolute w-full z-50">
        <Header />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
