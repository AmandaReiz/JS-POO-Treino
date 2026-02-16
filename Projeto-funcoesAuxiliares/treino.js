//Tipos de dados primitivos, uso do if e funções em JavaScript

const numero = 2; //var constante
const numeroPar = numero % 2 === 0; //expressão lógica pra ser par
console.log(numeroPar); //exibir true ou false

if (numeroPar) {
  console.log("O número é par");
} else {
  console.log("O número é ímpar");
}

//Função em js: é um bloco de código que executa uma tarefa específica quando é chamada pode receber parâmetros e retornar valores.
function saudacao() {
  return "Olá mundo";
}
console.log(saudacao());

//Função #2
function dizerNome(nome) {
  console.log("Olá " + nome);
}
dizerNome("Amanda");

//Função #3
function EscrevaMeuNome(nome) {
  return "A " + nome;
}

function verificarIdade(idade) {
  if (idade >= 18) {
    console.log(EscrevaMeuNome("Amanda") + " é maior de idade");
  } else {
    console.log(EscrevaMeuNome("Amanda") + " é menor de idade");
  }
}
verificarIdade(24);

//aprendendo o delete
const pessoa = {
  nome: "Amanda",
  idade: 24,
  cidade: "Rio de Janeiro",
};
delete pessoa.cidade; //deletando a propriedade cidade do objeto pessoa
console.log(pessoa);

//aprendendo classe
class Carro {
  constructor(marca, modelo, ano) {
    //construtor da classe + this
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  descrever() {
    return `Este carro é um da marca ${this.marca} modelo ${this.modelo} do ano ${this.ano}.`;
  }
}
const carro1 = new Carro("Toyota", "Corolla", 2020); //criando uma instância da classe Carro
console.log(carro1.descrever());

//array(lista) básica
const frutas = ["maçã", "banana", "laranja"];
frutas.push("uva"); //adicionando um elemento 3 ao array
console.log(frutas[3]);

//loop básico em array
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

//importando e exportando funções entre arquivos
function getFrutas() {
  return frutas;
}
module.exports = { getFrutas }; //exportando a função getFrutas

//exercicio sorteio 5 numeros para 5 alunos qual o maior deles?
function sortearNumeros() {
  const numeros = [];
  for (let i = 0; i < 5; i++) {
    const numeroSorteado = Math.floor(Math.random() * 100) + 1; //sorteia número entre 1 e 100
    numeros.push(numeroSorteado);
  }
  return numeros;
}
const numerosSorteados = sortearNumeros();
console.log("Números sorteados: " + numerosSorteados);
console.log("O maior número sorteado foi: " + Math.max(...numerosSorteados));

//ler numeros e verificar se são pares ou ímpares de funcoes-auxiliares
const funcoesAuxiliares = require("./funcoes-auxiliares");
for (let i = 0; i < 5; i++) {
  const numeroLido = funcoesAuxiliares.gets();
  if (numeroLido % 2 === 0) {
    funcoesAuxiliares.print(numeroLido + " é par");
  } else {
    funcoesAuxiliares.print(numeroLido + " é ímpar");
  }
}
