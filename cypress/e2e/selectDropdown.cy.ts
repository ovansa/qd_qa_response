import { navigateTo } from '../support/page_objects/homePage';
import { onSelectDropdownListPage } from '../support/page_objects/selectDropdownListPage';

beforeEach(() => {
  cy.visit('/');
});

describe('Spec - Select List Demo', () => {
  it('should display the selected day from dropdown list', () => {
    const option = 'Tuesday';

    navigateTo.selectDropdownListPage();
    onSelectDropdownListPage.selectValueFromSingleSelectList(option);
  });
});

describe('Spec - Multi Select List Demo', () => {
  it.skip('should select a single option from the multiple selection list', () => {
    const option1 = 'Florida';

    navigateTo.selectDropdownListPage();
    onSelectDropdownListPage.selectValuesFromMultipleSelectList(option1);
  });

  it.skip('should select two options from the multiple selection list', () => {
    const option1 = 'Florida';
    const option2 = 'Ohio';

    navigateTo.selectDropdownListPage();
    onSelectDropdownListPage.selectValuesFromMultipleSelectList(
      option1,
      option2
    );
  });
});
