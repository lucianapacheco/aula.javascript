//AULA 5

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"; //innerHATML vai injetar um texto e getElementById vai buscar o id
//    alert("Obrigada por clicar")
}

function redirecionar() {
    //window.open("https://www.google.com/"); //abre em outra aba
    window.location.href = "https://www.google.com/"; //abre na mesma janela
    
}

function trocar(elemento){
   elemento.innerHTML = "Obrigado por passar o mouse"
    // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
   elemento.innerHTML = "Passe o mouse aqui"
    // document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function load(){  //quando caregar o body, vai chamar esta função
    alert("pagina carregada");

}

function funcaoChange(elemento){
console.log(elemento.value)  //value para carregar o valor que tem aquele elemento
}



//AULA 4

/*function validaIdade(idade){
    var validar;

    if (idade >= 18){
        validar = true
    } else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));
*/  

/*function soma(n1, n2){
   return n1 + n2;
}

alert(soma(5, 10));
*/

/*function setReplace (frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

alert(setReplace("vai japão", "japão", "brasil"));

*/




//AULA 3
//date

/*
var d = new Date ();
//alert(d)
alert(d.getMonth()+1); //add mais 1 para gerar o mes certo, pq começa pelo 0
alert(d.getMinutes());
alert(d.getDay());
alert(d.getHours());  
*/


//laços de repetição
/*
var count;
for(count=0; count <=5; count++){
    alert(count)
}
*/

/* 
var count = 0;
while (count <=5) {
    console.log(count);
     alert(count)
    count = count + 1; //ou count ++
};
*/


/*

//if else - se, se não (condicionais)

var idade = prompt("Qual sua idade?"); 
//var idade = 18;

if (idade >= 18){
    alert("maior de idade")

} else {
    alert("menor de idade")
}
*/



//AULA2
/*
var frutas = [{nome: "maça", cor:"vermelha"}, {nome: "uva", cor: "roxa"}]
console.log(frutas);
alert(frutas[1].nome)
*/

/*
var fruta = {nome: "maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor)
*/


//var lista = ["maça", "pera", "laranja"];

//lista.push("uva");
//lista.pop("laranja", "uva");
//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString()[0])
//console.log(lista.join(" - "));
//console.log(lista[0])

//alert(lista[1]);

//AULA1
//var nome = "Luciana"
//var idade = 24
//var idade2 = 10
//var frase = "Japão é o melhor time do mundo"

// alert(nome + " tem " + idade + " anos") 
//alert(idade + idade2)
//console.log(nome)
//console.log(idade + idade2)
//console.log(frase.replace("Japão", "Brasil"))
//console.log(frase.toLocaleUpperCase())
//console.log(frase.toLowerCase())
//alert(frase.replace("Japão", "Brasil"))
