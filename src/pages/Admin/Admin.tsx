// import Contact from "../../components/Admin/Contact";
// import Stats from "../../components/Admin/Stats";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import Contacts from "./Contacts";
// import toast from "react-hot-toast";
import CardDataStats from "../../components/Admin/Card";
import Login from "./Login";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdContactPhone, MdOutlineContactPhone } from "react-icons/md";
import ChartOne from "../../components/Admin/Chart";
const inquiries = [
  { createdAt: "2023-01-15T10:30:00Z" },
  { createdAt: "2023-01-20T11:00:00Z" },
  { createdAt: "2023-02-05T09:00:00Z" },
  { createdAt: "2023-03-15T10:15:00Z" },
  { createdAt: "2023-03-20T12:30:00Z" },
  { createdAt: "2023-04-25T14:00:00Z" },
  { createdAt: "2023-05-15T08:45:00Z" },
  { createdAt: "2023-06-05T11:30:00Z" },
  { createdAt: "2023-07-10T09:00:00Z" },
  { createdAt: "2023-08-15T10:30:00Z" },
  { createdAt: "2023-09-01T13:00:00Z" },
  { createdAt: "2023-10-05T15:45:00Z" },
  { createdAt: "2023-11-10T08:00:00Z" },
  { createdAt: "2023-12-25T16:30:00Z" },
  { createdAt: "2022-02-05T09:00:00Z" },
  { createdAt: "2022-03-15T10:15:00Z" },
  { createdAt: "2022-04-25T14:00:00Z" },
  { createdAt: "2022-05-15T08:45:00Z" },
  { createdAt: "2022-06-05T11:30:00Z" },
  { createdAt: "2022-07-10T09:00:00Z" },
  { createdAt: "2022-08-15T10:30:00Z" },
  { createdAt: "2022-09-01T13:00:00Z" },
  { createdAt: "2022-10-05T15:45:00Z" },
  { createdAt: "2022-11-10T08:00:00Z" },
  { createdAt: "2022-12-25T16:30:00Z" },
];

const Admin = () => {
  const [show, setShow] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);

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
                    className="hover:bg-gray-700 py-3 rounded cursor-pointer flex items-center"
                    onClick={() => setShow(false)}
                  >
                    <LuLayoutDashboard
                      className="inline-block mr-2 fill-current"
                      size={20}
                    />
                    <span>Dashboard</span>
                  </li>
                  <li
                    className="hover:bg-gray-700 py-3 rounded cursor-pointer flex items-center"
                    onClick={() => setShow(true)}
                  >
                    <MdContactPhone
                      className="inline-block mr-2 fill-current"
                      size={20}
                    />
                    <span>Manage Inquiries</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Main Content */}
            {show ? (
              <Contacts />
            ) : (
              <div className="w-4/5 p-10">
                <h2 className="text-4xl font-semibold mb-6">Dashboard</h2>
                <div className="grid grid-cols-3 gap-5">
                  <CardDataStats title="Site Visitors" total={"300"}>
                    <FaRegEye size={20} />
                  </CardDataStats>
                  <CardDataStats title="Inquiries" total={"150"}>
                    <MdOutlineContactPhone size={20} />
                  </CardDataStats>
                  <CardDataStats title="Total Blogs" total={"10"}>
                    <IoBookOutline size={20} />
                  </CardDataStats>

                  {/* <div className="w-full lg:w-1/2 px-3 mb-6">
                    <div className="p-6 bg-white rounded shadow">
                      <h3 className="text-xl font-medium mb-4">
                        Recent Contacts
                      </h3>
                      <Contact />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 px-3 mb-6">
                    <div className="p-6 bg-white rounded shadow">
                      <h3 className="text-xl font-medium mb-4">
                        Page Management
                      </h3>
                      <Stats />
                    </div>
                  </div> */}
                  {/* More widgets can be added here */}
                </div>
                <ChartOne inquiries={inquiries} />
              </div>
            )}
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
