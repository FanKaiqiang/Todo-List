import React, { Component } from 'react';
import './App.css';
import TodoInput from './TodoInput';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTodo: 'test',
      todoList: [
        { id: 1, title: '第一条待办事项' }
      ]
    }
  }
  render() {
    let todos = this.state.todoList.map((item)=>{
      return <li>{item.title}</li>
    })
    return (
      <div className="App">
        <h1>待办事项</h1>
        <div className="App-header">
          <TodoInput content={this.state.newTodo} />
        </div>
        <ol>
          {todos}
        </ol>
      </div>
    )

  }
}

export default App;
