const { JSDOM } = require("jsdom");

describe("Movie Search Functionality", () => {
  let dom, document;

  beforeEach(() => {
    // Set up a minimal HTML structure for testing
    dom = new JSDOM(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Movie Search</title>
        </head>
        <body>
          <input type="text" id="search" />
          <div id="movies">
            <div class="movie" data-title="Movie A" style="display: block;">Movie A</div>
            <div class="movie" data-title="Movie B" style="display: block;">Movie B</div>
          </div>
        </body>
      </html>
    `);
    document = dom.window.document;

    // Simulate script loading by injecting the movie search functionality into the DOM
    const script = document.createElement("script");
    script.textContent = `
      document.getElementById('search').addEventListener('input', function() {
        const searchValue = this.value.toLowerCase();
        const movies = document.querySelectorAll('.movie');
        movies.forEach(movie => {
          if (movie.dataset.title.toLowerCase().includes(searchValue)) {
            movie.style.display = 'block';
          } else {
            movie.style.display = 'none';
          }
        });
      });
    `;
    document.body.appendChild(script);
  });

  test("should filter movies based on search input", (done) => {
    const searchInput = document.getElementById("search");
    searchInput.value = "Movie A"; // Simulating search input for "Movie A"

    const event = new dom.window.Event("input");
    searchInput.dispatchEvent(event); // Ensure the input event fires

    setTimeout(() => {
      const movies = document.querySelectorAll(".movie");
      expect(movies[0].style.display).toBe("block"); // Movie A should be visible
      expect(movies[1].style.display).toBe("none"); // Movie B should be hidden
      done();
    }, 500); // Increase timeout to ensure DOM updates
  });
});
