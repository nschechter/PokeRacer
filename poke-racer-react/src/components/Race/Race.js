import React, {Component} from 'react'
import WebsocketListener from '../sockets/WebsocketListener'
import Canvas from 'react-canvas-component'
import Pokemon from './Pokemon'

class Race extends Component {
	constructor() {
		super()
		this.state = {
			width: 1400,
			height: 1000,
			finishLineXCoord: 1000
		}
		this.bulbasaur = new Image(0, 0);
		this.bulbasaur.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';
		this.ivysaur = new Image(0, 0);
		this.ivysaur.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png';
		this.venu = new Image(0, 0);
		this.venu.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png';
		this.pokemonB = new Pokemon(this.bulbasaur, 
		{
			10: 30, 20: 300, 30: 350, 40: 400, 
			50: 500, 60: 600, 70: 610, 80: 620, 90: 900, 100: 1000
		}, 100)
		this.pokemonI = new Pokemon(this.ivysaur, 
		{
			10: 100, 20: 300, 30: 350, 40: 400, 
			50: 500, 60: 600, 70: 610, 80: 620, 90: 920, 100: 980
		}, 200)
		this.pokemonV = new Pokemon(this.venu, 
		{
			10: 100, 20: 200, 30: 300, 40: 400, 
			50: 500, 60: 600, 70: 700, 80: 800, 90: 900, 100: 990
		}, 300)
		this.handleNewParticipant = this.handleNewParticipant.bind(this)
		this.handleRemoveParticipant = this.handleRemoveParticipant.bind(this)
		this.drawCanvas = this.drawCanvas.bind(this)
		this.startRace = this.startRace.bind(this)
	}

	startRace(ctx, time, pokemonList) {
		let currentPercentile = 10
		let stop = setInterval(() => {
			ctx.clearRect(0, 0, 1500, 1500)
			Pokemon.drawAll(ctx, time)
		}, 10)
	}

	drawCanvas({ctx, time}) {
		const {width, height} = ctx.canvas
	    this.startRace(ctx, time, [this.pokemonB, this.pokemonI, this.pokemonV])
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
