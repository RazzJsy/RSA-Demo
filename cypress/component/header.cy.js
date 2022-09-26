import Header from '../../src/components/header/header'

describe('<Header>', () => {
  let headerData;

  before(() => {
    cy.fixture('header').then((data) => {
      headerData = data
    });
  });

  it('mount header', () => {

    cy.mount(<Header title={headerData.title}  />);

    cy.get('.header').should('have.text', 'Home Insurance');

  });
})