export class SimpleFormDemoPage {
  submitSingleInputFieldFormToShowMessage(message: string) {
    cy.findById('user-message').type(message);
    cy.findByRole('button', { name: 'Show Message' }).click();
    cy.findById('display').should('have.text', message);
  }

  submitTwoInputFieldFormToGetTotal(value1: string, value2: string) {
    cy.findById('value1').type(`${value1}`);
    cy.findById('value2').type(`${value2}`);
    cy.findByRole('button', { name: 'Get Total' }).click();

    if (
      (typeof parseFloat(value1) || typeof parseInt(value1)) === 'number' &&
      value1.trim().length > 0 &&
      value2.trim().length > 0
    ) {
      cy.findById('displayvalue').should(
        'have.text',
        `${Number(value1) + Number(value2)}`
      );
    } else {
      cy.findById('displayvalue').should('have.text', `NaN`);
    }
  }
}

export const onSimpleFormDemoPage = new SimpleFormDemoPage();

// TODO! A bug exist for 6.5 + 3.5. Returns 9 on the app instead of 10.
