import { Outlet } from "react-router-dom";
import Header from "./components/Header"
import Footer from "./components/footer";

const Layout = () => {
  return (
    <div className=" w-screen bg-white ">
      <div className="top-0 left-0 w-full z-50">
        <Header />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
