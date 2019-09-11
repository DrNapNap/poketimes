import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App" >
        <Navbar/>
        <Route exact path='/Home' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/Contact' component={Contact}/>
      </div>
      </BrowserRouter>
    )
  }
}

export default App
