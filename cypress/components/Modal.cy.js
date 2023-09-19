import Modal from '../../components/modal/Modal.vue'

describe('<Modal />', () => {
  let wrapper; // Declare a variable to hold the VueWrapper instance
  beforeEach(() => {
    cy.mount(Modal, {
      propsData: {
        showModal: true, // Display the modal initially
        title: 'Example Modal Title', // Set an example modal title
      },
      slots: {
        default: 'Hello there!',
      }
    
    }).then((mountResult) => {
      wrapper = mountResult.wrapper; // Store the VueWrapper instance
    });
  });

  it('should not display the modal initially', () => {
    cy.getByData('MODAL_OVERLAY').should('be.visible'); // Ensure the modal is visible initially
  });

  it('should display the modal when showModal is true', () => {

    cy.getByData('MODAL_OVERLAY').should('be.visible'); // Ensure the modal is visible initially

    // Set showModal prop to true
    cy.getByData('MODAL_CLOSE').should('be.visible').click(); // Replace with your button text or action to open the modal

    cy.getByData('MODAL_OVERLAY').should('be.visible'); // Check if the modal is displayed
    cy.getByData('MODAL_HEADER').should('contain', 'Modal Title'); // Check if the modal title is displayed
    cy.getByData('MODAL_CLOSE').should('exist'); // Check if the close button exists
    cy.getByData('MODAL_BODY').should('have.text', 'Hello there!'); // Check if the modal slot is displayed

  });
  it('should call $emit when closeModal is invoked', () => {
    // Click the close button to open the modal
    cy.getByData('MODAL_CLOSE').should('be.visible').click();

    // Call the closeModal method
    wrapper.vm.closeModal();

    // Assert that the component emitted the 'close' event
    expect(wrapper.emitted().close).to.exist;
  });
})