const playstation = document.querySelector(".ps4");
const xbox = document.querySelector(".xbox");

playstation.addEventListener("mouseover", () => {
  xbox.classList.add("active");
  xbox.style.filter = `blur(1px)`;
});

playstation.addEventListener("mouseout", () => {
  xbox.classList.remove("active");
  xbox.style.filter = `blur(0px)`;
});

xbox.addEventListener("mouseover", () => {
  playstation.classList.add("active");
  playstation.style.filter = `blur(1px)`;
});

xbox.addEventListener("mouseout", () => {
  playstation.classList.remove("active");
  playstation.style.filter = `blur(0px)`;
});
