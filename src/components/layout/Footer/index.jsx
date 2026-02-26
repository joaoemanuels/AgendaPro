import "./footer.styles.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h2 className="footer-logo">TRIMCUTS</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <form className="footer-newsletter">
            <input type="email" placeholder="Endereço de email" />
            <button type="submit">→</button>
          </form>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Our Services</h3>
          <ul>
            <li>
              <a href="#">Haircut</a>
            </li>
            <li>
              <a href="#">Shave</a>
            </li>
            <li>
              <a href="#">Beard Trim</a>
            </li>
            <li>
              <a href="#">Hair Styling</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contato</h3>
          <p>Seg - Dom: 9am - 8pm</p>
          <hr />
          <p>+55 83 99999-9999</p>
          <p>Campina Grande - PB</p>
        </div>
      </div>

      <div className="footer-span">
        <span>© 2026 nome1234. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
