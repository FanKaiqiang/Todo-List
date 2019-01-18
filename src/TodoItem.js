import React, { Component } from 'react';
import './TodoItem.scss'

export default class TodoItem extends Component {
  toggle = () => {
    this.props.onToggle(this.props.todo)
  }
  delete = () => {
    this.props.onDelete(this.props.todo)
  }
  render() {
    return (
      <div className="TodoItem">
        <input type="checkbox" checked={this.props.todo.complete}
          onChange={this.toggle} />
        <span className="title">{this.props.todo.title}</span>
        <button onClick={this.delete}>删除</button>
      </div>
    )
  }
}