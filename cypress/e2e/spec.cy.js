it('TEST', () => {
  cy.visit('https://www.google.com')
  cy.visit('https://developer.salesforce.com/docs/component-library/bundle/lightning:accordion/example')
  cy.get('[title="Controller"]').click()
})
