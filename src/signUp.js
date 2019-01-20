import React, { Component } from 'react'

export default class SignUp extends Component {
  render() {
    return (
      <form className="signup" onSubmit={this.props.onSubmit}>
        <div className="row">
          <label>用户名</label>
          <input type="text" value={this.props.formData.username} onChange={this.props.onChange} />
        </div>
        <div className="row">
          <label>密码</label>
          <input type="password" value={this.props.formData.password} onChange={this.props.onChange} />
        </div>
        <div className="row">
          <label>邮箱</label>
          <input type="email" value={this.props.formData.email} onChange={this.props.onChange} />
        </div>
        <div className="row actions">
          <button type="submit">注册</button>
        </div>
      </form>
    )

  }
}
