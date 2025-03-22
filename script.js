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
    const moviesList = document.getElementById("movies-list"); // Fixed ID
    moviesList.innerHTML = ""; // Clear previous data

    // Loop through the movie data and create HTML for each movie
    moviesData.forEach((movie) => {
      const movieDiv = document.createElement("div");
      movieDiv.classList.add("movie");

      // Movie Title
      const movieTitle = document.createElement("h3");
      movieTitle.textContent = movie.Title; 

      // Movie Year
      const movieYear = document.createElement("p");
      movieYear.textContent = `Year: ${movie.Year}`;

      // Movie Rating
      const movieRating = document.createElement("p");
      movieRating.textContent = `Rating: ${movie.Rating}`;

      // Movie Description
      const movieDescription = document.createElement("p");
      movieDescription.textContent = movie.Description; 

      // Add optional movie image if available in CSV
      if (movie.ImageURL) {
        const movieImage = document.createElement("img");
        movieImage.src = movie.ImageURL;
        movieImage.alt = movie.Title;
        movieImage.classList.add("movie-image");
        movieDiv.appendChild(movieImage);
      }

      // Append all elements
      movieDiv.appendChild(movieTitle);
      movieDiv.appendChild(movieYear);
      movieDiv.appendChild(movieRating);
      movieDiv.appendChild(movieDescription);

      moviesList.appendChild(movieDiv);
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
