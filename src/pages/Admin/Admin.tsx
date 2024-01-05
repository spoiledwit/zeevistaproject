import Contact from "../../components/Admin/Contact";
import Stats from "../../components/Admin/Stats";
import { useState } from "react";
import Contacts from "./Contacts";
// import toast from "react-hot-toast";
import Login from "./Login";

const Admin = () => {
  const [show, setShow] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {loggedIn ? (
        <>
          <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-1/5 bg-gray-800 text-white">
              <div className="flex flex-col items-center py-8">
                <div className="mb-10">
                  <h1 className="text-3xl font-bold">Admin Panel</h1>
                </div>
                <ul className="space-y-6">
                  <li
                    className="hover:bg-gray-700 p-3 rounded cursor-pointer"
                    onClick={() => setShow(false)}
                  >
                    Dashboard
                  </li>
                  <li
                    className="hover:bg-gray-700 p-3 rounded cursor-pointer"
                    onClick={() => setShow(true)}
                  >
                    View Contacts
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
                <div className="flex flex-wrap -mx-3">
                  {/* Add Widgets/Components here */}
                  <div className="w-full lg:w-1/2 px-3 mb-6">
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
                  </div>
                  {/* More widgets can be added here */}
                </div>
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
