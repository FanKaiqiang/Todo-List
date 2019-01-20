import React from 'react'

export default function SignUp (props) {

    return (
      <form className="signup" onSubmit={props.onSubmit}>
        <div className="row">
          <label>用户名</label>
          <input type="text" value={props.formData.username} onChange={props.onChange} />
        </div>
        <div className="row">
          <label>密码</label>
          <input type="password" value={props.formData.password} onChange={props.onChange} />
        </div>
        <div className="row">
          <label>邮箱</label>
          <input type="email" value={props.formData.email} onChange={props.onChange} />
        </div>
        <div className="row actions">
          <button type="submit">注册</button>
        </div>
      </form>
    )


}
