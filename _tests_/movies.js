// movies.js
function displayMovies(movies) {
  const moviesContainer = document.getElementById("movies-list");
  moviesContainer.innerHTML = "";

  movies.forEach((movie) => {
    moviesContainer.appendChild(movie);
  });
}

module.exports = { displayMovies };
