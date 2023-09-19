import ModalView from '../../components/modal/ModalView.vue'

describe('<ModalView />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(ModalView)
  })
})