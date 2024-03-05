const receber = require('prompt-sync')({sigint:true});
let listaCompras = [];
let frutas = [];
let laticinios = [];
let congelados = [];
let doces= [];
let produtosCasa = [];
let higiene = [];

let adicionarMais = "sim";  // valor inicial como "sim", porque a primeira vez sempre vai entrar no while
while(adicionarMais != "nao"){
    if(frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0 && produtosCasa.length === 0 && higiene.length === 0){
        adicionarMais = receber("Você deseja adicionar um produto na lista de compras? Responda 'sim' ou 'não'. ");
    } else {
        adicionarMais = receber("Você deseja adicionar uma produto na lista de compras? Responda 'sim', 'não' ou 'remover'. ");
    }
	
    while (adicionarMais != "sim" && adicionarMais != "nao" && adicionarMais != "remover") {  //enquanto o texto lido for diferente de "sim", "não" e "remover", exibir que não foi reconhecido e perguntar novamente
        console.log(`Operação não reconhecida!`);
        adicionarMais = receber("Você deseja adicionar um produto na lista de compras? Responda 'sim' ou 'não'. ");
    }
	
    if (adicionarMais === "nao"){  //se o texto lido for "não", sair do while
	break;
    }

    if(adicionarMais === "sim")
    {
        let produto = receber("Qual? ");
        let grupo = receber("Em qual grupo o produto se encaixa? Digite o número respectivo ao grupo: \n1 - frutas\n2 - laticinios\n3 - congelados\n4 - doces\n5 - produtos de casa\n6 - higiene pessoal\n");

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
    } else if(adicionarMais === "remover"){
        if(frutas.length === 0 && laticinios.length === 0 && doces.length === 0 && congelados.length === 0){  //se a lista estiver vazia (tratamento de bug, caso a pessoa digite "remover" mesmo quando forem exibidas apenas as opções "sim" e "não"
            console.log(`A lista está vazia!`);
        } else {  //se a lista não estiver vazia
            console.log(`Lista de Compras:\n Frutas: ${frutas}\n Laticínios: ${laticinios}\n Congelados: ${congelados}\n Doces: ${doces}\n Produtos de casa: ${produtosCasa}\n Higiene pessoal: ${higiene}`);
            remover = receber("Qual produto deseja remover? ");
            if (frutas.includes(remover))
            {
                frutas.splice(frutas.indexOf(remover), 1);
                console.log(`O item ${remover} foi removido com sucesso!`);
            } else if (laticinios.includes(remover))
            {
                laticinios.splice(laticinios.indexOf(remover), 1);
                console.log(`O item ${remover} foi removido com sucesso!`);
            } else if (congelados.includes(remover))
            {
                congelados.splice(congelados.indexOf(remover), 1);
                console.log(`O item ${remover} foi removido com sucesso!`);
            } else if (doces.includes(remover))
            {
                doces.splice(doces.indexOf(remover), 1);
                console.log(`O item ${remover} foi removido com sucesso!`);
            } else if (produtosCasa.includes(remover))
            {
                produtosCasa.splice(produtosCasa.indexOf(remover), 1);
                console.log(`O item ${remover} foi removido com sucesso!`)
            } else if (higiene.includes(remover))
            {
                higiene.splice(higiene.indexOf(remover), 1);
                console.log(`O item ${remover} foi removido com sucesso!`)
            }
        }
    }
}  

console.log(`Lista de Compras:\n Frutas: ${frutas}\n Laticínios: ${laticinios}\n Congelados: ${congelados}\n Doces: ${doces}\n Produtos de casa: ${produtosCasa}\n Higiene pessoal: ${higiene}`);