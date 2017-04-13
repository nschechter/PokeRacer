import React, {Component} from 'react'

class InputBox extends Component {
	constructor() {
		super()
		this.state = {
			value: ''
		}

		this.handleInput = this.handleInput.bind(this)
	}

	handleInput({target: {value}}) {
		if (this.props.maxCharCount && value.length <= this.props.maxCharCount)
			this.setInput(value)
		else if (!this.props.maxCharCount)
			this.setInput(value)
	}

	setInput(value) {
		this.setState({
			value: value
		})
		this.props.onChange(this.props.name, value)
	}

	render() {
		return (
			<div className="input-box">
				<label>{this.props.name.split('')[0].toUpperCase() + this.props.name.slice(1, this.props.name.length)}: </label>
				<input 
				type={this.props.type ? this.props.type : "text"}
				value={this.state.value}
				onChange={this.handleInput} />
				{this.props.maxCharCount ? <span className="remaining-chars"> Remaining characters: {this.props.maxCharCount - this.state.value.length}</span> : false}
			</div>
		)
	}
}

export default InputBox