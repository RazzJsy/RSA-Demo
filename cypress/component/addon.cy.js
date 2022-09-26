import AddOn from '../../src/components/addon/addon'

describe('<AddOn>', () => {

  let  index = 1;
  let item = {
    "title": "Accidental Damage Cover",
    "text": "Do you need cover for mishaps to your home and contents, like drilling through a pipe or knocking over your TV?",
    "monthlyPrice": 8.42,
    "annualPrice": 101.00,
    "isSelected": false
  };

  it('addon should load showing monthly details with button click', () => {
    const onAddonClickSpy = cy.spy().as('onAddonClickSpy');

    cy.mount(<AddOn key={index} props={item} index={index} isMonthly={true} isSelected={item.isSelected} onClick={onAddonClickSpy} />);

    cy.get('h3').should('have.text', 'Accidental Damage Cover');
    cy.get('.addon-price').should('have.text', '£8.42 per month');
    cy.get('.addon-text').should('have.text', 'Do you need cover for mishaps to your home and contents, like drilling through a pipe or knocking over your TV?');
    cy.get('button').should('have.text', 'Select this extra');

    cy.get('button').click();
    cy.get('@onAddonClickSpy').should('have.been.calledWith', 1);
  });

  it('addon should load showing annual details', () => {
    cy.mount(<AddOn key={index} props={item} index={index} isMonthly={false} isSelected={item.isSelected} />);

    cy.get('h3').should('have.text', 'Accidental Damage Cover');
    cy.get('.addon-price').should('have.text', '£101 per year');
    cy.get('.addon-text').should('have.text', 'Do you need cover for mishaps to your home and contents, like drilling through a pipe or knocking over your TV?');
    cy.get('button').should('have.text', 'Select this extra');
  });

  it('addon should load showing monthly details and is selected', () => {
    cy.mount(<AddOn key={index} props={item} index={index} isMonthly={true} isSelected={true} />);

    cy.get('h3').should('have.text', 'Accidental Damage Cover');
    cy.get('.addon-price').should('have.text', '£8.42 per month');
    cy.get('.addon-text').should('have.text', 'Do you need cover for mishaps to your home and contents, like drilling through a pipe or knocking over your TV?');
    cy.get('button').should('have.text', 'Deselect this extra');
  });
})