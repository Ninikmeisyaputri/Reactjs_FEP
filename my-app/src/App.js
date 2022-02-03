import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Product from './components/pages/Product';


function App() {
  return (
    <Router>
      <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services}/>
          <Route path='/Product' component={Product}/>
          <Route path='/About' component={About}/>

        </Switch>
    </Router>
  );
}

export default App;
