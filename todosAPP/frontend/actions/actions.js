
export const ADD_TODOS = "ADD_TODOS";
export const ADD_TODO = "ADD_TODO";
import * as APIUTil from '../util/todo_api_util';

export const addTodos = (todos) => ({
  type: ADD_TODOS,
  todos
});

export const addTodo = (todo) => ({
  type: ADD_TODO,
  todo
});

export const fetchTodos = () => {
  return (dispatch) =>{
    return (APIUTil.fetchTodos().then(todos => {
      dispatch(addTodos(todos));
    }));
  };
};
