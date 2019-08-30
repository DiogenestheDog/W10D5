import { connect } from 'react-redux';
import React from 'react';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import { addTodo, ADD_TODO } from '../../actions/actions';

const mapsStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo))
});

export default connect(mapsStateToProps, mapDispatchToProps)(TodoList);