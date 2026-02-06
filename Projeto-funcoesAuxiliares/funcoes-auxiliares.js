const entradas = [5, 3, 8, 1, 4]; // Exemplo de entradas
let i = 0;
function gets() {
  return entradas[i++];
}
function print(texto) {
  console.log(texto);
}
module.exports = { gets, print };
