// Importação do Prompt
const receber = require('prompt-sync')({sigint:true});

let nome = receber("Qual o seu nome? ");
let idade = receber("Quantos anos você tem? ")
let linguagem = receber("Qual linguagem de programação você está estudando? ")

//Duas formas de concatenar os valores das variáveis com a string.
console.log("Olá " +nome+ ", você tem " +idade+ " anos e já está aprendendo " +linguagem+ "!")
console.log(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`)
