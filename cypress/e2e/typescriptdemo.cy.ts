//Reference at https://docs.cypress.io/guides/tooling/typescript-support

let url:string='https://www.linkedin.com/'

describe('Typescript Demo', () => {
  
    it('Login without custom command', () => {
        cy.visit('https://www.linkedin.com/')
        cy.url().should('eq',url) 
    })

    it('Login with custom command', () => {
        cy.visit('https://www.linkedin.com/')
        //cy.typeLogin('standard_user', 'secret_sauce')                                   //custom command added to 'support>command.ts' and 'support>index.ts' files
        cy.url().should('eq',url)
    })
})