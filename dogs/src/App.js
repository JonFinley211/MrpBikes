import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Item_Master from './components/pages/ItemMaster';
import Product_Structure from './components/pages/Product_Structure';

import SignUp from './components/pages/SignUp';
import Tables from './components/pages/tables';

import Mrfg from './components/pages/Mrfg';
import Bomx from './components/pages/Bomx';








function App() {

  return (
    <Router>
      <Navbar fixed="top" />
      <Switch>
        <Route exact path='/'  component={Home} />
        <Route path='/item_master' component={Item_Master} />
        <Route path='/product_structure' component={Product_Structure} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/tables' component={Tables} />
       
        <Route path='/mrfg' component={Mrfg} />
        <Route path='/bomx' component={Bomx} />
      </Switch>
    </Router>
  );
}

export default App;