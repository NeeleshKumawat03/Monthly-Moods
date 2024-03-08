import {Component} from 'react'
import './Login.css'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

class Login extends Component {
  state = {username: '', password: '', showPassword: false, errorMsg: ''}

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

  onTogglePassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {history} = this.props
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify({username, password}),
    }

    const res = await fetch(url, options)
    const data = await res.json()
    console.log(data)
    if (res.status === 200) {
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 14})
      history.replace('/')
    } else {
      this.setState({
        errorMsg: data.error_msg,
      })
    }
  }

  render() {
    const {username, password, showPassword, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-page">
        <div className="loginForm">
          <h1>Daily Mood Tracker</h1>
          <form onSubmit={this.onSubmitForm} className="form">
            <div className="input-style">
              <label htmlFor="username">USERNAME</label>
              <input
                type="text"
                id="username"
                placeholder="Enter username"
                value={username}
                onChange={this.onChangeUsername}
                className="input-text"
              />
            </div>

            <div className="input-style">
              <label htmlFor="password">PASSWORD</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={this.onChangePassword}
                className="input-text"
              />
            </div>

            <div className="checkbox">
              <input
                type="checkbox"
                id="checkbox"
                checked={showPassword}
                onChange={this.onTogglePassword}
              />
              <label htmlFor="checkbox">Show Password</label>
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>
            <p className="error">{errorMsg !== '' && `*${errorMsg}`}</p>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
