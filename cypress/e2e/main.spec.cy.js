describe('template spec', () => {
  it('passes', () => {
    cy.visit('localhost:5173/')
    cy.get('[data-qa="profile-box"]')
    cy.get('[data-qa="comment-input"]').eq(0).type("Test 123")
    cy.get('[type="submit"]').eq(0).click()
    cy.contains('[data-qa="comment-box"]', "Test 123")
    cy.contains('[data-qa="comment-box"]', "Test 123").find('[data-qa="delete-button"]').click()
      })
    })



    