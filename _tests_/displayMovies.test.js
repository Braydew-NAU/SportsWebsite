const { JSDOM } = require("jsdom");
const { displayMovies } = require("./movies");

describe("Movie Display Functionality", () => {
  let dom;
  let document;

  beforeEach(() => {
    dom = new JSDOM(`<!DOCTYPE html>
      <body>
        <div id="movies-list"></div>
      </body>`);

    document = dom.window.document;
    global.document = document;
  });

  test("should display movies correctly", () => {
    const movie1 = document.createElement("div");
    movie1.className = "movie";
    movie1.textContent = "Movie A";

    const movie2 = document.createElement("div");
    movie2.className = "movie";
    movie2.textContent = "Movie B";

    const movies = [movie1, movie2];

    displayMovies(movies);

    const moviesContainer = document.getElementById("movies-list");
    expect(moviesContainer.children.length).toBe(2);
    expect(moviesContainer.children[0].textContent).toBe("Movie A");
    expect(moviesContainer.children[1].textContent).toBe("Movie B");
  });
});
