import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Layout = ({isLoggedIn,userType}) => {
  const [searchVal, setSearch] = useState("");

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} userType={userType} setSearch={setSearch} />
      <Outlet context={{ searchVal }} />
      <Footer />
    </div>
  );
};

export default Layout;
