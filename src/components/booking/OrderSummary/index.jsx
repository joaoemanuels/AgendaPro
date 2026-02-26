import { useState } from "react";
import "./order-summary.styles.css";

function OrderSummary() {
  const price = 477;
  const [quantity, setQuantity] = useState(6);

  const subtotal = price * quantity;

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
      <div className="menuItem-Suspenso">
        <select id="servico" name="servico" className="menuItem-servico">
          <option value="" disabled>Selecione o Plano</option>
          <option value="plus">Plus</option>
          <option value="ultra">Ultra</option>
          <option value="master">Master</option>
        </select>
      </div>

      <div className="order-product">
        <div className="product-info">
          <h3>90 dias de Consultoria Fitness Online</h3>
          <p>FILIPE FRANCO PERSONAL TRAINER</p>
        </div>

        <div className="product-quantity">
          <label>Quantidade</label>
          <select
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="order-divider" />

      <div className="order-row">
        <span>Subtotal</span>
        <span>R$ {subtotal.toFixed(2)}</span>
      </div>

      <div className="order-total">
        <span>Total</span>
        <span>R$ {subtotal.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default OrderSummary;
