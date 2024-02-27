const receber = require('prompt-sync')({sigint:true});

const numero = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let acerto = false


for (let tentativas = 3; tentativas > 0; tentativas --)
{
    let chute = receber("Chute um número de 1 a 10: ");
    if(chute == numero)
    {
        console.log("Parabéns, você acertou!");
        acerto = true;
        break;
    }
    
    console.log(`Que pena tente novamente. Você tem ${tentativas-1} tentativas`)
}

if(acerto == false)
{
    console.log(`Acabaram suas tentativas, o número correto é ${numero}`);
}