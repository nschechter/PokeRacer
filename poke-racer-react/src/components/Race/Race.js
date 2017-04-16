import React, {Component} from 'react'
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
		})
		this.pokemonI = new Pokemon(this.ivysaur, 
		{
			10: 100, 20: 300, 30: 350, 40: 400, 
			50: 500, 60: 600, 70: 610, 80: 620, 90: 700, 100: 980
		})

		this.drawCanvas = this.drawCanvas.bind(this)
		this.raceImage = this.raceImage.bind(this)
		this.raceImages = this.raceImages.bind(this)
		this.racePokemon = this.racePokemon.bind(this)
		this.racePokemonList = this.racePokemonList.bind(this)
	}

	racePokemon(ctx, time, pokemon, yCoord) {
		let currentPercentile = 10
		let xCoord = 0
		let pace = pokemon.getXCoordAtPercentile(currentPercentile) / currentPercentile
		let stop = setInterval(() => {
			if (pokemon.getNextPercentile(currentPercentile) == null) {
				clearInterval(stop)
			} else if (xCoord < pokemon.getXCoordAtPercentile(pokemon.getNextPercentile(currentPercentile))) {
				ctx.clearRect(xCoord, yCoord, 100, 100)
				xCoord = xCoord + pace
				ctx.drawImage(pokemon.getImage(), xCoord, yCoord)
			} else {
				currentPercentile = pokemon.getNextPercentile(currentPercentile + 10)
				pace = (pokemon.getXCoordAtPercentile(currentPercentile) - pokemon.getXCoordAtPercentile(currentPercentile - 10)) / currentPercentile
			}
		}, 100)
	}

	// 30 / 10 = 3
	// 270 / 20 = 13.5
	// 50 / 30 = 1.667
	// 50 / 40 = 1.25
	// 100 / 50 = 2
	// 100 / 60 = 1.667
	// 10 / 70 = 0.14
	// 10 / 80 = 0.125
	// 280 / 90 = 3.11
	// 100 / 100 = 1


	raceImage(ctx, time, image, yCoord) {
		let xCoord = 0
		let stop = setInterval(() => {
	    	ctx.drawImage(image, xCoord, yCoord)
	    	xCoord = xCoord + 1
	    	if (xCoord > this.state.finishLineXCoord)
	    		clearInterval(stop)
		}, 10)
	}

	raceImages(ctx, time, images, yCoordStart) {
		let xCoord = 0
		let stop = setInterval(() => {
	    	// ctx.drawImage(image, xCoord, yCoord)
	    	this.drawImages(ctx, images, xCoord, yCoordStart, 50)
	    	xCoord = xCoord + 1
	    	if (xCoord > this.state.finishLineXCoord)
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
	    // this.raceImage(ctx, time, this.bulbasaur, 100)
	    // this.raceImage(ctx, time, this.ivysaur, 200)
	    // this.raceImage(ctx, time, this.venu, 300)
	    //this.raceImages(ctx, time, [this.bulbasaur, this.ivysaur, this.venu], 100)
	    // this.racePokemon(ctx, time, this.pokemonB, 200)
	    // this.racePokemon(ctx, time, this.pokemonI, 100)
	    this.racePokemonList(ctx, time, [this.pokemonB, this.pokemonI], 100, 100)
	}

	racePokemonList(ctx, time, pokemonList, yCoordStart, yCoordOffSet) {
		for (let i = 0; i < pokemonList.length; i++) {
			this.racePokemon(ctx, time, pokemonList[i], yCoordStart + (i * yCoordOffSet))
		}
	}

	render() {
		return (
			<div className="race">
				<Canvas draw={this.drawCanvas} width={this.state.width} height={this.state.height} />
			</div>
		)
	}
}

export default Race