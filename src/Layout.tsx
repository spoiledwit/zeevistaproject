import { useEffect, useRef, useState } from "react";
import { useAnimation } from "framer-motion";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/footer";
import MenuPage from "./components/MenuPage";
import Button from "./components/Button";
import { RiMenu3Fill } from "react-icons/ri";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { MdContactSupport } from "react-icons/md";
import SocialIcons from "./components/SocialIcons";
import { IoMdClose } from "react-icons/io";
import whatsappimg from "../assets/whatsappimg.webp";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });
  const controls = useAnimation();
  const navigate = useNavigate();
  let lastScrollY = useRef(0);
  let ticking = useRef(false);
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const pathName = location.pathname;

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
    window.addEventListener("scroll", requestTick);

    return () => {
      window.removeEventListener("scroll", requestTick);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, phone, service } = formData;

    if (!name || !email || !phone || !service) {
      toast.error("Please fill in all fields");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/popup`, formData);
      toast.success("Form submitted successfully");
      setIsModalOpen(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("An error occurred. Please try again later");
      setLoading(false);
    }
  };

  return (
    <div className="relative w-screen bg-white">
      <div className="fixed right-5 bottom-[40%] z-50 md:hidden">
        <SocialIcons />
      </div>
      <Toaster />
      {isMenuOpen && <MenuPage closeMenu={() => setIsMenuOpen(false)} />}

      <div className="fixed left-4 md:left-10 top-5" style={{ zIndex: 999 }}>
        {pathName !== "/admin" && (
          <Button
            text="Menu"
            Icon={RiMenu3Fill}
            onClick={() => {
              setIsMenuOpen(true);
            }}
          />
        )}
      </div>

      <div className="fixed md:right-10 right-4 top-5" style={{ zIndex: 999 }}>
        {pathName !== "/admin" && (
          <Button
            text="Contact"
            Icon={MdContactSupport}
            onClick={() => {
              navigate("/contact");
            }}
          />
        )}
      </div>

      {pathName !== "/admin" && (
        <div className="top-0 left-0 md:block hidden absolute w-full z-50">
          <Header />
        </div>
      )}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-lg p-8 shadow-lg w-11/12 md:w-1/2 lg:w-1/3 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              onClick={() => setIsModalOpen(false)}
            >
              <IoMdClose size={24} />
            </button>

            <h2
              className="text-2xl font-semibold mb-6"
              style={{ color: "#E9B306" }}
            >
              Contact Us
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#E9B306]"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#E9B306]"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-1"
                >
                  Phone
                </label>
                <input
                  type="text"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#E9B306]"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="service"
                  className="block text-sm font-medium mb-1"
                >
                  Service
                </label>
                <input
                  type="text"
                  id="service"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#E9B306]"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#E9B306] hover:bg-[#E9B306]/80 text-white px-4 py-2 rounded hover:bg-yellow-500 transition duration-200"
                >
                  {loading ? "Loading..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Outlet />
      <Footer />

      <a
        href="https://wa.me/+971589240564"
        target="_blank"
        className="fixed right-5 bottom-5 z-50"
      >
        <img
          src={whatsappimg}
          alt="Whatsapp ZeeVista Advisors"
          className="w-14 md:animate-bounce"
        />
      </a>
    </div>
  );
};

export default Layout;
