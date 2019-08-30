import React from "react";
import TodoForm from './todo_form';

const TodoList = (props) => (
  <div>
    <ul>{props.todos.map(todo => {
      return (<li key={todo.id}>
        {todo.title}
      </li>)
    })}</ul>
    <TodoForm addTodo={props.addTodo} />

  </div>
 
);

export default TodoList;