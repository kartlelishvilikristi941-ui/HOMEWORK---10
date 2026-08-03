describe('log in', () => {
  it('Test Case 1: Register User',()=>{
// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
cy.visit('http://automationexercise.com/login')
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
// 5. Verify 'New User Signup!' is visible
// 6. Enter name and email address
// 7. Click 'Signup' button
// 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
// 9. Fill details: Title, Name, Email, Password, Date of birth
// 10. Select checkbox 'Sign up for our newsletter!'
// 11. Select checkbox 'Receive special offers from our partners!'
// 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
// 13. Click 'Create Account button'
// 14. Verify that 'ACCOUNT CREATED!' is visible
// 15. Click 'Continue' button
// 16. Verify that 'Logged in as username' is visible
// 17. Click 'Delete Account' button
// 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button



  })

 
 
 
//   it('Test Case 3: Login User with incorrect email and password', () => {
    
// //     1. Launch browser

// // 2. Navigate to url 'http://automationexercise.com'
// cy.visit('http://automationexercise.com')

// // 3. Verify that home page is visible successfully
// // 4. Click on 'Signup / Login' button
// cy.get('[href="/login"]').click()

// // 5. Verify 'Login to your account' is visible
// cy.contains("Login to your account"). should("be.visible")
// // 6. Enter incorrect email address and password
// cy.get('[data-qa="login-email"]').type("test124@gmail.com")
// cy.get('[data-qa="login-password"]').type(963258)
// // 7. Click 'login' button
// cy.get('[data-qa="login-button"]').click()
// // 8. Verify error 'Your email or password is incorrect!' is visible
// cy.contains("Your email or password is incorrect!").should("be.visible")
//   })
//   it('Test Case 2: Login User with correct email and password', () => {
//   })
})  