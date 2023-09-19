import Modal from '../../components/modal/Modal.vue'

describe('<Modal />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Modal)
  })
})