const text = document.querySelector("#box-text");
const container = document.querySelector('.filtros');


text.addEventListener('input', () => {
    let atualizar = text.value;
    filters = atualizar.split(',');

    container.innerHTML = ''; // Limpa o conteúdo anterior
    
    filters.forEach(filter => {
        const criarElementoSpan = document.createElement('span');
        criarElementoSpan.textContent = filter;
        container.appendChild(criarElementoSpan);
    });

    console.log(filtros);
});
