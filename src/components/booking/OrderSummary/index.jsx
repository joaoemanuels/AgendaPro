import "./order-summary.styles.css";

function OrderSummary() {
  return (
    <div className="order-summary">
      <div className="trainer-card">
        <div className="trainer-rating">
          ★★★★★ <span>5/5</span>
        </div>

        <h3 className="trainer-name">Nome 123</h3>

        <p className="trainer-description">
          Personal trainer registrado no Conselho Federal de Educação Física
        </p>

        <a
          href="https://wa.me/5599999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="trainer-whatsapp"
        >
          Whatsapp
        </a>
      </div>

      <h2>Seu pedido</h2>

      <div className="order-product">
        <div className="product-info">
          <h3>90 dias de Consultoria Fitness Online</h3>
          <p>FILIPE FRANCO PERSONAL TRAINER</p>
        </div>

        <div className="product-quantity">
          <label>Quantidade</label>
        </div>
      </div>

      <div className="order-divider" />

      <div className="order-row">
        <span>Subtotal</span>
        <span>R$ 1000</span>
      </div>

      <div className="order-total">
        <span>Total</span>
        <span>R$ 1000</span>
      </div>
    </div>
  );
}

export default OrderSummary;
