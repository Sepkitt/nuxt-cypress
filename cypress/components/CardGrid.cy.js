import CardGrid from '../../components/CardGrid.vue'
// card.spec.js

describe('Card Component', () => {
  let vm; // Declare a variable to hold the Vue component instance
  beforeEach(() => {
    vm = cy.mount(CardGrid); // Mount the component and store the instance in vm
  });

  it('renders the card grid with 9 items', () => {
    // Check if the card grid has 9 items by querying the data-cy attribute.
    // cy.getByData('CARD_GRID').should('have.length', 9);
  });

  it('displays images in each card', () => {
    // // Check if each card (v-img) has an image (src attribute).
    // cy.getByData('CARD_IMG').each(($img) => {
    //   cy.wrap($img).should('have.attr', 'src').and('include', 'https://picsum.photos/');
    // });
  });

  it('displays a progress circle as a placeholder', () => {
    // // Check if each card has a progress circular element as a placeholder.
    // cy.getByData('CARD_placeholder').each(($placeholder) => {
    //   cy.wrap($placeholder).should('exist');
    //   cy.wrap($placeholder).find('CARD_PROGRESS').should('exist');
    // });
  });

  // Add more test cases as needed.
});