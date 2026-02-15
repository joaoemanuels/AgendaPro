import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout/index.jsx";
import Home from "../pages/Home/index.jsx";
// import Admin from "../pages/Admin";
// import Booking from "../pages/Booking";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/booking" element={<Booking />} /> */}
      </Route>

      {/* <Route path="/admin" element={<Admin />} /> */}
    </Routes>
  );
}

export default AppRoutes;
