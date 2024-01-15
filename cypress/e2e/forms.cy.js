describe('Form Tests', () => {
    beforeEach(()=>{
        cy.visit('/forms')
    })

    it('Validate subscribe form',() => {
        cy.contains(/testing forms/i)
        cy.getDataTest('subscribe-form').find('input').as("subscribe-input")                                //alias saved here
        cy.get('@subscribe-input').type('ar@gmail.io')                                                      //alias used here with @ symbol
        cy.contains(/Invalid email/i).should('not.exist')
        cy.get('button[class^=MuiButtonBase]').click()
        cy.contains(/Invalid email/i).should('exist')
        cy.wait(3000)
        cy.contains(/Invalid email/i).should('not.exist')

        cy.get('@subscribe-input').type('ar@gmail.com')
        cy.contains(/Successfully subbed/i).should('not.exist')
        cy.get('button[class^=MuiButtonBase]').click()
        cy.contains(/Successfully subbed/i).should('exist')
        cy.wait(3000)
        cy.contains(/Successfully subbed/i).should('not.exist')
    })
})