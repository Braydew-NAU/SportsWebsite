describe('Search Functionality', () => {
  it('should filter movies by title when typing in the search bar', () => {
    cy.visit('your-local-or-deployed-site-url');

    // Type a query in the search bar
    cy.get('#search').type('Football');

    // Check that only movies related to "Football" are shown
    cy.get('.movie').each(($movie) => {
      cy.wrap($movie)
        .find('h3')
        .should('include.text', 'Football');  // Adjust based on how you name the sport
    });
  });
});
