import React from 'react';
import SignUp from './signUp'
import SignIn from './signIn'

export default function SignInOrSignUp(props) {
  return (
    <div className="signInOrSignUp">
      <nav>
        <label>
          <input type="radio" value="signUp"
            checked={props.state.selected === 'signUp'}
            onChange={props.switch}
          /> 注册</label>
        <label>
          <input type="radio" value="signIn"
            checked={props.state.selected === 'signIn'}
            onChange={props.switch}
          /> 登录</label>
      </nav>
      <div className="panes">
        {props.state.selected === 'signUp' ?
          <SignUp formData={props.state.formData}
            onSubmit={props.onSignUp}
            onChange={props.onChange} />
          :
          <SignIn formData={props.state.formData}
            onChange={props.onChange}
            onSubmit={props.onSignIn}
            onForgotPassword={props.onForgotPassword} />}
      </div>
    </div>
  )

}