import React from 'react'

export default function SignIn(props) {
  return (
    <form className="signIn" onSubmit={props.onSubmit}>

      <div className="title">登录你的 To-Do List 账户</div>
      <div className="ask">登录你的账户，然后就可以开始管理待办事项了</div>
      <div className="row">
        <label>用户名</label>
        <input type="text" value={props.formData.username} onChange={props.onChange} />
      </div>
      <div className="row">
        <label>密码</label>
        <input type="password" value={props.formData.password} onChange={props.onChange} />
      </div>
      <div className="resetPassword">忘记密码了？<span onClick={props.onForgotPassword}>重置密码</span></div>
      <button className="back" type="button" onClick={props.back}>上一步</button>
      <button className="continue" type="submit">继续</button>
    </form>
  )

}