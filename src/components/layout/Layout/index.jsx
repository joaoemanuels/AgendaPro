import { Outlet } from "react-router-dom";
import "./layout.styles.css";
import Header from "../Header/index.jsx";

function Layout() {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
