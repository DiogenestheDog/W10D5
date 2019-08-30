export const ADD_TODOS = "ADD_TODOS";
export const ADD_TODO = "ADD_TODO";

export const addTodos = (todos) => ({
  type: ADD_TODOS,
  todos
});

export const addTodo = (todo) => ({
  type: ADD_TODO,
  todo
});

