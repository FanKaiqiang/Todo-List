import React, { Component } from 'react'
import '../style/select.scss'

export default class Select extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: true
    }
  }
  change = (e) => {
    for (let value of e.target.classList) {
      if (value === 'active') {
        return
      }
    }
    this.setState({
      ...this.state,
      login: !this.state.login
    })
    this.props.onChange(this.state.login ? 'signUp' : 'signIn')
  }
  render() {
    
    return (
      <div className="select">
        <div className="title">让我们帮你登录</div>
        <div className="ask">请选择登录方式</div>
        <div className={`item ${this.state.login ? "active" : ''}`} onClick={this.change}>
          <svg  className="icon" viewBox="0 0 1024 1024" p-id="5391"><path d="M514 912c-219.9 0-398.8-178.9-398.8-398.9 0-219.9 178.9-398.8 398.8-398.8s398.8 178.9 398.8 398.8c0 220-178.9 398.9-398.8 398.9z m0-701.5c-166.9 0-302.7 135.8-302.7 302.7S347.1 815.9 514 815.9c166.9 0 302.7-135.8 302.7-302.7S680.9 210.5 514 210.5z" fill="#BDD2EF" p-id="5392"></path><path d="M239.4 486.2l59.7-38.8c57.1-37.1 134.1-20.7 169.7 37.3 25.8 41.9 36.4 83.5 36.4 83.5s137.1-308.8 327.7-366.7c0 0-59.5 135.9 27.3 234 0 0-197.8 55.1-344.1 286.2-4.9 7.8-16.3 7.6-20.8-0.4-29.1-50.5-120.7-192.4-255.9-235.1z" fill="#2867CE" p-id="5393"></path></svg>
          <div className="testWrapper">
            <div className="bold">使用已有账户</div>
            <div>由你之前在此注册的账户</div>
          </div>
        </div>
        <div className={`item ${this.state.login ? '' : "active"}`} onClick={this.change}>
          <svg className="icon" viewBox="0 0 1024 1024" p-id="5391"><path d="M514 912c-219.9 0-398.8-178.9-398.8-398.9 0-219.9 178.9-398.8 398.8-398.8s398.8 178.9 398.8 398.8c0 220-178.9 398.9-398.8 398.9z m0-701.5c-166.9 0-302.7 135.8-302.7 302.7S347.1 815.9 514 815.9c166.9 0 302.7-135.8 302.7-302.7S680.9 210.5 514 210.5z" fill="#BDD2EF" p-id="5392"></path><path d="M239.4 486.2l59.7-38.8c57.1-37.1 134.1-20.7 169.7 37.3 25.8 41.9 36.4 83.5 36.4 83.5s137.1-308.8 327.7-366.7c0 0-59.5 135.9 27.3 234 0 0-197.8 55.1-344.1 286.2-4.9 7.8-16.3 7.6-20.8-0.4-29.1-50.5-120.7-192.4-255.9-235.1z" fill="#2867CE" p-id="5393"></path></svg>
          <div className="testWrapper">
            <div className="bold">注册新账户</div>
            <div>现在注册可以登录 To-Do List 的账户</div>
          </div>
        </div>
        <div className="buttonWrapper">
          <button type="submit" onClick={this.props.onContinue}>继续</button>
        </div>
      </div>
    )

  }
}