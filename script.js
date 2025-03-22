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
  document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search");
    const movieList = document.getElementById("movie-list");

    // Example movie data (Replace this with actual movie data fetching)
    const movies = [
        { title: "Rocky", genre: "Sports" },
        { title: "Remember the Titans", genre: "Sports" },
        { title: "Moneyball", genre: "Sports" },
        { title: "Space Jam", genre: "Sports" },
        { title: "Coach Carter", genre: "Sports" }
    ];

    function displayMovies(filteredMovies) {
        movieList.innerHTML = ""; // Clear previous movies
        filteredMovies.forEach(movie => {
            const movieDiv = document.createElement("div");
            movieDiv.classList.add("movie");
            movieDiv.textContent = movie.title;
            movieList.appendChild(movieDiv);
        });
    }

    // Initial movie display
    displayMovies(movies);

    // Search function
    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredMovies = movies.filter(movie =>
            movie.title.toLowerCase().includes(searchTerm)
        );
        displayMovies(filteredMovies);
    });
});

};

window.onload = function () {
  fetch("sports_movies.csv")
    .then((response) => response.text())
    .then((csvText) => {
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          displayMovies(results.data);
          populateMovieDropdown(results.data);
        },
      });
    })
    .catch((error) => console.error("Error loading the CSV file:", error));

  function displayMovies(moviesData) {
    const movieList = document.getElementById("movie-list");
    movieList.innerHTML = "";

    moviesData.forEach((movie) => {
      const movieDiv = document.createElement("div");
      movieDiv.classList.add("movie");

      const movieTitle = document.createElement("h3");
      movieTitle.textContent = movie.Title;

      const movieDescription = document.createElement("p");
      movieDescription.textContent = movie.Description;

      movieDiv.appendChild(movieTitle);
      movieDiv.appendChild(movieDescription);
      movieList.appendChild(movieDiv);
    });
  }

  function populateMovieDropdown(moviesData) {
    const movieSelect = document.getElementById("movie-select");
    moviesData.forEach((movie) => {
      const option = document.createElement("option");
      option.value = movie.Title;
      option.textContent = movie.Title;
      movieSelect.appendChild(option);
    });
  }
};

// review function
document.addEventListener("DOMContentLoaded", function () {
  const reviewForm = document.getElementById("review-form");
  const reviewList = document.getElementById("review-list");
  const movieSelect = document.getElementById("movie-select");

  reviewForm.addEventListener("submit", function (event) {
      event.preventDefault();
      
      const name = document.getElementById("name").value.trim();
      const reviewText = document.getElementById("review").value.trim();
      const movieTitle = movieSelect.value;

      if (name === "" || reviewText === "" || movieTitle === "") {
          alert("Please enter your name, select a movie, and write a review.");
          return;
      }

      let movieReviewSection = document.getElementById(`reviews-${movieTitle}`);
      if (!movieReviewSection) {
          movieReviewSection = document.createElement("div");
          movieReviewSection.id = `reviews-${movieTitle}`;
          movieReviewSection.innerHTML = `<h3>Reviews for ${movieTitle}</h3>`;
          reviewList.appendChild(movieReviewSection);
      }

      const reviewItem = document.createElement("div");
      reviewItem.classList.add("review-item");
      reviewItem.innerHTML = `<strong>${name}:</strong> <p>${reviewText}</p>`;

      movieReviewSection.appendChild(reviewItem);
      reviewForm.reset();
  });
});

