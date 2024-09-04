import { useState } from "react";
import Contacts from "./Contacts";
import Login from "./Login";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdContactPhone } from "react-icons/md";
import Dashboard from "./Dashboard";
import Blogs from "./Blogs";
import { IoBook } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

const Admin = () => {
  const [tab, setTab] = useState("dashboard");
  const [loggedIn, setLoggedIn] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {loggedIn ? (
        <>
          <div className="flex min-h-screen bg-gray-100">
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
                      setSidebarOpen(false); // Close sidebar on mobile after selecting an item
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
                    <IoBook
                      className="inline-block mr-2 fill-current"
                      size={20}
                    />
                    <span>Manage Blogs</span>
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
              ) : null}
            </div>
          </div>
        </>
      ) : (
        <>
          <Login setLoggedIn={setLoggedIn} />
        </>
      )}
    </>
  );
};

export default Admin;
