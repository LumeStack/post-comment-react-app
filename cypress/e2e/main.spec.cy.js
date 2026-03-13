describe('template spec', () => {
  it('passes', () => {
    cy.visit('localhost:5173/')
    cy.get('[data-qa="profile-box"]')
    cy.get('[data-qa="comment-input"]').eq(0).type('Test Ok')
    cy.get('[data-qa="publish-button"]').eq(0).click()
    cy.get('[data-qa="comment-text"]').contains('Test Ok')
    cy.get('[data-qa="comment-text"]').each(($element) => {
      if ($element.text() === 'Test Ok') {
        cy.get($element).siblings('header').children('[data-qa="delete-button"]').click()
      }
    })
  })
})