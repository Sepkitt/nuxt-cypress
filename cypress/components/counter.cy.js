import Counter from '../../components/Counter.vue'

describe('<Counter />', () => {
  let vm; // Declare a variable to hold the Vue component instance
  beforeEach(() => {
    vm = cy.mount(Counter); // Mount the component and store the instance in vm
  });


  it('should display the initial count', () => {
    cy.contains('Count: 0'); // Check if the initial count is displayed as 0
  });

  it('should increment the count', () => {
    cy.contains('Count: 0'); // Ensure the initial count is 0
    cy.get('button:contains("Increment")').click(); // Click the Increment button
    cy.contains('Count: 1'); // Check if the count has incremented to 1
  });

  it('should decrement the count', () => {
    cy.contains('Count: 0'); // Ensure the initial count is 0
    cy.get('button:contains("Decrement")').click(); // Click the Decrement button
    cy.contains('Count: -1'); // Check if the count has decremented to -1
  });

})