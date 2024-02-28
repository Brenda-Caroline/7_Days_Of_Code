const receber = require('prompt-sync')({sigint:true});
let listaCompras = [];
let frutas = [];
let laticinios = [];
let congelados = [];
let doces= [];
let produtosCasa = [];
let higiene = [];

const adicionar = receber("Deseja adicionar um produto na lista de compras? Responda com 'sim ou não' ");
if (adicionar == "sim")
{
    let comida = receber("Qual? ");
    let grupo = receber("Em qual grupo o produto se encaixa? Digite o número respectivo ao grupo: \n1 - frutas\n2 -laticinios\n3 - congelados\n4 - doces\n5 - produtos de casa\n6 - higiene pessoal ");

    

}