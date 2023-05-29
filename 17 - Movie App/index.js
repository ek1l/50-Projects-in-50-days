const filmesContainer = document.querySelector("#filmes-container");
const searchButton = document.querySelector("#searchbutton");
const apiKey = "53f2c136";
let searchTerm = "";

searchButton.addEventListener("input", function() {
  searchTerm = searchButton.value.toLowerCase().trim();
  getMovies();
});

async function getMovies() {
  try {
    const linkAPI = `http://www.omdbapi.com/?s=${searchTerm}&apikey=${apiKey}`;
    const response = await fetch(linkAPI);
    const data = await response.json();
    console.log(data)
    if (data.Response === "True") {
      const movies = data.Search;
      renderMovies(movies);
    } else {
      console.log(data.Error);
    }
  } catch (error) {
    console.log(error);
  }
}

function renderMovies(movies) {
  filmesContainer.innerHTML = "";
  
  movies.forEach((movie) => {
    const { Title, Poster, Year } = movie;
    
    const movieCard = document.createElement("div");
    movieCard.classList.add("card");

    const imgFilme = document.createElement("div");
    imgFilme.classList.add("img-filme");

    const img = document.createElement("img");
    img.src = Poster;
    img.alt = "";

    const titulo = document.createElement("div");
    titulo.classList.add("titulo");

    const h1 = document.createElement("h1");
    h1.textContent = Title;


    const ano = document.createElement("span");
    ano.classList.add("ano");
    ano.textContent = Year;

    imgFilme.appendChild(img);
    titulo.appendChild(h1);
    titulo.appendChild(ano);
    movieCard.appendChild(imgFilme);
    movieCard.appendChild(titulo);
    filmesContainer.appendChild(movieCard);
  });
}
