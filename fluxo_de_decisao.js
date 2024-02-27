const receber = require('prompt-sync')({sigint:true});

const area = receber("Você quer seguir para a área de Front-End ou seguir para a área de Back-End? ");

let linguagem = "";
if (area == "Front-End") 
{
    let linguagem = receber("Você quer aprender React ou Vue? ");
} 
else if (area == "Back-End") 
{
    let linguagem = receber("Você quer aprender C# ou Java? ");
}
else 
{
    console.log("Você não inseriu uma área válida");
}

const especialidadeOuFullstack = receber("Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack ");
if (especialidadeOuFullstack == 1){
    console.log(`Continue se especializando em ${linguagem} para dominar a área de ${area}!`);
}
else if (especialidadeOuFullstack == 2){
    console.log(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack!`);
}
else {
    console.log("Você não inseriu um valor válido!");
}

let msg = receber("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo. ");
while (msg === "ok"){
    let novaTecnologia = receber("Qual? ");
    console.log(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
    msg = receber("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo. ");
}