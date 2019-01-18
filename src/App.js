import React, { Component } from 'react';
import './App.css';
import './reset.css'
import TodoInput from './TodoInput';
import TodoItem from './TodoItem'
import 'normalize.css'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.id = 0
    this.state = {
      newTodo: 'test',
      todoList: []
    }
  }
  idMaker() {
    return this.id++
  }
  addTodo = (event) => {//传递给input的方法，event为input元素
    this.state.todoList.push({
      id: this.idMaker(),
      title: event.target.value,
      status: null,
      deleted: false
    })
    this.setState({
      newTodo: '',
      todoList: this.state.todoList
    })
  }
  render() {
    let todos = this.state.todoList.map((item, index) => {
      return (
        <li key={index}>
          <TodoItem todo={item} />
        </li>)
    })
    return (
      <div className="App">
        <h1>待办事项</h1>
        <div className="App-header">
          <TodoInput content={this.state.newTodo} onSubmit={this.addTodo} />
        </div>
        <ol>
          {todos}
        </ol>
      </div>
    )

  }
}

