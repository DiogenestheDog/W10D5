import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
//junk
import {addTodo, addTodos, ADD_TODO, ADD_TODOS} from './actions/actions';
import APP from './components/app';
import {allTodos} from './reducers/selectors';
window.ADD_TODOS = ADD_TODOS;
window.ADD_TODO = ADD_TODO;
window.addTodos = addTodos;
window.addTodo = addTodo;
window.configureStore = configureStore;
window.allTodos = allTodos;
window.todosArray = [{
  id: 1,
  title: 'wash car',
  body: 'with soap',
  done: false
}, {
  id: 2,
  title: 'wash dog',
  body: 'with shampoo',
  done: true
}];

document.addEventListener('DOMContentLoaded', () =>{
  let root = document.querySelector('#root');
  ReactDOM.render(<Root store={configureStore}/>, root);
});