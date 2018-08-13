import React, { Component } from 'react';
import logo from './Inq.png';
import './App.scss';
import SpecialAlert from './SpecialAlert';
import EncryptForm from './Encrypt';
import DecryptForm from './Decrypt';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
    };
  }

  StartPage = () => (
    <div className="grid-wrapper">
      <Link to="/encrypt" className="grid-btn start-btn mdc-button mdc-button--raised">Encrypt</Link>
      <Link to="/decrypt" className="grid-btn start-btn mdc-button mdc-button--raised">Decrypt</Link>
    </div>
  )

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Inq's Cipher Wheel</h1>
        </header>
        <main>
          <Router>
            <div className="App-content">
              <Route path="/" exact component={this.StartPage} />
              <Route path="/encrypt" component={EncryptForm} />
              <Route path="/decrypt" component={DecryptForm} />

            </div>
          </Router>
          <SpecialAlert />
        </main>
      {!this.state.isToggleOn ? (  
        <footer className="App-footer">
          This project is based on Inq's Cipher Wheel as seen 
          in <a href="https://youtu.be/TvsiLV7RLx4">this Michael's Toy's episode</a>.
          <br/>
          DISCLAIMER: I DO NOT OWN INQ! INQ WAS CREATED BY THE GUYS AT VSAUSE FOR THE CURIOSITY BOX.
          <br/>
          <p className="hidden">Yahaha! You found me!</p>
          Created by Cory Ginsberg, 2018.
        </footer>) : (null)}
      </div>
    );
  }
}