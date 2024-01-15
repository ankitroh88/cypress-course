describe('Fundamental Tests', () => {
  beforeEach(()=>{
    cy.visit('/fundamentals')                                                                   //baseUrl added to 'cypress.config.js' file
  })

  it('Validate page contains correct header text', () => {
    //cy.visit('/fundamentals')                                                                 //common steps across tests moved to beforeEach block
    cy.get('[data-test="fundamentals-header"]').contains('Testing Fundamentals')                //can make it case insensitive by passing regular exp -> contains(/Testing Fundamentals/i)
    cy.get('[data-test="fundamentals-header"]').should('contain.text','Testing Fundamentals')   //alternate way for assertion
  })

  it('Updated with personalized command - Validate page contains correct header text', () => {
    //cy.visit('/fundamentals')                                                                 
    cy.getDataTest('fundamentals-header').should('contain.text','Testing Fundamentals')         //personalized command 'getDataTest' being used here, add under 'support>command.js' file path
  })

  it('Validate accordion works correctly', () => {
    //cy.visit('/fundamentals')
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
  })
})