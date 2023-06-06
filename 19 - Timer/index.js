
let getHours = document.querySelector('.timer-real')
let getDate = document.querySelector('.date-real')
let getDarkModeButton = document.querySelector('.darkMode')
let body = document.body
let relogioContainer = document.querySelector('.relogio')

getDarkModeButton.addEventListener('click', () => {
    body.classList.toggle('active')
    getDarkModeButton.classList.toggle('active')
    relogioContainer.classList.toggle('active')
})




function atualizarHoras() {
    let dataAtual = new Date()
    let horas = dataAtual.getHours();
    let minutos = dataAtual.getMinutes();
    getHours.innerText = `${horas}:${minutos}`
}



function atualizarData() {
    let dataAtual = new Date()
    let dia = dataAtual.getDate();
    let mes = (dataAtual.getMonth() + 1);
    let ano = dataAtual.getFullYear();
    getDate.innerText = `Hoje é dia ${dia}/${mes}/${ano}.`
}

atualizarHoras()
atualizarData()

setInterval(() => {
    atualizarHoras() 
    atualizarData()
},40000)