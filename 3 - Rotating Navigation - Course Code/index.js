const openButton = document.querySelector('#open')
const closeButton = document.querySelector('#close')
const container = document.querySelector('.container')

openButton.addEventListener('click', () => {
    container.classList.add('show-nav')
    openButton.style.display = 'none'
    closeButton.style.display = 'block'
})


closeButton.addEventListener('click',  () => {
    container.classList.remove('show-nav')
    openButton.style.display = 'block'
    closeButton.style.display = 'none'
})






