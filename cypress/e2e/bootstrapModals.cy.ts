import { navigateTo } from '../support/page_objects/homePage';
import { onBootstrapModalPage } from '../support/page_objects/bootstrapModalPage';

beforeEach(() => {
  cy.visit('/');
});

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

  it('should close child modal and parent modal display when "Save changes" button is clicked', () => {
    navigateTo.bootstrapModalsPage();
    onBootstrapModalPage.displayMultipleBootstrapParentModal({});
    onBootstrapModalPage.displayMultipleBootstrapChildModal({
      saveChanges: true,
    });
  });
});
