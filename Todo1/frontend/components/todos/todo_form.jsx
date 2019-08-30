import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: ''}
    this.handleSubmit = this.handleSubmit.bind(this);
    this.typingHandler = this.typingHandler.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let todo = {
      id: (Math.random * 10000),
      title: this.state.title,
      body: '',
      done: false
    };
    this.props.addTodo(todo);
  }

  typingHandler(e){
    e.preventDefault()
    this.setState({title: e.target.value});
  }

  render() {
    return(
      <form className="form">
        <label>
          ADD Todo
          <input onChange={this.typingHandler} type="text"className="todoInput"/>
        </label>
        <input type="submit" value="Add Todo" onClick={this.handleSubmit} />

      </form>
          
    )
  }
}

export default TodoForm;