import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout/index.jsx";
import Home from "../pages/Home/index.jsx";
import Booking from "../pages/Booking/index.jsx";
import Admin from "../pages/Admin/index.jsx";
import Login from "../pages/Login/index.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <Admin />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
