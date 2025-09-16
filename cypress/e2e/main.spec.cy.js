describe('template spec', () => {
  it('passes', () => {
    cy.visit('localhost:5173/')
    cy.get('._profile_18729_25')
    cy.get(':nth-child(1) > ._commentForm_79l5d_121 > [data-qa="comment-input"]').type('Teste 123')
    cy.get('[data-qa="publish-button"]').first().click()
    cy.get(':nth-child(2) > [data-qa="comment-box"] > [data-qa="comment-info-box"] > [data-qa="comment-text"]').contains('Teste 123')
    cy.get(':nth-child(2) > [data-qa="comment-box"] > [data-qa="comment-info-box"] > header > [data-qa="delete-button"] > svg').click()
    
  })
})