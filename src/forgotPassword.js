import React, { Component } from 'react'

export default class ForgotPassword extends Component {
  render() {
    return (
      <div className="forgotPassword">
        <h3>
          重置密码
        </h3>
        <form className="forgotPassword" onSubmit={this.props.onSubmit}> {/* 登录*/}
          <div className="row">
            <label>邮箱</label>
            <input type="email" value={this.props.formData.email}
              onChange={this.props.onChange} />
          </div>
          <div className="row actions">
            <button type="submit">发送重置邮件</button>
            <span onClick={this.props.onForgotPassword}>返回登录</span>
          </div>
        </form>
      </div>
    )

  }
}
