import Counter from '../../components/Counter.vue'

describe('<Counter />', () => {
  let vm; // Declare a variable to hold the Vue component instance
  beforeEach(() => {
    vm = cy.mount(Counter); // Mount the component and store the instance in vm
  });


  it('displays the initial count value', () => {
    // Verify that the initial count value is 0
    cy.get('[data-cy=COUNTER_VALUE]').should('contain', '0');
  });

  it('increments the count when the Increment button is clicked', () => {
    // Click the Increment button
    cy.get('[data-cy=COUNTER_INCREASE]').click();

    // Verify that the count value has increased to 1
    cy.get('[data-cy=COUNTER_VALUE]').should('contain', '1');
  });

  it('decrements the count when the Decrement button is clicked', () => {
    // Click the Decrement button
    cy.get('[data-cy=COUNTER_DECREASE]').click();

    // Verify that the count value has decreased to -1
    cy.get('[data-cy=COUNTER_VALUE]').should('contain', '-1');
  });


})