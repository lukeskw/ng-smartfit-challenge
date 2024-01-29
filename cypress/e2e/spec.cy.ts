describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('http://172.28.0.2:4200/');
    cy.contains('REABERTURA')
  })
})
