import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUserStore } from "../../store/user";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Contacts from "./Contacts";
import Blogs from "./Blogs";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdContactPhone } from "react-icons/md";
import { IoBook } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { Loader2 } from "lucide-react";
import { IoIosContact } from "react-icons/io";
import Info from "./Info";
import CostCalculators from "./CostCalculator";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

const Admin: React.FC = () => {
  const [tab, setTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const { user, setUser } = useUserStore();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUser(token);
    } else {
      setLoading(false);
    }
  }, []);

  const getUser = async (token: string) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/user/user`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setUser(response.data.user);
    } catch (error) {
      console.error("Error fetching user:", error);
      localStorage.removeItem("token");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Loader2 className="h-12 w-12 animate-spin text-blue-500" />
      </div>
    );
  }

  if (!user.email) {
    return <Login />;
  }

  return (
    <div className="flex min-h-screen bg-gray-100 w-full overflow-hidden">
      {/* Sidebar for mobile and desktop */}
      <div
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 w-64 z-50 bg-gray-800 text-white p-8 transform transition-transform duration-300 ease-in-out md:translate-x-0 md:relative md:w-1/5 md:shrink-0`}
      >
        <div className="flex flex-col py-8">
          <div className="mb-10">
            <h1 className="text-3xl font-bold">Admin Panel</h1>
          </div>
          <p className="text-gray-400">Menu</p>
          <ul className="mt-3">
            <li
              className="hover:bg-gray-700 p-3 rounded cursor-pointer flex items-center"
              onClick={() => {
                setTab("dashboard");
                setSidebarOpen(false);
              }}
            >
              <LuLayoutDashboard
                className="inline-block mr-2 fill-current"
                size={20}
              />
              <span>Dashboard</span>
            </li>
            <li
              className="hover:bg-gray-700 p-3 rounded cursor-pointer flex items-center"
              onClick={() => {
                setTab("inquiries");
                setSidebarOpen(false);
              }}
            >
              <MdContactPhone
                className="inline-block mr-2 fill-current"
                size={20}
              />
              <span>Manage Inquiries</span>
            </li>
            <li
              className="hover:bg-gray-700 p-3 rounded cursor-pointer flex items-center"
              onClick={() => {
                setTab("blogs");
                setSidebarOpen(false);
              }}
            >
              <IoBook className="inline-block mr-2 fill-current" size={20} />
              <span>Manage Blogs</span>
            </li>
            <li
              className="hover:bg-gray-700 p-3 rounded cursor-pointer flex items-center"
              onClick={() => {
                setTab("costCalculators");
                setSidebarOpen(false);
              }}
            >
              <RiMoneyDollarCircleLine
                className="inline-block mr-2 fill-current"
                size={20}
              />
              <span>Cost Calculators</span>
            </li>
            <li
              className="hover:bg-gray-700 p-3 rounded cursor-pointer flex items-center"
              onClick={() => {
                setTab("info");
                setSidebarOpen(false);
              }}
            >
              <IoIosContact
                className="inline-block mr-2 fill-current"
                size={20}
              />
              <span>Contact Info</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main content */}
      <div className="w-full">
        {/* Hamburger Menu Button for mobile */}
        <div className="md:hidden flex items-center justify-between bg-gray-800 text-white p-4">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
          <button
            className="text-white"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <FaBars size={24} />
          </button>
        </div>

        {/* Render tabs content */}
        {tab === "dashboard" ? (
          <Dashboard />
        ) : tab === "inquiries" ? (
          <Contacts />
        ) : tab === "blogs" ? (
          <Blogs />
        ) : tab === "info" ? (
          <Info />
        ) : tab === "costCalculators" ? (
          <CostCalculators />
        ) : null}
      </div>
    </div>
  );
};

export default Admin;
