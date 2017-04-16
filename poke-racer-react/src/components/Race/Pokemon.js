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

	static updatePaceForPokemon(currentPercentile) {
		for (let i = 0; i < Pokemon.getAll().length; i++) {
			let temp = Pokemon.all[i]
			temp.pace = (temp.getXCoordAtPercentile(currentPercentile) - temp.getXCoordAtPercentile(currentPercentile - 10)) / currentPercentile
		}
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