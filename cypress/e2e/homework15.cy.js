import userData from '../fixtures/sample.json'
import signup from '../fixtures/texts.json'

describe('log in', () => {
//   it('Test Case 1: Register User', () => {
// //     1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
// cy.openPage()
// // // 5. Verify 'New User Signup!' is visible
// cy.contains(signup.NewUserSignup).should('be.visible')
// // 6. Enter name and email address
// cy.get('[data-qa="signup-name"]').type(userData.name)
// cy.get('[data-qa="signup-email"]').type(userData.email)
// // // 7. Click 'Signup' button
// cy.get('[data-qa="signup-button"]').click()
// // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
// cy.contains(signup.accountInformation).should("be.visible")
// // 9. Fill details: Title, Name, Email, Password, Date of birth
// cy.get("#id_gender1").click()
// cy.get('[data-qa="name"]').clear().type(userData.name)
// cy.get('[data-qa="password"]').type(userData.password)
// cy.get('#days').select(userData.day)
// cy.get('#months').select(userData.month)
// cy.get('#years').select(userData.year)
// // 10. Select checkbox 'Sign up for our newsletter!'
// cy.get('#newsletter').click()
// // 11. Select checkbox 'Receive special offers from our partners!'
// cy.get('#optin').click()
// // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
// cy.get('#first_name').type(userData.firstName)
// cy.get('#last_name').type(userData.lastName)
// cy.get('#company').type(userData.Company)
// cy.get('#address1').type(userData.address)
// cy.get('#address2').type(userData.address2)
// cy.get('#country').select(userData.country)
// cy.get('#state').type(userData.state)
// cy.get('#city').type(userData.city)
// cy.get('#zipcode').type(userData.zipcode)
// cy.get('#mobile_number').type(userData.mobilenumber)
// cy.get('[data-qa="create-account"]').click()
// // 13. Click 'Create Account button'
// // 14. Verify that 'ACCOUNT CREATED!' is visible
// cy.get('b').should('contain',signup.creatAccount)

// // 15. Click 'Continue' button
// cy.get('[data-qa="continue-button"]').click()
// cy.wait(1000)
// // 16. Verify that 'Logged in as username' is visible
// cy.contains(signup.LoggedInasUsername).should("be.visible")

//   })
// it('Test Case 2: Login User with correct email and password', () => {
// //   1. Launch browser
// // 2. Navigate to url 'http://automationexercise.com'
// // 3. Verify that home page is visible successfully
// // 4. Click on 'Signup / Login' button
//  cy.openPage()
// // 5. Verify 'Login to your account' is visible
// cy.contains(signup.LoginAccount).should("be.visible")
// // 6. Enter correct email address and password
// cy.get('[data-qa="login-email"]').type(userData.email)
// cy.get('[data-qa="login-password"]').type(userData.password)
// // 7. Click 'login' button
// cy.get('[data-qa="login-button"]').click()
// // 8. Verify that 'Logged in as username' is visible
// cy.wait(2000)
// cy.contains(signup.LoggedInasUsername).should("be.visible")
// // 9. Click 'Delete Account' button
// cy.get('a[href="/delete_account"]').click()
// cy.wait(2500)
// // 10. Verify that 'ACCOUNT DELETED!' is visible
// cy.contains(signup.deleteAccount).should('be.visible')

  // })
  it('Test Case 3: Login User with incorrect email and password', () => {
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
cy.openPage()

// 5. Verify 'Login to your account' is visible
cy.contains(signup.LoginAccount).should("be.visible")
// 6. Enter incorrect email address and password
// 7. Click 'login' button
cy.incorect()

// 8. Verify error 'Your email or password is incorrect!' is visible
cy.contains(signup.incorrectAlarm).should('be.visible')



})
})