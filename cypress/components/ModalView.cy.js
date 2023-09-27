import ModalView from '@/modal/ModalView';

describe('<ModalView />', () => {

  // Set the VITE_CYPRESS environment variable before running the test
  before(() => {
    console.log('Hello')
    Cypress.env('VITE_CYPRESS', 'true');
  });


  it('should open and close the modal', () => {
    // Mount the ModalView component
    cy.mount(ModalView);

    // ...your test code here
    // // Click the "Open Modal" button in the ModalView component
    // cy.get('button:contains("Open Modal")').click();

    // // Check if the modal is displayed
    // cy.get('[data-cy=MODAL_OVERLAY]').should('be.visible');
    // cy.get('[data-cy=MODAL_HEADER]').should('be.visible');
    // cy.get('[data-cy=MODAL_BODY]').should('be.visible');
    // cy.get('[data-cy=MODAL_CLOSE]').should('be.visible');

    // // Close the modal by clicking the close button
    // cy.get('[data-cy=MODAL_CLOSE]').click();

    // // Check if the modal is closed
    // cy.get('[data-cy=MODAL_OVERLAY]').should('not.be.visible');
  });
});
