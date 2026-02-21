import MenuItems from "../../ui/MenuItems/index.jsx";
import SubmitButton from "../../ui/buttons/submitButton/index.jsx";
import Logo from "../../ui/Logo/index.jsx";

import "./navbar-section.styles.css";

function NavbarSection() {
  return (
    <div className="navbar-container">
      <Logo />

      <MenuItems />

      <SubmitButton />
    </div>
  );
}

export default NavbarSection;
