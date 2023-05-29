const buttonSearch = document.querySelector('.opensearch')
const inputSearch = document.querySelector('.pesquisar')



buttonSearch.addEventListener('click', () => {
    inputSearch.classList.toggle('active')
    buttonSearch.classList.toggle('active')
})