
var area = document.getElementById('area')

function entrar(){
    var nome = prompt ("Digite seu nome")

    if(nome === '' || nome === null){
        area.innerHTML = "Clique no botão para acessar..."
    }
    
    area.innerHTML = "Bem vindo" + ' ' + nome
    
}