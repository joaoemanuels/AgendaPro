import "../DashboardHistory/dashboard-history.styles.css";

function DashboardHistory() {
  return (
    <div className="box stores">
      <h3>Top 10 Stores by sales</h3>
      <ul className="store-list">
        <li>
          <span>Gateway str</span>
          <span>874k</span>
        </li>
        <li>
          <span>The Rustic Fox</span>
          <span>721k</span>
        </li>
        <li>
          <span>Velvet Vine</span>
          <span>598k</span>
        </li>
        <li>
          <span>Blue Harbor</span>
          <span>586k</span>
        </li>
        <li>
          <span>Nebula Novelties</span>
          <span>395k</span>
        </li>
        <li>
          <span>Crimson Crafters</span>
          <span>344k</span>
        </li>
        <li>
          <span>Tidal Treasures</span>
          <span>274k</span>
        </li>
        <li>
          <span>Whimsy Wild</span>
          <span>213k</span>
        </li>
        <li>
          <span>Mercantile</span>
          <span>183k</span>
        </li>
        <li>
          <span>Emporium</span>
          <span>176k</span>
        </li>
      </ul>
    </div>
  );
}

export default DashboardHistory;
