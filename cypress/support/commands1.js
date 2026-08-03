import userData from '../fixtures/sample.json'


Cypress.Commands.add('login',(email,password)=>{
cy.get('#customer_menu_top > li > a').click()
cy.get('#loginFrm_loginname').type(email)
cy.get('#loginFrm_password').type(password)
cy.get('#loginFrm > fieldset > .btn').click()
cy.contains('Welcome back').should("be.visible")
})

Cypress.Commands.add( 'openPage',()=>{
    cy.visit("http://automationexercise.com")
    cy.url().should("include","automationexercise.com")
   cy.get('.shop-menu > .nav > :nth-child(4) > a').click({ force: true })
}
)

Cypress.Commands.add('incorect',()=>{
    cy.get('[data-qa="login-email"]').type(userData.email)
  cy.get('[data-qa="login-password"]').type(userData.password)
  cy.get('[data-qa="login-button"]').click()
}
)