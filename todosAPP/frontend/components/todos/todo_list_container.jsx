import { connect } from 'react-redux';
import React from 'react';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import { addTodo, fetchTodos, addTodos } from '../../actions/actions';

const mapsStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
  fetchTodos: todos => dispatch(addTodos(todos))
});

export default connect(mapsStateToProps, mapDispatchToProps)(TodoList);