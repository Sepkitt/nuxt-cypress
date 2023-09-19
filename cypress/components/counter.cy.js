import Counter from '../../components/Counter.vue'

describe('<Counter />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Counter)
  })
})