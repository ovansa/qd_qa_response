export class BootstrapModalPage {
  displaySingleBootstrapModal({
    closeModal = false,
    saveChanges = false,
  }: {
    closeModal?: boolean;
    saveChanges?: boolean;
  }) {
    cy.get('[href="#myModal0"]').click();

    cy.findById('myModal0').within(() => {
      cy.findByClass('modal-content').should('be.visible');
      cy.findByClass('modal-title').should('contain.text', 'Modal Title');
      cy.findByClass('modal-body').should(
        'contain.text',
        'This is the place where the content for the modal dialog displays'
      );
      cy.findByText('Close').should('be.visible');
      cy.findByText('Save changes').should('be.visible');

      if (closeModal) {
        cy.findByText('Close').click();
        cy.findByClass('modal-content').should('not.be.visible');
      }

      if (saveChanges) {
        cy.findByText('Save changes').click();
        cy.findByClass('modal-content').should('not.be.visible');
      }
    });
  }

  displayMultipleBootstrapParentModal({
    closeModal = false,
    saveChanges = false,
  }: {
    closeModal?: boolean;
    saveChanges?: boolean;
  }) {
    cy.get('[href="#myModal"]').click();

    cy.findById('myModal').within(() => {
      cy.findByClass('modal-content').should('be.visible');
      cy.findByClass('modal-title').should('contain.text', 'First Modal');
      cy.findByClass('modal-body').should(
        'contain.text',
        'Click launch modal button to launch second modal.'
      );

      cy.findByText('Close').should('be.visible');
      cy.findByText('Save changes').should('be.visible');
      cy.findByText('Launch modal').should('be.visible');

      if (closeModal) {
        cy.findByText('Close').click();
        cy.findByClass('modal-content').should('not.be.visible');
      }

      if (saveChanges) {
        cy.findByText('Save changes').click();
        cy.findByClass('modal-content').should('not.be.visible');
      }
    });
  }

  displayMultipleBootstrapChildModal({
    closeModal = false,
    saveChanges = false,
  }: {
    closeModal?: boolean;
    saveChanges?: boolean;
  }) {
    cy.findById('myModal').within(() => {
      cy.findByText('Launch modal').click();
    });

    cy.findById('myModal2').should('be.visible');

    cy.findById('myModal2').within(() => {
      cy.findByText('Close').should('be.visible');
      cy.findByText('Save changes').should('be.visible');

      if (closeModal) {
        cy.findByText('Close').click();
        cy.findByClass('modal-content').should('not.be.visible');
      }

      if (saveChanges) {
        cy.findByText('Save changes').click();
        cy.findByClass('modal-content').should('not.be.visible');
      }
    });
  }
}

export const onBootstrapModalPage = new BootstrapModalPage();
