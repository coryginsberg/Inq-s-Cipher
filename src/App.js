import React, { Component } from 'react';
import logo from './Inq.png';
import './App.scss';
import SpecialAlert from './SpecialAlert';

class CipherForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listLetter: 'A',
      listNumber: 0,
      textbox: '',

      offset: Array(26).fill(null),
    }
  }

  onSubmit = (event) => {
    event.preventDefault();

    let letters = [...Array(26).keys()].map(i => String.fromCharCode(i + 97));

    this.setState({[event.target.name]: event.target.value});

    let holdLetters = [];

    console.log("onChange");
    // console.log(this.state.listNumber);

    for (let i = 0; i < this.state.listNumber; i++) {
      console.log(letters[i]);
      // holdLetters.push(letters[i]);
      // console.log(this.holdLetters);
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  easterEgg = () => {
    alert("What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little \"clever\" comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn't, you didn't, and now you're paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You're fucking dead, kiddo.");
  }

  render() {

    let letters = [...Array(26).keys()].map(i => String.fromCharCode(i + 97)); // Trust me, this makes the alphabet into an Array.

    const { textbox } = this.state;

    const listLetters = letters.map((letter) =>
      <option value={letter}>{letter}</option>
    );

    const numbers = [];
    for (let i = 1; i <= 26; i++) {
      numbers.push(i);
    }

    const listNumbers = numbers.map((number) =>
      <option value={number}>{number}</option>
    );

    return (
      <div>
        <form>
          <label htmlFor="Text">Enter your text here:</label>
          <br/>
          <textarea rows="4" cols="50" id="Text" name="textbox" type="text" value={this.state.value} onChange={this.handleChange}>

          </textarea>
          <br/>
          <label htmlFor="Letter">Select a letter</label>
          <select id="Letter" name="listLetter" onChange={this.handleChange}>
            {listLetters}
          </select>
          <br/>
          <label htmlFor="Number">Select a number</label>
          <select id="Number" name="listNumber" onChange={this.handleChange}>
            {listNumbers}
          </select>
          <br />
          <button onClick={this.onSubmit}>Encrypt</button>
        </form>

        {this.state.letterSubmitted ? (
          <h1 className="Large-letters">{this.state.cipherValue}</h1>) : null}
      </div>
    );
  } 
}

class App extends Component {
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
          <SpecialAlert />
        </div>
        <footer className="App-footer">
          This project is based on things that have been shown on Vsause. 
          Specifically, Inq's Cipher Wheel as seen 
          in <a href="https://youtu.be/TvsiLV7RLx4">this Michael's Toy's episode</a>.
          <br/>
          Also there are a bunch of (subtle) Easter Eggs on this site. Try to find them all ;)
        </footer>
      </div>
    );
  }
}

export default App;
