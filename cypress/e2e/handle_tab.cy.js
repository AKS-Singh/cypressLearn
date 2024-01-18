

describe('Handle tab',(()=>{
    it.skip('Handle multiple tab by removing attribute',function(){
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get('.example >a').invoke('removeAttr','target').click()
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.go('back')
    })

    it('Handle tab not removing attribute',function(){
        cy.visit('https://the-internet.herokuapp.com/windows')
        
        cy.get('.example >a').then((e)=>{
            let url =e.prop('href')
            cy.visit(url);
        })
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.go('back')
    })


}))

