import {addTodos, addTodo, ADD_TODO, ADD_TODOS} from "../actions/actions.js";

const defaultState = {
  1: {
    id: 1,
    title: "shave my beard",
    body: "so smooth",
    done: true
  },
  2: {
    id: 2,
    title: " my beard",
    body: "jdlkfjsks",
    done: true
  },
  3: {
    id: 3,
    title: "sleep?",
    body: "zzz",
    done: false
  }
};

const todosReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type){
    case ADD_TODOS:
      action.todos.forEach( todo => {
        nextState[todo.id] = todo;
      });
      return nextState;
    case ADD_TODO:
      nextState[action.todo.id] = action.todo;
      return nextState;  
    default:
      return state;
  }
};

export default todosReducer;