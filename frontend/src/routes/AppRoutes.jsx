import { Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home";
import Workspace from "../pages/Workspace";
import Documents from "../pages/Documents";
import History from "../pages/History";
import Settings from "../pages/Settings";
import About from "../pages/About";


function AppRoutes() {

  return (

    <Routes>


      <Route element={<MainLayout />}>


        <Route
          path="/"
          element={<Home />}
        />


        <Route
          path="/workspace"
          element={<Workspace />}
        />


        <Route
          path="/documents"
          element={<Documents />}
        />


        <Route
          path="/history"
          element={<History />}
        />


        <Route
          path="/settings"
          element={<Settings />}
        />


        <Route
          path="/about"
          element={<About />}
        />


      </Route>


    </Routes>

  );

}


export default AppRoutes;