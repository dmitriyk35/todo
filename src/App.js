import React, {Component} from 'react';

class TodoList extends Component {

  constructor() {
    super();
    this.state = {
      todos: [],
      currentToDo: "",
    };
    this.deleteItem = this.deleteItem.bind(this)
  }


  handleChange = (event) => {
    console.log(event.target.value)
    // const target = event.target;
    // const value = target.type === 'checkbox' ? target.checked : target.value;
    // // const name = target.currentToDo;

    this.setState({
      currentToDo: event.target.value,
    });
    // console.log('Change detected. State updated ' + ' = ' + value);
  };



  addItem = (event) => {
    event.preventDefault();
    this.state.todos.push(this.state.currentToDo)
    this.setState(
      this.state
    );
    console.log("addItem Method fired");
  };

  deleteItem = (index) => {
  // const todos = this.state.todos.filter((todo, todoIndex) => {
  //   return todoIndex !== index
  // })
  // this.state.todos.splice(-1)
    // this.state.todos.splice(-1)
    this.setState(
      this.state.todos.splice(-1)
    );
  };


  render() {
    return (
      <div className="container">
      {console.log(this.state.todos)}
        <form onSubmit={this.addItem}>
          <label htmlFor="taskName">Task Name:</label>
          <input onChange={this.handleChange} name="tastName" type="text" placeholder="Add todo here!" />
          <button type="submit">Add Task</button>
        </form>

        <ul>
        {this.state.todos.map(todos => {
          return (
            <li onClick={this.deleteItem}>
              {todos} <button>Delete</button>
            </li>
          );
        })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
