import { navigateTo } from '../support/page_objects/homePage';
import { onBootstrapModalPage } from '../support/page_objects/bootstrapModalPage';
import { onSelectDropdownListPage } from '../support/page_objects/selectDropdownListPage';
import { onSimpleFormDemoPage } from '../support/page_objects/simpleFormDemoPage';

beforeEach(() => {
  cy.visit('/');
});

describe('Spec - Single Input Field', () => {
  it('Displays alphabets', () => {
    const message = 'ABCDEF';

    navigateTo.basicSimpleFormDemoPage();
    onSimpleFormDemoPage.submitSingleInputFieldFormToShowMessage(message);
  });

  it('Display digits', () => {
    const message = '1234567890';

    navigateTo.basicSimpleFormDemoPage();
    onSimpleFormDemoPage.submitSingleInputFieldFormToShowMessage(message);
  });
});

describe('Spec - Two Input Field', () => {
  it('should display valid sum with two positive integers', () => {
    const value1 = '7';
    const value2 = '3';

    navigateTo.basicSimpleFormDemoPage();
    onSimpleFormDemoPage.submitTwoInputFieldFormToGetTotal(value1, value2);
  });

  it('should display valid sum with positive and negative integers', () => {
    const value1 = '7';
    const value2 = '-3';

    navigateTo.basicSimpleFormDemoPage();
    onSimpleFormDemoPage.submitTwoInputFieldFormToGetTotal(value1, value2);
  });

  it('should display valid sum with two negative integers', () => {
    const value1 = '-7';
    const value2 = '-3';

    navigateTo.basicSimpleFormDemoPage();
    onSimpleFormDemoPage.submitTwoInputFieldFormToGetTotal(value1, value2);
  });

  it.skip('should display valid sum with two decimals', () => {
    const value1 = '6.5';
    const value2 = '3.5';

    navigateTo.basicSimpleFormDemoPage();
    onSimpleFormDemoPage.submitTwoInputFieldFormToGetTotal(value1, value2);
  });

  it('should display valid error message (NaN) with two empty fields', () => {
    const value1 = ' ';
    const value2 = ' ';

    navigateTo.basicSimpleFormDemoPage();
    onSimpleFormDemoPage.submitTwoInputFieldFormToGetTotal(value1, value2);
  });
});

describe('Spec - Select List Demo', () => {
  it('should display the selected option from dropdown list', () => {
    const option = 'Tuesday';

    navigateTo.selectDropdownListPage();
    onSelectDropdownListPage.selectValueFromSingleSelectList(option);
  });
});

describe('Spec - Multi Select List Demo', () => {
  it('should select a single option from the multiple selection list', () => {
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

describe('Spec - Boostrap modal', () => {
  describe('Single modal', () => {
    it('should launch single modal display with valid modal elements', () => {
      navigateTo.bootstrapModalsPage();
      onBootstrapModalPage.displaySingleBootstrapModal({});
    });

    it('should close single modal display when close button is clicked', () => {
      navigateTo.bootstrapModalsPage();
      onBootstrapModalPage.displaySingleBootstrapModal({ closeModal: true });
    });

    it('should close single modal display when "Save changes" button is clicked', () => {
      navigateTo.bootstrapModalsPage();
      onBootstrapModalPage.displaySingleBootstrapModal({ saveChanges: true });
    });
  });

  describe('Multiple modals', () => {
    it('should launch parent modal display valid modal elements', () => {
      navigateTo.bootstrapModalsPage();
      onBootstrapModalPage.displayMultipleBootstrapParentModal({});
    });

    it('should close parent modal display when close button is clicked', () => {
      navigateTo.bootstrapModalsPage();
      onBootstrapModalPage.displayMultipleBootstrapParentModal({
        closeModal: true,
      });
    });

    it('should close parent modal display when "Save changes" button is clicked', () => {
      navigateTo.bootstrapModalsPage();
      onBootstrapModalPage.displayMultipleBootstrapParentModal({
        saveChanges: true,
      });
    });

    it('should launch child modal display with valid modal elements', () => {
      navigateTo.bootstrapModalsPage();
      onBootstrapModalPage.displayMultipleBootstrapParentModal({});
      onBootstrapModalPage.displayMultipleBootstrapChildModal({});
    });

    it('should close child modal display when close button is clicked', () => {
      navigateTo.bootstrapModalsPage();
      onBootstrapModalPage.displayMultipleBootstrapParentModal({});
      onBootstrapModalPage.displayMultipleBootstrapChildModal({
        closeModal: true,
      });
    });

    it.only('should close child modal display when "Save changes" button is clicked', () => {
      navigateTo.bootstrapModalsPage();
      onBootstrapModalPage.displayMultipleBootstrapParentModal({});
      onBootstrapModalPage.displayMultipleBootstrapChildModal({
        saveChanges: true,
      });
    });
  });
});
