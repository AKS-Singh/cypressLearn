export class pim{
    searchPIM(){
        cy.contains('PIM').click()
    }
    addEmployee(){
        cy.contains('Add Employee').click()
    }
    firstname(Nmae){
        cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type(Nmae)
    }
    middlename(mname){
        cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type(mname)
    }
    lastname(lname){
        cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type(lname)
    }
    createlogin(){
        cy.get('.oxd-switch-input').click()
    }
    username(uname){
        cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type(uname)
    }
    password(pass){
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type(pass)
    }
    confirm(passw){
        cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(passw)
    }
    disabled(){
        cy.contains('Disabled').click()
    }
    enabled(){
        cy.contains('Enabled').click()
    }
    save(){
        cy.contains('Save').click()
    }
    verifydata(){
        cy.get(':nth-child(1) > .orangehrm-tabs-item').should('be.visible', { timeout: 20000 });
    }

    updateconfig(){
        cy.get('.oxd-topbar-body-nav-tab-item > .oxd-icon').click()
        cy.get(':nth-child(3) > .oxd-topbar-body-nav-tab-link').click()
    }
    exportdata(){
        cy.get('.oxd-file-div > .oxd-icon').click()
    }

}