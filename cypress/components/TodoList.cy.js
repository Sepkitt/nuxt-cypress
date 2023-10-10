import TodoList from '../../components/TodoList.vue'


describe('TodoList Component', () => {
  let vm;
  beforeEach(() => {
    vm = cy.mount(TodoList); // Mount the component and store the instance in vm
  });
  it('should add a new task', () => {
    const newTask = 'Test task';
    // Type a new task into the input field and press Enter
    cy.getByData('TODO_ADD').should('exist').type(`${newTask}{enter}`);

    // Check if the new task is added to the list
    cy.getByData('TODO_CHECKBOX').should('contain', newTask);
  });

  it('should remove a task', () => {
    // Add a task first
    const newTask = 'Test task';
    cy.getByData('TODO_ADD').type(`${newTask}{enter}`);

    // Click the "Remove" button for the added task
    cy.getByData('TODO_REMOVE').click();

    // Check if the task is removed from the list
    cy.getByData('TODO_CHECKBOX').should('not.exist');
  });

  // Add more test cases as needed
});