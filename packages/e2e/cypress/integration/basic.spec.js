context('Index Integrations', () => {
  let welcome;

  before(() => {
    cy.task('getWelcome', 'beautiful').then(providedWelcome => {
      welcome = providedWelcome;
    });
  });

  beforeEach(() => {
    cy.openPage();
  });

  it('can display a welcome message', () => {
    cy.contains(`Hello ${welcome.name}!`);
  });
});
