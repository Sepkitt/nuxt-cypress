<template>
  <div id="app">
    <Counter />
    <TodoList />
    <LoginForm />

    <ModalView />
  </div>
</template>

<script>
import Counter from '../components/Counter';
import TodoList from '../components/TodoList';
import LoginForm from '../components/LoginForm';
import ModalView from '../components/LoginForm';

export default {
  components: {
    Counter,
    TodoList,
    LoginForm,
    ModalView
  },
};
</script>
