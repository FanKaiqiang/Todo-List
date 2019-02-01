import React, { Component } from 'react'
import TodoInput from './component/TodoInput'
import TodoItem from './component/TodoItem'
import UserDialog from './component/UserDialog'
import { getCurrentUser, signOut , TodoModel} from './leanCloud'
import './style/App.scss'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.id = 0
    this.state = {
      user: getCurrentUser() || {},
      newTodo: 'test',
      todoList: []
    }
    let user = getCurrentUser()
    if (user) {
      TodoModel.getByUser(user, (todos) => {
        let stateCopy = JSON.parse(JSON.stringify(this.state))
        stateCopy.todoList = todos
        this.setState(stateCopy)
      })
    }
  }

  idMaker() {
    return this.id++
  }

  addTodo = (event) => {//传递给input的方法，event为input元素
    let newTodo = {
      title: event.target.value,
      complete: false,
      deleted: false
    }
    TodoModel.create(newTodo, (id) => {
      newTodo.id = id
      this.state.todoList.push(newTodo)
      this.setState({
        newTodo: '',
        todoList: this.state.todoList
      })
    }, (error) => {
      console.log(error)
    })
  }

  changeTitle = (event) => {
    this.setState({
      newTodo: event.target.value,
      todoList: this.state.todoList
    })
  }

  toggle = (todo) => {//勾选（更新）操作
    let oldStatus = todo.status
    todo.status = todo.status === 'completed' ? '' : 'completed'
    TodoModel.update(todo, () => {
      this.setState(this.state)
    }, (error) => {
      todo.status = oldStatus
      this.setState(this.state)
    })
  }

  delete = (todo) => {//删除操作
    TodoModel.destroy(todo.id, () => {
      todo.deleted = true
      this.setState(this.state)
    })
  }

  stateUpdate = (user) => {//登录更新state
    this.setState({
      ...this.state,
      user
    })
  }

  signOut = () =>{//调用登出API，并重置state
    signOut()
    this.stateUpdate({})
  }

  render() {
    let todos = this.state.todoList.filter(item => !item.deleted).map((item, index) => {
      return (
        <li key={index}>
          <TodoItem todo={item} onToggle={this.toggle} onDelete={this.delete} />
        </li>)
    })
    return (
      <div className="App">
        <h1>
          {this.state.user.username || '我'}的待办
        
        </h1>
        {this.state.user.id ? <button onClick={this.signOut}>登出</button> : null}
        <div className="App-header">
          <TodoInput content={this.state.newTodo}
            onSubmit={this.addTodo}
            onChange={this.changeTitle} />
        </div>
        <ol>
          {todos}
        </ol>
        {this.state.user.id ? null : <UserDialog stateUpdate={this.stateUpdate} />}
      </div>
    )

  }
}