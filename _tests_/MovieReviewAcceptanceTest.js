describe('Movie Reviews', () => {
  it('should save and display a new review', () => {
    cy.visit('your-local-or-deployed-site-url');

    const movieId = 'movie-1'; // Adjust based on the actual movie ID in your markup

    // Interact with the review form
    cy.get(`[data-movie=${movieId}] .review-name`).type('John Doe');
    cy.get(`[data-movie=${movieId}] .review-text`).type('Great movie!');
    cy.get(`[data-movie=${movieId}] .review-form`).submit();

    // Check if the new review is added to the page
    cy.get(`#reviews-${movieId} .review-item`).should('contain', 'John Doe');
    cy.get(`#reviews-${movieId} .review-item`).should('contain', 'Great movie!');

    // Check if the review is saved in localStorage
    cy.window().then((window) => {
      const savedReviews = JSON.parse(localStorage.getItem(movieId));
      expect(savedReviews).to.have.length.greaterThan(0);
      expect(savedReviews[0].name).to.equal('John Doe');
    });
  });
});
