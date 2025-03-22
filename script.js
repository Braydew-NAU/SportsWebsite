window.onload = function () {
  const moviesList = document.querySelectorAll(".movie");

  // Function to display movies (optional if you want to refresh the list dynamically)
  function displayMovies(movies) {
    const moviesContainer = document.getElementById("movies-list");
    moviesContainer.innerHTML = ""; // Clear old list

    movies.forEach((movie) => {
      moviesContainer.appendChild(movie);
    });
  }

  // Search functionality
  document.getElementById("search").addEventListener("keyup", function () {
    const filter = this.value.toLowerCase();

    moviesList.forEach((movie) => {
      const title = movie.querySelector("h3").innerText.toLowerCase();
      movie.style.display = title.includes(filter) ? "block" : "none";
    });
  });

  // Sorting functionality by Year
  document.getElementById("sort-year")?.addEventListener("click", () => {
    const sortedMovies = Array.from(moviesList).sort((a, b) => {
      const yearA = parseInt(a.querySelector(".year").textContent);
      const yearB = parseInt(b.querySelector(".year").textContent);
      return yearA - yearB; // Ascending order by year
    });
    displayMovies(sortedMovies);
  });

  // Sorting functionality by Rating
  document.getElementById("sort-rating")?.addEventListener("click", () => {
    const sortedMovies = Array.from(moviesList).sort((a, b) => {
      const ratingA = parseFloat(a.querySelector(".rating").textContent);
      const ratingB = parseFloat(b.querySelector(".rating").textContent);
      return ratingB - ratingA; // Descending order by rating
    });
    displayMovies(sortedMovies);
  });

  // Movie Select Population for Reviews (ensure this runs after the movie list is displayed)
  const movieSelect = document.getElementById("movie-select");
  moviesList.forEach((movie) => {
    const movieTitle = movie.querySelector("h3").textContent;
    const option = document.createElement("option");
    option.value = movieTitle;
    option.textContent = movieTitle;
    movieSelect.appendChild(option);
  });

  // Review submission functionality
  const reviewForm = document.getElementById("review-form");
  const reviewList = document.getElementById("review-list");

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
};
