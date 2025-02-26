window.onload = function () {
  // Fetch and parse the CSV file
  fetch("sports_movies.csv")
    .then((response) => response.text())
    .then((csvText) => {
      // Use PapaParse to parse the CSV data
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          displayMovies(results.data); // Call function to display movies
        },
      });
    })
    .catch((error) => console.error("Error loading the CSV file:", error));

  // Display the movies on the webpage
  function displayMovies(moviesData) {
    const movieList = document.getElementById("movie-list");
    movieList.innerHTML = ""; // Clear previous data

    // Loop through the movie data and create HTML for each movie
    moviesData.forEach((movie) => {
      const movieDiv = document.createElement("div");
      movieDiv.classList.add("movie");

      const movieTitle = document.createElement("h3");
      movieTitle.textContent = movie.Title; // Movie title

      const movieDescription = document.createElement("p");
      movieDescription.textContent = movie.Description; // Movie description

      movieDiv.appendChild(movieTitle);
      movieDiv.appendChild(movieDescription);

      movieList.appendChild(movieDiv);
    });
  }

  // Search functionality
  document.getElementById("search").addEventListener("keyup", function () {
    let filter = this.value.toLowerCase();
    let movies = document.querySelectorAll(".movie");

    movies.forEach((movie) => {
      let title = movie.querySelector("h3").innerText.toLowerCase();
      if (title.includes(filter)) {
        movie.style.display = "block";
      } else {
        movie.style.display = "none";
      }
    });
  });
};
