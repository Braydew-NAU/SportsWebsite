window.onload = function () {
  const movies = Array.from(document.querySelectorAll(".movie"));
  const moviesContainer = document.getElementById("movies-list");

  // Helper: re-render a list of movie elements
  // Function to display movies
  function displayMovies(movies) {
    const moviesContainer = document.getElementById("movies-list");
    moviesContainer.innerHTML = "";
    movies.forEach(m => moviesContainer.appendChild(m));
  }

  // --- Search functionality ---
  document.getElementById("search")?.addEventListener("keyup", function () {
    const q = this.value.toLowerCase();
    movies.forEach(m => {
      const title = m.querySelector("h3").innerText.toLowerCase();
      m.style.display = title.includes(q) ? "block" : "none";
    });
  });

  // Sort movies by year
  document.getElementById("sort-year")?.addEventListener("click", () => {
    const sortedMovies = movies.sort((a, b) => {
      return parseInt(a.dataset.year) - parseInt(b.dataset.year);
    });
    displayMovies(sortedMovies);
  });

  // Sort movies by rating
  document.getElementById("sort-rating")?.addEventListener("click", () => {
    const sortedMovies = movies.sort((a, b) => {
      return parseFloat(b.dataset.rating) - parseFloat(a.dataset.rating);
    });
    displayMovies(sortedMovies);
  });

  // Sort movies by sport
  document.getElementById("sort-sport")?.addEventListener("click", () => {
    const sortedMovies = movies.sort((a, b) => {
      return a.dataset.sport.localeCompare(b.dataset.sport);
    });
    displayMovies(sortedMovies);
  });

  // --- Recommendation by Favorite Sport ---
  const favSelect = document.getElementById("favorite-sport");
  document.getElementById("recommendation-btn")?.addEventListener("click", () => {
    const chosen = favSelect.value.toLowerCase();
    let any = false;

    // clear previous highlights
    movies.forEach(m => {
      m.style.border = "";
      m.style.boxShadow = "";
    });

    // highlight matches
    for (const m of movies) {
      if (m.dataset.sport.toLowerCase() === chosen) {
        m.style.border = "3px solid gold";
        m.style.boxShadow = "0 0 15px gold";
        if (!any) {
          m.scrollIntoView({ behavior: "smooth", block: "center" });
          any = true;
        }
      }
    }

    if (!any) {
      alert(`No ${chosen.charAt(0).toUpperCase() + chosen.slice(1)} movies found.`);
    }
  });

  // --- Reviews (localStorage) ---
  movies.forEach(m => {
    const id = m.dataset.id;
    const reviewList = m.querySelector(".reviews-list");
    // load existing reviews from localStorage
    const saved = JSON.parse(localStorage.getItem(id) || "[]");
    saved.forEach(r => {
      const d = document.createElement("div");
      d.className = "review-item";
      d.innerHTML = `<strong>${r.name}:</strong> <p>${r.reviewText}</p>`;
      reviewList.appendChild(d);
    });
  });

  // Review form functionality
  document.querySelectorAll(".review-form").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const name = form.querySelector(".review-name").value.trim();
      const text = form.querySelector(".review-text").value.trim();
      const id = form.dataset.movie;
      if (!name || !text) return alert("Enter name & review");

      // append new review to the DOM
      const reviewList = document.getElementById(`reviews-${id}`);
      const d = document.createElement("div");
      d.className = "review-item";
      d.innerHTML = `<strong>${name}:</strong> <p>${text}</p>`;
      reviewList.appendChild(d);

      // save review to localStorage
      const arr = JSON.parse(localStorage.getItem(id) || "[]");
      arr.push({ name, reviewText: text });
      localStorage.setItem(id, JSON.stringify(arr));

      form.reset();
    });
  });
};
