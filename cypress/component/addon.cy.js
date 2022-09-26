import AddOn from '../../src/components/addon/addon'

describe('<AddOn>', () => {
  let addonData;

  before(() => {
    cy.fixture('addon').then((data) => {
      addonData = data
    });
  });

  it('addon should load showing monthly details with button click', () => {
    const onAddonClickSpy = cy.spy().as('onAddonClickSpy');

    cy.mount(<AddOn key={addonData.index} props={addonData.item} index={addonData.index} isMonthly={true} isSelected={addonData.item.isSelected} onClick={onAddonClickSpy} />);

    cy.get('h3').should('have.text', 'Accidental Damage Cover');
    cy.get('.addon-price').should('have.text', '£8.42 per month');
    cy.get('.addon-text').should('have.text', 'Do you need cover for mishaps to your home and contents, like drilling through a pipe or knocking over your TV?');
    cy.get('button').should('have.text', 'Select this extra');

    cy.get('button').click();
    cy.get('@onAddonClickSpy').should('have.been.calledWith', 1);
  });

  it('addon should load showing annual details', () => {
    cy.mount(<AddOn key={addonData.index} props={addonData.item} index={addonData.index} isMonthly={false} isSelected={addonData.item.isSelected} />);

    cy.get('h3').should('have.text', 'Accidental Damage Cover');
    cy.get('.addon-price').should('have.text', '£101 per year');
    cy.get('.addon-text').should('have.text', 'Do you need cover for mishaps to your home and contents, like drilling through a pipe or knocking over your TV?');
    cy.get('button').should('have.text', 'Select this extra');
  });

  it('addon should load showing monthly details and is selected', () => {
    cy.mount(<AddOn key={addonData.index} props={addonData.item} index={addonData.index} isMonthly={true} isSelected={true} />);

    cy.get('h3').should('have.text', 'Accidental Damage Cover');
    cy.get('.addon-price').should('have.text', '£8.42 per month');
    cy.get('.addon-text').should('have.text', 'Do you need cover for mishaps to your home and contents, like drilling through a pipe or knocking over your TV?');
    cy.get('button').should('have.text', 'Deselect this extra');
  });
})