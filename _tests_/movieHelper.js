// movieHelpers.js
function displayMovies(movies) {
    const moviesContainer = document.getElementById("movies-list");
    moviesContainer.innerHTML = "";
    movies.forEach(m => moviesContainer.appendChild(m));
  }
  module.exports = { displayMovies };