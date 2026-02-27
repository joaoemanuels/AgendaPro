function formatEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
  return regex.test(email);
}

function formatTel(telefone) {
  const regex = /^\d{10,11}$/;
  return regex.test(telefone);
}

function isPastDate(dataSelecionada) {
  if (!dataSelecionada) return true;

  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  const [ano, mes, dia] = dataSelecionada.split("-").map(Number);
  const data = new Date(ano, mes - 1, dia);

  return data >= hoje;
}

export function validateBookingForm({
  nome,
  email,
  telefone,
  data,
  hora,
  plano,
}) {
  nome = nome?.trim();
  email = email?.trim();
  telefone = telefone?.trim();

  if (!nome) return "Nome é obrigatório";
  if (!formatEmail(email)) return "E-mail inválido";
  if (!formatTel(telefone)) return "Telefone inválido";
  if (!isPastDate(data)) return "Selecione uma data válida";
  if (!hora) return "Selecione um horario";
  if (!plano) return "Selecione um plano";

  return null;
}
