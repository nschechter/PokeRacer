import React from 'react'
const ActionCable = require('actioncable')

export default class WebsocketListener extends React.Component {

  constructor(props) {
    super(props)
    if (this.props.debug) {
      ActionCable.startDebugging()
    }
    const App = {}
    App.cable = ActionCable.createConsumer(this.props.url)
    App.pokemonChannel = App.cable.subscriptions.create({channel: this.props.channel}, {
      connected: () => {
        console.log('connected to ' + this.props.channel);
      },
      received: (data) => {
        this.props.handleReceived(data)
      }
    })
  }

  render() {
    return (
      <span></span>
    )
  }
}
