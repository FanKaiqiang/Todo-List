import React, { Component } from 'react';

export default class TodoItem extends Component {
  toggle = () => {
    this.props.onToggle(this.props.todo)
  }
  delete = ()=>{
    this.props.onDelete(this.props.todo)
  }
  render() {
    return (
      <div>
        <input type="checkbox" checked={this.props.todo.complete}
          onChange={this.toggle} />
        {this.props.todo.title}
        <button onClick={this.delete}>删除</button>
      </div>
    )
  }
}