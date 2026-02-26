import { Link } from "react-router-dom";
import MenuItems from "../../ui/MenuItems";
import Logo from "../../ui/Logo";
import SubmitButton from "../../ui/buttons/SubmitButton";

import "./header.styles.css";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="btn-link">
        <Logo />
      </Link>

      <MenuItems />

      <div className="header-actions">
        <Link to="/admin" className="btn-link">
          Entrar
        </Link>

        <Link to="/booking" className="btn-primary">
          <SubmitButton>Agendar</SubmitButton>
        </Link>
      </div>
    </header>
  );
}

export default Header;
