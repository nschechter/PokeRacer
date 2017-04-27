class Pokemon {
	constructor(image, xCoordsAtPercentiles, yCoord) {
		this.image = image
		this.xCoordsAtPercentiles = xCoordsAtPercentiles
		this.pace = 1
		this.xCoord = 0
		this.yCoord = yCoord
		this.currentPercentile = 10
		Pokemon.all.push(this)
	}

	getImage() {
		return this.image
	}

	setCoords(x, y) {
		this.xCoord = x
		this.yCoord = y
	}

	// {0: 10}
	// 0-10 input
	getXCoordAtPercentile(p) {
		return this.xCoordsAtPercentiles[p]
	}

	getNextPercentile(currentPercentile) {
		if (currentPercentile == 100)
			return null
		else
			return currentPercentile + 10
	}

	static resetPokemon() {
		for (let i = 0; i < Pokemon.getAll().length; i++) {
			let tempPokemon = Pokemon.all[i]
			tempPokemon.pace = 1
			tempPokemon.xCoord = 0
			tempPokemon.currentPercentile = 10
		}
		Pokemon.all = []
	}

	static isRaceDone() {
		let done = true
		for (let i = 0; i < Pokemon.getAll().length; i++)
			if (Pokemon.all[i].getNextPercentile(Pokemon.all[i].currentPercentile) != null)
				done = false

		return done
	}

	static drawAll(ctx, time) {
		for (let i = 0; i < Pokemon.getAll().length; i++) {
			let tempPokemon = Pokemon.all[i]
			if (tempPokemon.getNextPercentile(tempPokemon.currentPercentile) == null) {
				ctx.drawImage(tempPokemon.getImage(), tempPokemon.xCoord, tempPokemon.yCoord)
			} else if (tempPokemon.xCoord < tempPokemon.getXCoordAtPercentile(tempPokemon.getNextPercentile(tempPokemon.currentPercentile))) {
				tempPokemon.xCoord = tempPokemon.xCoord + tempPokemon.pace
				ctx.drawImage(tempPokemon.getImage(), tempPokemon.xCoord, tempPokemon.yCoord)
			} else {
				tempPokemon.currentPercentile = tempPokemon.getNextPercentile(tempPokemon.currentPercentile + 10)
				tempPokemon.pace = (tempPokemon.getXCoordAtPercentile(tempPokemon.currentPercentile) - tempPokemon.getXCoordAtPercentile(tempPokemon.currentPercentile - 10)) / tempPokemon.currentPercentile
			}
		}
	}

	static getAll() {
		return Pokemon.all
	}
}

Pokemon.all = []

export default Pokemon