import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {Home} from './components/Home'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />  
        <Switch>
          <Route exact path='/' component={Home}/>
          
        </Switch>
      </Router>
    </>
  );
}

export default App;

