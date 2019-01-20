import React, { Component } from 'react'

export default class SignIn extends Component{
  render(){
    return(
      <form className="signIn" onSubmit={this.props.onSubmit}>
        <div className="row">
          <label>用户名</label>
          <input type="text" value={this.props.formData.username} onChange={this.props.onChange} />
        </div>
        <div className="row">
          <label>密码</label>
          <input type="password" value={this.props.formData.password} onChange={this.props.onChange} />
        </div>
        <div className="row actions">
          <button type="submit">登录</button>
          <span onClick={this.props.onForgotPassword}>忘记密码了？</span>
        </div>
      </form>
    )
  }
}