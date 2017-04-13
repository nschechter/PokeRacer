const ActionCable = require('actioncable')
ActionCable.startDebugging()
const WSApp = {}
WSApp.cable = ActionCable.createConsumer('ws://localhost:3001/cable')
WSApp.pokemonChannel = WSApp.cable.subscriptions.create({channel: "PokemonChannel"}, {
  connected: () => {
    console.log('connected');
  },
  received: (data) => {
    console.log(data)
  }
})
