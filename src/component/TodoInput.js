import React, { Component } from 'react'
import '../style/TodoInput.scss'


export default class TodoInput extends Component {
  submit=(e)=> {
    if (e.key === 'Enter') {
      this.props.onSubmit(e)
    }
  }
  render() {
    return (
      <div className="inputArea">
        <svg className="icon" viewBox="0 0 1024 1024" ><path d="M1024 448H576V0H448v448H0v128h448v448h128V576h448z" p-id="1951"></path></svg>
        <input type="text"
          defaultValue={this.props.content}
          onKeyPress={this.submit}
          onChange={this.props.onChange}
          placeholder="在此处添加任务，按回车提交"
          data-x={this.props.important?"imp":''}
          data-y={this.props.van?"van":''}/>
      </div>
    )
  }
}
