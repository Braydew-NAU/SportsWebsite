const { JSDOM } = require("jsdom");
const { displayMovies } = require("./movies");

describe("Movie Sorting Functionality", () => {
  let dom, document;

  beforeEach(() => {
    dom = new JSDOM(
      `<!DOCTYPE html>
      <body>
        <button id="sort-year">Sort by Year</button>
        <button id="sort-rating">Sort by Rating</button>
        <div id="movies-list">
          <div class="movie">
            <h3>Movie A</h3>
            <span class="year">2001</span>
            <span class="rating">7.5</span>
          </div>
          <div class="movie">
            <h3>Movie B</h3>
            <span class="year">1999</span>
            <span class="rating">8.2</span>
          </div>
        </div>
      </body>`
    );

    document = dom.window.document;
    global.document = document;
    global.window = dom.window;
    require("../script"); // Import script to attach event listeners
  });

  test("should sort movies by year in ascending order", (done) => {
    document.getElementById("sort-year").click();

    setTimeout(() => {
      const movies = document.querySelectorAll(".movie");
      expect(movies[0].querySelector(".year").textContent).toBe("1999"); // Movie B should come first
      expect(movies[1].querySelector(".year").textContent).toBe("2001"); // Movie A should come second
      done();
    }, 100); // Small delay to let sorting take effect
  });

  test("should sort movies by rating in descending order", (done) => {
    document.getElementById("sort-rating").click();

    setTimeout(() => {
      const movies = document.querySelectorAll(".movie");
      expect(movies[0].querySelector(".rating").textContent).toBe("8.2"); // Movie B should come first
      expect(movies[1].querySelector(".rating").textContent).toBe("7.5"); // Movie A should come second
      done();
    }, 100);
  });
});
