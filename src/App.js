import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import React from 'react'
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import NotFound from './components/NotFound';

import Reacts from './components/random'

function App() {



  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" element={ Home } />
      <Route exact path="/about" component={ About } />
      <Route exact path="/contact" component={ Contact } />
      <Route component={ NotFound } />
    </Switch>
  </BrowserRouter>

  {/* 
      <Reacts /> */}


}

export default App;
