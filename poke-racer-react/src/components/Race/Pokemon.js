class Pokemon {
	constructor(image, xCoordsAtPercentiles) {
		this.image = image
		this.xCoordsAtPercentiles = xCoordsAtPercentiles
	}

	getImage() {
		return this.image
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

	static getAll() {
		return Pokemon.all
	}
}

export default Pokemon