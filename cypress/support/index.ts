declare namespace Cypress {
    interface Chainable {
        typeLogin: (username:string, password:string) => void
    }
}