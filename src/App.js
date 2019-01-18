import React, { Component } from 'react';
import './App.css';
import './reset.css'
import TodoInput from './TodoInput';
import TodoItem from './TodoItem'
import 'normalize.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newTodo: 'test',
      todoList: [
        { id: 1, title: '第一条待办事项' },
        { id: 2, title: '第二条待办事项' },
        { id: 3, title: '第三条待办事项' },
      ]
    }
  }
  addTodo(){
    console.log('我得添加一个 todo 了')
  }
  render() {
    let todos = this.state.todoList.map((item,index) => {
      return (
      <li key={index}>
        <TodoItem  todo={item} />  
      </li>)
    })
    return (
      <div className="App">
        <h1>待办事项</h1>
        <div className="App-header">
          <TodoInput content={this.state.newTodo} onSubmit={this.addTodo}/>
        </div>
        <ol>
          {todos}
        </ol>
      </div>
    )

  }
}

export default App;
