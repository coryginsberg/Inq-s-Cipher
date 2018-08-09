import React, { Component } from 'react';
import './App.scss';

const ALPHABET = [...Array(26).keys()].map(i => String.fromCharCode(i + 'A'.charCodeAt(0))); // Creates an array of the alphabet

export default class CipherForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listLetter: 'A',
      listNumber: 0,
      textbox: '',
      tempAlphabet: [],
    }

    console.log(ALPHABET);
  }

  

  onSubmit = (event) => {
    this.setState({[event.target.name]: event.target.value}); // Universal setting of this.state.*

    event.preventDefault(); // Self Explanitory IMO

    let textToEncrypt = this.state.textbox;
    console.log(textToEncrypt);

    const newAlphabet = ALPHABET.slice();

    // const newAlphabet = ALPHABET.map(letter => {
    //   return null;
    // });

    console.log()

    let holdLetters = [];

    for (let i = 0; i < this.state.listNumber; i++) {
      holdLetters.push(ALPHABET[i]);
    }
    for (let i = 0; i < this.state.listNumber; i++) {
      newAlphabet.shift(ALPHABET[i]);
    }
    newAlphabet.push(holdLetters).slice();

    this.computeCipher(textToEncrypt, newAlphabet);
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  // For this we need to get the position (index) of each letter in the original alphabet,
  // and use that to get the new letter from the new alphabet.
  computeCipher(textToEncrypt, newAlphabet) {
    let txtUnencrypted = textToEncrypt.toUpperCase();

    let positions = []; // Array to hold the position of the letters in the old alphabet.

    for (let txt of txtUnencrypted) {
      positions.push(newAlphabet.indexOf(txt));
      console.log("txt: " + txt);
      console.log("IndexOf: " + newAlphabet.indexOf(txt));
    }

    let txtEncrypted = [];
    for (let position of positions) {
      txtEncrypted.push(newAlphabet[position]);
    }
    console.log("Encrypted Text: " + txtEncrypted);
    console.log("Alphabet: " + ALPHABET);
    console.log("New Alphabet: " + newAlphabet);
    console.log("Positions: " + positions);

  }

  render() {

    let letters = [...Array(26).keys()].map(i => String.fromCharCode(i + 97)); // Trust me, this makes the alphabet into an Array.

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
          <div className="Textbox-Wrapper">
            <label className="txtarea-label" htmlFor="Text">Enter your text here</label>
            <textarea id="Text" className="materialize-textarea" type="text" name="textbox" value={this.state.value} onChange={this.handleChange}></textarea>
          </div>
          <br/>
          <div className="LetterDropbown-Wrapper">
            <label htmlFor="Letter">Select a letter</label>
            <select id="Letter" name="listLetter" onChange={this.handleChange}>
              {listLetters}
            </select>
          </div>
          <br/>
          <div className="NumberDropdown-Wrapper">
            <label htmlFor="Number">Select a number</label>
            <select id="Number" name="listNumber" onChange={this.handleChange}>
              {listNumbers}
            </select>
          </div>
          <br />
          <button className="small-btn mdc-button mdc-button--raised" onClick={this.onSubmit}>Encrypt</button>
        </form>

        {this.state.letterSubmitted ? (
          <h1 className="Large-letters ">{this.state.cipherValue}</h1>) : null}
      </div>
    );
  } 
}