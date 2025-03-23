const { displayMovies } = require("./movies");
const { JSDOM } = require("jsdom");

describe("displayMovies", () => {
  let dom;
  let document;

  beforeEach(() => {
    dom = new JSDOM(`<!DOCTYPE html><body><div id="movies-list"></div></body>`);
    document = dom.window.document;
    global.document = document;
    global.window = dom.window; // Ensures window-related operations work
  });

  test("should display movies in the container", () => {
    const movie1 = document.createElement("div");
    movie1.className = "movie";
    movie1.textContent = "Movie 1";

    const movie2 = document.createElement("div");
    movie2.className = "movie";
    movie2.textContent = "Movie 2";

    const movies = [movie1, movie2];

    displayMovies(movies);

    const moviesContainer = document.getElementById("movies-list");
    expect(moviesContainer.children.length).toBe(2);
    expect(moviesContainer.children[0].textContent).toBe("Movie 1");
    expect(moviesContainer.children[1].textContent).toBe("Movie 2");
  });

  test("should clear previous movies before displaying new ones", () => {
    const moviesContainer = document.getElementById("movies-list");

    const oldMovie = document.createElement("div");
    oldMovie.className = "movie";
    oldMovie.textContent = "Old Movie";
    moviesContainer.appendChild(oldMovie);

    const newMovie = document.createElement("div");
    newMovie.className = "movie"; // Fixed typo
    newMovie.textContent = "New Movie";

    displayMovies([newMovie]);

    expect(moviesContainer.children.length).toBe(1);
    expect(moviesContainer.children[0].textContent).toBe("New Movie");
  });
});
