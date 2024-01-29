describe('Main.cy.ts', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://test-frontend-developer.s3.amazonaws.com/data/locations.json', {
      fixture: 'locations.json',
    }).as('getLocations');

    cy.visit('http://172.28.0.2:4200/');

    cy.wait('@getLocations');
  });

  it('should render the app correctly', () => {
    cy.get('h1')
    .invoke('html')
    .should('include', 'REABERTURA')
    .and('include', 'SMART FIT');
    cy.get('form').should('exist');
    cy.get('.label').should('exist');
    cy.get('.empty-list h1.not-found').should('not.exist');
  });

  it('should update the list when the form is submitted', () => {
    cy.get('#radio-morning').check();
    cy.get('button').contains('Encontrar unidade').click();
    cy.get('.card-list').should('exist');
  });

  it('should show an error toast when the form is submitted without selecting a time', () => {
    cy.get('button').contains('Encontrar unidade').click();
    cy.contains('É necessário selecionar um horário de treino para realizar a pesquisa.').should('exist');
  });
});
