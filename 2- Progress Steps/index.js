const buttonNext = document.querySelector("#next");
const buttonBack = document.querySelector("#back");
const progress = document.querySelectorAll(".progress");
const estiloNumber = document.querySelectorAll(".estilo");

buttonBack.disabled = true;

function verificarBackNext() {
  for (let i = 0; i < progress.length; i++) {
    if (!progress[i].classList.contains("active")) {
      buttonBack.disabled = true;
    } else {
      buttonBack.disabled = false;
    }
    break;
  }
}

function next() {
  for (let i = 0; i < progress.length; i++) {
    if (!progress[i].classList.contains("active")) {
      progress[i].classList.add("active");
      for (let j = 0; j < estiloNumber.length; j++) {
        if (progress[i].classList.contains("active")) {
          estiloNumber[i].classList.add("active");
        } else if (estiloNumber[i] == progress[i]) {
          estiloNumber[i].classList.add("active");
        }
      }
      break;
    }
  }
  verificarBackNext();
}

function back() {
  for (let i = progress.length - 1; i >= 0; i--) {
    if (progress[i].classList.contains("active")) {
      progress[i].classList.remove("active");
      for (let j = 0; j < estiloNumber.length; j++) {
        if (!progress[i].classList.contains("active")) {
          estiloNumber[i].classList.remove("active");
        }
      }
      break;
    }
  }

  verificarBackNext();
}


buttonNext.addEventListener("click", next);
buttonBack.addEventListener("click", back);
