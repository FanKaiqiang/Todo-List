import React, { Component } from 'react'

export default class TodoInput extends Component {
  submit = (e)=> {
    if (e.key === 'Enter') {
      this.props.onSubmit(e)
    }
  }
  changeTitle=(e)=>{
    this.props.onChange(e)
  }
  render() {
    return (
      <input type="text" defaultValue={this.props.content} onKeyPress={this.submit} onChange={this.changeTitle} />
    )
  }
}
