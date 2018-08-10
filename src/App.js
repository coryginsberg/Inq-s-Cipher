import React, { Component } from 'react';
import logo from './Inq.png';
import './App.scss';
import SpecialAlert from './SpecialAlert';
import CipherForm from './Cipher';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
    };
  }

  StartPage = () => (
    <Link to="/cipher" className="start-btn mdc-button mdc-button--raised">Press the button to begin</Link>
  )

  render() {
    return (
      <body className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Inq's Cipher Wheel (Kinda)</h1>
        </header>
        <main>
          <Router>
            <div className="App-content">
              <Route path="/" exact component={this.StartPage} />
              <Route path="/cipher" component={CipherForm} />
            </div>
          </Router>
          <SpecialAlert />
        </main>
      {!this.state.isToggleOn ? (  
        <footer className="App-footer">
          This project is based on things that have been shown on Vsause. 
          Specifically, Inq's Cipher Wheel as seen 
          in <a href="https://youtu.be/TvsiLV7RLx4">this Michael's Toy's episode</a>.
          <br/>
          I DO NOT OWN INQ! INQ WAS CREATED BY THE GUYS AT VSAUSE FOR THE CURIOSITY BOX.
          <br/>
          Also there are a bunch of (subtle) Easter Eggs on this site. Try to find them all ;)
          <br/>
          <p className="hidden">Yahaha! You found me!</p>
          Created by Cory Ginsberg, 2018.
        </footer>) : (null)}
      </body>
    );
  }
}
