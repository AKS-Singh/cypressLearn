

describe('Handle tab',(()=>{
    it.skip('Handle multiple tab by removing attribute',function(){
        cy.visit("https://the-internet.herokuapp.com/windows")//Parent tab
        cy.get('.example >a').invoke('removeAttr','target').click()//remove the new tab attribute
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')//Assert the url
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

