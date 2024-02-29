const receber = require('prompt-sync')({sigint:true});
let listaCompras = [];
let frutas = [];
let laticinios = [];
let congelados = [];
let doces= [];
let produtosCasa = [];
let higiene = [];

let adicionar = receber("Deseja adicionar um produto na lista de compras? Responda com 'sim ou não' ");
while (adicionar == "sim")
{
    let produto = receber("Qual? ");
    let grupo = receber("Em qual grupo o produto se encaixa? Digite o número respectivo ao grupo: \n1 - frutas\n2 - laticinios\n3 - congelados\n4 - doces\n5 - produtos de casa\n6 - higiene pessoal\n ");

    switch (grupo)
    {
        case '1':
            frutas.push(produto);
            break;
        case '2':
            laticinios.push(produto);
            break;
        case '3':
            congelados.push(produto);
            break;
        case '4':
            doces.push(produto);
            break;
        case '5': 
            produtosCasa.push(produto);
            break;
        case '6':
            higiene.push(produto);
            break;
    }
    adicionar = receber("Deseja adicionar um produto na lista de compras? Responda com 'sim ou nao' ");
}

if (adicionar == "nao")
{
    console.log(`Lista de Compras:\n Frutas: ${frutas}\n Laticínios: ${laticinios}\n Congelados: ${congelados}\n Doces: ${doces}\n Produtos de casa: ${produtosCasa}\n Higiene pessoal: ${higiene}`);
}