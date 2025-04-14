const { JSDOM } = require("jsdom");

describe("Movie Sorting Functionality", () => {
  let dom, document;

  beforeEach(() => {
    dom = new JSDOM(
      `<!DOCTYPE html>
      <body>
        <button id="sort-year">Sort by Year</button>
        <button id="sort-rating">Sort by Rating</button>
        <button id="sort-sport">Sort by Sport</button>
        <div id="movies-list">
          <div class="movie" data-year="2001" data-rating="7.5" data-sport="baseball">
            <h3>Movie A</h3>
          </div>
          <div class="movie" data-year="1999" data-rating="8.2" data-sport="football">
            <h3>Movie B</h3>
          </div>
          <div class="movie" data-year="2003" data-rating="6.9" data-sport="basketball">
            <h3>Movie C</h3>
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
      expect(movies[0].dataset.year).toBe("1999");
      expect(movies[1].dataset.year).toBe("2001");
      expect(movies[2].dataset.year).toBe("2003");
      done();
    }, 100);
  });

  test("should sort movies by rating in descending order", (done) => {
    document.getElementById("sort-rating").click();

    setTimeout(() => {
      const movies = document.querySelectorAll(".movie");
      expect(movies[0].dataset.rating).toBe("8.2");
      expect(movies[1].dataset.rating).toBe("7.5");
      expect(movies[2].dataset.rating).toBe("6.9");
      done();
    }, 100);
  });

  test("should sort movies by sport alphabetically", (done) => {
    document.getElementById("sort-sport").click();

    setTimeout(() => {
      const movies = document.querySelectorAll(".movie");
      expect(movies[0].dataset.sport).toBe("baseball");
      expect(movies[1].dataset.sport).toBe("basketball");
      expect(movies[2].dataset.sport).toBe("football");
      done();
    }, 100);
  });
});
