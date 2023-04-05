document.addEventListener( "click" , showcolor );

document.getElementById("botao").addEventListener("click" , exibenome );

document.getElementById( "btn-soma" ).addEventListener( "click" , soma );

document.getElementById( "btn-divisao" ).addEventListener( "click" , divisao );

function showcolor ()
{
    document.body.style.backgroundColor = "red";
}

function exibenome()
{
    let usuario = document.getElementById( "nome" ).value;
    document.getElementById( "mensagem" ).innerHTML = "Meu nome é: " + usuario;
    document.getElementById( "nome" ).value = "";
}

function soma ()
{
    let num1 = document.getElementById( "num1" ).value;
    let num2 = document.getElementById( "num2" ).value;
    document.getElementById("resultado1").innerHTML = parseFloat(num1) + parseFloat(num2);
}

function divisao ()
{
    let num1 = document.getElementById( "num3" ).value;
    let num2 = document.getElementById( "num4" ).value;
    document.getElementById("resultado2").innerHTML = parseFloat(num3) + parseFloat(num4);
}