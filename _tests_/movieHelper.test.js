// movieHelpers.test.js
const { displayMovies } = require('./movieHelper');


describe('displayMovies', () => {
  it('should clear the movies container and append movies', () => {
    // Mock HTML structure
    document.body.innerHTML = `<div id="movies-list"></div>`;

    const moviesContainer = document.getElementById('movies-list');

    // Create mock movie elements
    const movie1 = document.createElement('div');
    const movie2 = document.createElement('div');

    const movies = [movie1, movie2];

    // Call the function
    displayMovies(movies);

    // Check that moviesContainer is cleared and populated
    expect(moviesContainer.innerHTML).not.toEqual('');
    expect(moviesContainer.children.length).toBe(2);
    expect(moviesContainer.children[0]).toBe(movie1);
    expect(moviesContainer.children[1]).toBe(movie2);
  });
});
