/// <refrence types ="cypress" />

it('Download Syllabus', function(){
    cy.visit('https://www.simplilearn.com/data-science-bootcamp')
    cy.get('#DownloadSyllabus1 > [data-test="download-button"]').click()
    cy.get('.course-head > :nth-child(2) > .callback-forms > [data-test="lead-form"] > .form-name > .form-control > input').type('Test User')
    cy.get('.course-head > :nth-child(2) > .callback-forms > [data-test="lead-form"] > .form-email > .form-control > input').type('simpliautomation+324@simplilearn.com')
    cy.get('.course-head > :nth-child(2) > .callback-forms > [data-test="lead-form"] > .country-code > .form-control > input').type('8976564532{tab}{downarrow}').click()
    cy.get('#dynid2680').click()
    
})