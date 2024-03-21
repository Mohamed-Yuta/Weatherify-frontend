import { Outlet } from "react-router-dom";
import Navbar from "./shared/navbar/Navbar";
import Footer from "./shared/footer/Footer";

function Layout() {
  return (
    <>
      <div
        style={{
          backgroundColor: "var(--main-bg-color)",
          color: "var(--main-text-color)",
        }}
      >
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Layout;