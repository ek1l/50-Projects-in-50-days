let button = document.querySelector('#abrirmenu')

let aparecerMenu = document.querySelector('.sumir')

button.addEventListener('click', () => {
aparecerMenu.classList.toggle('active')
if(button.innerText == 'X') {
    button.innerText = '=' 
}else if(button.innerText == '=') {
    button.innerText = 'X'
}
})