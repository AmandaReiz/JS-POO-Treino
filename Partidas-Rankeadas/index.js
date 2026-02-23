function saldoRankeadas(quantVitorias, quantderrotas) {
  return quantVitorias - quantderrotas;
}

let nivelExp = saldoRankeadas(100, 40);
let nivel = "";

if (nivelExp < 10) {
  nivel = "Ferro";
} else if (nivelExp > 11 && nivelExp < 20) {
  nivel = "Bronze";
} else if (nivelExp > 21 && nivelExp < 50) {
  nivel = "Prata";
} else if (nivelExp > 51 && nivelExp < 80) {
  nivel = "Ouro";
} else if (nivelExp > 81 && nivelExp < 90) {
  nivel = "Diamante";
} else if (nivelExp > 91 && nivelExp < 100) {
  nivel = "Lendário";
} else if (nivelExp >= 100) {
  nivel = "Imortal";
}

console.log("O héroi tem saldo de: " + nivelExp + " e está no nível: " + nivel); 


