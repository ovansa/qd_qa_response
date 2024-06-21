import { navigateTo } from '../support/page_objects/homePage';
import { onSimpleFormDemoPage } from '../support/page_objects/simpleFormDemoPage';

beforeEach(() => {
  cy.visit('/');
});

describe('Spec - Single Input Field', () => {
  it('should display single word', () => {
    const message = 'ABCDEF';

    navigateTo.basicSimpleFormDemoPage();
    onSimpleFormDemoPage.submitSingleInputFieldFormToShowMessage(message);
  });

  it('should display multiple words', () => {
    const message = 'ABCDEF ABCDEF ABCDEF ABCDEF';

    navigateTo.basicSimpleFormDemoPage();
    onSimpleFormDemoPage.submitSingleInputFieldFormToShowMessage(message);
  });

  it('should display alphanumeric characters', () => {
    const message = 'ABcdE12345.$%';

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
