import "../DashboardOverview/dashboard-overview.styles.css";

function DashboardOverview() {
  return (
    <>
      <section className="overview">
        <div className="card">
          <h4>5483</h4>
          <p>Total Products</p>
        </div>

        <div className="card">
          <h4>2859</h4>
          <p>Orders</p>
        </div>

        <div className="card">
          <h4>5483</h4>
          <p>Total Stock</p>
        </div>

        <div className="card warning">
          <h4>38</h4>
          <p>Out of Stock</p>
        </div>
      </section>

      <section className="middle-section">
        <div className="box users">
          <h3>No of users</h3>
          <h2>583 K</h2>
          <p>Total Customers</p>
        </div>

        <div className="box inventory">
          <h3>Inventory Values</h3>
          <div className="fake-chart"></div>
        </div>

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
      </section>
    </>
  );
}

export default DashboardOverview;
