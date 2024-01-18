/// <refrence types ="cypress" />

import { login_page} from "./pages/login_page"
import { pim } from "./pages/pim"
import { assign_leave } from "./pages/assign_leave"
const loginpage =new login_page()
const addemp=new pim()
const assignleave = new assign_leave()

//Reusable login Funcction
const login =() =>{
    cy.fixture('testdata.json').then((test_data)=>{
        const lognincred = test_data.logincredential
        cy.log(`Username: ${lognincred.username}`)
        cy.log(`Password: ${lognincred.password}`)

        // Enter the username and password
        loginpage.enterUsername(lognincred.username)
        loginpage.enterPassword(lognincred.password)
        loginpage.clicklogin()
    })

}

//To be executed before every test cases
before(function(){
  cy.visit("https://opensource-demo.orangehrmlive.com/")
    
    
})

it.skip('Login Page Test Case', function(){
    
    login() 
    loginpage.loginVerification()

})

Cypress.on('uncaught:exception', (err, runnable) => {
    // Handle the error here
    console.error('Uncaught Exception:', err.message);
  
    // Take a screenshot for further analysis
    cy.screenshot('uncaught-exception');
  
    // Optionally, you can return false to prevent the error from failing the test
    return false;
});




it.skip('Assign leave Flow', function () {
    cy.visit("https://opensource-demo.orangehrmlive.com/")
    login()
    assignleave.navigate_user()
    let mytext
  
    cy.get('.oxd-userdropdown-name').invoke('text').then((text) => {
        mytext = text
        cy.log(mytext)
        cy.get('.oxd-autocomplete-text-input > input').type(mytext + '{enter}')
        //cy.contains(mytext +'{Enter}')
    
        assignleave.slecttext()
        assignleave.slectleave()
        assignleave.slectdate()
        assignleave.saveform()
    })   
})

it.skip('Add employee employee', function () {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    login();
    addemp.searchPIM();
    addemp.addEmployee();
  
    cy.fixture('testdata.json').then((data_emp) => {
        const emp_data = data_emp.addemployee
        addemp.firstname(emp_data.firstname);
        addemp.middlename(emp_data.middlename);
        addemp.lastname(emp_data.lastname);
        addemp.createlogin();
        addemp.enabled();
        // Generating a random number between 1 and 1000
        let number = Math.floor(Math.random() * 1000) + 1;
        addemp.username(emp_data.username + String(number));
        addemp.password(emp_data.password);
        addemp.confirm(emp_data.confirm);
    }); 
    addemp.save();
  
    addemp.verifydata()
  });

it('Update Personal Details under PIM',function(){
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    login()
    addemp.searchPIM();
    addemp.updateconfig()
    addemp.exportdata()
})  
  
  