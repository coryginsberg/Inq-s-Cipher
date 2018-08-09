import React, { Component } from 'react';
import './App.scss';

const ALPHABET = [...Array(26).keys()].map(i => String.fromCharCode(i + "A".charCodeAt(0)));

export default class CipherForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listLetter: 'A',
      listNumber: 0,
      textbox: '',
      cipherValue: '',
      cipherComputed: false,
    }
  }

  onSubmit = (event) => {
    this.setState({[event.target.name]: event.target.value}); // Universal setting of this.state.*

    event.preventDefault(); // Self Explanitory IMO

    const textToEncrypt = this.state.textbox.toUpperCase().split("");
    const cipherValue = parseInt(this.state.listNumber, 10);
    console.log(cipherValue);

    let newText = textToEncrypt.map(txtChar => {
      if (ALPHABET.includes(txtChar)) {
        return parseInt(ALPHABET.indexOf(txtChar) + 2, 10) + cipherValue + " "
      } else {
        return txtChar + " ";
      }
    });

    console.log(newText);

    this.setState({
      cipherValue: newText,
      cipherComputed: true,
    });
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  calculateOffset(start, end) {
    const numbers = []
    for (let i = start; i <= end; i++) {
      numbers.push(i);
    }
    return numbers;
  }

  render() {

    const numbersFirst = this.calculateOffset(1, 26);
    const listFirstNumbers = numbersFirst.map((number) =>
      <option value={number}>{number}</option>
    );

    const numbersSecond = this.calculateOffset(27, 52);
    const listSecondNumbers = numbersSecond.map((number) =>
      <option value={number}>{number}</option>
    );

    const numbersThird = this.calculateOffset(53, 78);
    const listThirdNumbers = numbersThird.map((number) =>
      <option value={number}>{number}</option>
    );

    const numbersFourth = this.calculateOffset(79, 99);
    const listFourthNumbers = numbersFourth.map((number) =>
      <option value={number}>{number}</option>
    );

    return (
      <div>
        <form>
          <div className="txtArea-wrapper">
            <label className="txtarea-label" htmlFor="Text">Enter your text here</label>
            <br/>
            <textarea id="Text" className="materialize-textarea" type="text" name="textbox" value={this.state.value} onChange={this.handleChange}></textarea>
          </div>
          <br/>
          <div className="numSelect-wrapper">
            <label htmlFor="Number">Select an offset</label>
            <div className="numSelect-dropdowns">
              <select id="Number" name="listNumber" onChange={this.handleChange}>
                {listFirstNumbers}
              </select>
              <select id="Number" name="listNumber" onChange={this.handleChange}>
                {listSecondNumbers}
              </select>
              <select id="Number" name="listNumber" onChange={this.handleChange}>
                {listThirdNumbers}
              </select>
              <select id="Number" name="listNumber" onChange={this.handleChange}>
                {listFourthNumbers}
              </select>
            </div>
          </div>
          <br/>
          <button className="small-btn mdc-button mdc-button--raised" onClick={this.onSubmit}>Encrypt</button>
        </form>

        {this.state.cipherComputed ? (
          <h1 className="Large-letters ">{this.state.cipherValue}</h1>) : null}
      </div>
    );
  } 
}