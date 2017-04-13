import React from 'react';
import ReactDOM from 'react-dom';
import ConnectedApp from './App';
import NotFound from './components/NotFound'
import { Provider } from 'react-redux'
import { store } from './store.js'
import { BrowserRouter as Router, Route, browserHistory, Switch } from 'react-router-dom'
import Races from './components/Races'
import Navbar from './components/Navbar'


ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />    
  </Provider>,
  document.getElementById('root')
);
//   <Router history={browserHistory}>
//     <div>
//     <Route path="/" component={Navbar}/>
//       <Switch>
// <Route exact path="/" component={ConnectedApp}/>
// <Route path="/races" component={Races}/>
// <Route component={NotFound} />
//       </Switch>
//     </div>
//   </Router>
