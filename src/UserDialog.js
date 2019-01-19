import React, { Component } from 'react'
import './UserDialog.scss'

export default class UserDialog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 'signUp',
      formData: {
        username: '',
        password: ''
      }
    }
  }
  switch = (e) => {
    this.setState({
      selected: e.target.value,
      formData: {
        username: '',
        password: ''
      }
    })
  }
  signUp = (e) => {

  }
  signIn = (e) => {

  }
  changeFormData = (e) => {
    let stateCopy = JSON.parse(JSON.stringify(this.state))
    if (e.target.type === 'text') {
      stateCopy.formData.username = e.target.value
    } else {
      stateCopy.formData.password = e.target.value
    }
    console.log(stateCopy)
    this.setState(stateCopy)
  }
  render() {
    return (
      <div className="UserDialog-Wrapper">
        <div className="UserDialog">
          <nav>
            <label><input onChange={this.switch} type="radio" value="signUp" checked={this.state.selected === 'signUp'} />注册</label>
            <label><input onChange={this.switch} type="radio" value="signIn" checked={this.state.selected === 'signIn'} />登录</label>
          </nav>
          <div className="panes">
            {this.state.selected === 'signUp' ?
              (
                <form className="signup" onSubmit={this.signUp}>
                  <div className="row">
                    <label>用户名</label>
                    <input type="text" value={this.state.formData.username} onChange={this.changeFormData} />
                  </div>
                  <div className="row">
                    <label>密码</label>
                    <input type="password" value={this.state.formData.password} onChange={this.changeFormData} />
                  </div>
                  <div className="row actions">
                    <button type="submit">注册</button>
                  </div>
                </form>
              ) :
              (
                <form className="signIn" onSubmit={this.signIn}>
                  <div className="row">
                    <label>用户名</label>
                    <input type="text" value={this.state.formData.username} onChange={this.changeFormData} />
                  </div>
                  <div className="row">
                    <label>密码</label>
                    <input type="password" value={this.state.formData.password} onChange={this.changeFormData} />
                  </div>
                  <div className="row actions">
                    <button type="submit">登录</button>
                  </div>
                </form>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}