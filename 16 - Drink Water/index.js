const mlDeAgua = document.querySelectorAll(".ml");
const contador = document.querySelector(".contador");
let valorRecebido = 0;

mlDeAgua.forEach((e) => {
  const mLqntd = 250;
  e.textContent = mLqntd;

  e.addEventListener("click", () => {
    const isActive = e.classList.contains("active");
    valorRecebido += isActive ? -mLqntd : mLqntd;
    contador.textContent = `${valorRecebido}ML`;
    e.classList.toggle("active", !isActive);

    if (valorRecebido >= 2000) {
      alert(`Parabéns, você bebeu bastante água hoje. 🙂💧 `);
    }
  });
});
