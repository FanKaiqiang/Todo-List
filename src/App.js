import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import UserDialog from './UserDialog'
import './App.scss'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.id = 0
    this.state = {
      user: {},
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
      complete: false,
      deleted: false
    })
    this.setState({
      newTodo: '',
      todoList: this.state.todoList
    })
  }

  changeTitle = (event) => {
    this.setState({
      newTodo: event.target.value,
      todoList: this.state.todoList
    })
  }

  toggle = (todo) => {
    todo.complete = !todo.complete
    this.setState(this.state)
  }

  delete = (todo) => {
    todo.deleted = true
    this.setState(this.state)
  }

  onSignUp = (user) =>{
    this.setState({
      ...this.state,
      user
    })
  }

  render() {
    let todos = this.state.todoList.filter(item => !item.deleted).map((item, index) => {
      return (
        <li key={index}>
          <TodoItem todo={item} onToggle={this.toggle} onDelete={this.delete.bind(this)} />
        </li>)
    })
    return (
      <div className="App">
        <h1>{this.state.user.username||'我'}的待办</h1>
        <div className="App-header">
          <TodoInput content={this.state.newTodo}
            onSubmit={this.addTodo}
            onChange={this.changeTitle} />
        </div>
        <ol>
          {todos}
        </ol>
        {this.state.user.id ? null : <UserDialog  onSignUp={this.onSignUp}/>}
      </div>
    )

  }
}