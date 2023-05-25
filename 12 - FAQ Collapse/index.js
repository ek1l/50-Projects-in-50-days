const questions = document.querySelectorAll(".questions");
const aparecerCard = document.querySelectorAll(".aparecer");
const fecharButton = document.querySelectorAll(".fechar");

questions.forEach((question, index) => {
  question.addEventListener("click", () => {
    aparecerCard.forEach((card, cardIndex) => {
      card.classList.remove("active");
      fecharButton[cardIndex].classList.remove("active");
    });

    aparecerCard[index].classList.add("active");
    fecharButton[index].classList.add("active");
  });
});

fecharButton.forEach((button, index) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    aparecerCard[index].classList.remove("active");
    fecharButton[index].classList.remove("active");
  });
});
