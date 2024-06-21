export class SelectDropdownListPage {
  selectValueFromSingleSelectList(option: string) {
    cy.findById('select-demo').select(option);
    cy.findByClass('selected-value').should('contain.text', option);
  }

  selectValuesFromMultipleSelectList(...args: string[]) {
    cy.findById('multi-select').select(args);

    cy.findByRole('button', { name: 'Get All Selected' }).click();

    args.forEach((arg) => {
      cy.findByClass('getall-selected').should('contain.text', arg);
    });
  }
}

export const onSelectDropdownListPage = new SelectDropdownListPage();
