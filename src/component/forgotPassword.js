import React, { Component } from 'react'
import '../style/forgotPassword.scss'

export default class ForgotPassword extends Component {
  render() {
    return (
      <div className="forgotPassword">
        <nav>
          {'登录'}
          <div className="closeWrapper" onClick={this.props.onClick}>
            <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5791"><path d="M934.184927 199.723787 622.457206 511.452531l311.727721 311.703161c14.334473 14.229073 23.069415 33.951253 23.069415 55.743582 0 43.430138-35.178197 78.660524-78.735226 78.660524-21.664416 0-41.361013-8.865925-55.642275-23.069415L511.149121 622.838388 199.420377 934.490384c-14.204513 14.20349-33.901111 23.069415-55.642275 23.069415-43.482327 0-78.737272-35.230386-78.737272-78.660524 0-21.792329 8.864902-41.513486 23.094998-55.743582l311.677579-311.703161L88.135828 199.723787c-14.230096-14.255679-23.094998-33.92567-23.094998-55.642275 0-43.430138 35.254945-78.762855 78.737272-78.762855 21.741163 0 41.437761 8.813736 55.642275 23.069415l311.727721 311.727721L822.876842 88.389096c14.281261-14.255679 33.977859-23.069415 55.642275-23.069415 43.557028 0 78.735226 35.332716 78.735226 78.762855C957.254342 165.798117 948.5194 185.468109 934.184927 199.723787" p-id="5792"></path></svg>
          </div>
        </nav>
        <form onSubmit={this.props.onSubmit}> {/* 登录*/}
          <div className="title">重置你的 To-Do List 账户密码</div>
          <div className="ask">请输入注册账号时填写的邮箱地址</div>
          <div className="row">
            <label>邮箱</label>
            <input type="email" value={this.props.formData.email}
              onChange={this.props.onChange} />
          </div>
          <div className="tip">我们将会向该邮箱发送一封包含重置密码的特殊链接的电子邮件，请注意查收</div>
          <button className="back" type="button" onClick={this.props.onForgotPassword}>返回</button>
          <button className="continue" type="submit">发送邮件</button>
        </form>
      </div>
    )

  }
}
