
var area = document.getElementById('area')

function entrar(){
    var nome = prompt ("Digite seu nome")

    if(nome === '' || nome === null){
        alert("Ops, algo deu errado")
        area.innerHTML = "Clique no botão para acessar..."
    }else {
        area.innerHTML = "Bem vindo" + ' ' + nome
    }
    
    
    
}