import React, {Component} from 'react'
import { connect } from 'react-redux'
import Login from '../components/Login'
import Register from '../components/Register'
import { setToken } from '../actions/Account'

class Auth extends Component {
	render() {
		return (
			<div>
				<Login setToken={this.props.onSetToken} />
				<Register setToken={this.props.onSetToken} />
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	onSetToken: (token) => {
		setToken: setToken(token)
	}
})

const connectedAuth = connect(null, mapDispatchToProps)(Auth)

export default connectedAuth