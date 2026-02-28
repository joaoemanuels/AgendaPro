import "./footer.styles.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <h2 className="footer-logo">AgendaPro</h2>
          <p>
            Mais que um corte, uma experiência. Estilo, precisão e atendimento
            premium para homens que valorizam presença e personalidade.
          </p>

          <form className="footer-newsletter">
            <input type="email" placeholder="Seu melhor Email" />
            <button type="submit">→</button>
          </form>
        </div>

        <div className="footer-col">
          <h3>Navegação</h3>
          <ul>
            <li>
              <a href="#">Início</a>
            </li>
            <li>
              <a href="#">Sobre Nós</a>
            </li>
            <li>
              <a href="#">Programas</a>
            </li>
            <li>
              <a href="#">Nossa Equipe</a>
            </li>
            <li>
              <a href="#">Planos</a>
            </li>
            <li>
              <a href="#">Depoimentos</a>
            </li>
            <li>
              <a href="#">Agendar Horário</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Nossos Serviços</h3>
          <ul>
            <li>
              <a href="#">Cardio</a>
            </li>
            <li>
              <a href="#">PowerLift</a>
            </li>
            <li>
              <a href="#">Calistenia</a>
            </li>
            <li>
              <a href="#">Musculação</a>
            </li>
            <li>
              <a href="#">Yoga</a>
            </li>
            <li>
              <a href="#">Pilates</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contato</h3>
          <p>Seg - Dom: 9h às 20h</p>
          <hr />
          <p>+55 (83) 99999-9999</p>
          <p>Campina Grande - PB</p>
        </div>
      </div>

      <div className="footer-span">
        <span>
          © 2026 AgendaPro. Todos os direitos reservados. <br /> Desenvolvido
          por João Emanuel.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
