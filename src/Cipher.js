import React, { Component } from 'react';
import './App.scss';

export default class CipherForm extends Component {

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

    for (let i = 0; i < this.state.listNumber; i++) {
      console.log(letters[i]);
      // holdLetters.push(letters[i]);
      // console.log(this.holdLetters);
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
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