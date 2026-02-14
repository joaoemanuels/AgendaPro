import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Admin from "../pages/Admin";
import Booking from "../pages/Booking";

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
