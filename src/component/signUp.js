import React from 'react'

export default function SignUp(props) {
  return (
    <form className="signup" onSubmit={props.onSubmit}>
      <div className="title">添加你的 To-Do List 账户</div>
      <div className="ask">创建你的账户并登录，然后就可以开始创建待办事项了</div>
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
      <button className="back" type="button" onClick={props.back}>上一步</button>
      <button className="continue" type="submit">注册并登录</button>
    </form>
  )


}
