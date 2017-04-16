import React, {Component} from 'react'
import WebsocketListener from '../sockets/WebsocketListener'
import Canvas from 'react-canvas-component'

class Race extends Component {
	constructor() {
		super()
		this.state = {
			width: 1400,
			height: 1000,
			finishLineXCoord: 1000
		}
		this.handleNewParticipant = this.handleNewParticipant.bind(this)
		this.handleRemoveParticipant = this.handleRemoveParticipant.bind(this)
		this.drawCanvas = this.drawCanvas.bind(this)
		this.raceImage = this.raceImage.bind(this)
		this.myImage = new Image(0, 0);
		this.myImage.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';
	}

	raceImage(ctx, time, image, yCoord) {
		let i = 0
		let stop = setInterval(() => {
			ctx.clearRect(i, yCoord, i + 50, yCoord + 50)
	    	ctx.drawImage(image, i, yCoord)
	    	i = i + 1
	    	if (i > this.state.finishLineXCoord)
	    		clearInterval(stop)
		}, 10)
	}


	drawCanvas({ctx, time}) {
		const {width, height} = ctx.canvas
	    // ctx.save()
	    // ctx.clearRect(0, 0, width, height)
	    // ctx.fillStyle = 'black'
	    // ctx.translate(width / 2, height / 2)
	    // ctx.rotate(((time / 10) % 360) * Math.PI / 180)
	    // ctx.fillRect(-1 * width / 4, -1 * height / 4, width / 2, height / 2)
	    // ctx.restore()
	    this.raceImage(ctx, time, this.myImage, 100)
	}

	handleNewParticipant(participant) {
		console.log(participant);
		this.props.addParticipant(participant)
	}
	handleRemoveParticipant(participant) {
		console.log(participant);
		this.props.removeParticipant(participant)
	}

	render() {
		const divStyle = {
  			backgroundcolor: 'blue'
		}
		return (
			<div className="race">
				<Canvas draw={this.drawCanvas} width={this.state.width} height={this.state.height} />
				<WebsocketListener
					debug
					handleReceived={this.handleNewParticipant}
					channel={'AddNewParticipantChannel'}
					url={'ws://localhost:3001/cable'}
				/>
				<WebsocketListener
					debug
					handleReceived={this.handleRemoveParticipant}
					channel={'RemoveParticipantChannel'}
					url={'ws://localhost:3001/cable'}
				/>
			</div>
		)
	}
}

export default Race
