import React from 'react';
import ReactDOM from 'react-dom';
import ConnectedApp from './App';
import NotFound from './components/NotFound'
import { Provider } from 'react-redux'
import Race from './components/Race/Race'
import { store } from './store.js'
import { BrowserRouter as Router, Route, browserHistory, Switch } from 'react-router-dom'
import ConnectedRaceList from './components/Race/RaceList'
import ConnectedPokemonPicker from './components/PokemonPicker'
import Navbar from './components/Navbar'


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <div>
        <Route path="/" component={Navbar}/>
        <Switch>
          <Route exact path="/" component={Race}/>
          <Route path="/pokemon" component={ConnectedPokemonPicker} />
          <Route path="/races/:id" component={Race} />
          <Route path="/races" component={ConnectedRaceList}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>

  </Provider>,
  document.getElementById('root')
);
