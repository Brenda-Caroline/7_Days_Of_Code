// Criando uma calculadora

const receber = require('prompt-sync')({sigint:true});

function soma (numero1, numero2)
{
    return Number(numero1) + Number(numero2);
}

function subtracao (numero1, numero2)
{
    return Number(numero1) - Number(numero2);
}

function multiplicacao (numero1, numero2)
{
    return Number(numero1) * Number(numero2);
}

function divisao (numero1, numero2)
{
    return Number(numero1) / Number(numero2);
}

let numero1;
let numero2;

do
{
    console.log("1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\n5 - Sair");
    operacao = receber("Digite o número da operação que deseja realizar: ");

    if(operacao === "5")
    {
        console.log("Até a próxima");
        break;
    } else
    {
        numero1 = receber("Digite o primeiro número: ");
        numero2 = receber("Digite o segundo número: ");

        switch(operacao)
        {
            case '1':
                result = soma(numero1, numero2);
                console.log(result);
                break;
            case '2':
                result = subtracao(numero1, numero2);
                console.log(result);
                break;
            case '3':
                result = multiplicacao(numero1, numero2);
                console.log(result);
                break;
            case '4':
                result = divisao(numero1, numero2);
                console.log(result);
                break;
            default:
                console.log("Operação não encontrada");
        }
    }
    
    
} while (operacao !== "5")