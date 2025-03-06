describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-qa="profile-box"]')
    cy.get('[data-qa="comment-input"]').first().type('teste 123')
    cy.get("[data-qa='comment-input']")
    cy.get("[data-qa='publish-button']").first().click()
    cy.get("[data-qa='comment-text']").contains('teste 123')
    cy.get("[data-qa='comment-text']").each(($ellement) => {
     cy.log($ellement.text())
     if($ellement.text()=== 'teste 123'){
      cy.get($ellement).siblings('header').children('[data-qa="delete-button"]').click()
     }
    })
  })
})
<<<<<<< HEAD:cypress/e2e/main.spec.cy.js

//meu teste de automação
//outra tentativa
=======
>>>>>>> a24b373c4287b7b673ab8fff65d053c081613d41:cypress/e2e/mainspec.cy.js
