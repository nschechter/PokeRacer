import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import WebsocketListener from '../sockets/WebsocketListener'
import Canvas from 'react-canvas-component'
import Pokemon from './Pokemon'
import { fetchResults, resetResults } from '../../actions/Race'
import { connect } from 'react-redux'

class Race extends Component {
	constructor() {
		super()
		this.state = {
			width: 1400,
			height: 1000,
			finishLineXCoord: 1000
		}
		// this.bulbasaur = new Image(0, 0);
		// this.bulbasaur.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';
		// this.ivysaur = new Image(0, 0);
		// this.ivysaur.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png';
		// this.venu = new Image(0, 0);
		// this.venu.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png';
		// this.pokemonB = new Pokemon(this.bulbasaur, 
		// {
		// 	10: 100, 20: 220, 30: 300, 40: 400,
		// 	50: 800, 60: 820, 70: 1000, 80: 1000, 90: 1000, 100: 1000
		// }, 100)
		// this.pokemonI = new Pokemon(this.ivysaur, 
		// {
		// 	10: 120, 20: 200, 30: 300, 40: 400, 
		// 	50: 500, 60: 600, 70: 720, 80: 800, 90: 920, 100: 1000
		// }, 200)
		// this.pokemonV = new Pokemon(this.venu, 
		// {
		// 	10: 100, 20: 200, 30: 320, 40: 400, 
		// 	50: 500, 60: 600, 70: 700, 80: 820, 90: 1000, 100: 1000
		// }, 300)
		// this.handleNewParticipant = this.handleNewParticipant.bind(this)
		// this.handleRemoveParticipant = this.handleRemoveParticipant.bind(this)
		this.startRace = this.startRace.bind(this)
		this.fetchResults = this.fetchResults.bind(this)
		this.stop = null
	}

	fetchResults(event) {
		event.preventDefault()
		let canvas = ReactDOM.findDOMNode(this.refs.pokecanvas)
		let ctx = canvas.getContext('2d')
		this.props.fetchResults(parseInt(this.props.match.params.id, 10))
	}

	startRace(ctx, time) {
		let currentPercentile = 10
		this.stop = setInterval(() => {
			ctx.clearRect(0, 0, 1500, 1500)
			Pokemon.drawAll(ctx, time)
		}, 10)
	}

	renderStartLine(ctx, pokemonList) {
		for (let i = 0; i < pokemonList.length - 1; i++) {
			ctx.drawImage(pokemonList[i], 0, i * 100)
		}
	}

	getParticipantsImages() {
		return this.props.race.map((p) => {
			let poke = new Image()
			poke.src = p.pokemon.img_url
			return poke
		})
	}

	componentDidUpdate() {
		let canvas = ReactDOM.findDOMNode(this.refs.pokecanvas)
		let ctx = canvas.getContext('2d')
		let tempImage = null
		if (this.props.results.length > 0) {
			let { results } = this.props
			for (let i = 0; i < results.length; i++) {
				tempImage = new Image()
				tempImage.src = results[i].image
				let poke = new Pokemon(tempImage, results[i].race, i * 100)
			}
			debugger
			this.startRace(ctx, null)
		} else {
			console.log('LOADED THE POKEMON')
			let startLine = this.getParticipantsImages()
			console.log(startLine)
			this.renderStartLine(ctx, startLine)
		}
	}

	componentDidMount() {
		console.log('LOADED THE POKEMON')
		let canvas = ReactDOM.findDOMNode(this.refs.pokecanvas)
		console.log(canvas)
		let ctx = canvas.getContext('2d')
		let startLine = this.getParticipantsImages()
		console.log(startLine)
		this.renderStartLine(ctx, startLine)
	}

	componentWillUnmount() {
		clearInterval(this.stop)
		Pokemon.resetPokemon()
		this.props.resetResults()
	}

	// handleNewParticipant(participant) {
	// 	console.log(participant);
	// 	this.props.addParticipant(participant)
	// }

	// handleRemoveParticipant(participant) {
	// 	console.log(participant);
	// 	this.props.removeParticipant(participant)
	// }

	render() {
		return (
			<div className="race">
				<button onClick={this.fetchResults}>Fetch bro</button>
				<canvas ref="pokecanvas" width={this.state.width} height={this.state.height} />
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	race: state.Race,
	results: state.RaceResults
})

const mapDispatchToProps = (dispatch) => ({
  fetchResults: (raceId) => {
    dispatch(fetchResults(raceId))
  },
  resetResults: () => {
  	dispatch(resetResults())
  }
})

const ConnectedRace = connect(mapStateToProps, mapDispatchToProps)(Race)

export default ConnectedRace
