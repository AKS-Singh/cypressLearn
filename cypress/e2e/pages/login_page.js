export class login_page{
    enterUsername(username){
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username)
    }
    enterPassword(password){
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(password)
    }
    clicklogin(){
        cy.get('.oxd-button').click()

    }
    loginVerification(){
        cy.contains('Dashboard').should('be.visible')
        cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
    }
}