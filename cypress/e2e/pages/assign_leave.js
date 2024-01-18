export class assign_leave{
    navigate_user(){
        cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-text').click()
        cy.get(':nth-child(6) > .oxd-topbar-body-nav-tab-item > .oxd-icon').click()
        cy.get(':nth-child(2) > li > .oxd-topbar-body-nav-tab-link').click()
    }
    slecttext(){
        cy.get('.oxd-select-text--after > .oxd-icon').click()
    }
    slectleave(){
        cy.contains('CAN - Bereavement').click()
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input').click()
    }
    slectdate(){
        cy.contains('Today').click()
    }
    saveform(){
        cy.get('.oxd-button').click()
    }

}