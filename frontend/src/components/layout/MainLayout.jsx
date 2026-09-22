import { Outlet, useLocation } from "react-router-dom";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import RightPanel from "./RightPanel";

import "../../styles/layout.css";

const MainLayout = () => {
  const location = useLocation();

  const showRightPanel =
    location.pathname === "/";

  return (
    <div className="app">
      <Sidebar />

      <div className="main">
        <Navbar />

        <main className="page-container">
          <Outlet />
        </main>
      </div>

      {showRightPanel && <RightPanel />}
    </div>
  );
};

export default MainLayout;