import "../CardsAdmin/cards-admin.styles.css";

function CardsAdmin() {
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
    </>
  );
}

export default CardsAdmin;
