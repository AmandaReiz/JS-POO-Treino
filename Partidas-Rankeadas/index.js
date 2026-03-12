function saldoRankeadas(quantVitorias, quantderrotas) {
  return quantVitorias - quantderrotas;
}

function getNivel(saldo) {
  let nivel;
  if (saldo <= 10) {
    nivel = "Ferro";
  } else if (saldo <= 20) {
    nivel = "Bronze";
  } else if (saldo <= 50) {
    nivel = "Prata";
  } else if (saldo <= 80) {
    nivel = "Ouro";
  } else if (saldo <= 90) {
    nivel = "Diamante";
  } else if (saldo <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }
  return nivel;
}

const vitorias = 100;
const derrotas = 40;

let saldoVitorias = saldoRankeadas(vitorias, derrotas);
let nivelHeroi = getNivel(saldoVitorias);

console.log(
  "O Herói tem um saldo de " +
    saldoVitorias +
    " e está no nível " +
    nivelHeroi
);
