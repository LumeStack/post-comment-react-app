describe('mainspec.cy.js', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get('[data-qa="profile-box"]')
    cy.get('data-qa="Comment-input"]').first().type('Test 123')
    cy.get('[data-qa="publish-button"]').first().click()
    cy.get('[data-qa="comment-texte"]').contains('Test 123')
    cy.get('[data-qa="comment-texte"]').each(($element) => {
       if ($element.text() === 'Test 123'){
        cy.get($element).siblings('header').children('[data-qa="delete-button"]').click()
       }
    })
  })
})