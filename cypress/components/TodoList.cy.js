import TodoList from '../../components/TodoList.vue'

describe('<TodoList />', () => {
  beforeEach(() => {
    vm = cy.mount(TodoList); // Mount the component and store the instance in vm
  });
})