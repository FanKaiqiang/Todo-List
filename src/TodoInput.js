import React, { Component } from 'react'

export default class TodoInput extends Component {
  submit = (e)=> {
    if (e.key === 'Enter') {
      console.log('用户按回车了')
      this.props.onSubmit(e)
    }
  }
  changeTitle=(e)=>{
    console.log(1)
    this.props.onChange(e)
  }
  render() {
    return (
      <input type="text" defaultValue={this.props.content} onKeyPress={this.submit} onChange={this.changeTitle} />
    )
  }
}
