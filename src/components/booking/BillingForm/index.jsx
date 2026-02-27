import "./billing-form.styles.css";

function BillingForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Agendamento realizado com sucesso!");
  };

  return (
    <section className="billing">
      <div className="billing-container">
        <h2>Agende seu treino</h2>

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
            <label htmlFor="plano">Plano *</label>
            <select id="plano" required defaultValue="">
              <option value="" disabled>
                Selecione o plano
              </option>
              <option value="plus">Plus</option>
              <option value="master">Master</option>
              <option value="ultra">Ultra</option>
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="data">Data *</label>
              <input type="date" id="data" required />
            </div>

            <div className="form-group">
              <label htmlFor="hora">Horário *</label>
              <input type="time" id="hora" required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="objetivo">Objetivo *</label>
            <select id="objetivo" defaultValue="" required>
              <option value="" disabled>
                Selecione seu objetivo
              </option>
              <option value="emagrecimento">Emagrecimento</option>
              <option value="hipertrofia">Hipertrofia</option>
              <option value="condicionamento">Condicionamento</option>
              <option value="reabilitacao">Reabilitação</option>
            </select>
          </div>

          <button type="submit" className="billing-submit">
            Confirmar Agendamento
          </button>
        </form>
      </div>
    </section>
  );
}

export default BillingForm;
