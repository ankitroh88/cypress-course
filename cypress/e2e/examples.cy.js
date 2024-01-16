describe('Various Automated Example', () => {

    beforeEach(() =>{
        cy.visit('/examples')
    })

    it('Validate multi-page testing', () => {
        cy.getDataTest('nav-why-cypress').click();
        cy.location("pathname").should("equal","/")

        cy.getDataTest('nav-overview').click();
        cy.location("pathname").should("equal","/overview")

        cy.getDataTest('nav-fundamentals').click();
        cy.location("pathname").should("equal","/fundamentals")

        cy.getDataTest('nav-forms').click();
        cy.location("pathname").should("equal","/forms")

        cy.getDataTest('nav-component').click();
        cy.location("pathname").should("equal","/component")

        cy.getDataTest('nav-best-practices').click();
        cy.location("pathname").should("equal","/best-practices")
    })

    it('Validate interception mechanism', () => {
        cy.intercept('POST','http://localhost:3000/examples', {
            body: {message: 'successfully intercepted request'}
            //fixture: 'example.json'
        })
        cy.getDataTest('post-button').click()
    })

    it.only('Validate grudges', () => {
        cy.contains(/add some grudges/i)
        cy.getDataTest('clear-button').should('not.exist')
        cy.getDataTest('my-grudge-list').within(() => {
            cy.get('li').should('have.length',0)
        })

        //add first grudge
        cy.getDataTest('grudge-input').within(() => {
            cy.get('input').type('my grudge #1')
        })
        cy.getDataTest('add-grudge-button').click()
        
        cy.getDataTest('my-grudge-list').within(() => {
            cy.get('li').should('have.length',1)
        })
        
        //add second grudge
        cy.getDataTest('grudge-input').within(() => {
            cy.get('input').type('my grudge #2')
        })
        cy.getDataTest('add-grudge-button').click()
        cy.getDataTest('my-grudge-list').within(() => {
            cy.get('li').should('have.length',2)
            cy.get('li').its(0).should('contains.text','my grudge #1')
        })
        cy.getDataTest('clear-button').should('exist')

        //remove first grudge
        cy.getDataTest('my-grudge-list').within(() => {
            cy.get('li').its(0).within(() => {
                cy.get('button').click()
            })
        })
        cy.getDataTest('my-grudge-list').within(() => {
            cy.get('li').should('have.length',1)
        })
        
        //use clear button to remove all grudges
        cy.getDataTest('clear-button').click()
        cy.getDataTest('my-grudge-list').within(() => {
            cy.get('li').should('have.length',0)
        })
    })
})