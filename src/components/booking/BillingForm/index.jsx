import { planos, Objetivos, UserInfo } from "../../../data/plans";
import { validateBookingForm } from "../../../utils/validation";
import { ListaSuspensa } from "../../ui/ListaSuspensa/index";
import { Label } from "../../ui/Label/index";
import { CampoDeFormulario } from "../../ui/CampoDeFormulario/index";
import { CampoDeEntrada } from "../../ui/CampoDeEntrada/index";
import ButtonForm from "../../ui/buttons/ButtonForm";

import "./billing-form.styles.css";

function BillingForm() {
  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const nome = formData.get("nome");
    const email = formData.get("email");
    const telefone = formData.get("telefone");
    const data = formData.get("data");
    const hora = formData.get("hora");
    const plano = planos.find(function (item) {
      return item.id == formData.get("plano");
    });

    const erro = validateBookingForm({
      nome,
      email,
      telefone,
      data,
      hora,
      plano,
    });

    if (erro) {
      alert(erro);
      return;
    }

    const CampoUserInfo = {
      nome,
      email,
      telefone,
      plano,
      data,
    };

    UserInfo.push(CampoUserInfo);
    console.log("Banco atualizado:", UserInfo);
  }

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
            <Label htmlFor="telefone">Telefone </Label>
            <CampoDeEntrada type="tel" id="telefone" name="telefone" />
          </CampoDeFormulario>

          <CampoDeFormulario>
            <Label htmlFor="plano">Plano *</Label>
            <ListaSuspensa id="plano" name="plano" itens={planos} required />
          </CampoDeFormulario>

          <div className="form-row">
            <CampoDeFormulario>
              <Label htmlFor="data">Data *</Label>
              <CampoDeEntrada type="date" id="data" name="data" required />
            </CampoDeFormulario>

            <CampoDeFormulario>
              <Label htmlFor="hora">Horário *</Label>
              <CampoDeEntrada
                type="time"
                id="hora"
                name="hora"
                min="08:00"
                max="18:00"
                required
              />
            </CampoDeFormulario>
          </div>

          <CampoDeFormulario>
            <Label htmlFor="objetivo">Objetivo *</Label>
            <ListaSuspensa
              id="objetivo"
              name="objetivo"
              itens={Objetivos}
              required
            />
          </CampoDeFormulario>

          <ButtonForm>Confirmar Agendamento</ButtonForm>
        </form>
      </div>
    </section>
  );
}

export default BillingForm;
