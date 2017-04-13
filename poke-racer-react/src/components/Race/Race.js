import React, {Component} from 'react'
import Canvas from 'react-canvas-component'

class Race extends Component {
	constructor() {
		super()
		this.state = {
			width: 500,
			height: 500
		}

		this.drawCanvas = this.drawCanvas.bind(this)
	}

	drawCanvas({ctx, time}) {
		const {width, height} = ctx.canvas
	    ctx.save()
	    ctx.clearRect(0, 0, width, height)
	    ctx.fillStyle = 'black'
	    ctx.translate(width / 2, height / 2)
	    ctx.rotate(((time / 10) % 360) * Math.PI / 180)
	    ctx.fillRect(-1 * width / 4, -1 * height / 4, width / 2, height / 2)
	    ctx.restore()
	}

	render() {
		const divStyle = {
  			backgroundcolor: 'blue'
		}
		return (
			<div className="race">
				<Canvas draw={this.drawCanvas} width={this.state.width} height={this.state.height} realtime />
			</div>
		)
	}
}

export default Race