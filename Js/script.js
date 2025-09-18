let area = document.getElementById('area')

function entrar() {
    let nome = prompt('Digite seu nome')
        if (nome === '' || nome === null){
            alert('Ops, algo deu errado, preenhca o prompt.')
            //area.innerHTML = 'Favor preencher o prompt!'
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
    mediaAluno(8, 9)