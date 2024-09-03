import { useState } from "react";
import Contacts from "./Contacts";
import Login from "./Login";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdContactPhone } from "react-icons/md";
import Dashboard from "./Dashboard";
import { IoBook } from "react-icons/io5";
import Blogs from "./Blogs";
const Admin = () => {
  const [tab, setTab] = useState("dashboard");
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {loggedIn ? (
        <>
          <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-1/5 bg-gray-800 text-white px-8 shrink-0">
              <div className="flex flex-col py-8">
                <div className="mb-10">
                  <h1 className="text-3xl font-bold">Admin Panel</h1>
                </div>
                <p className="text-gray-400">Menu</p>
                <ul className="mt-3">
                  <li
                    className="hover:bg-gray-700 p-3 rounded cursor-pointer flex items-center"
                    onClick={() => setTab("dashboard")}
                  >
                    <LuLayoutDashboard
                      className="inline-block mr-2 fill-current"
                      size={20}
                    />
                    <span>Dashboard</span>
                  </li>
                  <li
                    className="hover:bg-gray-700 p-3 rounded cursor-pointer flex items-center"
                    onClick={() => setTab("inquiries")}
                  >
                    <MdContactPhone
                      className="inline-block mr-2 fill-current"
                      size={20}
                    />
                    <span>Manage Inquiries</span>
                  </li>
                  <li
                    className="hover:bg-gray-700 p-3 rounded cursor-pointer flex items-center"
                    onClick={() => setTab("blogs")}
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

            {/* Main Content */}
            {tab === "dashboard" ? (
              <Dashboard />
            ) : tab === "inquiries" ? (
              <Contacts />
            ) : tab === "blogs" ? (
              <Blogs />
            ) : null}
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
