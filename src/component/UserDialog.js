import React, { Component } from 'react'
import ForgotPassword from './forgotPassword'
import SignInOrSignUp from './signInOrSignUp'
import Welcome from './welcome'
import { signUp, signIn, sendPasswordResetEmail } from '../leanCloud'
import '../style/UserDialog.scss'
import "../style/form.scss"

export default class UserDialog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 'signIn',
      show: false,
      showSign: true,
      formData: {
        username: '',
        password: '',
        email: ''
      }
    }
  }

  switch = (e) => {//切换状态清空输入框
    this.setState({
      selected: e.target.value,
      showSign: true,
      formData: {
        username: '',
        password: '',
        email: ''
      }
    })
  }

  signUp = (e) => {//注册按键，将填入内容调用注册API
    e.preventDefault()
    let { username, password, email } = this.state.formData
    let re = /^[a-z0-9]+@[a-z0-9]+\.[a-z]+$/i
    if (!username || !password || !email) {
      alert('用户名、密码、或邮箱不得为空')
      return
    } else if (!re.test(email)) {
      alert('请输入正确的邮箱格式')
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
        case 203:
          alert('此邮箱已被占用')
          break
        default:
          alert(error)
          break
      }
    }
    signUp(username, password, email, success, error)
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
      stateCopy.formData[e.target.type] = e.target.value
    }
    this.setState(stateCopy)
  }

  showForgotPassword = () => {//展示忘记密码界面
    this.setState({
      ...this.state,
      showSign: !this.state.showSign
    })
  }

  resetPassword = (e) => {
    e.preventDefault()
    sendPasswordResetEmail(this.state.formData.email)
  }

  showLogin = (e) => {
    this.setState({
      ...this.state,
      show: !this.state.show
    })
  }

  render() {
    return (
      <div className="UserDialog-Wrapper">
        <Welcome onClick={this.showLogin} />
        {this.state.show ? <div className="UserDialog">
          {this.state.showSign ?
            <SignInOrSignUp state={this.state}
              switch={this.switch}
              onSignIn={this.signIn}
              onSignUp={this.signUp}
              onChange={this.changeFormData}
              onForgotPassword={this.showForgotPassword}
              onClick={this.showLogin}
            />
            :
            <ForgotPassword formData={this.state.formData}
              onSubmit={this.resetPassword}
              onChange={this.changeFormData}
              onForgotPassword={this.showForgotPassword}
            />}
        </div> : null}
      </div >
    )
  }
}