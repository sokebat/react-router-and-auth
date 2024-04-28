import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const RootLayout = () => {
  return (
    <div className=" bg-gray-700 text-gray-500">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
