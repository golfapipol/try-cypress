describe('My First Test', () => {
    it('Does not do much', () => {
        expect(true).to.equal(true)
    })

    it('Visits the kitchen sink', () => {
        //Only Test Apps You Control (shouldn’t test applications you don’t control)
        //Cypress is to be a tool you use every day to build and test your own applications
        //Cypress is not a general purpose web automation tool. 
        //It is poorly suited for scripting live, production websites not under your control.
        cy.visit('https://example.cypress.io')

        cy.contains('type')
    })
});