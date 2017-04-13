import React, {Component} from 'react'
import InputBox from './InputBox'

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
	}

	// required for InputBox components
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