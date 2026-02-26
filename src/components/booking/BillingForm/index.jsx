import "./billing-form.styles.css";

function BillingForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Compra finalizada com sucesso!");
  };

  return (
    <section className="billing">
      <div className="billing-container">
        <h2>Detalhes de cobrança</h2>

        <form className="billing-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nome">Nome *</label>
              <input type="text" id="nome" required />
            </div>

            <div className="form-group">
              <label htmlFor="sobrenome">Sobrenome *</label>
              <input type="text" id="sobrenome" required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail *</label>
            <input type="email" id="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="telefone">Telefone *</label>
            <input type="tel" id="telefone" required />
          </div>

          <div className="form-group">
            <label htmlFor="cpf">CPF *</label>
            <input type="text" id="cpf" required />
          </div>

          <div className="form-group">
            <label htmlFor="pais">País *</label>
            <select id="pais" required>
              <option value="Brasil">Brasil</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="cep">CEP *</label>
            <input type="text" id="cep" required />
          </div>

          <div className="form-group">
            <label htmlFor="logradouro">
              Logradouro *
              <span className="label-description">
                Nome da rua ou avenida ou praça etc
              </span>
            </label>
            <input type="text" id="logradouro" required />
          </div>

          <div className="form-group">
            <label htmlFor="numero">Número *</label>
            <input type="text" id="numero" required />
          </div>

          <div className="form-group">
            <label htmlFor="bairro">Bairro *</label>
            <input type="text" id="bairro" required />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="estado">Estado *</label>
              <input
                type="text"
                id="estado"
                defaultValue="Minas Gerais"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="cidade">Cidade *</label>
              <input type="text" id="cidade" required />
            </div>
          </div>

          <button type="submit" className="billing-submit">
            Finalizar compra
          </button>
        </form>
      </div>
    </section>
  );
}

export default BillingForm;
