import React, { Component } from 'react';
import './App.scss';


export default class CipherForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listLetter: 'A',
      listNumber: 0,
      textbox: '',
    }
  }

  onSubmit = (event) => {
    this.setState({[event.target.name]: event.target.value}); // Universal setting of this.state.*

    event.preventDefault(); // Self Explanitory IMO

    let textToEncrypt = this.state.textbox;
    console.log(textToEncrypt);

    let alphabet = [...Array(26).keys()].map(i => String.fromCharCode(i + 97));
    let newAlphabet = alphabet;

    let holdLetters = [];

    for (let i = 0; i < this.state.listNumber; i++) {
      holdLetters.push(alphabet[i]);
    }
    for (let i = 0; i < this.state.listNumber; i++) {
      newAlphabet.shift(alphabet[i]);
    }
    newAlphabet.push(holdLetters);
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
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
          <div className="input-field">
            <textarea id="Text" className="materialize-textarea" type="text" name="textbox" value={this.state.value} onChange={this.handleChange}></textarea>
            <label className="txtarea-label" htmlFor="Text">Enter your text here</label>
          </div>
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
          <button className="small-btn mdc-button mdc-button--raised" onClick={this.onSubmit}>Encrypt</button>
        </form>

        {this.state.letterSubmitted ? (
          <h1 className="Large-letters ">{this.state.cipherValue}</h1>) : null}
      </div>
    );
  } 
}