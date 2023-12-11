/// <refrence types ="cypress" />
import { login_page} from "./pages/login_page"
const loginpage =new login_page()

//Reusable login Funcction
const login =() =>{
    cy.fixture('logindetails.json').then((test_data)=>{
        cy.log(`Username: ${test_data.username}`)
        cy.log(`Password: ${test_data.password}`)

        // Enter the username and password
        loginpage.enterUsername(test_data.username)
        loginpage.enterPassword(test_data.password)
        loginpage.clicklogin()
    })

}

//To be executed before every test cases
before(function(){
  cy.visit("https://opensource-demo.orangehrmlive.com/")
    
    
})

it('Login Page Test Case', function(){
    
    login() 
    cy.contains('Dashboard').should('be.visible')
    cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

})

it('Assign leave Flow',function(){
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    login()
    cy.get('.oxd-input').type('Leave')
    cy.get('.oxd-main-menu-item').click()

})