import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet , useLocation } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";

function Layout() {

  const location = useLocation();
  
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default Layout;