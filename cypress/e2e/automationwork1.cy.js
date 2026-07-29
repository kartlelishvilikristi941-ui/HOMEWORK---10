describe('updatedata', () => {
  it('edit account details', () => {
// ეწვიე საიტს 
// იპოვე Login or register და დააკლიკე
// სახელშიუ ჩაწერე kriswi123
// პასვორდში ჩაწერე tobi!123
// დააკლიკე ლოგინს, 
// წარმატებული ავტორიზაციისთვის უნდა დაეწროს "Welcome back"
// იპოვე და დააჭირე მომხმარებლის დეტალებს შეცვლა 
// სახლში ჩაწერე ქრისტინე კრისტის ნაცვლად დააჭირე ღილაკს კონტინიუ
// დარწმუნდი რომ სახელი შეიცვალა
// დააჭირე "Manage address book", შემდეგ დააჭირე "ედით"
// მისამართში ჩაწერე ვარკეთილი დააჭირე "კონტინიუ"
// დარწმუნდი რომ მისამართში წერია "თბილისი ვარკეთილი"
// დააჭირე "change password"
// ჩაწერე არსებული პაროლი
// ჩაწერე ახალი პაროლი,
// გაიმეორე ახალი პაროლი
// დააჭირე გაგრძელებას
  
    cy.visit('https://automationteststore.com')
cy.login('kriswi123','tobasi!1234')
cy.get('.side_account_list > :nth-child(3) > a').click()
cy.get('#AccountFrm_firstname').clear().type('Kristine')
cy.get('.col-md-12 > .btn-orange').click()
cy.contains('Welcome back Kristine').should('be.visible')
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