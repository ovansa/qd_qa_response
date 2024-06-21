export class HomePage {
  basicSimpleFormDemoPage() {
    cy.findById('btn_basic_example').click();
    cy.findByRole('link', { name: 'Simple Form Demo' }).click();
  }

  selectDropdownListPage() {
    cy.findById('btn_basic_example').click();
    cy.findByRole('link', { name: 'Select Dropdown List' }).click();
  }

  bootstrapAlertsPage() {
    cy.findById('btn_basic_example').click();
    cy.findByRole('link', { name: 'Bootstrap Alerts' }).click();
  }

  bootstrapModalsPage() {
    cy.findById('btn_basic_example').click();
    cy.findByRole('link', { name: 'Bootstrap Modals' }).click();
  }
}

export const navigateTo = new HomePage();
