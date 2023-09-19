import TodoList from '../../components/TodoList.vue'

describe('<TodoList />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(TodoList)
  })
})