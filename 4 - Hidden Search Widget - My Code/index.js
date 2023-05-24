const buttonSearch = document.querySelector('.opensearch')
const inputSearch = document.querySelector('.pesquisar')



buttonSearch.addEventListener('click', () => {
    inputSearch.classList.add('active')
    buttonSearch.classList.add('active')
})