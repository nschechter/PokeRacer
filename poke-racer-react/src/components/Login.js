import React, {Component} from 'react'
import InputBox from './InputBox'
import axios from 'axios'

class Login extends Component {
	constructor() {
		super()
		this.state = {
			values: {}
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleValues = this.handleValues.bind(this)
	}

	handleSubmit(e) {
		e.preventDefault()

		let payload = { username: this.state.values.username, password: this.state.values.password }

		axios({
			method: 'post',
			url: 'http://localhost:3001/v1/sessions',
			data: payload
		})
		.then(resp => {
			this.props.setToken(resp.data.token)
			localStorage.setItem('token', resp.data.token);
		})
	}

	//required for InputBox components
	handleValues(name, value) {
		let newValues = this.state.values
		newValues[name] = value
		this.setState({
			values: newValues
		})
	}

	render() {
		return (
			<div className="login">
			Login
			<form onSubmit={this.handleSubmit}>
			<InputBox name="username" maxCharCount={8} paramsName="account[username]" onChange={this.handleValues} />
			<InputBox name="password" type="password" paramsName="account[password]" onChange={this.handleValues} />
			<input type="submit" />
			</form>
			</div>
			)
	}
}

export default Login
