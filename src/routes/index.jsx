import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout/index.jsx";
import Home from "../pages/Home/index.jsx";
import Booking from "../pages/Booking/index.jsx";
import Admin from "../pages/Admin/index.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
      </Route>

      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default AppRoutes;
