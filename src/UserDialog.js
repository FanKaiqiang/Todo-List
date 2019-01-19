import React, { Component } from 'react'
import { signUp, signIn } from './leanCloud'
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
  switch = (e) => {//切换状态清空输入框
    this.setState({
      selected: e.target.value,
      formData: {
        username: '',
        password: ''
      }
    })
  }
  signUp = (e) => {//注册按键，将填入内容调用注册API
    e.preventDefault()
    let { username, password } = this.state.formData
    if (!username || !password) {
      alert('用户名或密码不得为空')
      return
    }
    let success = (user) => {
      this.props.stateUpdate.call(null, user)
    }
    let error = (error) => {
      switch (error.code) {
        case 202:
          alert('用户名已被占用')
          break
        default:
          alert(error)
          break
      }
    }
    signUp(username, password, success, error)
  }
  signIn = (e) => {//登录按键，将填入内容调用登录API
    e.preventDefault()
    let { username, password } = this.state.formData
    if (!username || !password) {
      alert('用户名或密码不得为空')
      return
    }
    let success = (user) => {
      this.props.stateUpdate.call(null, user)
    }
    let error = (error) => {
      alert('用户名与密码不匹配，请检查用户名或密码是否填写正确')
    }
    signIn(username, password, success, error)
  }
  changeFormData = (e) => {//输入框内容更新时，更新state.fromData
    let stateCopy = JSON.parse(JSON.stringify(this.state))
    if (e.target.type === 'text') {
      stateCopy.formData.username = e.target.value.trim()
    } else {
      stateCopy.formData.password = e.target.value
    }
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