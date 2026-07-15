describe('template spec', () => {
  it('passes', () => {
    cy.visit('localhost:5173/')
    cy.get('[data-qa="profile-box"]')
    cy.get('[data-qa="comment-input"]').first().type('test')
    cy.get('[data-qa="publish-button"]').first().click()
    cy.get('[data-qa="comment-text"]').contains('test')
    cy.get('[data-qa="comment-text"]').each(($element) => {
      if ($element.text() === 'test') {
      cy.get($element).siblings('header').children('[data-qa="delete-button"]').click()
      }
    })
  })
})
