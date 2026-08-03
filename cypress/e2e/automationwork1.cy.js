describe('updatedata', () => {
 beforeEach(( )=>{ 
  cy.fixture("example.json").as("pred")
 })
  it.only('edit account details', function ()  {
    cy.visit('https://automationteststore.com')
cy.login(this.pred.name, this.pred.newpassword)
cy.get('.side_account_list > :nth-child(3) > a').click()
cy.get('#AccountFrm_firstname').clear().type(this.pred.firstname)
cy.get('.col-md-12 > .btn-orange').click()
cy.contains('Welcome back'+ " " + this.pred.firstname).should('be.visible')
  })
 it('Manage address book', () => {
cy.visit('https://automationteststore.com')
cy.login('kriswi123','tobasi!1234')
cy.get('.side_account_list > :nth-child(5) > a').click()
cy.get('tr > .pull-right > .btn').click()
cy.get('#AddressFrm_address_1').clear().type('Tbilisi, Varketili')
cy.get('.col-md-12 > .btn-orange').click()
cy.get('.alert').should('contain','Your address has been successfully updated')
  })
it('change password', () => {
cy.visit('https://automationteststore.com')
cy.login('kriswi123','tobasi!1234')
cy.get('.side_account_list > :nth-child(4) > a').click()
cy.get('#PasswordFrm_current_password').type('tobasi!1234')
cy.get('#PasswordFrm_password').type('tobasi!789')
cy.get('#PasswordFrm_confirm').type('tobasi!789')
cy.get('.col-md-12 > .btn-orange').click()
  })

})