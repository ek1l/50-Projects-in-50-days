const containerWidth = document.querySelector(".container-menu");
const ulMenuLi = document.querySelectorAll('li')
const buttonCheck = document.querySelector("#check");
const divButton = document.querySelector(".botao")
const ulEl = document.querySelector('ul')

function decrementarWidth(){
    containerWidth.classList.toggle('active')

    ulMenuLi.forEach((e) => {
        e.classList.toggle('active')
    })

    divButton.classList.toggle('active')

    ulEl.classList.toggle('active')

}

buttonCheck.addEventListener("click", decrementarWidth);
