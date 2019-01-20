import React, {Component} from 'react';
import SignUp from './signUp'
import SignIn from './signIn'

export default class SignInOrSignUp extends Component {
  render () {
    return (
      <div className="signInOrSignUp">
        <nav>
          <label>
            <input type="radio" value="signUp"
              checked={this.props.state.selected === 'signUp'}
              onChange={this.props.switch}
            /> 注册</label>
          <label>
            <input type="radio" value="signIn"
              checked={this.props.state.selected === 'signIn'}
              onChange={this.props.switch}
            /> 登录</label>
        </nav>
        <div className="panes">
          {this.props.state.selected === 'signUp' ?
            <SignUp formData={this.props.state.formData}
              onSubmit={this.props.onSignUp}
              onChange={this.props.onChange}/>
            : 
            <SignIn formData={this.props.state.formData}
              onChange={this.props.onChange}
              onSubmit={this.props.onSignIn}
              onForgotPassword={this.props.onForgotPassword}/>}
        </div>
      </div>
    )
  }
}