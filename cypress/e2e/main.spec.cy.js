describe('template spec', () => {
  it('passes', () => {
    const commentText = 'Fazendo um teste com Cypress ' + Math.floor(Math.random() * 1000)

    cy.visit('localhost:5173/')
    cy.get('[data-qa="profile-box"]')
    cy.get('[data-qa="comment-input"]').first().type(commentText)
    cy.get('[data-qa="publish-button"]').first().click()
    cy.get('[data-qa="comment-text"]').contains(commentText)
    cy.get('[data-qa="comment-text"]').each(($element) => {
      if ($element.text() === commentText) {
        cy.get($element).siblings('header').children('[data-qa="delete-button"]').click()
      }
    })
  })
})
