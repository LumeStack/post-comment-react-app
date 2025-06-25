describe('Post Comment App', () => {
  it('Add and delete a comment', () => {
    cy.visit('localhost:5173/')
    cy.get('[data-qa="profile-box"]')
    cy.get('[data-qa="comment-input"]').first().type('Nice post!')
    cy.get('[data-qa="publish-button"]').first().click()
    cy.get('[data-qa="comment-text"]').contains('Nice post!')
    cy.get('[data-qa="comment-text"]').each(($element) => {
      if ($element.text() === 'Nice post!') {
        cy.get($element).siblings('header').children('[data-qa="delete-button"]').click()
      }
    })
  })
})