import React, {Component} from 'react'
import InputBox from './InputBox'
import axios from 'axios'

class Register extends Component {
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
		axios.post('http://localhost:3001/v1/registrations', 
			{ account: {username: this.state.values.username, password: this.state.values.password }
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
			<div className="register">
				Register
				<form onSubmit={this.handleSubmit}>
					<InputBox name="username" maxCharCount={8} paramsName="account[username]" onChange={this.handleValues} />
					<InputBox name="password" type="password" paramsName="account[password]" onChange={this.handleValues} />
					<input type="submit" />
				</form>
			</div>
		)
	}
}

export default Register