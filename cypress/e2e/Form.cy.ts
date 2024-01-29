describe('Form Component', () => {
  beforeEach(() => {

    cy.intercept('GET', 'https://test-frontend-developer.s3.amazonaws.com/data/locations.json', {
      fixture: 'locations.json',
    }).as('getLocations');

    cy.visit('http://172.28.0.2:4200/');
    cy.wait('@getLocations');
  });

  it('should update list', () => {
      cy.get('#radio-morning').click();
      cy.get('button').contains('Encontrar unidade').click();
      cy.get('.card-list').should('exist');
  });

  it('should reset filter', () => {
      cy.get('button').contains('Limpar').click();
      cy.get('#show-closed').should('not.be.checked');
      cy.get('[name=hourRadio]').should('not.be.checked');
  });
});
