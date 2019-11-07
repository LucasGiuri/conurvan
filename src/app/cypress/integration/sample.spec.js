/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('text ok', () => {
    cy.get('button').click()
  })
})
