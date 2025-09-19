/* let area = document.getElementById('area')

function entrar() {
     let nome = prompt('Digite seu nome')
         if (nome === '' || nome === null){
             alert('Ops, algo deu errado, preenhca o prompt.')
             area.innerHTML = 'Favor preencher o prompt!'
         }else{
             area.innerHTML = "Bem vindo " + nome + " "

             let btnSair = document.createElement('button')
             btnSair.innerText = 'Sair da Conta'
             btnSair.onclick = sair

             area.appendChild(btnSair)
         }    
 }
 function sair() {
     alert('Até mais!')
     area.innerHTML = 'Você saiu da área'
 }

 function mediaAluno(nota1, nota2){
     let media = (nota1 + nota2) / 2

    if (media >= 7){
     console.log('Aprovado com média ' + media)
    } else if (media <7) {
        console.log('Reprovado com média ' + media)
     } 
 }
     mediaAluno(3, 9)


 function aluno(nome, curso){
    var mensagem = "Seja bem vindo " + nome + " ao curso de " + curso
        console.log(mensagem)
    var times = ['Palmeiras', 'Corinthians', 'Santos']

 times.push('Sao Paulo', 'Flamengo', 'Vila No
 console.log(times)*/


/*var x = 0

while (x < 10){
    document.writeln('O valor de x é ' + x + '<br>')
    x++    
}*/


/*let valor = 15
for (var x = 0; x <= valor; x++){
    document.writeln('O valor de x é ' + x + '<br>')
}*/

let peso;
let altura;
let imc;
let resultado;

function calcular(event) {
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
}
