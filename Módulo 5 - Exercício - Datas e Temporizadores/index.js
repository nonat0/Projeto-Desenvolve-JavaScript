function calcularTempoRestante(dataFutura) {
  const agora = new Date();
  const diferenca = dataFutura - agora;

  if (diferenca <= 0) {
    return null;
  }

  const segundos = Math.floor((diferenca / 1000) % 60);
  const minutos = Math.floor((diferenca / 1000 / 60) % 60);
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

  return { dias, horas, minutos, segundos };
}

function atualizarTemporizador(dataFutura) {
  const tempo = calcularTempoRestante(dataFutura);
  if (!tempo) {
    console.clear();
    console.log("Contagem regressiva encerrada!");
    clearInterval(intervalo);
    return;
  }

  console.clear();
  console.log(`Tempo restante: ${tempo.dias}d ${tempo.horas}h ${tempo.minutos}m ${tempo.segundos}s`);
}

const dataFutura = new Date("2025-12-31T23:59:59");

const intervalo = setInterval(() => atualizarTemporizador(dataFutura), 1000);
