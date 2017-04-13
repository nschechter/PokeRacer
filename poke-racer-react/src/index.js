import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NotFound from './components/NotFound'
import { Provider } from 'react-redux'
import { store } from './store.js'
import { BrowserRouter as Router, Route, browserHistory, Switch } from 'react-router-dom'
import Races from './components/Races'
import Navbar from './components/Navbar'


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <div>
      <Route path="/" component={Navbar}/>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/races" component={Races}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
