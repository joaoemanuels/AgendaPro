import { Outlet } from "react-router-dom";
import Header from "../Header/index.jsx";
import Footer from "../Footer/index.jsx";

import "./layout.styles.css";

function Layout() {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
