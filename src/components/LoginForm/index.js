import './index.css'

import {Component} from 'react'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    errorMessage: '',
  }

  onSubmitSuccess = () => {
    const {history} = this.props

    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const bodyObject = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(bodyObject),
    }
    const response = await fetch(url, options)
    console.log(response)
    //  const data = await response.json()
    //  console.log(data)
    const data = await response.json()
    const errorMessageData = data.error_msg

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.setState({
        errorMessage: errorMessageData,
      })

      // console.log(errorMessage)
    }
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  render() {
    const {errorMessage} = this.state
    console.log(errorMessage)
    return (
      <div className="login-page-container">
        <div className="login-page-inner-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-page-image"
          />
          <div className="login-form-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="login-page-logo"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
              alt="website login"
              className="form-con-image"
            />
            <form className="form-container" onSubmit={this.onSubmitForm}>
              <label htmlFor="username" className="label-text">
                USERNAME
              </label>
              <input
                type="text"
                placeholder="enter your username"
                id="username"
                className="input-login"
                onChange={this.onChangeUsername}
              />
              <label htmlFor="password" className="label-text">
                PASSWORD
              </label>
              <input
                type="password"
                placeholder="enter your password"
                id="password"
                className="input-login"
                onChange={this.onChangePassword}
              />
              <button type="submit" className="login-submit-btn">
                Submit
              </button>
              <p className="error-message"> {errorMessage} </p>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
