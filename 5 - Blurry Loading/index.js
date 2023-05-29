const corpoSite = document.querySelector("body");
const carregamento = document.querySelector(".loading");

let [porcentagem, opacity, decrement] = [parseInt(carregamento.innerText), 1.09, 0.01];

for (let i = porcentagem; i <= 100; i++) {
  setTimeout(() => {
    opacity -= decrement;
    porcentagem >= 50 ? carregamento.style.opacity = `${opacity}`: null;
    porcentagem >= 100 ? carregamento.style.display = 'none' : null
    corpoSite.style.backdropFilter = `blur(${100 - i}px)`;
    carregamento.innerText = `${porcentagem++}%`;
  }, 30 * i);
}





