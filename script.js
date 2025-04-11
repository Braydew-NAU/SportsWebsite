window.onload = function () {
  const moviesList = document.querySelectorAll(".movie");

  // Helper function to display movies
  function displayMovies(movies) {
    const moviesContainer = document.getElementById("movies-list");
    moviesContainer.innerHTML = "";
    movies.forEach((movie) => {
      moviesContainer.appendChild(movie);
    });
  }

  // Search functionality
  document.getElementById("search")?.addEventListener("keyup", function () {
    const filter = this.value.toLowerCase();
    moviesList.forEach((movie) => {
      const title = movie.querySelector("h3").innerText.toLowerCase();
      movie.style.display = title.includes(filter) ? "block" : "none";
    });
  });

  // Sort movies by year
  document.getElementById("sort-year")?.addEventListener("click", () => {
    const sortedMovies = Array.from(moviesList).sort((a, b) => {
      return parseInt(a.dataset.year) - parseInt(b.dataset.year);
    });
    displayMovies(sortedMovies);
  });

  // Sort movies by rating
  document.getElementById("sort-rating")?.addEventListener("click", () => {
    const sortedMovies = Array.from(moviesList).sort((a, b) => {
      return parseFloat(b.dataset.rating) - parseFloat(a.dataset.rating);
    });
    displayMovies(sortedMovies);
  });

  //Sort movies by sport
  document.getElementById("sort-sport").addEventListener("click", function () {
    const moviesContainer = document.getElementById("movies-list");
    const movies = Array.from(moviesContainer.getElementsByClassName("movie"));
    
    // Sort movies by the sport type (alphabetically)
    movies.sort(function(a, b) {
      const sportA = a.getAttribute("data-sport").toLowerCase();
      const sportB = b.getAttribute("data-sport").toLowerCase();
      
      if (sportA < sportB) return -1;
      if (sportA > sportB) return 1;
      return 0;
    });
    
    // Append the sorted movies back to the container
    movies.forEach(movie => moviesContainer.appendChild(movie));
  });

  // Review form functionality
  const reviewForms = document.querySelectorAll(".review-form");
  reviewForms.forEach((form) => {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the page from refreshing
      const name = this.querySelector(".review-name").value.trim();
      const reviewText = this.querySelector(".review-text").value.trim();
      const movieId = this.dataset.movie; // Ensure the form has a data-movie attribute with the movie's ID

      if (!name || !reviewText) {
        alert("Please enter your name and write a review.");
        return;
      }

      // Get or create the review section for this movie
      let movieReviewSection = document.getElementById(`reviews-${movieId}`);
      if (!movieReviewSection) {
        movieReviewSection = document.createElement("div");
        movieReviewSection.id = `reviews-${movieId}`;
        movieReviewSection.innerHTML = `<h3>Reviews for ${movieId}</h3>`;
        document
          .querySelector(`#reviews-${movieId}`)
          .parentNode.appendChild(movieReviewSection);
      }

      // Create and append new review item
      const reviewItem = document.createElement("div");
      reviewItem.classList.add("review-item");
      reviewItem.innerHTML = `<strong>${name}:</strong> <p>${reviewText}</p>`;
      movieReviewSection.appendChild(reviewItem);

      // Save the review to local storage
      const reviews = JSON.parse(localStorage.getItem(movieId)) || [];
      reviews.push({ name, reviewText });
      localStorage.setItem(movieId, JSON.stringify(reviews));

      // Reset the form after submission
      this.reset();
    });
  });

  // Load reviews from local storage when the page loads
  moviesList.forEach((movie) => {
    const movieId = movie.dataset.id; // Ensure each movie has a unique 'data-id' attribute
    const reviews = JSON.parse(localStorage.getItem(movieId)) || [];
    const reviewSection = movie.querySelector(".reviews-list");
    reviews.forEach((review) => {
      const reviewItem = document.createElement("div");
      reviewItem.classList.add("review-item");
      reviewItem.innerHTML = `<strong>${review.name}:</strong> <p>${review.reviewText}</p>`;
      reviewSection.appendChild(reviewItem);
    });
  });

  // Game cards handling (unchanged)
  const gameCards = document.querySelectorAll(".game-card");
  gameCards.forEach((card) => {
    const sport = card.getAttribute("data-sport");
    const matchup = card.getAttribute("data-matchup");
    const data = card.getAttribute("data-date");
    const stream = card.getAttribute("data-stream");

    card.classList.add("card");
    card.innerHTML = `
      <div class="card-header">🏟️ ${sport}</div>
      <div class="card-body">
        <p><strong>Matchup:</strong> ${matchup}</p>
        <p><strong>Date:</strong> ${data}</p>
        <p><strong>Streaming:</strong> ${stream}</p>
      </div>
    `;
  });
};
