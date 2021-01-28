describe('Heading text', () => {
    it('Contains the correct title', () => {
        cy.visit('/');

        cy.get('h1')
        .invoke('text')
        .should('equal', 'netflixroulette');
    });
})
