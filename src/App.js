import React, { Component } from 'react'
import TodoInput from './component/TodoInput'
import TodoItem from './component/TodoItem'
import UserDialog from './component/UserDialog'
import Aside from './component/aside'
import { getCurrentUser, signOut, TodoModel } from './leanCloud'
import './style/App.scss'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.id = 0
    this.state = {
      user: getCurrentUser() || {},
      newTodo: '',
      todoList: [],
      option: 'doing'
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
    if (event.target.value.trim() === '') {
      alert('任务内容不得为空！')
    }
    let value = event.target.value
    event.target.value = ''
    let newTodo = {
      title: value,
      status: event.target.dataset.y === 'van' ? 'completed' : '',
      deleted: event.target.dataset.x === 'imp'
    }
    TodoModel.create(newTodo, (id) => {
      newTodo.id = id
      this.state.todoList.push(newTodo)
      this.setState({
        ...this.state,
        newTodo: '',
        todoList: this.state.todoList
      })
    }, (error) => {
      console.log(error)
    })
  }

  changeTitle = (event) => {
    this.setState({
      ...this.state,
      newTodo: event.target.value,
      todoList: this.state.todoList
    })
  }

  toggle = (todo) => {//勾选（更新）操作
    let oldStatus = todo.status
    console.log(oldStatus)
    todo.status = todo.status === 'completed' ? '' : 'completed'
    TodoModel.update(todo, () => {
      this.setState(this.state)
    }, (error) => {
      todo.status = oldStatus
      this.setState(this.state)
    })
  }

  delete = (todo) => {//重要操作
    todo.deleted = !todo.deleted
    TodoModel.update(todo, () => {
      this.setState(this.state)
    })
  }

  trueDelete = (todo) => {//删除操作
    if(window.confirm('是否要删除该项任务？')){
      TodoModel.destroy(todo.id)
    }
    window.location.reload()
  }

  stateUpdate = (user) => {//登录更新state
    this.setState({
      ...this.state,
      user
    })
    if (user) {
      TodoModel.getByUser(user, (todos) => {
        let stateCopy = JSON.parse(JSON.stringify(this.state))
        stateCopy.todoList = todos
        this.setState(stateCopy)
      })
    }
  }

  signOut = () => {//调用登出API，并重置state
    signOut()
    this.stateUpdate({})
  }

  changeOption = (e) => {
    this.setState({
      ...this.state,
      option: e.target.dataset.key
    })
  }



  render() {
    // 
    let doingTodos = this.state.todoList.filter(item => item.status === '').map((item, index) => {
      return (
        <li key={index}>
          <TodoItem todo={item} onToggle={this.toggle} onDelete={this.delete} trueDelete={this.trueDelete}/>
        </li>)
    })
    let impTodos = this.state.todoList.filter(item => item.deleted).map((item, index) => {
      return (
        <li key={index}>
          <TodoItem todo={item} onToggle={this.toggle} onDelete={this.delete} trueDelete={this.trueDelete}/>
        </li>)
    })
    let vanTodos = this.state.todoList.filter(item => item.status === 'completed').map((item, index) => {
      return (
        <li key={index}>
          <TodoItem todo={item} onToggle={this.toggle} onDelete={this.delete} trueDelete={this.trueDelete}/>
        </li>)
    })

    let doing = (
      <div className="App">
        <Aside user={this.state.user} signOut={this.signOut} onChange={this.changeOption} />
        <div className="App-header">
          <h1>进行中的事项</h1>
          <span>当前有 {doingTodos.length} 条任务正在进行中</span>
        </div>
        <ol>
          {doingTodos}
          <li>
            <TodoInput content={this.state.newTodo}
              onSubmit={this.addTodo}
              onChange={this.changeTitle} />
          </li>
        </ol>
      </div>)
    let important = (
      <div className="App">
        <Aside user={this.state.user} signOut={this.signOut} onChange={this.changeOption} />
        <div className="App-header">
          <h1>重要事项</h1>
          <span>当前有 {impTodos.length} 条重要任务</span>
        </div>
        <ol>
          {impTodos}
          <li>
            <TodoInput content={this.state.newTodo}
              onSubmit={this.addTodo}
              onChange={this.changeTitle}
              important={true} />
          </li>
        </ol>
      </div>)
    let van = (
      <div className="App">
        <Aside user={this.state.user} signOut={this.signOut} onChange={this.changeOption} option={this.state.option} />
        <div className="App-header">
          <h1>已完成的事项</h1>
          <span>当前有 {vanTodos.length} 条任务已完成</span>
        </div>
        <ol>
          {vanTodos}
          <li>
            <TodoInput content={this.state.newTodo}
              onSubmit={this.addTodo}
              onChange={this.changeTitle}
              van={true} />
          </li>
        </ol>
      </div>)
    let judge = () => {
      switch (this.state.option) {
        case 'important':
          return important
        case 'van':
          return van
        default:
          return doing
      }
    }
    return (
      <div>
        {this.state.user.id ?
          judge()
          : <UserDialog stateUpdate={this.stateUpdate} />}
      </div>
    )

  }
}