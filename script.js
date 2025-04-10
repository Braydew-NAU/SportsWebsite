window.onload = function () {
  const moviesList = document.querySelectorAll(".movie");

  function displayMovies(movies) {
    const moviesContainer = document.getElementById("movies-list");
    moviesContainer.innerHTML = "";
    movies.forEach((movie) => {
      moviesContainer.appendChild(movie);
    });
  }

  document.getElementById("search")?.addEventListener("keyup", function () {
    const filter = this.value.toLowerCase();
    moviesList.forEach((movie) => {
      const title = movie.querySelector("h3").innerText.toLowerCase();
      movie.style.display = title.includes(filter) ? "block" : "none";
    });
  });

  document.getElementById("sort-year")?.addEventListener("click", () => {
    const sortedMovies = Array.from(moviesList).sort((a, b) => {
      return parseInt(a.dataset.year) - parseInt(b.dataset.year);
    });
    displayMovies(sortedMovies);
  });

  document.getElementById("sort-rating")?.addEventListener("click", () => {
    const sortedMovies = Array.from(moviesList).sort((a, b) => {
      return parseFloat(b.dataset.rating) - parseFloat(a.dataset.rating);
    });
    displayMovies(sortedMovies);
  });

  const movieSelect = document.getElementById("movie-select");
  moviesList.forEach((movie) => {
    const movieTitle = movie.querySelector("h3").textContent;
    const option = document.createElement("option");
    option.value = movieTitle;
    option.textContent = movieTitle;
    movieSelect.appendChild(option);
  });

  const reviewForm = document.getElementById("review-form");
  const reviewList = document.getElementById("review-list");

  reviewForm?.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const reviewText = document.getElementById("review").value.trim();
    const movieTitle = movieSelect.value;

    if (!name || !reviewText || !movieTitle) {
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
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Streaming:</strong> ${stream}</p>
      </div>
    `;
  });
};
