import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import './App.scss'
import * as localStore from './localStore'
import AV from 'leancloud-storage'

var APP_ID = 'pobPweP83M7Wt1hgTDn7kRPI-gzGzoHsz';
var APP_KEY = 't0YfmdrLBhYvd9T0Dc89b8P8';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.save({
  words: 'Hello World!'
}).then(function(object) {
  alert('LeanCloud Rocks!');
})

export default class App extends Component {
  constructor(props) {
    super(props)
    this.id = 0
    this.state = {
      newTodo: 'test',
      todoList: localStore.load('todoList') || []
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
  componentDidUpdate() {
    localStore.save('todoList', this.state.todoList)
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
        <h1>待办事项</h1>
        <div className="App-header">
          <TodoInput content={this.state.newTodo}
            onSubmit={this.addTodo}
            onChange={this.changeTitle} />
        </div>
        <ol>
          {todos}
        </ol>
      </div>
    )

  }
}

