import React, {Component} from 'react'
import { connect } from 'react-redux'
import Login from '../components/Login'
import Register from '../components/Register'
import { setToken, setUsername } from '../actions/Account'

class Auth extends Component {
	render() {
		return (
			<div>
				<Login setToken={this.props.onSetToken} setUsername={this.props.onSetUsername} />
				<Register setToken={this.props.onSetToken} setUsername={this.props.onSetUsername}/>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
  	onSetToken: (token) => {
    	dispatch(setToken(token))
  	},
		onSetUsername: (username) => {
			dispatch(setUsername(username))
		}
})

const connectedAuth = connect(null, mapDispatchToProps)(Auth)

export default connectedAuth
