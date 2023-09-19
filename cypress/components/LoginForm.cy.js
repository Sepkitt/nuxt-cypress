import LoginForm from '../../components/LoginForm.vue'

describe('<LoginForm />', () => {
  // it('renders', () => {
  //   // see: https://on.cypress.io/mounting-vue
  //   cy.mount(LoginForm)

  // })
  let vm; // Declare a variable to hold the Vue component instance
  beforeEach(() => {
    vm = cy.mount(LoginForm); // Mount the component and store the instance in vm
  });
  it('should display the login form', () => {
    vm.getByData('FORM_HEADER').should('contain', 'Login');
    vm.getByData('FORM').should('exist');
    vm.getByData('FORM_USERNAME_LABEL').should('contain', 'Username:');
    vm.getByData('FORM_USERNAME').should('exist');
    vm.getByData('FORM_PASSWORD_LABEL').should('contain', 'Password:');
    vm.getByData('FORM_PASSWORD').should('exist');
    vm.getByData('FORM_SUBMIT').should('exist');
  });

  it('should log in with valid credentials', () => {
    const username = 'your-username';
    const password = 'your-password';

    vm.getByData('FORM_USERNAME').type(username);
    vm.getByData('FORM_PASSWORD').type(password);
    vm.getByData('FORM').submit();

    vm.contains(`Welcome, ${username}!`);
  });

  it('should not log in with invalid credentials', () => {
    // You can write test cases for invalid credentials here.
    // For example, you can leave the fields empty and check for an error message.
    cy.get('[data-cy=FORM]').submit();
    cy.contains('Welcome').should('not.exist'); // Ensure the welcome message is not displayed
  });
})