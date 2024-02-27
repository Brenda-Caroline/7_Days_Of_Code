const receber = prompt('prompt-sync')({sigint:true});

let area = prompt("Você quer seguir para a área de Front-End ou seguir para a área de Back-End? ");

let linguagem = "";
if (area == "Front-End") 
{
    let linguagem = prompt("Você quer aprender React ou Vue? ");
} 
else if (area == "Back-End") 
{
    let linguagem = prompt("Você quer aprender C# ou Java? ");
}
else 
{
    console.log("Você não inseriu uma área válida");
}