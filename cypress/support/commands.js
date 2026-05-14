// ─── CUSTOM COMMANDS ──────────────────────────────────────────────────────────

/**
 * @command logElements
 * @description Percorre todos os elementos encontrados pelo seletor e exibe
 * o texto de cada um no log do Cypress.
 * @uso Utilize para inspecionar o conteúdo de elementos repetidos na página,
 * como listas, cards, comentários ou qualquer conjunto de elementos similares.
 * @exemplo
 *   // Descomentar temporariamente para debug:
 *   cy.get('[data-qa="comment-text"]').each(($element) => {
 *     cy.log($element.text())
 *   })
 *
 *   // Saída esperada no log:
 *   // 0 → Primeiro comentário
 *   // 1 → Segundo comentário
 *   // 2 → Terceiro comentário
 *
 *   // Após identificar os elementos, comentar novamente o bloco.
 */

/* cy.get('[data-qa="comment-text"]').each(($element) => {
  cy.log($element.text())
}) */