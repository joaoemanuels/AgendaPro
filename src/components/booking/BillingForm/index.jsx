import { planos, Objetivos } from "../../../data/plans";
import { ListaSuspensa } from "../../ui/ListaSuspensa/index";
import { Label } from "../../ui/Label/index";
import { CampoDeFormulario } from "../../ui/CampoDeFormulario/index";
import { CampoDeEntrada } from "../../ui/CampoDeEntrada/index";

import "./billing-form.styles.css";
import ButtonForm from "../../ui/buttons/ButtonForm";

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
            <CampoDeFormulario>
              <Label htmlFor="nome">Nome *</Label>
              <CampoDeEntrada type="text" id="nome" name="nome" required />
            </CampoDeFormulario>

            <CampoDeFormulario>
              <Label htmlFor="sobrenome">Sobrenome *</Label>
              <CampoDeEntrada
                type="text"
                id="sobrenome"
                name="sobrenome"
                required
              />
            </CampoDeFormulario>
          </div>

          <CampoDeFormulario>
            <Label htmlFor="email">E-mail *</Label>
            <CampoDeEntrada type="email" id="email" name="email" required />
          </CampoDeFormulario>

          <CampoDeFormulario>
            <Label htmlFor="telefone">Telefone *</Label>
            <CampoDeEntrada type="tel" id="telefone" name="telefone" required />
          </CampoDeFormulario>

          <CampoDeFormulario>
            <Label htmlFor="plano">Plano *</Label>
            <ListaSuspensa id="plano" name="plano" itens={planos} />
          </CampoDeFormulario>

          <CampoDeFormulario>
            <Label htmlFor="telefone">Telefone *</Label>
            <CampoDeEntrada type="tel" id="telefone" name="telefone" required />
          </CampoDeFormulario>

          <div className="form-row">
            <CampoDeFormulario>
              <Label htmlFor="data">Data *</Label>
              <CampoDeEntrada type="date" id="data" name="data" required />
            </CampoDeFormulario>

            <CampoDeFormulario>
              <Label htmlFor="hora">Horário *</Label>
              <CampoDeEntrada type="time" id="hora" name="hora" required />
            </CampoDeFormulario>
          </div>

          <CampoDeFormulario>
            <Label htmlFor="objetivo">Objetivo *</Label>
            <ListaSuspensa id="objetivo" name="objetivo" itens={Objetivos} />
          </CampoDeFormulario>

          <ButtonForm>Confirmar Agendamento</ButtonForm>
        </form>
      </div>
    </section>
  );
}

export default BillingForm;
