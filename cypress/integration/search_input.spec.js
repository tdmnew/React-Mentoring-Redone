describe('Search input returns result', () => {
    it('Text is accepted and the movies list is updated', () => {
        cy.visit('/');

        cy.get('[data-cy="search-bar"]').type('Star Wars');
        cy.get('[data-cy="search-btn"]').click();

        //.as('search-bar')
        // const searchBar = cy.get('@search-bar')
        //.as('search-btn')
        // const searchBtn = cy.get('@search-btn')

        //Check results are greater than 0
        cy.get('[data-cy="total"]')
            .as('total')
            .should(($total) => {
                expect($total).to.not.contain(0);
            });
    });
});
