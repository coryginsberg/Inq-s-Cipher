import React, { Component } from 'react';
import logo from './Inq.png';
import './App.scss';
import CipherForm from './Cipher';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
    };
    this.startAlpha = this.startAlpha.bind(this);
  }

  startAlpha() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    let text;

    if (this.state.isToggleOn) {
      text = <div><CipherForm /></div>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Inq's Cipher Wheel (Kinda)</h1>
        </header>
        <div className="App-content">
          {!this.state.isToggleOn ? (
            <button className="start-btn btn-lg btn-orange" onClick={this.startAlpha}>Press the button to begin</button>
          ) : (null)}
          {text}
        </div>
        <footer className="App-footer">
          This project is based on things that have been shown on Vsause. 
          Specifically, Inq's Cipher Wheel as seen 
          in <a href="https://youtu.be/TvsiLV7RLx4">this Michael's Toy's episode</a>.
          <br/>
          <br/>
          Created by Cory Ginsberg, 2018.
        </footer>
      </div>
    );
  }
}
