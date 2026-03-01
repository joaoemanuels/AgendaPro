import "../HeaderAdmin/header-admin.styles.css";

function HeaderAdmin() {
  return (
    <header className="topbar">
      <h2>Welcome Nirmal !</h2>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
    </header>
  );
}

export default HeaderAdmin;
