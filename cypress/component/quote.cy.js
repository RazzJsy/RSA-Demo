import Quote from '../../src/components/quote/quote'

describe('<Quote>', () => {

  let quoteItems = {
    "firstName": "James",
    "address1": "St Marks Court",
    "address2": "Chart Way",
    "lastName": "Kirk",
    "town": "Horsham",
    "postcode": "RH12 1XL",
    "quoteRef": "NBSH00044898200Q",
    "startDate": "2021-07-02T13:03:54Z",
    "monthlyPrice": 21.64,
    "annualPrice": 259.68
  };

  
  it('quote should load showing monthly details', () => {
    // const onQuoteClickSpy = cy.spy().as('onQuoteClickSpy');

    cy.mount(<Quote props={quoteItems} price={quoteItems.monthlyPrice} isMonthly={true} />);

    cy.get('.quote-details > h2').should('have.text', 'Hey James Kirk,');
    cy.get('.quote-details > div').eq(0).should('have.text', 'Here is your quote for St Marks Court, Chart Way, Horsham, RH12 1XL');
    cy.get('.quote-details > div').eq(1).should('have.text', 'Quote reference: NBSH00044898200Q');
    cy.get('.quote-details > div').eq(2).should('have.text', 'Cover starts on 02/07/2021');

    cy.get('.quote-summary > h1').should('have.text', '£21.64');
    cy.get('.quote-summary > h2').should('have.text', 'per month');
    cy.get('.quote-summary > .quote-summary-text').should('have.text', 'This price includes Insurance Premium Tax at the current rate. No charge for paying monthly.');
    cy.get('.quote-summary > button').should('have.text', 'Switch to annually');
    // cy.get('button').click();
    // cy.get('@onQuoteClickSpy').should('have.been.calledWith', 1);
  });

  it('quote should load showing annual details', () => {
    // const onQuoteClickSpy = cy.spy().as('onQuoteClickSpy');

    cy.mount(<Quote props={quoteItems} price={quoteItems.annualPrice} isMonthly={false} />);

    cy.get('.quote-details > h2').should('have.text', 'Hey James Kirk,');
    cy.get('.quote-details > div').eq(0).should('have.text', 'Here is your quote for St Marks Court, Chart Way, Horsham, RH12 1XL');
    cy.get('.quote-details > div').eq(1).should('have.text', 'Quote reference: NBSH00044898200Q');
    cy.get('.quote-details > div').eq(2).should('have.text', 'Cover starts on 02/07/2021');

    cy.get('.quote-summary > h1').should('have.text', '£259.68');
    cy.get('.quote-summary > h2').should('have.text', 'per year');
    cy.get('.quote-summary > .quote-summary-text').should('have.text', 'This price includes Insurance Premium Tax at the current rate. No charge for paying monthly.');
    cy.get('.quote-summary > button').should('have.text', 'Switch to monthly');
    // cy.get('button').click();
    // cy.get('@onQuoteClickSpy').should('have.been.calledWith', 1);
  });
})