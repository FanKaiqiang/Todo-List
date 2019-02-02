import React, { Component } from 'react';
import SignUp from './signUp'
import SignIn from './signIn'
import Select from './select'
import '../style/SignInOrSignUp.scss'

export default class SignInOrSignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      continue: false,
      selected: 'signIn'
    }
  }
  change = (value) => {
    this.setState({
      ...this.state,
      selected: value
    })
  }
  continue = () => {
    this.setState({
      ...this.state,
      continue: true
    })
    console.log(this.state.selected)
  }
  render() {
    return (
      <div className="signInOrSignUp">
        <nav>
          登录
          <div className="closeWrapper" onClick={this.props.onClick}>
            <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5791"><path d="M934.184927 199.723787 622.457206 511.452531l311.727721 311.703161c14.334473 14.229073 23.069415 33.951253 23.069415 55.743582 0 43.430138-35.178197 78.660524-78.735226 78.660524-21.664416 0-41.361013-8.865925-55.642275-23.069415L511.149121 622.838388 199.420377 934.490384c-14.204513 14.20349-33.901111 23.069415-55.642275 23.069415-43.482327 0-78.737272-35.230386-78.737272-78.660524 0-21.792329 8.864902-41.513486 23.094998-55.743582l311.677579-311.703161L88.135828 199.723787c-14.230096-14.255679-23.094998-33.92567-23.094998-55.642275 0-43.430138 35.254945-78.762855 78.737272-78.762855 21.741163 0 41.437761 8.813736 55.642275 23.069415l311.727721 311.727721L822.876842 88.389096c14.281261-14.255679 33.977859-23.069415 55.642275-23.069415 43.557028 0 78.735226 35.332716 78.735226 78.762855C957.254342 165.798117 948.5194 185.468109 934.184927 199.723787" p-id="5792"></path></svg>
          </div>
        </nav>
        {this.state.continue ? 
        <div className="panes">
          {this.state.selected === 'signUp' ?
            <SignUp formData={this.props.state.formData}
              onSubmit={this.props.onSignUp}
              onChange={this.props.onChange} />
            :
            <SignIn formData={this.props.state.formData}
              onChange={this.props.onChange}
              onSubmit={this.props.onSignIn}
              onForgotPassword={this.props.onForgotPassword} />}
        </div> : <Select onChange={this.change} onContinue={this.continue} />}



      </div>
    )
  }
}